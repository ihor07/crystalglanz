import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/config";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const cred = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      await updateProfile(cred.user, {
        displayName: formData.displayName,
      });

      await setDoc(doc(db, "users", cred.user.uid), {
        uid: cred.user.uid,
        displayName: formData.displayName,
        email: formData.email,
        role: "customer",
        createdAt: serverTimestamp(),
      });

      navigate("/account");
    } catch (err) {
      console.error(err);
      setError("Registrierung fehlgeschlagen. Bitte versuchen Sie es erneut.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Registrieren</h1>
        <p>Erstellen Sie ein Konto, um Ihre Anfragen und Termine zu verfolgen.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="displayName">Name</label>
            <input
              id="displayName"
              type="text"
              name="displayName"
              placeholder="Max Muster"
              value={formData.displayName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">E-Mail</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="name@email.ch"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="password">Passwort</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Mindestens 6 Zeichen"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {error && <div className="auth-error">{error}</div>}

          <button type="submit" className="btn btn--gold btn--full" disabled={loading}>
            {loading ? "Bitte warten..." : "Konto erstellen"}
          </button>
        </form>

        <p className="auth-switch">
          Bereits registriert? <Link to="/login">Hier anmelden</Link>
        </p>
      </div>
    </div>
  );
}
