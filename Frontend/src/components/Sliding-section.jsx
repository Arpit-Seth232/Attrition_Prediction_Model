import React from 'react'
import { InfiniteSlider } from './ui/InfiniteSlider'
import { ProgressiveBlur } from './ui/ProgressiveBlur'

function SlidingSection() {
  return (
    <div>
         <section className="text-white pb-16 md:pb-32">
                    <div className="group relative m-auto  px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6 border-gray-300">
                                <p className="text-end text-sm text-gray-300">Powering the best features</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)] font-bold font-mono">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    <div className="flex">
                                        <span>🔍 AI-Powered Attrition Prediction</span>
                                    </div>

                                    <div className="flex">
                                         <span>📊 Risk Scoring System</span>
                                    </div>
                                    <div className="flex">
                                         <span>📁 Smart Data Input</span>
                                    </div>
                                    <div className="flex">
                                        <span>📈 Retrainable ML Model</span>
                                    </div>
                                    <div className="flex">
                                         <span>📉 Actionable Insights & Recommendations</span>
                                    </div>
                                   
                                </InfiniteSlider>

                                {/* <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20 bg-black"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20 bg-black"></div> */}
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-20 w-20 "
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-20 w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
    </div>
  )
}

export default SlidingSection