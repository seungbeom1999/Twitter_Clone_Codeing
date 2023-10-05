import React from "react";
import { auth } from "../Firebase";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const user = auth.currentUser;
  if (user === null) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;
