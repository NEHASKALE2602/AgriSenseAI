from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent


MODEL_PATH = (
    BASE_DIR
    / "runs"
    / "plant_disease_classifier"
    / "weights"
    / "best.pt"
)