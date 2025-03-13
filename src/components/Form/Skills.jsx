import { useContext, useState } from "react";
import axios from "axios";
import { ResumeContext } from "../../utilities/ResumeContext";
import React from "react";
import { div } from "motion/react-client";
const Skills = ({}) => {
  const { resumeData, setResumeData } = React.useContext(ResumeContext)
  
  return (
    <div>
    <h2 className="text-2xl font-bold mt-6 mb-4">Skills</h2>
    <div className="mb-4">
      {resumeData.skills.map((skill, index) => (
        <div key={index} className="flex items-center gap-4 mb-2">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter a skill (e.g. React, JavaScript)"
            value={skill}
            onChange={(e) => {
              const updatedSkills = [...resumeData.skills];
              updatedSkills[index] = e.target.value;
              setResumeData({ ...resumeData, skills: updatedSkills });
            }}
          />
          <button
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => {
              const updatedSkills = resumeData.skills.filter((_, i) => i !== index);
              setResumeData({ ...resumeData, skills: updatedSkills });
            }}
          >
            ✖
          </button>
        </div>
      ))}
    </div>
  
    <button
      className="bg-purple-500 text-white px-4 py-2 rounded mt-2"
      onClick={() => {
        setResumeData({ ...resumeData, skills: [...resumeData.skills, ""] });
      }}
    >
      Add Skill
    </button>
  </div>
  );
};
export default Skills;