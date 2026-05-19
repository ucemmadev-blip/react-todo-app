import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 h-full bg-[#FF6767] text-white p-5 flex flex-col shadow-lg md:shadow-none">
      {/* Profile Section (Top) */}
      <div className="flex items-center gap-3 mb-10 mt-2 md:mt-0">
        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          className="w-15 h-15 rounded-full"
        />
        <div>
          <p className="font-semibold text-2xl">John Doe</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:bg-[#e62b2b28] p-3 rounded-lg">
          Dashboard
        </Link>
        <Link to="/tasks" className="hover:bg-[#e62b2b28] p-3 rounded-lg">
          My Tasks
        </Link>
        <Link to="/settings" className="hover:bg-[#e62b2b28] p-3 rounded-lg">
          Settings
        </Link>
        <Link to="/about" className="hover:bg-[#e62b2b28] p-3 rounded-lg">
          About
        </Link>
      </nav>

      {/* Logout pinned to bottom */}
      <button className="mt-auto hover:bg-red-600 p-3 rounded-lg transition-colors">
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;
