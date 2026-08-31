import os
import json
import requests
from dotenv import load_dotenv

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

GROQ_URL = "https://api.groq.com/openai/v1/chat/completions"

# Stable model for JSON output
MODEL = "llama-3.3-70b-versatile"


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
    """
    Generate AI explanation for crop recommendation.
    Returns dict or None.
    """

    if not GROQ_API_KEY:
        print("GROQ_API_KEY not configured")
        return None

    try:
        top5_json = json.dumps(
            top5_recommendations,
            ensure_ascii=False,
            indent=2
        )

        crop_info_json = json.dumps(
            crop_info,
            ensure_ascii=False,
            indent=2
        )

        market_data_json = json.dumps(
            market_data,
            ensure_ascii=False,
            indent=2
        )

        prompt = f"""
You are AgriSense AI.

Analyze the farm data and explain WHY the machine-learning model selected the recommended crop.

FARM LOCATION
State: {state}
District: {district}

SOIL DATA
Nitrogen: {nitrogen}
Phosphorus: {phosphorus}
Potassium: {potassium}
pH: {ph}

WEATHER DATA
Temperature: {temperature}
Humidity: {humidity}
Rainfall: {rainfall}

ML PREDICTION
Recommended Crop: {recommended_crop}
Confidence: {confidence}%

TOP RECOMMENDATIONS
{top5_json}

CROP INFORMATION
{crop_info_json}

MARKET INFORMATION
{market_data_json}

IMPORTANT RULES:

1. Use only supplied data.
2. Do not invent values.
3. Do not change the recommended crop.
4. Do not generate markdown.
5. Do not generate explanations outside JSON.
6. Return ONLY valid JSON.
7. Every field must contain meaningful text.
8. If market information is unavailable, clearly mention it.

Return exactly:

{{
  "summary": "string",
  "reasons": [
    "string",
    "string",
    "string",
    "string",
    "string"
  ],
  "irrigation": "string",
  "fertilizer": "string",
  "disease_prevention": "string",
  "harvest": "string",
  "final_recommendation": "string",
  "risk_explanation": "string",
  "market_explanation": "string"
}}
"""

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
                            "You are AgriSense AI. "
                            "Return ONLY valid JSON. "
                            "Do not use markdown. "
                            "Do not use code blocks. "
                            "Do not include any text outside JSON."
                        )
                    },
                    {
                        "role": "user",
                        "content": prompt
                    }
                ],
                "temperature": 0.2,
                "max_tokens": 1000,
                "response_format": {
                    "type": "json_object"
                }
            },
            timeout=60
        )

        if response.status_code != 200:
            print("Groq Error:", response.status_code)
            print(response.text)
            return None

        data = response.json()

        content = data["choices"][0]["message"]["content"]

        try:
            return json.loads(content)

        except Exception:
            print("Invalid JSON returned by Groq:")
            print(content)
            return None

    except Exception as e:
        print("Crop AI Service Error:", str(e))
        return None