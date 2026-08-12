from ultralytics import YOLO

from .config import MODEL_PATH
from .disease_info import DISEASE_INFO

model = YOLO(str(MODEL_PATH))

def predict_disease(image_path):

    results = model.predict(
        source=image_path,
        verbose=False
    )

    probs = results[0].probs

    class_id = int(probs.top1)

    confidence = float(probs.top1conf * 100)

    disease = model.names[class_id]

    info = DISEASE_INFO.get(disease, {})

    return {
        "disease": disease,
        "confidence": round(confidence, 2),
        "severity": info.get("severity", ""),
        "description": info.get("description", ""),
        "treatment": info.get("treatment", ""),
        "prevention": info.get("prevention", "")
    }