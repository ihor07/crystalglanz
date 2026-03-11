import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminRoute({ children }) {
  const { user, userProfile, loading } = useAuth();

  if (loading) {
    return <div className="page-loading">Laden...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (userProfile?.role !== "admin") {
    return <Navigate to="/account" replace />;
  }

  return children;
}
