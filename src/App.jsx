import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BrowseLayouts from "./pages/BrowseLayouts";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Modern from "./pages/Modern";
import LocomotiveScroll from "locomotive-scroll";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import { ResumeContext } from "./utilities/ResumeContext";
import { useAuth } from "./utilities/AuthContext";
import LoadingScreen from "./components/LoadingScreen";
import Creative from "./pages/Creative";
import ClassicTemp from "./templates/ClassicTemp";
import Auth from "./pages/Auth";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
const AUTO_LOGOUT_TIME = 10 * 60 * 1000;
const App = () => {
  
  const { resumeData } = useContext(ResumeContext);
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const scroll = new LocomotiveScroll();
    return () => scroll.destroy();
  }, []);

  const Layout = ({ children }) => {
    const location = useLocation();
    const hideNavbarFooter = location.pathname === "/auth" || location.pathname === "/auth";
  
    return (
      <>
        {!hideNavbarFooter && <Navbar />}
        <div className="w-full min-h-screen">{children}</div>
        {!hideNavbarFooter && <Footer />}
      </>
    );
  };
  useEffect(() => {
    let logoutTimer;

    const resetTimer = () => {
      clearTimeout(logoutTimer);
      logoutTimer = setTimeout(() => {
        if (user) {
          signOut(auth)
            .then(() => console.log("User logged out due to inactivity"))
            .catch((error) => console.error("Logout error:", error));
        }
      }, AUTO_LOGOUT_TIME);
    };

    ["mousemove", "keypress", "click", "scroll"].forEach((event) =>
      window.addEventListener(event, resetTimer)
    );

    resetTimer();

    return () => {
      clearTimeout(logoutTimer);
      ["mousemove", "keypress", "click", "scroll"].forEach((event) =>
        window.removeEventListener(event, resetTimer)
      );
    };
  }, [user]);
  

  return (
    <>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <Router basename="/nak-resume-builder">
          <ProgressBar />
          <Layout>
           <Routes>
  <Route path="/" element={<Home />} />  
  <Route path="/home" element={<Home />} />
  <Route path="/contact" element={<ContactUs />} />
  <Route element={<PrivateRoute />}>
    <Route path="/layouts" element={<BrowseLayouts />} />
    <Route path="/modern" element={<Modern data={resumeData} />} />
    <Route path="/classic" element={<ClassicTemp data={resumeData} />} />
    <Route path="/creative" element={<Creative data={resumeData} />} />
  </Route>
  <Route path="/auth" element={<Auth />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="*" element={<Navigate to="/" />} />  {/* ✅ Redirect unknown URLs */}
</Routes>

          </Layout>
        </Router>
      )}
    </>
  );
};
const ProgressBar = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start(); // Start progress bar
    setTimeout(() => NProgress.done(), 500); // Simulate delay for smooth transition

    return () => {
      NProgress.done(); // Ensure it stops when navigating
    };
  }, [location.pathname]);

  return null;
};

export default App;
