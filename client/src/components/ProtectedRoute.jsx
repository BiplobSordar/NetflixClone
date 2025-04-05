// components/ProtectedRoute.jsx
import { Navigate, replace, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authUser";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthStore();
  const navigate=useNavigate()
  console.log(user)

  if (!user) {
 return <Navigate to={'/login'}/>
  }



  return children;
};

export default ProtectedRoute;
