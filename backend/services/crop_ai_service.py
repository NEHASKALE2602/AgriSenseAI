import os
import requests
from dotenv import load_dotenv

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

GROQ_URL = "https://api.groq.com/openai/v1/chat/completions"

MODEL = "openai/gpt-oss-120b"


def generate_crop_advice(
    state,
    district,
    nitrogen,
    phosphorus,
    potassium,
    temperature,
    humidity,
    ph,
    rainfall,
    recommended_crop,
    confidence,
    top5_recommendations,
    crop_info,
    market_data=None
):

    prompt = f"""
You are AgriSense AI, an intelligent agricultural decision-support assistant.

Analyze the farmer's supplied information and explain the machine-learning crop recommendation.

FARM LOCATION:
State: {state}
District: {district}

FARM CONDITIONS:
Nitrogen: {nitrogen} mg/kg
Phosphorus: {phosphorus} mg/kg
Potassium: {potassium} mg/kg
Temperature: {temperature} °C
Humidity: {humidity} %
Soil pH: {ph}
Rainfall: {rainfall} mm

MACHINE LEARNING PREDICTION:
Recommended crop: {recommended_crop}
ML confidence: {confidence}%

TOP ML PREDICTIONS:
{top5_recommendations}

CROP INFORMATION:
{crop_info}

MARKET INFORMATION:
{market_data}

IMPORTANT DATA INTERPRETATION RULES:

1. Every numerical value explicitly supplied above is AVAILABLE.
2. Never say that nitrogen, phosphorus, potassium, temperature, humidity, soil pH, or rainfall is unavailable when a value is shown above.
3. Use the exact supplied numerical values when discussing the farm.
4. Never invent, modify, replace, or estimate numerical values.
5. Never change the recommended crop.
6. Clearly distinguish the machine-learning prediction from your generated explanation.
7. Use the crop information and market information supplied by the backend.
8. If MARKET INFORMATION specifically says that market data is unavailable, say that market data is unavailable.
9. Do not invent market prices, buyer counts, yields, profits, crop durations, confidence values, weather measurements, or soil measurements.
10. Do not present advice as guaranteed agricultural results.
11. Base the explanation on the supplied farm data and the provided crop/market information.
12. Do not claim that any supplied value is missing.
13. The ML confidence is the confidence supplied by the machine-learning model. Do not change it.
14. If a supplied value is 0, treat it as an available value, not as missing.

Return ONLY valid JSON in exactly this structure:

{{
    "summary": "2-3 sentence personalized explanation of why this crop was selected.",
    "reasons": [
        "reason 1",
        "reason 2",
        "reason 3",
        "reason 4",
        "reason 5"
    ],
    "irrigation": "Personalized irrigation recommendation based on the supplied crop information and farm conditions.",
    "fertilizer": "Personalized fertilizer recommendation based on the supplied soil nutrient values.",
    "disease_prevention": "Personalized disease and pest prevention advice based on the supplied weather and crop information.",
    "harvest": "Personalized harvest or growth-duration advice using only supplied crop information.",
    "final_recommendation": "A short personalized final recommendation for the farmer.",
    "risk_explanation": "Explain the cultivation risk using the supplied information.",
    "market_explanation": "Explain the market opportunity using only the supplied market information."
}}
"""

    if not GROQ_API_KEY:
        raise ValueError("GROQ_API_KEY is not configured")

    response = requests.post(
        GROQ_URL,
        headers={
            "Authorization": f"Bearer {GROQ_API_KEY}",
            "Content-Type": "application/json",
        },
        json={
            "model": MODEL,
            "messages": [
                {
                    "role": "system",
                    "content": (
                        "You are AgriSense AI, an agricultural AI assistant. "
                        "Never claim that a value is unavailable when that value "
                        "is explicitly supplied in the user data."
                    )
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            "temperature": 0.2,
            "max_tokens": 700,
            "response_format": {
                "type": "json_object"
            }
        },
        timeout=30
    )

    if response.status_code != 200:
        print("Groq Error:", response.status_code)
        print(response.text)
        return None

    data = response.json()

    content = data["choices"][0]["message"]["content"]

    import json

    return json.loads(content)