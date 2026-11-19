export const courses = [
  {
    id: "COA101",
    title: "Computer Organization and Architecture",
    category: "Systems",
    instructor: "Dr. Elena Vance",
    credits: 3,
    level: "Intermediate",
    description:
      "Explore how modern processors execute instructions, manage memory hierarchies, and interface with input/output devices.",
    syllabus: [
      "Digital Logic and Number Systems",
      "Instruction Set Architecture (ISA)",
      "CPU Pipelining and Hazards",
      "Cache and Virtual Memory",
    ],
  },
  {
    id: "WEB201",
    title: "Modern React and Declarative Routing",
    category: "Programming",
    instructor: "Prof. Marcus Chen",
    credits: 3,
    level: "Beginner",
    description:
      "Build single-page applications in React using functional components, hooks, nested layouts, and React Router declarative mode.",
    syllabus: [
      "JSX, Components, and Props",
      "State and Side Effects with Hooks",
      "Declarative Routing with BrowserRouter and Outlet",
      "URL Parameters, Query Strings, and Protected Routes",
    ],
  },
  {
    id: "DSA202",
    title: "Data Structures and Algorithms",
    category: "Programming",
    instructor: "Dr. Priya Nair",
    credits: 4,
    level: "Intermediate",
    description:
      "Master arrays, linked lists, trees, graphs, sorting, and algorithm complexity analysis for efficient problem solving.",
    syllabus: [
      "Big-O Notation and Recursion",
      "Stacks, Queues, and Linked Lists",
      "Binary Search Trees and Heaps",
      "Graph Traversal and Shortest Paths",
    ],
  },
  {
    id: "DBS105",
    title: "Relational Database Systems",
    category: "Data Science",
    instructor: "Prof. David Morales",
    credits: 3,
    level: "Beginner",
    description:
      "Learn relational modeling, normalization, SQL querying, indexing, and transaction management for reliable data storage.",
    syllabus: [
      "Entity-Relationship Modeling",
      "SQL Queries, Joins, and Aggregations",
      "Normal Forms (1NF to BCNF)",
      "Transactions and ACID Properties",
    ],
  },
  {
    id: "UXD110",
    title: "Human-Centered UI Design",
    category: "Design",
    instructor: "Clara Lindqvist",
    credits: 2,
    level: "Beginner",
    description:
      "Design accessible, responsive interfaces with clear visual hierarchy, consistent spacing, and intuitive navigation flows.",
    syllabus: [
      "Visual Hierarchy and Typography",
      "Color Contrast and Accessibility",
      "Responsive Grid and Flexbox Layouts",
      "Usability Testing and Feedback Loops",
    ],
  },
];

export const courseCategories = [
  "All",
  ...Array.from(new Set(courses.map((course) => course.category))),
];

