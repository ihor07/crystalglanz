import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase/config";

export default function AccountPage() {
  const { user, userProfile } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-card">
        <h1>Mein Konto</h1>
        <p>Willkommen, {userProfile?.displayName || user?.email}</p>

        <div className="dashboard-info">
          <p><strong>E-Mail:</strong> {user?.email}</p>
          <p><strong>Rolle:</strong> {userProfile?.role || "customer"}</p>
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
