import { useContext, useState } from "react";
import { ResumeContext } from "../../utilities/ResumeContext";

const Certificate = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [certificate, setCertificate] = useState({ title: "", issuer: "", year: "" });

  // Handle adding a new certificate
  const addCertificate = () => {
    if (certificate.title && certificate.issuer && certificate.year) {
      setResumeData({
        ...resumeData,
        certificates: [...(resumeData.certificates || []), certificate],
      });
      setCertificate({ title: "", issuer: "", year: "" }); // Reset input fields
    }
  };

  // Handle removing a certificate
  const removeCertificate = (index) => {
    const updatedCertificates = [...resumeData.certificates];
    updatedCertificates.splice(index, 1);
    setResumeData({ ...resumeData, certificates: updatedCertificates });
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Certificates</h2>

      {/* Certificate Title */}
      <label className="block mb-2 text-gray-700">Certificate Title</label>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="e.g. Full Stack Development"
        value={certificate.title}
        onChange={(e) => setCertificate({ ...certificate, title: e.target.value })}
      />

      {/* Issuer */}
      <label className="block mt-4 mb-2 text-gray-700">Issued By</label>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="e.g. Coursera, Google, Udemy"
        value={certificate.issuer}
        onChange={(e) => setCertificate({ ...certificate, issuer: e.target.value })}
      />

      {/* Year */}
      <label className="block mt-4 mb-2 text-gray-700">Year</label>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="e.g. 2024"
        value={certificate.year}
        onChange={(e) => setCertificate({ ...certificate, year: e.target.value })}
      />

      {/* Add Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        onClick={addCertificate}
      >
        Add Certificate
      </button>

      {/* Display List of Certificates */}
      {resumeData.certificates?.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Your Certificates</h3>
          <ul className="list-disc pl-4 mt-2">
            {resumeData.certificates.map((cert, index) => (
              <li key={index} className="text-gray-700 flex justify-between">
                <span>{cert.title} - {cert.issuer} ({cert.year})</span>
                <button
                  className="text-red-500 ml-2"
                  onClick={() => removeCertificate(index)}
                >
                  ✖
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Certificate;