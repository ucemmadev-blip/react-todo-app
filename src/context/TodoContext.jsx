import { createContext, useContext, useState } from "react";
import todosData from "../data/todoData";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState(todosData)

  const addTodo = (newTodo) => {
    setTodos((prev) => [
      ...prev,
      newTodo,
    ])
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

export function useTodo() {
  return useContext(TodoContext);
}

export default TodoProvider;