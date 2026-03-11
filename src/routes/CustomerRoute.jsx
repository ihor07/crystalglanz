import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function CustomerRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="page-loading">Laden...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
