import { Link, useLocation } from "react-router";

const labelMap = {
  courses: "Courses",
  dashboard: "Dashboard",
  profile: "Profile",
  lessons: "Lessons",
  login: "Sign In",
};

export default function Breadcrumbs() {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return null;
  }

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        {segments.map((segment, index) => {
          const to = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;
          const label = labelMap[segment] || decodeURIComponent(segment);

          return (
            <li key={to} className="breadcrumb-item">
              <span className="breadcrumb-sep" aria-hidden="true">
                /
              </span>
              {isLast ? (
                <span aria-current="page" className="breadcrumb-current">
                  {label}
                </span>
              ) : (
                <Link to={to}>{label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

