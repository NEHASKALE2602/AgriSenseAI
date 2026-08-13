from dotenv import load_dotenv

load_dotenv()

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.routes.weather import router as weather_router
from backend.routes.crop import router as crop_router
from backend.routes.disease import router as disease_router


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
app.include_router(disease_router)


@app.get("/")
def home():
    return {
        "message": "AgriSense AI Backend Running"
    }