from fastapi import APIRouter, UploadFile, File, HTTPException

from backend.services.disease_service import predict_disease_image


router = APIRouter(
    prefix="/disease",
    tags=["Disease Detection"],
)


@router.post("/predict")
async def disease_prediction(file: UploadFile = File(...)):

    if not file.content_type:
        raise HTTPException(
            status_code=400,
            detail="Invalid file."
        )

    if not file.content_type.startswith("image/"):
        raise HTTPException(
            status_code=400,
            detail="Please upload an image file."
        )

    try:

        result = await predict_disease_image(file)

        return result

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )