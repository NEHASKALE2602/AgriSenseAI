from ultralytics import YOLO
from pathlib import Path

print("=" * 60)
print("AgriSense AI Disease Detection Training")
print("=" * 60)

BASE_DIR = Path(__file__).resolve().parent
DATASET = BASE_DIR.parent / "datasets" / "plant_disease" / "PlantVillage"

TRAIN_PATH = DATASET / "train"
VAL_PATH = DATASET / "val"

print(f"\nTraining Dataset : {TRAIN_PATH}")
print(f"Validation Dataset : {VAL_PATH}")

model = YOLO("yolo11n-cls.pt")

model.train(
    data=str(DATASET),
    epochs=15,
    imgsz=224,
    batch=16,
    workers=2,
    project=str(BASE_DIR / "runs"),
    name="plant_disease_classifier",
    pretrained=True,
    device="cpu"
)

print("\nTraining Completed Successfully!")

print("\nBest Model Location:")

best_model = (
    BASE_DIR
    / "runs"
    / "plant_disease_classifier"
    / "weights"
    / "best.pt"
)

print(best_model)