import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import BrowseLayouts from "./pages/BrowseLayouts";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Modern from "./pages/Modern";
import LocomotiveScroll from "locomotive-scroll";

import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import { ResumeContext } from "./utilities/ResumeContext";
import { useAuth } from "./utilities/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";
import LoadingScreen from "./components/LoadingScreen";
import Creative from "./pages/Creative";
import ClassicTemp from "./templates/ClassicTemp";
import Auth from "./pages/Auth";

const AUTO_LOGOUT_TIME = 10 * 60 * 1000; // 10 minutes

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

const App = () => {
  const { resumeData } = useContext(ResumeContext);
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const scroll = new LocomotiveScroll();
    return () => scroll.destroy();
  }, []);

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
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route element={<PrivateRoute />}>
                <Route path="/layouts" element={<BrowseLayouts />} />
                <Route path="/modern" element={<Modern data={resumeData} />} />
                <Route path="/classic" element={<ClassicTemp data={resumeData} />} />
                <Route path="/creative" element={<Creative data={resumeData} />} />
              </Route>
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Layout>
        </Router>
      )}
    </>
  );
};

export default App;
