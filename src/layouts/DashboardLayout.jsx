import { NavLink, Outlet, useLocation, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { lessons } from "../data/lessons";

export default function DashboardLayout() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div className="dashboard-shell">
      <aside className="dashboard-sidebar" aria-label="Dashboard navigation">
        <div className="sidebar-profile">
          <div className="avatar-circle">
            {user?.name?.charAt(0).toUpperCase() || "S"}
          </div>
          <div>
            <p className="sidebar-name">{user?.name}</p>
            <p className="sidebar-meta">{user?.id}</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <p className="sidebar-heading">Portal</p>
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            Student Profile
          </NavLink>

          <p className="sidebar-heading">Recent Lessons</p>
          {lessons.map((lesson) => (
            <NavLink
              key={lesson.id}
              to={`/dashboard/lessons/${lesson.id}`}
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              {lesson.id}: {lesson.title}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="btn btn-outline sidebar-logout"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </aside>

      <section className="dashboard-main">
        <div className="route-status-bar">
          <span className="status-label">Current Pathname:</span>
          <code className="status-path">{location.pathname}</code>
        </div>
        <Outlet />
      </section>
    </div>
  );
}

