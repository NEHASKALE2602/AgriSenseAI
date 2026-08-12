from fastapi import FastAPI
from pydantic import BaseModel

from crop_recommendation.predict import predict_crop

app = FastAPI(title="AgriSense AI Crop Recommendation API")


class CropInput(BaseModel):
    state: str
    district: str
    city: str
    nitrogen: float
    phosphorus: float
    potassium: float
    temperature: float
    humidity: float
    ph: float
    rainfall: float


@app.get("/")
def home():
    return {
        "message": "AgriSense AI Crop Recommendation API is running."
    }


@app.post("/predict")
def predict(data: CropInput):

    features = [
        data.nitrogen,
        data.phosphorus,
        data.potassium,
        data.temperature,
        data.humidity,
        data.ph,
        data.rainfall
    ]

    result = predict_crop(features)

    return result