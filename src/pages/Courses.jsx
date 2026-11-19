import { useMemo } from "react";
import { Link, useSearchParams } from "react-router";
import { courseCategories, courses } from "../data/courses";

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") ?? "";
  const selectedCategory = searchParams.get("category") ?? "All";

  function updateFilter(key, value) {
    // Copy existing params so updating one filter preserves the others.
    const nextParams = new URLSearchParams(searchParams);

    if (!value || value === "All") {
      nextParams.delete(key);
    } else {
      nextParams.set(key, value);
    }

    setSearchParams(nextParams);
  }

  function handleResetFilters() {
    setSearchParams({});
  }

  // Note: For a small static dataset like 5 courses, useMemo() is optional because
  // filtering takes microseconds. It is used here to demonstrate how to avoid
  // repeating expensive work when a catalog grows large.
  const filteredCourses = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesTitle = course.title
        .toLowerCase()
        .includes(normalizedSearch);
      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;

      return matchesTitle && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const hasActiveFilters =
    searchQuery.trim() !== "" || selectedCategory !== "All";

  return (
    <div className="page-stack">
      <div className="page-header">
        <div>
          <h1>Course Catalog</h1>
          <p className="subtitle">
            Search by title or filter by category. Filters stay synced with the
            URL so you can refresh or share the page.
          </p>
        </div>
      </div>

      <section className="filter-bar" aria-label="Course filters">
        <div className="filter-group filter-search">
          <label htmlFor="course-search">Search by title</label>
          <input
            id="course-search"
            type="search"
            value={searchQuery}
            onChange={(e) => updateFilter("search", e.target.value)}
            placeholder="e.g. React, Architecture, Database..."
          />
        </div>

        <div className="filter-group">
          <label htmlFor="course-category">Category</label>
          <select
            id="course-category"
            value={selectedCategory}
            onChange={(e) => updateFilter("category", e.target.value)}
          >
            {courseCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-actions">
          <button
            type="button"
            className="btn btn-outline"
            onClick={handleResetFilters}
            disabled={!hasActiveFilters}
          >
            Reset Filters
          </button>
        </div>
      </section>

      <p className="results-count">
        Showing <strong>{filteredCourses.length}</strong> of{" "}
        <strong>{courses.length}</strong> courses
      </p>

      {filteredCourses.length === 0 ? (
        <div className="empty-state">
          <h2>No matching courses found</h2>
          <p>
            No courses matched{" "}
            {searchQuery ? `"${searchQuery}"` : "your current filters"}
            {selectedCategory !== "All" ? ` in ${selectedCategory}` : ""}.
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleResetFilters}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="card-grid">
          {filteredCourses.map((course) => (
            <article key={course.id} className="course-card">
              <div className="card-top">
                <span className="badge">{course.category}</span>
                <span className="course-code">{course.id}</span>
              </div>
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <div className="card-footer">
                <span className="meta-text">
                  {course.instructor} &middot; {course.credits} credits
                </span>
                <Link
                  to={`/courses/${course.id}`}
                  className="btn btn-primary btn-sm"
                >
                  View Course
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

