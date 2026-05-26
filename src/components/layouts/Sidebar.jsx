import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  LayoutDashboard,
  ListTodo,
  Settings,
  Info,
  LogOut,
} from "lucide-react";

function Sidebar() {
  const { logout, userData } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();

      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <aside className="w-64 h-full bg-[#FF6767] dark:bg-slate-800 text-white p-5 flex flex-col shadow-lg md:shadow-none transition-colors">
      {/* Profile Section (Top) */}
      <div className="flex items-center gap-3 mb-10 mt-2 md:mt-0">
        <img
          src={userData?.profilePicture || "https://i.pravatar.cc/150?img=3"}
          alt="profile"
          className="w-15 h-15 rounded-full"
        />
        <div>
          <p className="font-semibold text-2xl">
            {userData?.username || "User"}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4">
        <Link
          to="/"
          className="hover:bg-[#e62b2b28] dark:hover:bg-slate-700 p-3 rounded-lg transition-colors flex items-center gap-2"
        >
          <LayoutDashboard />
          Dashboard
        </Link>
        <Link
          to="/tasks"
          className="hover:bg-[#e62b2b28] dark:hover:bg-slate-700 p-3 rounded-lg transition-colors flex items-center gap-2"
        >
          <ListTodo />
          My Tasks
        </Link>
        <Link
          to="/settings"
          className="hover:bg-[#e62b2b28] dark:hover:bg-slate-700 p-3 rounded-lg transition-colors flex items-center gap-2"
        >
          <Settings />
          Settings
        </Link>
        <Link
          to="/about"
          className="hover:bg-[#e62b2b28] dark:hover:bg-slate-700 p-3 rounded-lg transition-colors flex items-center gap-2"
        >
          <Info />
          About
        </Link>
      </nav>

      {/* Logout pinned to bottom */}
      <div
        className="mt-auto hover:bg-red-600 dark:hover:bg-red-700 p-3 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
        role="button"
        tabIndex={0}
        onClick={handleLogout}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleLogout();
        }}
      >
        <LogOut />
        <button type="button" onClick={handleLogout} className="bg-transparent">
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
