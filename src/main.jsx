import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./context/ThemeContext";
import TodoProvider from "./context/TodoContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <TodoProvider>
          <App />
        </TodoProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
