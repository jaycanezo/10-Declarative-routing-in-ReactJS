import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import MainLayout from "./layouts/MainLayout";
import CourseDetails from "./pages/CourseDetails";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import LessonDetails from "./pages/LessonDetails";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

const routeTitles = {
  "/": "Home | Student Learning Portal",
  "/courses": "Courses | Student Learning Portal",
  "/login": "Sign In | Student Learning Portal",
  "/dashboard": "Dashboard | Student Learning Portal",
  "/dashboard/profile": "Student Profile | Student Learning Portal",
};

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Dynamic pages (/courses/:courseId and /dashboard/lessons/:lessonId)
    // also set more specific titles inside their own components.
    if (routeTitles[pathname]) {
      document.title = routeTitles[pathname];
    } else if (
      !pathname.startsWith("/courses/") &&
      !pathname.startsWith("/dashboard/lessons/")
    ) {
      document.title = "404 Not Found | Student Learning Portal";
    }
  }, [pathname]);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="lessons/:lessonId" element={<LessonDetails />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
