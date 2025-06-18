# Attrition Prediction Model

A full-stack web application to predict employee attrition using machine learning. HR users can upload employee data through a CSV or manually enter details to predict whether an employee is likely to leave. This project consists of:

- ⚛️ **Frontend**: React (with Tailwind, ShadCN)
- 🧠 **ML Backend**: Python + FastAPI (for model training/prediction)
- 🌐 **API Backend**: Node.js + Express (for handling CSV upload and communicating with model)

---

## 🌐 Live Demo

_Coming soon_

---

## 📁 Features

- 📤 **Upload CSV file for batch training**  
  Upload employee data in bulk to train the model using the FastAPI backend.

- ✍️ **Manual form entry for prediction**  
  Input individual employee details via a form to get an immediate attrition prediction.

- ⚙️ **Triggers FastAPI model training**  
  CSV data is parsed and sent to the FastAPI backend to train a new model on-the-fly.

- 🔁 **Sends and receives predictions with confidence scores**  
  API returns prediction along with the probability for better decision-making.

- 🖼️ **Loader and basic UI feedback**  
  FadeLoader spinner and status messages improve user experience during loading.

- 💅 **Styled using TailwindCSS and ShadCN**  
  Fully responsive, modern interface with dark mode support.

---

## 📁 Project Structure

```
Attrition_Prediction_Model/
├── Frontend/ # React frontend
├── Backend/ # Node.js Express backend
├── Backend/api/v1/predict/microservices # Python FastAPI ML backend
└── README.md

```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/Arpit-Seth232/Attrition_Prediction_Model.git
cd Attrition_Prediction_Model
```

## ⚛️ Frontend - React

### Setup

```bash
cd Frontend
npm install
npm run dev
```

## ⚛️  Backend - Express

### Setup

```bash
cd Backend
npm install
npx nodemon app.js
```

## 
🧠 Backend - Python (ML Model)

### Setup

```bash
cd Backend/api/v1/predict/microservices
pip install -r requirements.txt
uvicorn main:app --reload --port 5000
```


## ✅ Current Status

### 🧠 ML Backend (Python + FastAPI)
- **Status:** ✅ Working  
- **Model Used:** Random Forest
- **Endpoints:**
  - `POST /predict` – For manual prediction
  - `POST /trainingModel` – Trains model using JSON data
- **Running on:** Port **5000**
- **Dependencies:** Listed in `requirements.txt`

---

### 🌐 API Backend (Node.js + Express)
- **Status:** ✅ Working  
- **Endpoints:**
  - `POST /api/v1/bulkInput` – Accepts and parses CSV
  - `POST /api/v1/predict/trainingModel` – Forwards data to FastAPI model
- **Running on:** Port **3000**
- **Features:** CSV parsing, data forwarding logic – ✅ Implemented

---

### ⚛️ Frontend (React + Tailwind + ShadCN)
- **Status:** ✅ Working  
- **Features:**
  - Upload CSV file
  - Manual form for employee prediction
  - Visual feedback using loaders (e.g., `FadeLoader`)
  - Section switching (Analysis / History)
- **Running on:** Port **5173**
- **Issues:**
  - Initial slow load (likely due to large dependency or asset size)
  - History section integration – ⏳ Pending
 












