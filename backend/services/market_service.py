import os
import requests
from dotenv import load_dotenv

load_dotenv()

BASE_URL = "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070"

API_KEY = os.getenv("DATA_GOV_API_KEY")


# Frontend/common crop names -> Data.gov.in commodity names
COMMODITY_MAP = {
    "soybean": "Soyabean",
    "soyabean": "Soyabean",
    "wheat": "Wheat",
    "rice": "Paddy(Common)",
    "paddy": "Paddy(Common)",
    "groundnut": "Groundnut",
    "onion": "Onion",
    "potato": "Potato",
    "tomato": "Tomato",
    "banana": "Banana",
    "mango": "Mango",
    "garlic": "Garlic",
    "ginger": "Ginger(Green)",
}


def get_market_price(
    crop: str,
    state: str = "",
    district: str = ""
):

    if not API_KEY:
        return None

    crop_key = crop.strip().lower()

    commodity = COMMODITY_MAP.get(
        crop_key,
        crop.strip().title()
    )

    params = {
        "api-key": API_KEY,
        "format": "json",
        "limit": 100,
        "filters[commodity]": commodity,
    }

    if state:
        params["filters[state]"] = state

    if district:
        params["filters[district]"] = district

    try:
        response = requests.get(
            BASE_URL,
            params=params,
            headers={"User-Agent": "Mozilla/5.0"},
            timeout=30,
        )

        if response.status_code != 200:
            return None

        data = response.json()
        records = data.get("records", [])

        if not records:
            return None

        return [
            {
                "commodity": record.get("commodity", ""),
                "market": record.get("market", ""),
                "district": record.get("district", ""),
                "state": record.get("state", ""),
                "arrival_date": record.get("arrival_date", ""),
                "min_price": record.get("min_price", 0),
                "max_price": record.get("max_price", 0),
                "modal_price": record.get("modal_price", 0),
            }
            for record in records
        ]

    except requests.RequestException:
        return None