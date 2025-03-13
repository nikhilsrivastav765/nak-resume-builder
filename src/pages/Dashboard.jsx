import { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) navigate("/login"); 
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="lg:text-2xl lg:font-bold">Welcome, {user?.email}</h2>
      <LogoutButton />
    </div>
  );
};

export default Dashboard;