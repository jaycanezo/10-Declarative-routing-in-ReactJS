import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { courses } from "../data/courses";
import { lessons } from "../data/lessons";

export default function LessonDetails() {
  const { lessonId } = useParams();
  const lesson = lessons.find(
    (item) => item.id.toLowerCase() === lessonId?.toLowerCase()
  );

  useEffect(() => {
    if (lesson) {
      document.title = `${lesson.id}: ${lesson.title} | Student Learning Portal`;
    } else {
      document.title = "Lesson Not Found | Student Learning Portal";
    }
  }, [lesson]);

  if (!lesson) {
    return (
      <div className="error-card">
        <span className="badge badge-danger">Invalid Lesson ID</span>
        <h1>Lesson Not Found</h1>
        <p>
          No lesson was found for ID <code>{lessonId}</code>. Choose a valid
          lesson from your dashboard.
        </p>
        <Link to="/dashboard" className="btn btn-primary">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const parentCourse = courses.find((course) => course.id === lesson.courseId);

  return (
    <div className="page-stack">
      <div className="detail-card">
        <div className="card-top">
          <span className="badge">{lesson.module}</span>
          <span className="course-code">
            {lesson.id} &middot; {lesson.duration}
          </span>
        </div>

        <h1>{lesson.title}</h1>
        <p className="lead">{lesson.summary}</p>

        {parentCourse && (
          <div className="notice-box">
            Part of{" "}
            <Link to={`/courses/${parentCourse.id}`} className="text-link">
              {parentCourse.id}: {parentCourse.title}
            </Link>
          </div>
        )}

        <div className="detail-section">
          <h2>Learning Objectives</h2>
          <ul className="clean-list">
            {lesson.objectives.map((objective) => (
              <li key={objective}>{objective}</li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <h2>Lesson Notes</h2>
          <p className="lesson-body">{lesson.content}</p>
        </div>

        <div className="detail-actions">
          <Link to="/dashboard" className="btn btn-outline">
            &larr; Back to Dashboard
          </Link>
          {parentCourse && (
            <Link to={`/courses/${parentCourse.id}`} className="btn btn-primary">
              View Course Info
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

