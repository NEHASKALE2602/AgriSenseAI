import os
import requests
from dotenv import load_dotenv

load_dotenv()

NEWS_API_KEY = os.getenv("NEWS_API_KEY")

NEWS_API_URL = "https://newsapi.org/v2/everything"


def get_agriculture_news():
    params = {
        "q": "agriculture OR farming OR crops",
        "language": "en",
        "sortBy": "publishedAt",
        "pageSize": 20,
        "apiKey": NEWS_API_KEY,
    }

    response = requests.get(NEWS_API_URL, params=params, timeout=10)

    if response.status_code != 200:
        print("News API Status:", response.status_code)
        print("News API Response:", response.text)
        return None

    data = response.json()

    articles = []

    for article in data.get("articles", []):
        articles.append({
            "title": article.get("title"),
            "description": article.get("description"),
            "url": article.get("url"),
            "image": article.get("urlToImage"),
            "source": article.get("source", {}).get("name"),
            "publishedAt": article.get("publishedAt"),
        })

    return articles