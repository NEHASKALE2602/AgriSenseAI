# from pathlib import Path
# import shutil
# import uuid

# from fastapi import FastAPI, UploadFile, File
# from fastapi.middleware.cors import CORSMiddleware

# from .predictor import predict_disease

# BASE_DIR = Path(__file__).resolve().parent

# UPLOAD_FOLDER = BASE_DIR / "uploads"
# UPLOAD_FOLDER.mkdir(exist_ok=True)

# app = FastAPI(
#     title="AgriSense AI Disease Detection API",
#     version="1.0"
# )

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# @app.get("/")
# def home():
#     return {
#         "message": "AgriSense Disease Detection API Running"
#     }

# @app.post("/predict-disease")
# async def predict(file: UploadFile = File(...)):

#     extension = Path(file.filename).suffix

#     filename = f"{uuid.uuid4()}{extension}"

#     image_path = UPLOAD_FOLDER / filename

#     with open(image_path, "wb") as buffer:
#         shutil.copyfileobj(file.file, buffer)

#     result = predict_disease(str(image_path))

#     image_path.unlink(missing_ok=True)

#     return result