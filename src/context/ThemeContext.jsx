import { createContext, useEffect, useContext, useState } from "react"

const ThemeContext = createContext()

function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // toggle dark mode 
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}

export default ThemeProvider
