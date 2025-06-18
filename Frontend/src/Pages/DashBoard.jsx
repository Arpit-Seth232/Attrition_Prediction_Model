"use strict";

import React, { useState } from "react";

import { FadeLoader } from "react-spinners";


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UploadSection from "@/components/ui/Upload";
import { useNavigate } from "react-router-dom";
import ProbabilityPieChart from "@/components/Probability_PieChart";

function DashBoard() {
  const navigate = useNavigate();

  const [employeePrediction,setEmployeePrediction] = useState({
    prediction : "",
    probabibility : undefined
  })

  const [traningLoading,setTrainingLoading] = useState(false);

  const [predictionLoading,setPredictionLoading] = useState(false);


  const [showResultField , setShowResultField] = useState(false);

  const [formData, setFormData] = useState({
    '﻿Age': null,
    JobRole: "",
    MonthlyIncome: null,
    OverTime: "",
    YearsAtCompany: null,
    JobSatisfaction: null,
    EnvironmentSatisfaction:null,
    DistanceFromHome: null,
    TotalWorkingYears: null,
    WorkLifeBalance: null,
  });

  const numericFields = [
  "﻿Age",
  "MonthlyIncome",
  "YearsAtCompany",
  "JobSatisfaction",
  "EnvironmentSatisfaction",
  "DistanceFromHome",
  "TotalWorkingYears",
  "WorkLifeBalance"
];

  const [currentSection, setSection] = useState("analysis");
  const [csvParsedDataForTraining, setcsvParsedDataForTraining] = useState([]);

  const [files, setFiles] = useState([]);

  const handleFileUpload = (uploadedFiles) => {
    setFiles(uploadedFiles);
    console.log(uploadedFiles);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
     
     [name]: numericFields.includes(name) ? Number(value) || 0 : value,
    }));
  };


  const sendingTrainingDataForParsing= async() =>{

    if (!files || files.length==0) {
      alert("Please select a CSV file first.");
      return;
    }
      
    try{

      

      const form = new FormData();
        form.append("bulkData", files[0]);

      const response = await fetch('http://localhost:3000/api/v1/bulkInput',{
        method : 'POST',
        body : form
      })

      const result = await response.json();

      alert("upload success : " + result.message);

      setcsvParsedDataForTraining(result.data);

      

    }
    catch(err){
      alert('upload error : ' + err.message);
    }
    

  }


  const sendingDataForTraining = async() => {

    if (!csvParsedDataForTraining || csvParsedDataForTraining.length==0) {
      alert("Please select a CSV file and parse the file first.");
      return;
    }

    try{
        setTrainingLoading(true);

        const response = await fetch('http://localhost:3000/api/v1/predict/trainingModel',{
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(csvParsedDataForTraining)
        })

        const jsonRes = await response.json();
        
        setTrainingLoading(false);

        alert('training update : ' + jsonRes.message);

    }
    catch(err){
      alert('training error : ' + err.message);
    }


  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {

      setPredictionLoading(true);

    const response = await fetch("http://localhost:3000/api/v1/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    setPredictionLoading(false);

    if (response.ok) {
      // alert("Prediction Success: " + result.prediction.prediction);
      setEmployeePrediction(result.prediction);
      setShowResultField(true);
      console.log("Prediction Result:", result);
    } else {
      alert("Prediction Failed: " + result.message);
    }

  } catch (error) {
    console.error("Prediction Error:", error.message);
    alert("Error while predicting: " + error.message);
  }

    
   

   
  };

  return (
    <div className="min-h-screen bg-black">
      <nav className="flex w-full items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
          <h1 className="text-white font-bold md:text-2xl ">
            Attrition Predictor
          </h1>
        </div>

        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className={"text-white"}>CN</AvatarFallback>
          </Avatar>

          <div className="text-white">Welcome !</div>

          <div className="text-rose-300 font-bold mr-3 "> HR </div>
        </div>
      </nav>

      <div className="flex text-white min-h-4/5">
        <div className="absolute inset-x-75 bg-gradient-to-l from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-75  bg-gradient-to-l from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-75 bg-gradient-to-l from-transparent via-sky-500 to-transparent h-[5px] w-2/4 blur-sm" />
        <div className="absolute inset-x-75  bg-gradient-to-l from-transparent via-sky-500 to-transparent h-px w-2/4" />

        <div className="w-1/8 p-5 m-5 flex flex-col gap-5 font-[cursive]">
          <button
            className="text-gray-300  p-2 hover:font-bold hover:text-white hover:border-b-1 hover:border-sky-500 active:border-indigo-500 active:text-indigo-300 "
            onClick={() => {
              setSection("analysis");
            }}
          >
            Analyze
          </button>
          <button
            className="text-gray-300  p-2 hover:font-bold hover:text-white hover:border-b-1 hover:border-sky-500 active:border-indigo-500 active:text-indigo-300 "
            onClick={() => {
              setSection("history");
            }}
          >
            History
          </button>

          <button
            className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black  dark:bg-white dark:text-black dark:hover:bg-gray-200 border-1 fixed bottom-5 left-5"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </div>

        <div className="w-7/8 mini-h-fit  p-10 m-5 flex flex-col gap-5 font-[cursive] border-l-1 bo border-dashed border-gray-500">
          {currentSection == "analysis" ? (
            <p className="text-center text-2xl font-bold">Analysis Section</p>
          ) : (
            <p className="text-center text-2xl font-bold">History Section</p>
          )}

          <div className="relative inset-x-142  bg-gradient-to-r from-transparent via-teal-300 to-transparent h-[5px] w-1/4 blur-md" />
          {/* <div className="relative inset-x-0  bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}

          {currentSection == "analysis" ? (
            <div className="p-5">
              <div className="m-5 text-xl font-bold">Upload Section For Training Model</div>
              <UploadSection onFileUpload={handleFileUpload} files={files} />
              <button
                className="w-60 mt-10 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black  dark:bg-white dark:text-black dark:hover:bg-gray-200 border-1"
                onClick={sendingTrainingDataForParsing}
              >
                Parse the .csv file
              </button>

              <button
                className="w-60 mt-10 ml-5 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black  dark:bg-white dark:text-black dark:hover:bg-gray-200 border-1"
                onClick={sendingDataForTraining}  
              >
                {traningLoading ? <FadeLoader/> : 'Train Model'}
              </button>
              <p className="text-center p-10">( OR )</p>
              <div className="m-5 text-xl font-bold">Manual Entry Of Employee For Prediction</div>

              <form
                onSubmit={handleSubmit}
                className="w-full flex justify-center items-center flex-col text-center border-2 border-dashed border-gray-400 rounded-xl hover:border-blue-500 transition-all p-5"
              >
                <table>
                {Object.keys(formData).map((key) => (
                  <tr key={key} className="mt-5">
                    <td className="p-5">{key}: </td>

                    <td className="p-5">
                    <input
                      className="ml-10 border-1 border-dashed p-2 border-gray-400"
                      type="text"
                      name={key}
                      value={formData[key]}
                      onChange={handleChange}
                      required
                    />
                    </td>
                  </tr>
                ))}
                </table>
                <br />
                <button
                  className="w-60 mt-10 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black  dark:bg-white dark:text-black dark:hover:bg-gray-200 border-1"
                  type="submit"
                >
                 {predictionLoading ? <FadeLoader/> : 'Predict Attrition Score'}
                </button>
              </form>

                {showResultField ? 

                  <div className="p-5">

                    <div className="m-5 text-xl font-bold">Result Of Prediction </div>

                    <div className="w-full flex justify-around text-center border-2 border-dashed border-gray-400 rounded-xl hover:border-blue-500 transition-all p-5">
                              
                              <table>
                                <tr>
                                  <td className="p-5">Employee's Age :</td>
                                  <td className= "p-5 text-teal-300">{formData['﻿Age']}</td>
                                </tr>
                                <tr>
                                  <td className="p-5">Employee's Role :</td>
                                  <td className="p-5 text-teal-300">{formData['JobRole']}</td>
                                </tr>
                                <tr>
                                  <td className="p-5">Employee's Attrition Prediction :</td>
                                  <td className="p-5 text-teal-300">{employeePrediction['prediction']}</td>
                                </tr>
                                <tr>
                                  <td className="p-5">Employee's Attrition Probability :</td>
                                  <td className="p-5 text-teal-300">{employeePrediction['probability']*100 + ' %'}</td>
                                </tr>
                              </table>

                              
                    <ProbabilityPieChart probabibility={employeePrediction['probability']}/>
                    </div>

                  </div>

                 :
                  '' }

            </div>
          ) : (
            <div className="min-h-[calc(100vh-261px)] text-3xl text-gray-400 flex justify-center items-center">
              Nothing to show 🥺 .....
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
