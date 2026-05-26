import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import TodoDetails from "./pages/TodoDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/tasks"
          element={
            <ProtectedRoutes>
              <Tasks />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoutes>
              <Settings />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoutes>
              <About />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/todo/:id"
          element={
            <ProtectedRoutes>
              <TodoDetails />
            </ProtectedRoutes>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
