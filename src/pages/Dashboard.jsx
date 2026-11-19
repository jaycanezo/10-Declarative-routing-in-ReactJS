import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import { courses } from "../data/courses";
import { lessons } from "../data/lessons";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="page-stack">
      <div className="dashboard-banner">
        <span className="eyebrow">Dashboard Overview</span>
        <h1>Welcome back, {user?.name}</h1>
        <p className="subtitle">
          Program: {user?.program} &middot; {user?.yearLevel}
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-value">{courses.length}</span>
          <span className="stat-label">Available Courses</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{lessons.length}</span>
          <span className="stat-label">Ready Lessons</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">Active</span>
          <span className="stat-label">Session Status</span>
        </div>
      </div>

      <section className="page-section">
        <div className="section-header">
          <h2>Continue Learning</h2>
          <Link to="/dashboard/profile" className="text-link">
            View Student Profile &rarr;
          </Link>
        </div>

        <div className="lesson-list">
          {lessons.map((lesson) => (
            <article key={lesson.id} className="lesson-card">
              <div>
                <div className="card-top">
                  <span className="badge">{lesson.courseId}</span>
                  <span className="meta-text">{lesson.duration}</span>
                </div>
                <h3>
                  {lesson.id}: {lesson.title}
                </h3>
                <p>{lesson.summary}</p>
              </div>
              <Link
                to={`/dashboard/lessons/${lesson.id}`}
                className="btn btn-primary btn-sm"
              >
                Open Lesson
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

