import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MouseGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if device has hover capability (desktop)
    const mediaQuery = window.matchMedia('(hover: hover)');
    setIsDesktop(mediaQuery.matches);

    const handleDeviceChange = (e) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener('change', handleDeviceChange);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    // Check for dark mode class on document root
    const updateDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    // Initial check
    updateDarkMode();

    // Create observer to watch for class changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          updateDarkMode();
        }
      });
    });

    // Start observing
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      mediaQuery.removeEventListener('change', handleDeviceChange);
    };
  }, []);

  // Only render if both dark mode is enabled and we're on desktop
  if (!isDarkMode || !isDesktop) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-full h-full z-50"
      style={{ position: 'fixed' }}
    >
      <motion.div
        className="pointer-events-none fixed bg-blue-400/20 rounded-full blur-3xl"
        style={{
          width: 400,
          height: 400,
          top: 0,
          left: 0,
        }}
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 150,
          mass: 0.3,
        }}
      />
    </motion.div>
  );
};

export default MouseGlow;