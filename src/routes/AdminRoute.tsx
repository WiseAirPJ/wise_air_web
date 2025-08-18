import { JSX } from "react";
import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }: { children: JSX.Element }) {
  const user = { role: "admin" }; // Replace with actual user data

  if (user?.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return children;
}
