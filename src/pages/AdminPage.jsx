import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase/config";

export default function AdminPage() {
  const { userProfile } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-card">
        <h1>Admin Dashboard</h1>
        <p>Willkommen, {userProfile?.displayName || "Admin"}.</p>

        <div className="dashboard-info">
          <p><strong>Rolle:</strong> {userProfile?.role}</p>
          <p>Hier verwalten Sie später Preise, Leistungen und Bestellungen.</p>
        </div>

        <div className="dashboard-actions">
          <Link to="/" className="btn btn--small">
            Zur Startseite
          </Link>
          <button type="button" className="btn btn--gold" onClick={handleLogout}>
            Abmelden
          </button>
        </div>
      </div>
    </div>
  );
}
