function CircularProgress({ percentage, label, color }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-24 h-24">
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            className="stroke-gray-200 dark:stroke-slate-700 transition-colors"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeDasharray={`${2 * Math.PI * 45}`}
            strokeDashoffset={`${2 * Math.PI * 45 * (1 - percentage / 100)}`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold">{percentage}%</span>
        </div>
      </div>
      <div className="text-center mt-10">
        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 transition-colors">{label}</p>
      </div>
    </div>
  );
}

export default CircularProgress;
