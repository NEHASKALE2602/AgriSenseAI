from backend.ai_models.weather_ai import WeatherAI
from backend.services.weather_service import get_forecast


from backend.ai_models.weather_ai import WeatherAI
from backend.services.weather_service import get_forecast


def generate_weather_advice(weather, city):

    forecast = get_forecast(city)

    ai = WeatherAI.generate(weather, forecast)

    return {
        "confidence": f"{ai.get('confidence', 0)}%",
        "irrigation": ai.get("irrigation", "Unknown"),
        "spraying": ai.get("spraying", "Unknown"),
        "harvesting": ai.get("harvesting", "Unknown"),
        "disease_risk": ai.get("disease_risk", "Unknown"),
        "summary": ai.get("summary", "No recommendation available."),
        "fertilizer": ai.get("fertilizer", "--"),
        "alerts": ai.get("alerts", [])
    }


def generate_weather_alerts(weather, city):

    forecast = get_forecast(city)

    ai = WeatherAI.generate(weather, forecast)

    return {
        "summary": ai.get("summary", "Weather Analysis"),
        "confidence": ai.get("confidence", 0),
        "rain": ai.get("rain", "Unknown"),
        "spraying": ai.get("spraying", "Unknown"),
        "disease": ai.get("disease_risk", "Unknown"),
        "alerts": ai.get("alerts", [])
    }