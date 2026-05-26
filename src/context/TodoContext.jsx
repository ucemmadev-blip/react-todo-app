import { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

import { useAuth } from "./AuthContext";
import todosData from "../data/todoData";
import { doc, updateDoc } from "firebase/firestore";

// import { add } from "firebase/firestore/pipelines";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const { user } = useAuth();

  const completedTodos = todos.filter((t) => t.status === "completed");

  const pendingTodos = todos.filter((t) => t.status !== "completed");

  const inProgressTodos = todos.filter((t) => t.status === "in-progress");

  const notStartedTodos = todos.filter((t) => t.status === "pending");

  const totalTodos = todos.length;

  const completedPercentage =
    totalTodos === 0
      ? 0
      : Math.round((completedTodos.length / totalTodos) * 100);

  const inProgressPercentage =
    totalTodos === 0
      ? 0
      : Math.round((inProgressTodos.length / totalTodos) * 100);

  const notStartedPercentage =
    totalTodos === 0
      ? 0
      : Math.round((notStartedTodos.length / totalTodos) * 100);

  const updateTodoStatus = async (todoId, newStatus) => {
    const currentTodo = todos.find((todo) => todo.id === todoId);

    if (!currentTodo) return;

    if (currentTodo.status === "completed") return;

    try {
      const todoRef = doc(db, "todos", todoId);
      await updateDoc(todoRef, { status: newStatus });

      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === todoId
            ? {
                ...todo,
                status: newStatus,
              }
            : todo,
        ),
      );
    } catch (error) {
      console.log("Error updating todo status:", error);
    }
  };

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

  const deleteTodo = async (todoId) => {
    try {
      await deleteDoc(doc(db, "todos", todoId));
      setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        fetchTodos,
        addTodo,
        deleteTodo,
        completedTodos,
        pendingTodos,
        fetchTodos,
        addTodo,
        completedTodos,
        pendingTodos,
        updateTodoStatus,
        notStartedTodos,
        inProgressTodos,
        completedPercentage,
        inProgressPercentage,
        notStartedPercentage,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  return useContext(TodoContext);
}

export default TodoProvider;
