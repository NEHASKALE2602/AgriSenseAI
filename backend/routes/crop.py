from fastapi import APIRouter
from pydantic import BaseModel

from ai_models.crop_recommendation.predict import predict_crop
from backend.services.market_service import get_market_price
from backend.services.crop_ai_service import generate_crop_advice

router = APIRouter(
    prefix="/crop",
    tags=["Crop Recommendation"],
)


class CropInput(BaseModel):
    state: str
    district: str

    nitrogen: float
    phosphorus: float
    potassium: float
    ph: float

    temperature: float
    humidity: float
    rainfall: float


@router.post("/predict")
def crop_prediction(data: CropInput):

    # =========================================================
    # CROP PREDICTION USING NPK + PH + WEATHER
    # =========================================================

    features = [
        data.nitrogen,
        data.phosphorus,
        data.potassium,
        data.temperature,
        data.humidity,
        data.ph,
        data.rainfall,
    ]

    result = predict_crop(features)

    # =========================================================
    # MARKET INTELLIGENCE
    # =========================================================

    market = get_market_price(
        crop=result["recommended_crop"],
        state=data.state,
        district=data.district,
    )

    if market:
        result["market_price"] = (
            f"₹{market['modal_price']:,} / Quintal"
        )

        result["market_name"] = market["market"]
        result["arrival_date"] = market["arrival_date"]

    market_data = market if market else {
        "message": "Market data unavailable"
    }

    # =========================================================
    # CROP INFORMATION
    # =========================================================

    crop_info = {
        "water_requirement": result.get(
            "water_requirement",
            "Medium",
        ),

        "growth_duration": result.get(
            "growth_duration",
            "N/A",
        ),

        "expected_yield": result.get(
            "expected_yield",
            "N/A",
        ),

        "expected_profit": result.get(
            "expected_profit",
            "N/A",
        ),

        "risk_level": result.get(
            "risk_level",
            "Medium",
        ),

        "recommended_fertilizer": result.get(
            "recommended_fertilizer",
            "General NPK",
        ),
    }

    # =========================================================
    # AI ADVICE
    # =========================================================

    ai_advice = generate_crop_advice(
        state=data.state,
        district=data.district,

        nitrogen=data.nitrogen,
        phosphorus=data.phosphorus,
        potassium=data.potassium,

        temperature=data.temperature,
        humidity=data.humidity,

        ph=data.ph,
        rainfall=data.rainfall,

        recommended_crop=result["recommended_crop"],
        confidence=result["confidence"],
        top5_recommendations=result["top5_recommendations"],

        crop_info=crop_info,
        market_data=market_data,
    )

    if ai_advice:

        result["ai_summary"] = ai_advice.get(
            "summary",
            result.get("ai_summary"),
        )

        result["ai_reasons"] = ai_advice.get(
            "reasons",
            result.get("ai_reasons", []),
        )

        result["ai_risk_explanation"] = ai_advice.get(
            "risk_explanation",
            "",
        )

        result["ai_market_explanation"] = ai_advice.get(
            "market_explanation",
            "",
        )

        result["action_plan"] = {
            "irrigation": ai_advice.get(
                "irrigation",
                "",
            ),

            "fertilizer": ai_advice.get(
                "fertilizer",
                "",
            ),

            "disease_prevention": ai_advice.get(
                "disease_prevention",
                "",
            ),

            "harvest": ai_advice.get(
                "harvest",
                "",
            ),
        }

        result["final_recommendation"] = ai_advice.get(
            "final_recommendation",
            "",
        )

    # =========================================================
    # COMMON RESPONSE DATA
    # =========================================================

    result["soil_test"] = True
    result["prediction_mode"] = "soil_test"

    result["location"] = {
        "state": data.state,
        "district": data.district,
    }

    result["soil"] = {
        "nitrogen": data.nitrogen,
        "phosphorus": data.phosphorus,
        "potassium": data.potassium,
        "ph": data.ph,
    }

    result["weather"] = {
        "temperature": data.temperature,
        "humidity": data.humidity,
        "rainfall": data.rainfall,
    }

    return result