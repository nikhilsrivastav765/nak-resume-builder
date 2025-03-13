import { createContext, useState } from "react";
export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  
  const [resumeData, setResumeData] = useState({
    name: "",
    jobTitle: "",
    picture: "",
    location: "",
    contact: "+91 ",
    email: "",
    linkedIn: "",
    github: "",
    experience: [],
    education: [],
    skills: [],
    certificates: [],
    objective: "",
  });
  


  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
};
