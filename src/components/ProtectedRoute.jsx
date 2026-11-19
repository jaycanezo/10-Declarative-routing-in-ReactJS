import { Navigate, useLocation } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Save the full attempted location (pathname, search, hash) so Login can return here.
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}

