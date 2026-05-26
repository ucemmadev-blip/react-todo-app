import { useNavigate } from "react-router-dom";

function GroupedData({ todo, onClick }) {
  return (
    <div
      className="border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl mb-3 p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
      onClick={onClick}
    >
      <div className="flex justify-between gap-3 items-start">
        {/* Text section */}
        <div className="flex-1">
          <h2 className="font-semibold  text-lg">{todo.title}</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
            {todo.description}
          </p>
        </div>

        {/* Image */}
        <div className="shrink-0">
          <img
            src={todo.image}
            alt="todo"
            className="w-16 h-16 object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </div>

      {/* Footer info */}
      <div className="flex gap-2 mt-3 text-xs justify-between text-gray-500 dark:text-gray-400">
        <p>{todo.priority}</p>
        <p>{todo.status}</p>
        <p>{todo.date}</p>
      </div>
    </div>
  );
}

export default GroupedData;
