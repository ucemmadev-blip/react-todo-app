import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";

import { db } from "../firebase/firebase";

import { useAuth } from "./AuthContext";
import todosData from "../data/todoData";
// import { add } from "firebase/firestore/pipelines";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const { user } = useAuth();

  const completedTodos = todos.filter((t) => t.status === "completed");

  const pendingTodos = todos.filter((t) => t.status !== "completed");

  const fetchTodos = async () => {
    if (!user) return;

    try {
      const q = query(collection(db, "todos"), where("userId", "==", user.uid));
      const querySnapshot = await getDocs(q);

      const todoList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(todoList);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const addTodo = async (newTodo) => {
    try {
      const docRef = await addDoc(collection(db, "todos"), newTodo);

      setTodos((prev) => [
        ...prev,
        {
          id: docRef.id,
          ...newTodo,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchTodos();
    }
  }, [user]);

  return (
    <TodoContext.Provider
      value={{ todos, fetchTodos, addTodo, completedTodos, pendingTodos }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  return useContext(TodoContext);
}

export default TodoProvider;
