import { Link, NavLink, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <span className="brand-badge">SL</span>
          <span>Student Learning Portal</span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Dashboard
          </NavLink>
        </nav>

        <div className="header-actions">
          {isAuthenticated ? (
            <>
              <span className="user-pill" title={user.email}>
                {user.name}
              </span>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "btn btn-primary btn-sm" : "btn btn-outline btn-sm"
              }
            >
              Sign In
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
}

