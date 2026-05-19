import DashboardLayout from "../components/layouts/DashboardLayout";

import todos from "../data/todo";
import GroupedData from "../components/dashboard/GroupedData";
import { useState } from "react";

function Tasks() {
  const [selectedTodo, setSelectedTodo] = useState();

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-150 gap-6">
        <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-5 shadow-sm overflow-y-auto transition-colors">
          <h2 className="mb-5 font-semibold text-md">My Task</h2>

          <div className="flex flex-col gap-3">
            {todos.slice(0, 3).map((todo) => (
              <GroupedData
                key={todo.id}
                todo={todo}
                onClick={() => setSelectedTodo(todo)}
              />
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-5 shadow-sm overflow-y-auto transition-colors">
          {selectedTodo ? (
            <div>
              <div className="flex flex-col sm:flex-row gap-4 text-base/8">
                <img
                  src={`${selectedTodo.images}`}
                  alt=""
                  className="w-full sm:w-40 sm:h-40 object-cover rounded-lg"
                />
                <div>
                  <h2 className="font-semibold text-xl mb-4 sm:mb-8">
                    {selectedTodo.title}
                  </h2>
                  <p>Priority: {selectedTodo.priority}</p>
                  <p>Status: {selectedTodo.status}</p>
                  <p>Date: {selectedTodo.date}</p>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-sm mt-5 mb-2">Description</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedTodo.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <button className="bg-[#FF6767] text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                  Mark as In Progress
                </button>
                <button className="bg-[#FF6767] text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                  Mark as Completed
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center mt-10">Select a task to view details</p>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Tasks;
