import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { value } = useAuth();

  if (!value.token) {
    // Redirect to login if token is not present
    return <Navigate to="/login" replace />;
  }

  // Render the children if the user is authenticated
  return <>{children}</>;
};

export default ProtectedRoute;
