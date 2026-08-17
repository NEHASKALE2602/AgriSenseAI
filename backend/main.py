from dotenv import load_dotenv
import os

load_dotenv(
    os.path.join(os.path.dirname(__file__), ".env"),
    override=True
)

print("NEWS API KEY LOADED:", bool(os.getenv("NEWS_API_KEY")))

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.routes.weather import router as weather_router
from backend.routes.crop import router as crop_router
#from backend.routes.disease import router as disease_router
from backend.routes.market import router as market_router
from backend.routes.news import router as news_router


app = FastAPI(
    title="AgriSense AI Backend",
    version="1.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(weather_router)
app.include_router(crop_router)
#app.include_router(disease_router)
app.include_router(market_router)
app.include_router(news_router)


@app.get("/")
def home():
    return {
        "message": "AgriSense AI Backend Running"
    }