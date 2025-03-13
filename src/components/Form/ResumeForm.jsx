import React, { useContext, useState } from 'react'
import { ResumeContext } from '../../utilities/ResumeContext';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { div } from 'motion/react-client';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Certificate from './Certificate';
import { PiGreaterThan } from "react-icons/pi";
const steps = ["Personal Info", "Experience","Education","Skills","Certificates",]
export default function ResumeForm() {
  const { resumeData, setResumeData } = useContext(ResumeContext)
  const [currentStep, setCurrentStep] = useState(0);
  
  const nextStep = () => {
    if(currentStep < steps.length -1) setCurrentStep(currentStep + 1);
  }

  const prevStep = () => {
    if(currentStep > 0) setCurrentStep(currentStep - 1);
  };
  
  return (
    <div className="max-w-2xl mx-auto p-5">
    {/* Step Navigation */}
    <div className="flex justify-between border-b-2 pb-2">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`px-1 py-2 rounded-md cursor-pointer ${
            index === currentStep && "text-gray-600"
          }`}
          onClick={() => setCurrentStep(index)}
        >
          {step}
        </div>
      ))}
    </div>

    {/* Step Content */}
    <div className="mt-5 p-5 border rounded-md">
      {currentStep === 0 && <PersonalInfo />}
      {currentStep === 1 && <Experience />}
      {currentStep === 2 && <Education />}
      {currentStep === 3 && <Skills />}
      {currentStep === 4 && <Certificate />}
    </div>

    {/* Navigation Buttons */}
    <div className="flex justify-between mt-5">
      <button
        className="px-4 py-2 bg-gray-300 rounded-md"
        onClick={prevStep}
        disabled={currentStep === 0}
      >
        Previous
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={nextStep}
        disabled={currentStep === steps.length - 1}
      >
        Next
      </button>
    </div>
    </div>
  )
}
