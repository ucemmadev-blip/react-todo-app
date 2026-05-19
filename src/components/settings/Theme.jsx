import { useTheme } from "../../context/ThemeContext";

function Theme() {
  const { darkMode, toggleDarkMode } = useTheme()

  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const handleThemeChange = (mode) => {
  //   setIsDarkMode(mode === "dark");
  // };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-6 shadow-sm transition-colors">
      <h1 className="font-medium text-2xl mb-2">Theme Settings</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
        Customize the appearance of your dashboard.
      </p>

      <div className="space-y-6">
        {/* Dark Mode / Light Mode Toggle */}
        <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-6 transition-colors">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2">
            <div>
              <h3 className="font-semibold text-lg">Appearance</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Choose your preferred color theme
              </p>
            </div>
            <div className="flex gap-2 ">
              <button
                onClick={toggleDarkMode}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${!darkMode
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-slate-600"
                  }`}
              >
                ☀️ Light
              </button>
              <button
                onClick={toggleDarkMode}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${darkMode
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-slate-600"
                  }`}
              >
                🌙 Dark
              </button>
            </div>
          </div>
        </div>

        {/* Theme Preview */}
        <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-6 transition-colors">
          <h3 className="font-semibold text-lg mb-4">Preview</h3>
          <div
            className={`p-6 rounded-lg transition-colors ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
              }`}
          >
            <p className="text-sm">This is how your dashboard will look</p>
            <p className="text-xs text-gray-500 mt-2">
              {darkMode ? "Dark Mode Enabled" : "Light Mode Enabled"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theme;
