from fastapi import APIRouter
from backend.services.news_service import get_agriculture_news

router = APIRouter(
    prefix="/news",
    tags=["Agriculture News"]
)


@router.get("/agriculture")
def agriculture_news():

    print("===== NEWS ROUTE CALLED =====")

    news = get_agriculture_news()

    print("NEWS RESULT TYPE:", type(news))
    print("NEWS RESULT LENGTH:", len(news) if news else 0)

    if news is None:
        return {
            "error": "Unable to fetch agriculture news"
        }

    return {
        "articles": news
    }