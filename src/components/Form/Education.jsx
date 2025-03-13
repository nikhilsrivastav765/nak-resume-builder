import React from 'react'
import { ResumeContext } from '../../utilities/ResumeContext'
const Education = () => {
    const { resumeData, setResumeData } = React.useContext(ResumeContext)
  return (
    <div>
 <h2 className="text-2xl font-bold mt-6 mb-4">Education</h2>
  {resumeData.education.map((edu, index) => (
    <div key={index} className="mb-4 border-b pb-4">
      {/* School/College Name */}
      <label className="block mb-2 text-gray-700">Institution</label>
      <input
        type="text"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
        placeholder="School/College Name"
        value={edu.institution}
        onChange={(e) => {
          const updatedEducation = [...resumeData.education]; 
          updatedEducation[index].institution = e.target.value; 
          setResumeData({ ...resumeData, education: updatedEducation });
        }}
      />

      {/* Degree */}
      <label className="block mb-2 text-gray-700">Degree</label>
      <input
        type="text"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
        placeholder="Degree (e.g. B.Sc, MBA)"
        value={edu.degree}
        onChange={(e) => {
          const updatedEducation = [...resumeData.education]; 
          updatedEducation[index].degree = e.target.value;
          setResumeData({ ...resumeData, education: updatedEducation });
        }}
      />

      {/* Year of Graduation */}
      <label className="block mb-2 text-gray-700">Year of Graduation</label>
      <input
        type="text"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
        placeholder="Graduation Year (e.g. 2023)"
        value={edu.year}
        onChange={(e) => {
          const updatedEducation = [...resumeData.education]; 
          updatedEducation[index].year = e.target.value; 
          setResumeData({ ...resumeData, education: updatedEducation });
        }}
      />
    </div>
  ))}

  {/* Add More Education Button */}
  <button
    className="bg-green-500 text-white px-4 py-2 rounded mt-4"
    onClick={() => {
      setResumeData({
        ...resumeData,
        education: [
          ...resumeData.education,
          { institution: "", degree: "", years: "" },
        ],
      });
    }}
  >
    Add Education
  </button>
  </div>
  )
}

export default Education