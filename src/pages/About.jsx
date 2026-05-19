import DashboardLayout from "../components/layouts/DashboardLayout";

function About() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto w-full">
        <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm">
          <h1 className="font-medium text-2xl mb-4">About This App</h1>
          <div className="text-gray-600 text-base leading-relaxed space-y-4">
            <p>
              This todo dashboard application was developed as a comprehensive
              frontend project focused on exploring and implementing modern web
              development concepts, tools, and best practices used in real-world
              applications.
            </p>
            <p>
              The project was designed not only to provide a functional task
              management experience, but also to serve as a hands-on exploration of
              scalable frontend architecture, reusable component design, responsive
              layouts, and efficient state management techniques.
            </p>
            <p>
              Built using React, the application leverages a component-based
              architecture to create reusable and maintainable UI elements across
              the dashboard. The project incorporates dynamic rendering, reusable layouts,
              conditional rendering, form handling, and global state management
              using Context API to efficiently manage shared application data such
              as authentication status, theme preferences, and task-related
              information.
            </p>
            <p>
              For styling and user interface development, Tailwind CSS was used to
              rapidly build a clean, responsive, and modern dashboard experience.
              The application includes responsive grid layouts, interactive cards,
              modal systems, sidebar navigation, tab-based settings pages, and both
              light and dark theme support to improve usability and accessibility
              across different devices and screen sizes.
            </p>
            <p>
              Firebase was integrated into the project to handle authentication and
              cloud database functionality. Authentication features include user
              registration, login, logout, password reset, persistent sessions,
              protected routes, and secure user access management. Cloud Firestore
              is used as the database solution for storing and managing
              user-specific tasks in real time, allowing efficient CRUD operations
              and scalable data management.
            </p>
            <p>
              In addition to core task management functionality, the project also
              explores important frontend engineering concepts such as route-based
              layouts, reusable UI patterns, conditional rendering, dynamic
              filtering, search functionality, task prioritization, and responsive
              dashboard structures commonly found in modern SaaS applications.
            </p>
            <p>
              The overall goal of the project is to create a professional, scalable,
              and visually polished productivity application while strengthening
              practical experience with modern frontend technologies and application
              architecture.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default About;
