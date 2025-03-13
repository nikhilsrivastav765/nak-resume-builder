import React, { useState } from 'react'
import { ResumeContext } from '../../utilities/ResumeContext'
const PersonalInfo = () => {
    const { resumeData, setResumeData } = React.useContext(ResumeContext)
    const [imagePreview, setImagePreview] = useState(resumeData.picture || "");
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
          setResumeData({ ...resumeData, picture: reader.result }); // Store Base64 Image
        };
        reader.readAsDataURL(file);
      }
    };
  return (
    <div><h2 className="text-2xl font-bold mb-4">Personal Info</h2>
    <label className="block mb-2 text-gray-700">Full Name</label>
  <input
    type="text"
    className="w-full p-2 mb-4 border border-gray-300 rounded"
    placeholder="Your Name"
    value={resumeData.name}
    onChange={(e) =>
      setResumeData({ ...resumeData, name: e.target.value })
    }
  />
<label className="block mb-2 text-gray-700">Job Title</label>
  <input
    type="text"
    className="w-full p-2 mb-4 border border-gray-300 rounded"
    placeholder="Your Job Title"
    value={resumeData.jobTitle}
    onChange={(e) =>
      setResumeData({ ...resumeData, jobTitle: e.target.value })
    }/>
    <label className="block mb-2 text-gray-700">Location</label>
  <input
    type="text"
    className="w-full p-2 mb-4 border border-gray-300 rounded"
    placeholder="Your Location"
    value={resumeData.location}
    onChange={(e) =>
      setResumeData({ ...resumeData, location: e.target.value })
    }/>
    <label className="block mb-2 text-gray-700">Contact Number</label>
  <input
    type="text"
    className="w-full p-2 mb-4 border border-gray-300 rounded"
    placeholder="Your Mobile Number"
    value={resumeData.contact}
    onChange={(e) =>
      setResumeData({ ...resumeData, contact: e.target.value })
    }/>
     <label className="block mb-2 text-gray-700">Email Address</label>
  <input
    type="text"
    className="w-full p-2 mb-4 border border-gray-300 rounded"
    placeholder="Your Email ID"
    value={resumeData.email}
    onChange={(e) =>
      setResumeData({ ...resumeData, email: e.target.value })
    }/>
    <label className="block mb-2 text-gray-700">LinkedIn Profile</label>

    <input
    type="text"
    className="w-full p-2 mb-4 border border-gray-300 rounded"
    placeholder="Your LinkedIn Profile"
    value={resumeData.linkedIn}
    onChange={(e) =>
      setResumeData({ ...resumeData, linkedIn: e.target.value })
    }/>
        <label className="block mb-2 text-gray-700">Git Hub Profile</label>

<input
type="text"
className="w-full p-2 mb-4 border border-gray-300 rounded"
placeholder="Your LinkedIn Profile"
value={resumeData.gitHub}
onChange={(e) =>
  setResumeData({ ...resumeData, gitHub: e.target.value })
}/>
<label className="block mb-2 text-gray-700">Profile Picture</label>
      <input
        type="file"
        accept="image/*"
        className="w-full p-2 border border-gray-300 rounded"
        onChange={handleImageUpload}
      />

    </div>
  )
}

export default PersonalInfo