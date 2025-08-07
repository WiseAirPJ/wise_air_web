import { JSX } from "react";
import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }: { children: JSX.Element }) {
  const isAuthenticated = true;
  const user = { role: "admin" }; // Replace with actual user data

  if (!isAuthenticated || user?.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return children;
}
