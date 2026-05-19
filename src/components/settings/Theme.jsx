import { useState } from "react";

function Theme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = (mode) => {
    setIsDarkMode(mode === "dark");
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <h1 className="font-medium text-2xl mb-2">Theme Settings</h1>
      <p className="text-sm text-gray-600 mb-8">
        Customize the appearance of your dashboard.
      </p>

      <div className="space-y-6">
        {/* Dark Mode / Light Mode Toggle */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">Appearance</h3>
              <p className="text-sm text-gray-600 mt-1">
                Choose your preferred color theme
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => handleThemeChange("light")}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  !isDarkMode
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                ☀️ Light
              </button>
              <button
                onClick={() => handleThemeChange("dark")}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  isDarkMode
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                🌙 Dark
              </button>
            </div>
          </div>
        </div>

        {/* Theme Preview */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-4">Preview</h3>
          <div
            className={`p-6 rounded-lg transition-colors ${
              isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
            }`}
          >
            <p className="text-sm">This is how your dashboard will look</p>
            <p className="text-xs text-gray-500 mt-2">
              {isDarkMode ? "Dark Mode Enabled" : "Light Mode Enabled"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theme;
