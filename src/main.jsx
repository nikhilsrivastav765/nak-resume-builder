import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ResumeProvider } from "./utilities/ResumeContext.jsx";
import { AuthProvider } from './utilities/AuthContext.jsx';
createRoot(document.getElementById('root')).render(
    <AuthProvider>
    <ResumeProvider>
    <App />
    </ResumeProvider>
    </AuthProvider>
)
