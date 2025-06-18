import pandas as pd
import joblib
from model import MODEL_PATH, TOP_FEATURES

def preprocess_input(input_dict):
    df = pd.DataFrame([input_dict])

    # Convert OverTime to binary
    if "OverTime" in df.columns:
        df["OverTime"] = df["OverTime"].map({"Yes": 1, "No": 0})

    # Convert JobRole to category codes (must match training)
    if "JobRole" in df.columns:
        df["JobRole"] = df["JobRole"].astype("category").cat.codes

    # Ensure all required features are present
    missing = [col for col in TOP_FEATURES if col not in df.columns]
    if missing:
        raise ValueError(f"Missing columns: {missing}")

    return df[TOP_FEATURES]

def predict_attrition(input_data):
    model = joblib.load(MODEL_PATH)
    input_df = preprocess_input(input_data)
    probability = model.predict_proba(input_df)[0][1]  # Probability of "Yes"
    prediction = "Yes" if probability > 0.5 else "No"

    return {
        "prediction": prediction,
        "probability": round(probability, 4)
    }
