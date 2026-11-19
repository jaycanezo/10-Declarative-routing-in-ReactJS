export const lessons = [
  {
    id: "L101",
    courseId: "WEB201",
    title: "Setting Up BrowserRouter and Nested Layouts",
    duration: "25 mins",
    module: "Module 1: Routing Foundations",
    summary:
      "Learn how BrowserRouter synchronizes UI state with the browser URL and how MainLayout uses Outlet to wrap child pages.",
    objectives: [
      "Configure BrowserRouter in main.jsx",
      "Define route trees using Routes and Route",
      "Render shared headers and footers with Outlet",
    ],
    content:
      "Declarative routing lets you describe your application screens as JSX components. Instead of manually listening to popstate events, BrowserRouter reads the current URL and matches it against your Route definitions. Parent layout routes render shared navigation and place an Outlet wherever child pages should appear.",
  },
  {
    id: "L102",
    courseId: "WEB201",
    title: "Working with Dynamic Params and Search Params",
    duration: "30 mins",
    module: "Module 2: URL State",
    summary:
      "Understand when to use path parameters with useParams() versus query string parameters with useSearchParams().",
    objectives: [
      "Extract :courseId and :lessonId using useParams()",
      "Read and update query strings with useSearchParams()",
      "Preserve existing filters when updating individual query keys",
    ],
    content:
      "Path parameters identify a specific resource such as /courses/COA101, while query parameters store optional view state like ?search=react&category=Programming. Storing filter state in the URL makes pages shareable and preserves selections across browser refreshes.",
  },
  {
    id: "L103",
    courseId: "COA101",
    title: "Instruction Cycle and CPU Pipelining",
    duration: "35 mins",
    module: "Module 2: Processor Design",
    summary:
      "Trace the Fetch-Decode-Execute cycle and see how instruction pipelining improves processor throughput.",
    objectives: [
      "Identify the stages of the instruction cycle",
      "Explain how pipelining overlaps instruction execution",
      "Recognize data and control hazards",
    ],
    content:
      "Modern CPUs divide instruction execution into discrete stages—Fetch, Decode, Execute, Memory Access, and Write Back. By overlapping these stages across consecutive instructions, a pipelined processor can complete one instruction nearly every clock cycle.",
  },
  {
    id: "L104",
    courseId: "DSA202",
    title: "Breadth-First vs. Depth-First Graph Traversal",
    duration: "40 mins",
    module: "Module 4: Graphs",
    summary:
      "Compare queue-based BFS and stack/recursion-based DFS for exploring connected nodes and finding shortest unweighted paths.",
    objectives: [
      "Implement BFS using a queue",
      "Implement DFS using recursion",
      "Choose the right traversal algorithm for a given problem",
    ],
    content:
      "Breadth-First Search explores neighbors level by level, making it ideal for finding the shortest path in an unweighted graph. Depth-First Search explores as far as possible along each branch before backtracking, which is useful for cycle detection and topological sorting.",
  },
];

