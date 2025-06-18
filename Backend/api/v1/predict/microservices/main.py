from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict
from predictor import predict_attrition
from model import train_model_from_json

app = FastAPI()

class TrainingRecord(BaseModel):
    records: List[Dict]

class EmployeeData(BaseModel):
    data: Dict

@app.post("/train")
def train(input: TrainingRecord):
    train_model_from_json(input.records)
    return {"message": "Model trained from JSON and saved."}

@app.post("/predict")
def predict(input: EmployeeData):
    result = predict_attrition(input.data)
    return result

