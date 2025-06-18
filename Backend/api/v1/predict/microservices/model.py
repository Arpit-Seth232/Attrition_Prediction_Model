import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib

MODEL_PATH = "attrition_model.pkl"

TOP_FEATURES = [
    "﻿Age", "JobRole", "MonthlyIncome", "OverTime",
    "YearsAtCompany", "JobSatisfaction", "EnvironmentSatisfaction",
    "DistanceFromHome", "TotalWorkingYears", "WorkLifeBalance"
]

def preprocess_records(records):
    df = pd.DataFrame(records)

    # Check required columns
    required_cols = TOP_FEATURES + ["Attrition"]
    missing_cols = [col for col in required_cols if col not in df.columns]
    if missing_cols:
        raise ValueError(f"Missing columns in training data: {missing_cols}")

    # Encode categorical features
    if "OverTime" in df.columns:
        df["OverTime"] = df["OverTime"].map({"Yes": 1, "No": 0})

    if "Attrition" in df.columns:
        df["Attrition"] = df["Attrition"].map({"Yes": 1, "No": 0})

    if "JobRole" in df.columns:
        df["JobRole"] = df["JobRole"].astype("category").cat.codes

    return df


def train_model_from_json(records):
    df = preprocess_records(records)

    X = df[TOP_FEATURES]
    y = df["Attrition"]

    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X, y)

    joblib.dump(model, MODEL_PATH)
    return {"status": "Model trained successfully", "num_samples": len(df)}
