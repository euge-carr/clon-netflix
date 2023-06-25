import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) return children;

  return <Navigate to="/login" />;
};

export default ProtectedRoute;