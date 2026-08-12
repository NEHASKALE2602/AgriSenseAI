import os
import requests
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("OPENWEATHER_API_KEY")
BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast"
AIR_URL = "https://api.openweathermap.org/data/2.5/air_pollution"
OPEN_METEO_URL = "https://api.open-meteo.com/v1/forecast"

UNITS = "metric"


def get_weather(city: str):

    params = {
        "q": city,
        "appid": API_KEY,
        "units": UNITS
    }

    response = requests.get(BASE_URL, params=params)

    if response.status_code != 200:
        print("Status Code:", response.status_code)
        print("Response:", response.text)
        return None

    data = response.json()

    lat = data["coord"]["lat"]
    lon = data["coord"]["lon"]

    uv_response = requests.get(
        OPEN_METEO_URL,
        params={
            "latitude": lat,
            "longitude": lon,
            "current": "uv_index"
        }
    )

    uv_index = None

    if uv_response.status_code == 200:
        uv_data = uv_response.json()
        uv_index = uv_data["current"]["uv_index"]

    aqi_response = requests.get(
        AIR_URL,
        params={
            "lat": lat,
            "lon": lon,
            "appid": API_KEY
        }
    )

    aqi = None

    if aqi_response.status_code == 200:
        aqi_data = aqi_response.json()
        aqi = aqi_data["list"][0]["main"]["aqi"]

    return {
        "city": data["name"],
        "temperature": data["main"]["temp"],
        "feels_like": data["main"]["feels_like"],
        "humidity": data["main"]["humidity"],
        "wind_speed": data["wind"]["speed"],
        "condition": data["weather"][0]["main"],
        "uv_index": uv_index,
        "aqi": aqi
    }


def get_forecast(city: str):

    params = {
        "q": city,
        "appid": API_KEY,
        "units": UNITS
    }

    response = requests.get(FORECAST_URL, params=params)

    if response.status_code != 200:
        print("Status Code:", response.status_code)
        print("Response:", response.text)
        return None

    data = response.json()

    hourly = []

    for item in data["list"][:8]:

        hourly.append(
            {
                "time": item["dt_txt"][11:16],
                "temp": round(item["main"]["temp"]),
                "condition": item["weather"][0]["main"]
            }
        )

    daily = []

    added = set()

    for item in data["list"]:

        date = item["dt_txt"].split()[0]

        if date in added:
            continue

        added.add(date)

        daily.append(
            {
                "day": date,
                "temp": round(item["main"]["temp"]),
                "condition": item["weather"][0]["main"],
                "rain": int(item["pop"] * 100)
            }
        )

        if len(daily) == 7:
            break

    return {
        "hourly": hourly,
        "daily": daily
    }