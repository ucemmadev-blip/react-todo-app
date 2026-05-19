import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTodo } from "../../context/TodoContext";

function CreateTodoModal({ isOpen, onClose }) {
  const [previewImage, setPreviewImage] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { addTodo } = useTodo();

  const imageFile = watch("image");

  useEffect(() => {
    if (imageFile && imageFile[0]) {
      const file = imageFile[0];

      const imageUrl = URL.createObjectURL(file);

      setPreviewImage(imageUrl);
    }
  }, [imageFile]);

  const onSubmit = (data) => {
    addTodo({
      id: Date.now(),
      title: data.title,
      description: data.description,
      status: "pending",
      priority: data.priority,
      date: data.date,
      image: previewImage,
    });
    console.log(data);
    onClose();
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="title"
            {...register("title", { required: "Title is required!" })}
            placeholder="Todo title"
            className="w-full border dark:border-slate-600 dark:bg-slate-700 p-3 rounded-lg mb-4 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}

          <select
            name="priority"
            {...register("priority", { required: "Priority is required!" })}
            className="w-full border dark:border-slate-600 dark:bg-slate-700 p-3 rounded-lg mb-4 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Priority</option>

            <option value="Extreme">Extreme</option>

            <option value="Moderate">Moderate</option>

            <option value="Low">Low</option>
          </select>
          {errors.priority && (
            <p className="text-red-500 text-sm">{errors.priority.message}</p>
          )}

          <input
            type="date"
            name="date"
            {...register("date", { required: "Date is required" })}
            className="w-full border dark:border-slate-600 dark:bg-slate-700 p-3 rounded-lg mb-6 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.priority && (
            <p className="text-red-500 text-sm">{errors.priority.message}</p>
          )}

          <div className="flex gap-4 justify-center">
            <textarea
              name="description"
              {...register("description", {
                required: "Description is required!",
              })}
              placeholder="Description"
              className="w-full border dark:border-slate-600 dark:bg-slate-700 p-3 rounded-lg mb-5 h-32 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
            <div>
              <div className="border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-2xl p-6 bg-gray-50 dark:bg-slate-700 flex flex-col items-center justify-center text-center transition-colors">
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt=""
                    className="w-full h-42"
                    loading="lazy"
                  />
                ) : (
                  <>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      Upload an image for this task
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      {...register("image")}
                      id="imageUpload"
                      className="hidden"
                    />
                    <label
                      htmlFor="imageUpload"
                      className="cursor-pointer px-4 py-2 bg-[#FF6767] text-white rounded-xl shadow-sm hover:shadow-md hover:opacity-90 transition-all duration-200"
                    >
                      Browse
                    </label>
                  </>
                )}
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-[#FF6767] text-white rounded-lg"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTodoModal;
