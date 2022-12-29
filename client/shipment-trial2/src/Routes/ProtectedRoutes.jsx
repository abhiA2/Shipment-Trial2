import { Navigate } from "react-router-dom";
import store from "../store/index";
const ProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem("authToken");
  console.log(token);
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoutes;
