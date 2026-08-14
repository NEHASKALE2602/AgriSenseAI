import os
import requests

BASE_URL = "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070"

API_KEY = os.getenv("DATA_GOV_API_KEY")


def get_market_price(crop: str, state: str = "", district: str = ""):

    params = {
        "api-key": API_KEY,
        "format": "json",
        "limit": 1,
        "filters[commodity]": crop.title()
    }

    if state:
        params["filters[state]"] = state

    if district:
        params["filters[district]"] = district

    response = requests.get(
    	BASE_URL,
    	params=params,
    	headers={"User-Agent": "Mozilla/5.0"},
    	timeout=120
    )
    if response.status_code != 200:
        return None

    data = response.json()

    if not data["records"]:
        return None

    record = data["records"][0]

    return {
        "commodity": record["commodity"],
        "market": record["market"],
        "district": record["district"],
        "state": record["state"],
        "arrival_date": record["arrival_date"],
        "min_price": record["min_price"],
        "max_price": record["max_price"],
        "modal_price": record["modal_price"]
    }