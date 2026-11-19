import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="page-stack">
      <div className="detail-card">
        <span className="eyebrow">Student Profile</span>
        <h1>{user?.name}</h1>
        <p className="subtitle">
          Academic account details for the current simulated session.
        </p>

        <dl className="profile-grid">
          <div className="profile-item">
            <dt>Student ID</dt>
            <dd>{user?.id}</dd>
          </div>
          <div className="profile-item">
            <dt>Email Address</dt>
            <dd>{user?.email}</dd>
          </div>
          <div className="profile-item">
            <dt>Degree Program</dt>
            <dd>{user?.program}</dd>
          </div>
          <div className="profile-item">
            <dt>Year Level</dt>
            <dd>{user?.yearLevel}</dd>
          </div>
        </dl>

        <div className="detail-actions">
          <Link to="/dashboard" className="btn btn-outline">
            &larr; Back to Overview
          </Link>
          <Link to="/courses" className="btn btn-primary">
            Browse Course Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}

