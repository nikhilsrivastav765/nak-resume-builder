import React from 'react'
import { ResumeContext } from '../../utilities/ResumeContext'
const Experience = ({}) => {
    const { resumeData, setResumeData } = React.useContext(ResumeContext)
  return (
    <div>
    <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
  
    {resumeData.experience.map((exp, index) => (
      <div key={index} className="mb-4 border-b pb-4">
        
        <label className="block mb-2 text-gray-700">Company Name</label>
        <input
          type="text"
          className="w-full p-2 mb-2 border border-gray-300 rounded"
          placeholder="Company Name"
          value={exp.company}
          onChange={(e) => {
            const updatedExperience = [...resumeData.experience]; 
            updatedExperience[index].company = e.target.value; 
            setResumeData({ ...resumeData, experience: updatedExperience });
          }}
        />
  
        <label className="block mb-2 text-gray-700">Position</label>
        <input
          type="text"
          className="w-full p-2 mb-2 border border-gray-300 rounded"
          placeholder="Position"
          value={exp.position}
          onChange={(e) => {
            const updatedExperience = [...resumeData.experience]; 
            updatedExperience[index].position = e.target.value;
            setResumeData({ ...resumeData, experience: updatedExperience });
          }}
        />
  

        <label className="block mb-2 text-gray-700">Years Worked</label>
        <input
          type="text"
          className="w-full p-2 mb-2 border border-gray-300 rounded"
          placeholder="Years (e.g. 2020-2023)"
          value={exp.years}
          onChange={(e) => {
            const updatedExperience = [...resumeData.experience]; 
            updatedExperience[index].years = e.target.value; 
            setResumeData({ ...resumeData, experience: updatedExperience });
          }}
        />
      </div>
    ))}
  
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      onClick={() => {
        setResumeData({
          ...resumeData,
          experience: [
            ...resumeData.experience,
            { company: "", position: "", years: "" },
          ],
        });
      }}
    >
      Add Experience
    </button>
  </div>
    
  )
}

export default Experience