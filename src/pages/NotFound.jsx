import { Link, useLocation } from "react-router";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="error-card">
      <span className="badge badge-danger">404 Error</span>
      <h1>Page Not Found</h1>
      <p>
        The route <code>{location.pathname}</code> does not exist in the Student
        Learning Portal.
      </p>
      <div className="hero-actions">
        <Link to="/" className="btn btn-primary">
          Go to Home
        </Link>
        <Link to="/courses" className="btn btn-outline">
          Browse Courses
        </Link>
      </div>
    </div>
  );
}

