from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

from backend.services.market_service import get_market_price
from backend.services.profit_service import calculate_profit


router = APIRouter(
    prefix="/profit",
    tags=["Profit Prediction"],
)


class ProfitInput(BaseModel):

    crop: str

    state: str

    district: str = ""

    area_acres: float = Field(gt=0)

    yield_per_acre: float = Field(gt=0)

    cultivation_cost: float = Field(ge=0)


@router.post("/predict")
def profit_prediction(data: ProfitInput):

    # =========================================================
    # 1. TRY DISTRICT-SPECIFIC LIVE MARKET DATA
    # =========================================================

    market_records = get_market_price(
        crop=data.crop,
        state=data.state,
        district=data.district,
    )

    market_scope = "district"

    # =========================================================
    # 2. FALLBACK TO STATE-LEVEL LIVE MARKET DATA
    # =========================================================

    if not market_records:

        market_records = get_market_price(
            crop=data.crop,
            state=data.state,
            district="",
        )

        market_scope = "state"

    # =========================================================
    # 3. NO MARKET DATA AVAILABLE
    # =========================================================

    if not market_records:

        raise HTTPException(
            status_code=404,
            detail=(
                f"No live market data found for "
                f"{data.crop} in {data.state}."
            ),
        )

    # =========================================================
    # 4. CALCULATE PROFIT
    # =========================================================

    try:

        result = calculate_profit(
            market_records=market_records,
            area_acres=data.area_acres,
            yield_per_acre=data.yield_per_acre,
            cultivation_cost=data.cultivation_cost,
        )

    except ValueError as error:

        raise HTTPException(
            status_code=400,
            detail=str(error),
        )

    if result is None:

        raise HTTPException(
            status_code=404,
            detail="Unable to calculate profit from live market data.",
        )

    # =========================================================
    # 5. ADD COMMON INFORMATION
    # =========================================================

    result["crop"] = data.crop

    result["location"] = {
        "state": data.state,
        "district": data.district,
    }

    result["market_scope"] = market_scope

    result["prediction_mode"] = "live_market_profit"

    return result