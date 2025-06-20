import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute({ children }) {
  const { user } = useAuth();

  return user ? children : <Navigate to="/signup" replace />;
}

export default PrivateRoute;
