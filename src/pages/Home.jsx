import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import { courses } from "../data/courses";

export default function Home() {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="page-stack">
      <section className="hero-card">
        <span className="eyebrow">Student Learning Portal</span>
        <h1>Learn Faster with Structured Courses and Guided Lessons</h1>
        <p className="lead">
          Browse our course catalog, filter subjects by category or keyword, and
          access your personalized student dashboard—all with instant client-side
          navigation.
        </p>
        <div className="hero-actions">
          <Link to="/courses" className="btn btn-primary">
            Explore Courses
          </Link>
          <Link
            to={isAuthenticated ? "/dashboard" : "/login"}
            className="btn btn-outline"
          >
            {isAuthenticated
              ? `Go to Dashboard (${user.name})`
              : "Student Sign In"}
          </Link>
        </div>
      </section>

      <section className="stats-grid" aria-label="Portal highlights">
        <div className="stat-card">
          <span className="stat-value">{courses.length}</span>
          <span className="stat-label">Active Courses</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">4</span>
          <span className="stat-label">Interactive Lessons</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">SPA</span>
          <span className="stat-label">Zero Full-Page Reloads</span>
        </div>
      </section>

      <section className="page-section">
        <div className="section-header">
          <h2>Featured Courses</h2>
          <Link to="/courses" className="text-link">
            View all courses &rarr;
          </Link>
        </div>
        <div className="card-grid">
          {courses.slice(0, 3).map((course) => (
            <article key={course.id} className="course-card">
              <div className="card-top">
                <span className="badge">{course.category}</span>
                <span className="course-code">{course.id}</span>
              </div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="card-footer">
                <span className="meta-text">{course.instructor}</span>
                <Link to={`/courses/${course.id}`} className="text-link">
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

