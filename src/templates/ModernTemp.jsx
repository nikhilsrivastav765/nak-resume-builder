import { ResumeContext } from "../utilities/ResumeContext";
import React, { useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md"; 
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const ModernTemp = () => {
  const { resumeData } = useContext(ResumeContext);
  const [certificate, setCertificate] = useState({ title: "", issuer: "", year: "" });
  return (
    <div>
    <div className="max-w-3xl min-h-screen mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="">
      <header className="bg-gray-800 text-white flex flex-col min-w-[30%] min-h-screen gap-5">
      <div className=" flex items-center justify-center min-h-[20%]">
        {resumeData.picture ? (
          <img
            src={resumeData.picture}
            alt="Profile"
            className="w-[8rem] h-[8rem] rounded-full object-cover object-top p-2"
          />
        ) : <FaUserCircle className="text-[8rem]"/>}</div>
       <div className="pl-12">
       <h2 className="text-xl font-semibold border-b-[2px] pb-1 tracking-wider border-gray-400">CONTACT</h2>
        <h3 className=" flex items-center gap-2 pl-1 py-1 text-sm pt-5"><FaLocationDot />{resumeData.location || "Your Location"}</h3>
        <h3 className=" flex items-center gap-2 pl-1 py-1 text-sm"><FaPhoneAlt />{resumeData.contact || "Contact"}</h3>  
        <h3 className=" flex items-center gap-2 pl-1 py-1 text-sm"><MdEmail />{resumeData.email || "Email ID"}</h3>
        <h3 className=" flex items-center gap-2 pl-1 py-1 text-sm"><FaLinkedin />{resumeData.linkedIn || "LinkedIn"}</h3>
        <h3 className=" flex items-center gap-2 pl-1 py-1 text-sm"><FaGithub />{resumeData.gitHub || "GItHub"}</h3>
        </div>
        
        <section className=" pl-12 min-h-[20%]">
        <h2 className="text-xl font-semibold border-b-[2px] pb-1 tracking-wider border-gray-400">EXPERIENCE</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="my-5">
            <h3 className="text-lg font-semibold pl-1">{exp.company}</h3>
            <h3 className="text-sm text-gray-300 pl-1">{exp.position}</h3>
            <h3 className="text-sm text-gray-300 mt-1 pl-1">{exp.years}</h3>
          </div>
        ))}
      </section>
      <section className="pl-12">
      <h2 className="text-xl font-semibold border-b-[2px] pb-1 tracking-wider border-gray-400">EDUCATION</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="my-5">
            <h3 className="text-sm pl-1">{edu.degree}</h3>
            <h3 className="text-sm pl-1 text-gray-300">{edu.institution}</h3>
            <h3 className="text-xs pl-1 mt-1">{edu.year}</h3>
          </div>
        ))}
      </section>
      </header>
      <div className="p-5 w-full">
      <div className="flex flex-col mb-5">
        <h1 className="text-5xl font-semibold ">{resumeData.name || "Your Name"}</h1>
        <p className="text-xl font-semibold mt-2 pl-2">{resumeData.jobTitle || "Job Title"}</p>
        </div>
    
      
      <section className="p-2 border-b border-gray-700 min-h-[20%] w-full">
        <h2 className="text-xl font-semibold text-gray-700">Skills</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {resumeData.skills.map((skill, index) => (
            <span key={index} className="bg-gray-200 font-semibold px-3 py-1 rounded-md text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>
    
      <div className="p-2 border-b border-gray-700 min-h-[20%] w-full">
        <h3 className="text-xl font-semibold text-gray-700">Certificates</h3>
        {resumeData.certificates?.length > 0 ? (
          resumeData.certificates.map((cert, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-bold">{cert.title}</h4>
              <p className="text-gray-600">{cert.issuer} - {cert.year}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500"></p>
        )}
      </div>
    </div>
      <section className="p-4 border-b border-gray-700 min-h-[20%]">
        <h2 className="text-xl font-semibold text-gray-700">Objective</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {resumeData.objective}
        </div>
      </section>
      
      </div>
    </div>
    </div>
  );
};

export default ModernTemp;
