import { useState } from "react";

function CreateTodoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white dark:bg-slate-800 dark:text-white w-200 p-6 rounded-2xl transition-colors">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold mb-6">Add New Task</h1>
          <p className="text-xl font-semibold" onClick={onClose}>
            Go Back
          </p>
        </div>

        <input
          type="text"
          name="title"
          placeholder="Todo title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border dark:border-slate-600 dark:bg-slate-700 p-3 rounded-lg mb-4 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full border dark:border-slate-600 dark:bg-slate-700 p-3 rounded-lg mb-4 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Priority</option>

          <option value="Extreme">Extreme</option>

          <option value="Moderate">Moderate</option>

          <option value="Low">Low</option>
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border dark:border-slate-600 dark:bg-slate-700 p-3 rounded-lg mb-6 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex gap-4 justify-center">
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border dark:border-slate-600 dark:bg-slate-700 p-3 rounded-lg mb-5 h-32 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="">
            <div className="border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-2xl p-6 bg-gray-50 dark:bg-slate-700 flex flex-col items-center justify-center text-center transition-colors">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Upload an image for this task
              </p>

              <button className="px-3 py-2.5 bg-[#FF6767] text-white rounded-xl shadow-sm hover:shadow-md hover:opacity-90 transition-all duration-200">
                Browse
              </button>
            </div>
          </div>
        </div>

        <div>
          <button className="px-4 py-2 bg-[#FF6767] text-white rounded-lg">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateTodoModal;
