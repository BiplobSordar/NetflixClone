
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authUser";  
const RedirectIfAuthenticated = ({ children }) => {
  const { user } = useAuthStore(); 
  // If user is logged in, redirect to the home page
  if (user) {
    return <Navigate to="/" />;
  }

  // If user is not authenticated, render the children (LoginPage or any other component)
  return children;
};

export default RedirectIfAuthenticated;
