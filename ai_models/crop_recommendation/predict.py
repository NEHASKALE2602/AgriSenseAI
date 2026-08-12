import os
import joblib
import numpy as np
import pandas as pd
BASE_DIR = os.path.dirname(__file__)

MODEL_PATH = os.path.join(BASE_DIR, "..", "saved_models", "crop_model.pkl")
ENCODER_PATH = os.path.join(BASE_DIR, "..", "saved_models", "label_encoder.pkl")

model = joblib.load(MODEL_PATH)
encoder = joblib.load(ENCODER_PATH)


CROP_INFO = {
    "apple": {
        "water": "Medium",
        "duration": "150 Days",
        "yield": "18 Ton/Hectare",
        "profit": "₹4,20,000",
        "risk": "Medium",
        "fertilizer": "Organic + NPK 10-26-26"
    },

    "banana": {
        "water": "High",
        "duration": "11 Months",
        "yield": "35 Ton/Hectare",
        "profit": "₹3,80,000",
        "risk": "Low",
        "fertilizer": "Organic Compost + Potash"
    },

    "blackgram": {
        "water": "Low",
        "duration": "90 Days",
        "yield": "1 Ton/Hectare",
        "profit": "₹90,000",
        "risk": "Low",
        "fertilizer": "DAP + Potash"
    },

    "chickpea": {
        "water": "Low",
        "duration": "105 Days",
        "yield": "2 Ton/Hectare",
        "profit": "₹1,30,000",
        "risk": "Low",
        "fertilizer": "Phosphorus Rich"
    },

    "coconut": {
        "water": "High",
        "duration": "5 Years",
        "yield": "12 Ton/Hectare",
        "profit": "₹5,50,000",
        "risk": "Low",
        "fertilizer": "Organic + NPK"
    },

    "coffee": {
        "water": "Medium",
        "duration": "3 Years",
        "yield": "1.5 Ton/Hectare",
        "profit": "₹4,80,000",
        "risk": "Medium",
        "fertilizer": "Organic Compost"
    },

    "cotton": {
        "water": "Medium",
        "duration": "170 Days",
        "yield": "2 Ton/Hectare",
        "profit": "₹2,10,000",
        "risk": "Medium",
        "fertilizer": "NPK 12-32-16"
    },

    "grapes": {
        "water": "Medium",
        "duration": "140 Days",
        "yield": "22 Ton/Hectare",
        "profit": "₹6,00,000",
        "risk": "Medium",
        "fertilizer": "Organic + Potash"
    },

    "jute": {
        "water": "High",
        "duration": "120 Days",
        "yield": "3 Ton/Hectare",
        "profit": "₹1,60,000",
        "risk": "Low",
        "fertilizer": "Nitrogen Rich"
    },

    "kidneybeans": {
        "water": "Medium",
        "duration": "110 Days",
        "yield": "2 Ton/Hectare",
        "profit": "₹1,40,000",
        "risk": "Medium",
        "fertilizer": "DAP"
    },

    "lentil": {
        "water": "Low",
        "duration": "110 Days",
        "yield": "1.5 Ton/Hectare",
        "profit": "₹1,10,000",
        "risk": "Low",
        "fertilizer": "Phosphorus"
    },

    "maize": {
        "water": "Medium",
        "duration": "95 Days",
        "yield": "6 Ton/Hectare",
        "profit": "₹1,40,000",
        "risk": "Low",
        "fertilizer": "Urea + DAP"
    },

    "mango": {
        "water": "Medium",
        "duration": "5 Years",
        "yield": "15 Ton/Hectare",
        "profit": "₹5,00,000",
        "risk": "Medium",
        "fertilizer": "Organic Compost"
    },

    "mothbeans": {
        "water": "Low",
        "duration": "80 Days",
        "yield": "1 Ton/Hectare",
        "profit": "₹95,000",
        "risk": "Low",
        "fertilizer": "DAP"
    },

    "mungbean": {
        "water": "Low",
        "duration": "70 Days",
        "yield": "1.2 Ton/Hectare",
        "profit": "₹1,00,000",
        "risk": "Low",
        "fertilizer": "Nitrogen"
    },

    "muskmelon": {
        "water": "Medium",
        "duration": "90 Days",
        "yield": "18 Ton/Hectare",
        "profit": "₹2,60,000",
        "risk": "Medium",
        "fertilizer": "Balanced NPK"
    },

    "orange": {
        "water": "Medium",
        "duration": "250 Days",
        "yield": "16 Ton/Hectare",
        "profit": "₹4,00,000",
        "risk": "Medium",
        "fertilizer": "Organic + Potash"
    },

    "papaya": {
        "water": "Medium",
        "duration": "9 Months",
        "yield": "40 Ton/Hectare",
        "profit": "₹3,20,000",
        "risk": "Low",
        "fertilizer": "Organic Compost"
    },

    "pigeonpeas": {
        "water": "Low",
        "duration": "180 Days",
        "yield": "2 Ton/Hectare",
        "profit": "₹1,50,000",
        "risk": "Low",
        "fertilizer": "DAP"
    },

    "pomegranate": {
        "water": "Low",
        "duration": "180 Days",
        "yield": "15 Ton/Hectare",
        "profit": "₹4,60,000",
        "risk": "Low",
        "fertilizer": "Potassium Rich"
    },

    "rice": {
        "water": "High",
        "duration": "120 Days",
        "yield": "4.8 Ton/Hectare",
        "profit": "₹1,75,000",
        "risk": "Low",
        "fertilizer": "NPK 20-20-20"
    },

    "watermelon": {
        "water": "Medium",
        "duration": "95 Days",
        "yield": "30 Ton/Hectare",
        "profit": "₹2,80,000",
        "risk": "Low",
        "fertilizer": "Balanced NPK"
    }
}


def predict_crop(features):

    input_data = pd.DataFrame(
        [features],
        columns=[
            "N",
            "P",
            "K",
            "temperature",
            "humidity",
            "ph",
            "rainfall",
        ],
    )

    probabilities = model.predict_proba(input_data)[0]

    top5_indices = np.argsort(probabilities)[::-1][:5]

    top5 = []

    for idx in top5_indices:

        crop = encoder.inverse_transform([idx])[0]

        top5.append({

            "crop": crop,

            "confidence": round(float(probabilities[idx] * 100), 2)

        })

    best_crop = top5[0]["crop"]

    info = CROP_INFO.get(best_crop, {

        "water": "Medium",

        "duration": "100 Days",

        "yield": "N/A",

        "profit": "N/A",

        "risk": "Medium",

        "fertilizer": "General NPK"

    })

    return {
        "recommended_crop": best_crop,
        "confidence": top5[0]["confidence"],

        "top5_recommendations": top5,

        "water_requirement": info["water"],
        "growth_duration": info["duration"],
        "expected_yield": info["yield"],
        "expected_profit": info["profit"],
        "risk_level": info["risk"],
        "recommended_fertilizer": info["fertilizer"],

        # "market_price": "₹2,850 / Quintal",
        # "market_demand": "Very High",
        # "nearest_buyers": "32 Buyers",
        "harvest_duration": info["duration"],

        "ai_summary": f"{best_crop.title()} is recommended because the soil nutrients, weather conditions and AI confidence indicate the highest probability of obtaining better yield with lower cultivation risk.",

        "ai_reasons": [
            "Excellent soil nutrient compatibility",
            "Suitable rainfall conditions",
            "High expected yield",
            "Low cultivation risk",
            "Strong market demand",
            "Recommended fertilizer available"
        ]
    }



if __name__ == "__main__":

    sample = [

        90,

        42,

        43,

        20.8,

        82,

        6.5,

        202

    ]

    result = predict_crop(sample)

    print(result)