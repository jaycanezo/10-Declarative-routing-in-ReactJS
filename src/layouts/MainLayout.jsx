import { Outlet } from "react-router";
import Breadcrumbs from "../components/Breadcrumbs";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">
        <div className="container">
          <Breadcrumbs />
          <Outlet />
        </div>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <span>Student Learning Portal &middot; React Router Declarative Mode</span>
          <span>SPA Demo &middot; Simulated Auth Only</span>
        </div>
      </footer>
    </div>
  );
}

