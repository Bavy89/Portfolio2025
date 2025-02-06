import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const DarkModeToggle = () => {
  
  const storedTheme = localStorage.getItem("theme") || "light";
  const [darkMode, setDarkMode] = useState(storedTheme === "dark");

  useEffect(() => {
    const root = document.documentElement; 
    
    if (darkMode) {
      root.setAttribute("data-theme", "dark"); 
      root.classList.add("dark"); 
      localStorage.setItem("theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      root.classList.remove("dark"); 
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-14 h-8 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center p-1 shadow-md"
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className={`absolute left-1 flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 ${
          darkMode ? "translate-x-6 bg-yellow-500" : "bg-gray-400"
        }`}
        animate={{ rotate: darkMode ? 360 : 0, scale: darkMode ? 1.2 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {darkMode ? (
          <SunIcon className="w-4 h-4 text-white" />
        ) : (
          <MoonIcon className="w-4 h-4 text-white" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle;
