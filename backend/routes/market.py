from fastapi import APIRouter, HTTPException

from backend.services.market_service import get_market_price


router = APIRouter(
    prefix="/market",
    tags=["Market"]
)


@router.get("/{crop}")
def market_price(
    crop: str,
    state: str = "",
    district: str = ""
):
    result = get_market_price(
        crop=crop,
        state=state,
        district=district
    )

    if result is None:
        raise HTTPException(
            status_code=404,
            detail=f"No market price data found for {crop}"
        )

    return result