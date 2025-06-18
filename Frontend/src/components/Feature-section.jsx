"use client";
import React from "react";
import { PinContainer } from"./ui/Card_3d";

export function AnimatedPinDemo() {
  return (
    <div className="bg-black h-full">

        <div className="text-white w-full text-center text-5xl">
            Features

               <div className="mt-3 mx-auto w-[40rem] relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
             
             
                    {/* Radial Gradient to prevent sharp edges */}
                    
                  </div>
        </div>

    <div className="m-20 flex items-center justify-center flex-wrap gap-20">
        
      <PinContainer title="/ui.aceternity.com" href="#">
        <div
          className=" flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
           Real-Time Attrition Prediction
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Instantly predict employee attrition using smart AI analysis.
            </span>
          </div>
          <div
            className="prediction flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"/>
                
        </div>
      </PinContainer>

        <PinContainer title="/ui.aceternity.com" href="#">
        <div
          className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
             CSV & Manual Input
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
             Upload bulk data or enter employee info manually.
            </span>
          </div>
          <div
            className="csv-input flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>

      <PinContainer title="/ui.aceternity.com" href="#">
        <div
          className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
           Attrition Risk Score
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
           Get a clear score showing how likely an employee is to leave.
            </span>
          </div>
          <div
            className="risk-score flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>


      <PinContainer title="/ui.aceternity.com" href="#">
        <div
          className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Retention Recommendations
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
           Get suggestions to retain high-risk employees.
            </span>
          </div>
          <div
            className="recommend flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>


      <PinContainer title="/ui.aceternity.com" href="#">
        <div
          className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
             Interactive Dashboard
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              View and manage predictions in a simple, visual dashboard.
            </span>
          </div>
          <div
            className="interactive-dash flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>



    </div>
    </div>
  );
}
