function Navbar({ onMenuClick }) {
  const formattedDate = new Date().toLocaleDateString("en-GB");
  const currentDay = new Date().toLocaleString("en-US", {
    weekday: "long",
  });

  return (
    <nav className="shadow-md p-2.5 bg-white dark:bg-slate-800 dark:text-gray-100 transition-colors z-20">
      <div className="flex justify-between items-center mx-2 md:mx-10 my-2">
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            onClick={onMenuClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="logo">
            <h1 className="font-semibold text-2xl md:text-4xl dark:text-white">
              Dash<span className="text-[#FF6767]">board</span>
            </h1>
          </div>
        </div>

        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search your task here..."
            className="w-2xl border dark:border-slate-600 rounded-md py-2.5 px-2 bg-transparent dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="date hidden sm:block text-right">
          <p className="font-medium text-sm">{currentDay}</p>
          <p className="font-medium text-sm text-[#3ABEFF]">{formattedDate}</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
