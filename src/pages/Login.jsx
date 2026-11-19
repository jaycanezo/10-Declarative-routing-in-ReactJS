import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [name, setName] = useState("Jay Cañezo");
  const [email, setEmail] = useState("jay.canezo@student.edu");
  const [program, setProgram] = useState("BSIT-3");

  const { login, isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from;
  const destination = from
    ? `${from.pathname}${from.search || ""}${from.hash || ""}`
    : "/dashboard";

  function handleSubmit(event) {
    event.preventDefault();
    login({ name, email, program });
    navigate(destination, { replace: true });
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <span className="eyebrow">Simulated Authentication</span>
        <h1>Student Sign In</h1>
        <p className="subtitle">
          Sign in to access your protected dashboard, student profile, and
          lesson materials. No real credentials are stored.
        </p>

        {from && (
          <div className="notice-box">
            You were redirected from{" "}
            <code>
              {from.pathname}
              {from.search}
              {from.hash}
            </code>
            . Sign in to continue there automatically.
          </div>
        )}

        {isAuthenticated && (
          <div className="notice-box">
            You are already signed in. Submitting will update your session and
            take you to <code>{destination}</code>.
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-field">
            <label htmlFor="student-name">Full Name</label>
            <input
              id="student-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="student-email">Student Email</label>
            <input
              id="student-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="student-program">Degree Program</label>
            <input
              id="student-program"
              type="text"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-full">
            Sign In to Portal
          </button>
        </form>
      </div>
    </div>
  );
}

