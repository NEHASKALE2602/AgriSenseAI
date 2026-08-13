from pathlib import Path
import shutil
import uuid

from fastapi import UploadFile

from ai_models.disease_detection.predictor import predict_disease


BASE_DIR = Path(__file__).resolve().parents[2]

UPLOAD_FOLDER = (
    BASE_DIR
    / "ai_models"
    / "disease_detection"
    / "uploads"
)

UPLOAD_FOLDER.mkdir(
    parents=True,
    exist_ok=True
)


async def predict_disease_image(file: UploadFile):

    extension = Path(file.filename or "").suffix.lower()

    if extension not in [".jpg", ".jpeg", ".png", ".webp"]:

        extension = ".jpg"

    filename = f"{uuid.uuid4()}{extension}"

    image_path = UPLOAD_FOLDER / filename

    try:

        with open(image_path, "wb") as buffer:

            shutil.copyfileobj(
                file.file,
                buffer
            )

        result = predict_disease(
            str(image_path)
        )

        return result

    finally:

        if image_path.exists():

            image_path.unlink()