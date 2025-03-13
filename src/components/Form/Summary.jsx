import React, { useContext } from 'react'
import { ResumeContext } from '../../utilities/ResumeContext';

const Summary = () => {
    const { resumeData, setResumeData } = useContext(ResumeContext);
    return (
      <div className="p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2">Professional Summary</h2>
        <p className="text-gray-600 mb-2">Provide a brief summary highlighting your strengths.</p>
  
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-2"
          rows="4"
          placeholder="Write a short professional summary..."
          value={resumeData.summary}
          onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })}
        />
  
        {resumeData.summary && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Preview:</h3>
            <p className="bg-gray-100 p-3 rounded text-gray-800">{resumeData.summary}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default Summary;
