import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../utilities/AuthContext";

const PrivateRoute = () => {
  const { currentUser } = useAuth(); // Get logged-in user

  return currentUser ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRoute;