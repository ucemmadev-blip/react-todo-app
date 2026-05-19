import GroupedData from "./GroupedData";
import CircularProgress from "./CircularProgress";
import CreateTodoModal from "../modals/CreateTodoModal";
import { useState } from "react";
import { useTodo } from "../../context/TodoContext";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { todos } = useTodo();

  const completedTodos = todos.filter((todo) => todo.status === "completed");
  return (
    <div>
      <h1 className="font-medium text-2xl">Welcome back, John Doe👋</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4 lg:h-137.5 mt-6">
        <div
          className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-5 shadow-sm lg:row-span-2 transition-colors"
          id="todo-container"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-sm">To-Do</h3>
            <button className="text-xs text-blue-500 hover:underline" onClick={() => setIsModalOpen(true)}>
              Add Todo
            </button>
            {isModalOpen && (
              <CreateTodoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
            )}
          </div>
          <div className="flex flex-col gap-3">
            {todos.slice(0, 3).map((todo) => (
              <GroupedData key={todo.id} todo={todo} />
            ))}
          </div>
        </div>

        <div
          className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-5 shadow-sm flex flex-col transition-colors"
          id="task-status"
        >
          <p className="font-medium text-sm mb-6">Task Status</p>
          <div className="flex flex-wrap justify-around items-start flex-1 gap-4">
            <CircularProgress
              percentage={84}
              label="Completed"
              color="#22c55e"
            />
            <CircularProgress
              percentage={46}
              label="In Progress"
              color="#3b82f6"
            />
            <CircularProgress
              percentage={13}
              label="Not Started"
              color="#ef4444"
            />
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-5 shadow-sm transition-colors">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-medium text-sm">Completed Tasks</h3>
            <button className="text-xs text-blue-500 hover:underline">View More</button>
          </div>
          <div className="flex flex-col gap-3">
            {completedTodos.slice(0, 1).map((todo) => (
              <GroupedData key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
