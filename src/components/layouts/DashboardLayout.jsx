import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";

function DashboardLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="h-screen bg-slate-100 dark:bg-slate-900 dark:text-gray-100 overflow-hidden flex flex-col transition-colors">
      <Navbar onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

      <div className="flex flex-1 overflow-hidden relative">
        {/* SIDEBAR */}
        <div
          className={`absolute z-10 md:static top-0 left-0 h-full transition-transform duration-300 md:translate-x-0 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} md:block`}
        >
          <Sidebar />
        </div>

        {/* OVERLAY FOR MOBILE */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-0 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* MAIN */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
