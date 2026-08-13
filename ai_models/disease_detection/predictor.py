from pathlib import Path

from ultralytics import YOLO

from .config import MODEL_PATH
from .disease_info import DISEASE_INFO


if not MODEL_PATH.exists():

    raise FileNotFoundError(
        f"Disease model not found: {MODEL_PATH}"
    )


model = YOLO(str(MODEL_PATH))


def predict_disease(image_path: str):

    image = Path(image_path)

    if not image.exists():

        raise FileNotFoundError(
            f"Image not found: {image_path}"
        )


    results = model.predict(
        source=str(image),
        verbose=False,
        device="cpu"
    )


    if not results:

        raise RuntimeError(
            "No prediction result returned by the model."
        )


    result = results[0]


    if result.probs is None:

        raise RuntimeError(
            "The loaded model is not a classification model."
        )


    probs = result.probs


    class_id = int(probs.top1)

    confidence = float(
        probs.top1conf.item()
        if hasattr(probs.top1conf, "item")
        else probs.top1conf
    ) * 100


    disease = model.names[class_id]


    info = DISEASE_INFO.get(
        disease,
        {}
    )


    return {

        "success": True,

        "disease": disease,

        "confidence": round(
            confidence,
            2
        ),

        "severity": info.get(
            "severity",
            "Unknown"
        ),

        "description": info.get(
            "description",
            "No disease description available."
        ),

        "treatment": info.get(
            "treatment",
            "No treatment information available."
        ),

        "prevention": info.get(
            "prevention",
            "Follow standard crop management practices."
        )
    }