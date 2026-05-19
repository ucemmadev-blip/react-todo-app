const todos = [
  {
    id: 1,
    title: "Build Authentication System",
    date: "2026-05-18",
    priority: "Extreme",
    status: "completed",
    description: `Implement a fully secure and scalable authentication system using Firebase Authentication to manage user access throughout the application. The authentication flow should support user registration, login, logout, password reset, email verification, and persistent login sessions across browser refreshes and device restarts. During user registration, validate all input fields thoroughly, including email formatting, password strength requirements, and duplicate account prevention. Ensure meaningful and user-friendly error messages are displayed whenever authentication fails due to invalid credentials, weak passwords, network failures, expired sessions, or unauthorized access attempts.`,
    images: ["https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"],
  },

  {
    id: 2,
    title: "Design Dashboard Layout",
    date: "2026-05-19",
    priority: "Moderate",
    status: "in-progress",
    description:
      "Create a responsive dashboard layout featuring a sidebar, top navigation bar, task summary cards, and a content section. Focus on spacing, visual hierarchy, and accessibility while ensuring responsiveness across devices.",
    images: ["https://images.unsplash.com/photo-1551650975-87deedd944c3"],
  },

  {
    id: 3,
    title: "Implement Todo Modal",
    date: "2026-05-20",
    priority: "Low",
    status: "pending",
    description:
      "Build a modal component that displays complete todo information when a card is clicked. The modal should include the title, description, priority, status, images, and task date while maintaining smooth open and close animations.",
    images: ["https://images.unsplash.com/photo-1507238691740-187a5b1d37b8"],
  },

  {
    id: 4,
    title: "Setup Firestore Database",
    date: "2026-05-21",
    priority: "Extreme",
    status: "completed",
    description:
      "Configure Firestore collections and document structure for storing user-specific todos. Implement CRUD operations and ensure data is properly secured with Firebase security rules.",
    images: ["https://images.unsplash.com/photo-1515879218367-8466d910aaa4"],
  },

  {
    id: 5,
    title: "Create Task Filters",
    date: "2026-05-22",
    priority: "Moderate",
    status: "in-progress",
    description:
      "Allow users to filter tasks by completion status, priority level, and due date. The filtering system should dynamically update the displayed todos without requiring page reloads.",
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71"],
  },

  {
    id: 6,
    title: "Add Dark Mode",
    date: "2026-05-23",
    priority: "Low",
    status: "pending",
    description:
      "Implement a dark mode toggle that updates the entire application theme. Save user preferences locally and ensure all components adapt correctly to the selected theme.",
    images: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085"],
  },

  {
    id: 7,
    title: "Optimize Application Performance",
    date: "2026-05-24",
    priority: "Extreme",
    status: "completed",
    description:
      "Reduce unnecessary component re-renders, optimize state management, and lazy load large components where appropriate. Improve responsiveness and reduce bundle size.",
    images: ["https://images.unsplash.com/photo-1461749280684-dccba630e2f6"],
  },

  {
    id: 8,
    title: "Implement Drag and Drop",
    date: "2026-05-25",
    priority: "Moderate",
    status: "pending",
    description:
      "Add drag-and-drop functionality for moving tasks between different status columns. Ensure smooth animations and persistent state updates when tasks are rearranged.",
    images: ["https://images.unsplash.com/photo-1555066931-4365d14bab8c"],
  },

  {
    id: 9,
    title: "Create Analytics Cards",
    date: "2026-05-26",
    priority: "Low",
    status: "completed",
    description:
      "Build dashboard analytics cards showing total tasks, completed tasks, pending tasks, and overdue tasks. Use visually clear indicators and responsive layouts.",
    images: ["https://images.unsplash.com/photo-1543286386-713bdd548da4"],
  },

  {
    id: 10,
    title: "Add Search Functionality",
    date: "2026-05-27",
    priority: "Moderate",
    status: "in-progress",
    description:
      "Implement a search system that allows users to quickly find tasks based on keywords in titles or descriptions. Ensure the search updates results in real time.",
    images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3"],
  },

  {
    id: 11,
    title: "Create User Profile Section",
    date: "2026-05-28",
    priority: "Low",
    status: "pending",
    description:
      "Design and implement a user profile area within the sidebar. Include profile image, username, email, and editable account information.",
    images: ["https://images.unsplash.com/photo-1500648767791-00dcc994a43e"],
  },

  {
    id: 12,
    title: "Build Responsive Mobile Layout",
    date: "2026-05-29",
    priority: "Extreme",
    status: "completed",
    description:
      "Ensure the application works seamlessly on smaller screens by implementing responsive layouts, collapsible sidebars, and mobile-friendly navigation.",
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"],
  },

  {
    id: 13,
    title: "Integrate Notifications",
    date: "2026-05-30",
    priority: "Moderate",
    status: "pending",
    description:
      "Add a notification system to alert users about upcoming deadlines, overdue tasks, and completed activities. Include both visual indicators and toast notifications.",
    images: ["https://images.unsplash.com/photo-1516321497487-e288fb19713f"],
  },

  {
    id: 14,
    title: "Implement Task Editing",
    date: "2026-05-31",
    priority: "Low",
    status: "in-progress",
    description:
      "Allow users to edit existing tasks directly from the modal or dashboard view. Ensure changes are updated instantly in both UI and database.",
    images: ["https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"],
  },

  {
    id: 15,
    title: "Deploy Application",
    date: "2026-06-01",
    priority: "Extreme",
    status: "pending",
    description:
      "Prepare the application for production deployment. Optimize assets, configure environment variables, and deploy using Firebase Hosting or another hosting provider.",
    images: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085"],
  },
];

export default todos;
