import DashboardLayout from "../components/layouts/DashboardLayout";
import GroupedData from "../components/dashboard/GroupedData";
import { useState } from "react";
import { useTodo } from "../context/TodoContext";
import { CheckCheck, Ellipsis, Trash2 } from "lucide-react";

function Tasks() {
  const { todos, updateTodoStatus, deleteTodo } = useTodo();
  const [selectedTodoId, setSelectedTodoId] = useState();

  const selectedTodo = todos.find((todo) => todo.id === selectedTodoId);

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-150 gap-6">
        <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-5 shadow-sm overflow-y-auto transition-colors flex flex-col">
          <h2 className="mb-5 font-semibold text-md">My Task</h2>

          <div className="flex flex-col gap-3">
            {todos.map((todo) => (
              <GroupedData
                key={todo.id}
                todo={todo}
                onClick={() => setSelectedTodoId(todo.id)}
              />
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-5 shadow-sm overflow-y-auto transition-colors flex flex-col">
          {selectedTodo ? (
            <div className="flex flex-col h-full">
              <div className="flex flex-col sm:flex-row gap-4 text-base/8">
                <img
                  src={`${selectedTodo.image}`}
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

              <div className="flex gap-4 mt-auto justify-end pt-10 ">
                <button
                  onClick={() =>
                    updateTodoStatus(selectedTodo.id, "in-progress")
                  }
                  disabled={selectedTodo.status === "completed"}
                  className={`bg-[#FF6767] text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors ${
                    selectedTodo.status === "completed"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#ff6767] text-white hover:bg-red-600"
                  }`}
                >
                  <Ellipsis />
                </button>
                <button
                  onClick={() => updateTodoStatus(selectedTodo.id, "completed")}
                  className={`bg-[#FF6767] text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors ${
                    selectedTodo.status === "completed"
                      ? "bg-green-700 cursor-not-allowed "
                      : "bg-[#ff6767] text-white hover:bg-red-600"
                  }`}
                >
                  <CheckCheck />
                </button>
                <button
                  onClick={() => deleteTodo(selectedTodo.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-[#FF6767] transition-colors"
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center mt-10">
              Select a task to view details
            </p>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Tasks;
