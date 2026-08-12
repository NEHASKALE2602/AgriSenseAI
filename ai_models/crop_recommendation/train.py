import os
import joblib
import pandas as pd

from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

from preprocess import load_data, preprocess_data

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

DATASET_PATH = os.path.join(
    BASE_DIR,
    "..",
    "datasets",
    "crop_recommendation",
    "Crop_recommendation.csv"
)

MODEL_DIR = os.path.join(BASE_DIR, "..", "saved_models")
os.makedirs(MODEL_DIR, exist_ok=True)

MODEL_PATH = os.path.join(MODEL_DIR, "crop_model.pkl")
ENCODER_PATH = os.path.join(MODEL_DIR, "label_encoder.pkl")


print("=" * 60)
print("AgriSense AI - Crop Recommendation Model Training")
print("=" * 60)

df = load_data(DATASET_PATH)

print("\nDataset Loaded Successfully")
print(f"Rows    : {df.shape[0]}")
print(f"Columns : {df.shape[1]}")

print("\nFeature Columns:")
print(list(df.columns))

print("\nChecking Missing Values...")
print(df.isnull().sum())

X_train, X_test, y_train, y_test = preprocess_data(df)

label_encoder = LabelEncoder()

y_train_encoded = label_encoder.fit_transform(y_train)
y_test_encoded = label_encoder.transform(y_test)

print("\nTraining Random Forest Model...")

model = RandomForestClassifier(
    n_estimators=200,
    random_state=42
)

model.fit(X_train, y_train_encoded)

predictions = model.predict(X_test)

accuracy = accuracy_score(y_test_encoded, predictions)

print("\nModel Training Completed Successfully!")

print(f"\nAccuracy : {accuracy * 100:.2f}%")

print("\nClassification Report")
print(classification_report(y_test_encoded, predictions))

print("\nConfusion Matrix")
print(confusion_matrix(y_test_encoded, predictions))

joblib.dump(model, MODEL_PATH)
joblib.dump(label_encoder, ENCODER_PATH)

print("\nModel Saved Successfully!")

print(f"Model Path : {MODEL_PATH}")
print(f"Encoder Path : {ENCODER_PATH}")

print("\nTraining Finished Successfully.")