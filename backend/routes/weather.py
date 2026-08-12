from fastapi import APIRouter

from backend.services.weather_service import (
    get_weather,
    get_forecast,
)

from backend.services.weather_ai_service import (
    generate_weather_advice,
    generate_weather_alerts,
)

from backend.ai_models.weather_ai import WeatherAI

router = APIRouter(
    prefix="/weather",
    tags=["Weather"]
)


# --------------------------------------------------
# AI WEATHER ANALYSIS (Gemini)
# --------------------------------------------------
@router.get("/ai/{city}")
def ai_weather(city: str):

    weather = get_weather(city)

    if weather is None:
        return {
            "error": "Unable to fetch weather"
        }

    forecast = get_forecast(city)

    if forecast is None:
        return {
            "error": "Unable to fetch forecast"
        }

    return WeatherAI.generate(weather, forecast)


# --------------------------------------------------
# WEATHER FORECAST
# --------------------------------------------------
@router.get("/forecast/{city}")
def forecast(city: str):

    data = get_forecast(city)

    if data is None:
        return {
            "error": "Unable to fetch forecast"
        }

    return data


# --------------------------------------------------
# RULE-BASED AI WEATHER ADVISOR
# --------------------------------------------------
@router.get("/advisor/{city}")
def weather_advisor(city: str):

    weather = get_weather(city)

    if weather is None:
        return {
            "error": "Unable to fetch weather"
        }

    return generate_weather_advice(weather, city)


# --------------------------------------------------
# WEATHER ALERTS
# --------------------------------------------------
@router.get("/alerts/{city}")
def weather_alerts(city: str):

    weather = get_weather(city)

    if weather is None:
        return {
            "error": "Unable to fetch weather"
        }

    return generate_weather_alerts(weather, city)


# --------------------------------------------------
# CURRENT WEATHER
# KEEP THIS ROUTE LAST
# --------------------------------------------------
@router.get("/{city}")
def weather(city: str):

    weather = get_weather(city)

    if weather is None:
        return {
            "error": "Unable to fetch weather"
        }

    return weather