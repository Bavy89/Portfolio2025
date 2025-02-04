import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(false);

  // Handle scrolling
  useEffect(() => {
    const updateScroll = () => {
      setScrollY(window.scrollY);
      setVisible(window.scrollY > 200); // Show button after 200px scroll
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calculate progress for circular indicator
  const scrollProgress = Math.min(100, (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed bottom-6 right-6 w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 text-black dark:text-white rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    >
      {/* Circular Progress Background */}
      <svg className="absolute w-16 h-16" viewBox="0 0 100 100">
        <circle
          className="text-gray-300 dark:text-gray-600"
          strokeWidth="6"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
        />
        <motion.circle
          className="text-blue-500 dark:text-blue-400"
          strokeWidth="6"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
          strokeDasharray="282.74" /* 2 * PI * r */
          strokeDashoffset={(1 - scrollProgress / 100) * 282.74}
          animate={{ strokeDashoffset: (1 - scrollProgress / 100) * 282.74 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          strokeLinecap="round"
        />
      </svg>

      {/* Upward Arch Icon (⌒) */}
      <span className="relative text-4xl font-bold">⌒</span>
    </motion.button>
  );
};

export default ScrollToTop;
