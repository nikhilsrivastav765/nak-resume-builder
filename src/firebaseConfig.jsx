// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZvTFb5iBbr5qtosALof2KDxLExvxKqLA",
  authDomain: "nak-resume-builder.firebaseapp.com",
  projectId: "nak-resume-builder",
  storageBucket: "nak-resume-builder.firebasestorage.app",
  messagingSenderId: "1036654464760",
  appId: "1:1036654464760:web:56ebb0afe416f77725f50d",
  measurementId: "G-3P688QDK25"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app; 