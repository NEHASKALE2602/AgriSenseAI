import pandas as pd
from sklearn.model_selection import train_test_split


def load_data(file_path):
    df = pd.read_csv(file_path)

    if df.empty:
        raise ValueError("Dataset is empty.")

    return df


def preprocess_data(df):

    if df.isnull().sum().sum() > 0:
        raise ValueError("Dataset contains missing values.")

    X = df.drop("label", axis=1)

    y = df["label"]

    X_train, X_test, y_train, y_test = train_test_split(
        X,
        y,
        test_size=0.2,
        random_state=42,
        stratify=y
    )

    return X_train, X_test, y_train, y_test