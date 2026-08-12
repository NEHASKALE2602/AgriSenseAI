import os
import json
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("GROQ_API_KEY")

if not API_KEY:
    raise Exception("GROQ_API_KEY not found in .env")

client = Groq(api_key=API_KEY)


class WeatherAI:

    @staticmethod
    def generate(weather, forecast):
        weather_json = json.dumps(weather, indent=2)

        forecast_json = json.dumps(forecast, indent=2)
        prompt = f"""
            You are an agricultural weather expert.

            Analyze the weather and return ONLY valid JSON.

            Rules:

                1. Every recommendation should be between 25 and 40 words.
                2. Use only points.
                3. Mention the reason for the advice.
                4. Mention one possible impact on crops.
                5. May use bullet points.
                6. Do not repeat information.
                7. Return only valid JSON.

            Return EXACTLY this format:

           {{
    "confidence": 95,
    "irrigation": "Avoid irrigation today because rainfall is expected. Extra watering may cause waterlogging and increase fungal disease around crop roots.",
    "spraying": "Postpone pesticide spraying until rainfall stops. Rain and wind can wash away chemicals, reducing their effectiveness on crops.",
    "harvesting": "Harvest mature crops after rainfall ends and the field becomes dry. Wet harvesting may reduce crop quality and increase storage losses.",
    "rain": "Light to moderate rainfall is expected during the evening and tomorrow. Delay irrigation and monitor low-lying fields for waterlogging.",
    "disease": "High humidity may increase fungal disease risk. Inspect crop leaves regularly and remove infected plants at the earliest signs.",
    "disease_risk": "High humidity creates favourable conditions for fungal diseases. Inspect crop leaves regularly and remove infected plants at an early stage.",
    "summary": "Rainfall and high humidity are expected. Delay irrigation and spraying, monitor crops for fungal diseases, and apply fertilizer after rainfall.",
    "fertilizer": [
        "Delay fertilizer application until rainfall ends.",
        "Apply fertilizer after soil moisture becomes stable.",
        "Avoid nitrogen fertilizer before heavy rain to reduce nutrient loss."
    ],
    "alerts": [
        "Light rainfall is expected this evening and tomorrow. Delay irrigation and monitor low-lying fields.",
        "High humidity may increase fungal disease risk. Inspect leaves regularly for early symptoms.",
        "Strong winds may reduce pesticide effectiveness. Postpone spraying until wind speed decreases."
    ]
}}
            Current Weather:

            {weather_json}

            7 Day Forecast:

            {forecast_json}
        """

        try:

            response = client.chat.completions.create(
                model="llama-3.3-70b-versatile",
                messages=[
                    {
                        "role": "user",
                        "content": prompt
                    }
                ],
                temperature=0.3,
            )

            text = response.choices[0].message.content.strip()

            start = text.find("{")
            end = text.rfind("}")

            if start == -1 or end == -1:
                raise Exception("AI did not return valid JSON.")

            text = text[start:end + 1]

            data = json.loads(text)
            print("\n========== GROQ RESPONSE ==========")
            print(data)
            print("===================================\n")

            return {
                "confidence": data.get("confidence", 0),
                "irrigation": data.get("irrigation", "Unknown"),
                "spraying": data.get("spraying", "Unknown"),
                "harvesting": data.get("harvesting", "Unknown"),
                "disease_risk": data.get("disease_risk", "Unknown"),
                "fertilizer": data.get("fertilizer", []),
                "summary": data.get("summary", "No recommendation available."),
                "rain": data.get("rain", "Unknown"),
                "disease": data.get("disease", "Unknown"),
                "alerts": data.get("alerts", [])
            }

        except Exception:

            import traceback

            print("\n========== GROQ ERROR ==========")
            traceback.print_exc()
            print("================================\n")

            return {
                "confidence": 0,
                "irrigation": "Unknown",
                "spraying": "Unknown",
                "harvesting": "Unknown",
                "disease_risk": "Unknown",
                "fertilizer": "Unknown",
                "summary": "No recommendation available.",
                "rain": "AI service unavailable",
                "disease": "Unknown",
                "alerts": []
            }