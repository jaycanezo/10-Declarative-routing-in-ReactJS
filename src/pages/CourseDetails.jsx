import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { courses } from "../data/courses";
import { lessons } from "../data/lessons";

export default function CourseDetails() {
  const { courseId } = useParams();
  const course = courses.find(
    (item) => item.id.toLowerCase() === courseId?.toLowerCase()
  );

  useEffect(() => {
    if (course) {
      document.title = `${course.id}: ${course.title} | Student Learning Portal`;
    } else {
      document.title = "Course Not Found | Student Learning Portal";
    }
  }, [course]);

  if (!course) {
    return (
      <div className="error-card">
        <span className="badge badge-danger">Invalid Course ID</span>
        <h1>Course Not Found</h1>
        <p>
          We could not find a course with ID <code>{courseId}</code>. Please
          check the URL or browse the available courses.
        </p>
        <Link to="/courses" className="btn btn-primary">
          Back to Courses
        </Link>
      </div>
    );
  }

  const courseLessons = lessons.filter((lesson) => lesson.courseId === course.id);

  return (
    <div className="page-stack">
      <div className="detail-card">
        <div className="card-top">
          <span className="badge">{course.category}</span>
          <span className="course-code">{course.id}</span>
        </div>
        <h1>{course.title}</h1>
        <p className="lead">{course.description}</p>

        <div className="detail-meta">
          <div>
            <span className="meta-label">Instructor</span>
            <strong>{course.instructor}</strong>
          </div>
          <div>
            <span className="meta-label">Level</span>
            <strong>{course.level}</strong>
          </div>
          <div>
            <span className="meta-label">Credits</span>
            <strong>{course.credits} Units</strong>
          </div>
        </div>

        <div className="detail-section">
          <h2>Course Syllabus</h2>
          <ul className="clean-list">
            {course.syllabus.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>

        {courseLessons.length > 0 && (
          <div className="detail-section">
            <h2>Included Dashboard Lessons</h2>
            <div className="lesson-links">
              {courseLessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  to={`/dashboard/lessons/${lesson.id}`}
                  className="lesson-pill"
                >
                  <span>
                    {lesson.id}: {lesson.title}
                  </span>
                  <span className="meta-text">{lesson.duration}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="detail-actions">
          <Link to="/courses" className="btn btn-outline">
            &larr; Back to Catalog
          </Link>
          <Link to="/dashboard" className="btn btn-primary">
            Open Student Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

