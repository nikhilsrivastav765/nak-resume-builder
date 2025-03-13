import { useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate("/dashboard"); // Redirect after success
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#f7f7f7] to-[#ffffff] backdrop-blur-lg ">
      <div className="w-[1200px] bg-white shadow-xl rounded-xl flex overflow-hidden py-0 px-12  ">
        {/* Left Side - Illustration */}
        <div className="w-1/2 lg:flex flex-col justify-center items-center p-8 hidden">
          <img
            src="\src\assets\illu-2.jpeg" // Replace with the actual image URL
            alt="Illustration"
            className="w-[600px] h-[600px] object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-1/2 p-10 flex flex-col justify-center w-fit">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">
              {isSignup ? "Sign Up" : "Welcome Back"}
            </h2>
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="text-sm text-gray-500 border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100"
            >
              {isSignup ? "Log In" : "Sign Up"}
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            {isSignup ? "Create an account" : "Login to your account"}
          </p>

          {/* Email Input */}
          <div className="mt-4">
            <label className="text-gray-600 text-sm">Email</label>
            <input
              type="email"
              className="w-full p-3 border-b rounded-md outline-none  focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="mt-3">
            <label className="text-gray-600 text-sm">Password</label>
            <input
              type="password"
              className="w-full p-3 border-b rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          {/* Submit Button */}
          <button
            className="w-full py-3 mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-lg font-semibold hover:opacity-90 transition-all"
            onClick={handleAuth}
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>

          {/* Forgot Password */}
          {!isSignup && (
            <p className="text-sm text-gray-500 text-right mt-2 cursor-pointer hover:underline">
              Forgot password?
            </p>
          )}

          {/* Social Login */}
          <div className="flex justify-center items-center mt-5 gap-4">
            <FaFacebookF className="text-blue-600 cursor-pointer hover:scale-110" size={22} />
            <FaLinkedinIn className="text-blue-500 cursor-pointer hover:scale-110" size={22} />
            <FcGoogle className="cursor-pointer hover:scale-110" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
