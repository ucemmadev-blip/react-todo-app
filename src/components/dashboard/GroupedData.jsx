function GroupedData({ todo, onClick }) {
  return (
    <div
      className="border border-gray-200 bg-white  rounded-xl mb-3 p-4"
      onClick={onClick}
    >
      <div className="flex justify-between gap-3 items-start">
        {/* Text section */}
        <div className="flex-1">
          <h2 className="font-semibold  text-lg">{todo.title}</h2>
          <p className="text-xs  line-clamp-2">{todo.description}</p>
        </div>

        {/* Image */}
        <div className="shrink-0">
          <img
            src={todo.images?.[0]}
            alt="todo"
            className="w-16 h-16 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Footer info */}
      <div className="flex gap-2 mt-3 text-xs justify-between">
        <p>Priority: {todo.priority}</p>
        <p>Status: {todo.status}</p>
        <p>Created on: {todo.date}</p>
      </div>
    </div>
  );
}

export default GroupedData;
