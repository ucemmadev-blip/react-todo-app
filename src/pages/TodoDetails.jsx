import { useNavigate, useParams } from "react-router-dom";
import { useTodo } from "../context/TodoContext";
import { CheckCheck, Ellipsis, Trash2 } from "lucide-react";
import DashboardLayout from "../components/layouts/DashboardLayout";

function TodoDetails() {
  const { id } = useParams();
  const { todos, updateTodoStatus, deleteTodo } = useTodo();
  const navigate = useNavigate();

  const selectedTodo = todos.find((todo) => todo.id === id);

  if (!selectedTodo) {
    return <p>Todo not found</p>;
  }

  function deleteCurrentTodo() {
    deleteTodo(selectedTodo.id);
    navigate("/");
  }

  return (
    <DashboardLayout>
      <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-3 sm:p-5 md:p-6 shadow-sm lg:row-span-2 transition-colors h-full mx-2 sm:mx-4 md:mx-6 lg:mx-10">
        <div className="flex flex-col sm:flex-row justify-end gap-3 mb-4 cursor-pointer">
          {/* <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Todo Details
          </h1> */}
          <p
            className="text-base sm:text-lg md:text-xl font-semibold  hover:text-gray-500 transition-colors "
            onClick={() => navigate("/")}
          >
            Go Back
          </p>
        </div>
        {/* <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6">
          Here you can view the details of your selected todo item.
        </p> */}

        <div className="p-4 sm:p-6 md:p-10 rounded-lg flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 text-xs sm:text-sm md:text-base lg:text-base/8">
            <img
              src={`${selectedTodo.image}`}
              alt=""
              className="w-full h-40 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-lg shrink-0"
            />
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 md:mb-4">
                {selectedTodo.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-base">
                <span className="font-medium">Priority:</span>{" "}
                {selectedTodo.priority}
              </p>
              <p className="text-xs sm:text-sm md:text-base">
                <span className="font-medium">Status:</span>{" "}
                {selectedTodo.status}
              </p>
              <p className="text-xs sm:text-sm md:text-base">
                <span className="font-medium">Date:</span> {selectedTodo.date}
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-sm md:text-base lg:text-lg mt-3 md:mt-5 mb-2">
              Description
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              {selectedTodo.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-end mt-8 md:mt-10">
            <button
              onClick={() => updateTodoStatus(selectedTodo.id, "in-progress")}
              className={`bg-[#FF6767] text-white px-3 sm:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg hover:bg-red-600 transition-colors w-full sm:w-auto ${
                selectedTodo.status === "completed"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#ff6767] text-white hover:bg-red-600"
              }`}
            >
              <Ellipsis />
            </button>
            <button
              onClick={() => updateTodoStatus(selectedTodo.id, "completed")}
              className={`bg-[#FF6767] text-white px-3 sm:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg hover:bg-red-600 transition-colors w-full sm:w-auto ${
                selectedTodo.status === "completed"
                  ? "bg-green-700 cursor-not-allowed"
                  : "bg-[#ff6767] text-white hover:bg-red-600"
              }`}
            >
              <CheckCheck />
            </button>
            <button
              onClick={() => deleteCurrentTodo()}
              className="bg-[#FF6767] text-white px-3 sm:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg hover:bg-red-600 transition-colors w-full sm:w-auto"
            >
              <Trash2 />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default TodoDetails;
