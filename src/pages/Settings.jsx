import DashboardLayout from "../components/layouts/DashboardLayout";
import { useState } from "react";
import Theme from "../components/settings/Theme";
import Accounts from "../components/settings/Accounts";
import Security from "../components/settings/Security";

function Settings() {
  const [activeTab, setActiveTab] = useState("theme");

  const tabs = [
    { id: "theme", label: "Theme Settings" },
    { id: "account", label: "Account Settings" },
    { id: "security", label: "Security Settings" },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto w-full">
        <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm mb-6">
          <h1 className="font-medium text-2xl mb-2 ">Settings</h1>
          <p className="text-sm">
            Manage your account settings and preferences.
          </p>

          {/* Tab Navigation */}
          <nav className="flex gap-2 md:gap-4 mt-8 border-b border-gray-200 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 md:px-4 py-3 font-medium text-sm transition-all border-b-2 ${activeTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "theme" && <Theme />}
          {activeTab === "account" && <Accounts />}
          {activeTab === "security" && <Security />}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Settings;
