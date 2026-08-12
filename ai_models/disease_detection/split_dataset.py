import os
import random
import shutil
from pathlib import Path

random.seed(42)

BASE_DIR = Path(__file__).resolve().parent.parent
DATASET_DIR = BASE_DIR / "datasets" / "plant_disease" / "PlantVillage"

TRAIN_DIR = DATASET_DIR / "train"
VAL_DIR = DATASET_DIR / "val"

SPLIT_RATIO = 0.8

print("=" * 60)
print("AgriSense AI - PlantVillage Dataset Split")
print("=" * 60)

if not DATASET_DIR.exists():
    raise FileNotFoundError(f"\nDataset not found:\n{DATASET_DIR}")

TRAIN_DIR.mkdir(exist_ok=True)
VAL_DIR.mkdir(exist_ok=True)

classes = [
    folder for folder in DATASET_DIR.iterdir()
    if folder.is_dir() and folder.name not in ["train", "val"]
]

print(f"\nFound {len(classes)} Classes\n")

total_train = 0
total_val = 0

for cls in classes:

    images = []

    for ext in ("*.jpg", "*.jpeg", "*.png", "*.JPG"):
        images.extend(cls.glob(ext))

    random.shuffle(images)

    split_index = int(len(images) * SPLIT_RATIO)

    train_images = images[:split_index]
    val_images = images[split_index:]

    train_class_dir = TRAIN_DIR / cls.name
    val_class_dir = VAL_DIR / cls.name

    train_class_dir.mkdir(parents=True, exist_ok=True)
    val_class_dir.mkdir(parents=True, exist_ok=True)

    for img in train_images:
        shutil.copy2(img, train_class_dir / img.name)

    for img in val_images:
        shutil.copy2(img, val_class_dir / img.name)

    total_train += len(train_images)
    total_val += len(val_images)

    print(
        f"{cls.name:<45}"
        f" Train: {len(train_images):4}"
        f"  Val: {len(val_images):4}"
    )

print("\n" + "=" * 60)
print("Dataset Split Completed Successfully")
print("=" * 60)

print(f"\nTraining Images : {total_train}")
print(f"Validation Images : {total_val}")

print("\nTrain Folder")
print(TRAIN_DIR)

print("\nValidation Folder")
print(VAL_DIR)