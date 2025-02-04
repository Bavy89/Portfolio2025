import { motion } from "framer-motion";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle"; // Import the Dark Mode Toggle

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (name) => {
    setActiveLink(name);
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900 backdrop-blur-sm"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            Bave Ado
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ${
                  activeLink === item.name ? "font-bold text-gray-900 dark:text-white" : ""
                }`}
                onClick={() => handleLinkClick(item.name)}
              >
                {item.name}
              </motion.a>
            ))}
            <DarkModeToggle /> {/* ✅ Animated Dark Mode Toggle */}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-white hover:text-gray-900"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          className={`${isOpen ? "block" : "hidden"} md:hidden`}
        >
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className={`block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ${
                  activeLink === item.name ? "font-bold text-gray-900 dark:text-white" : ""
                }`}
                onClick={() => handleLinkClick(item.name)}
              >
                {item.name}
              </motion.a>
            ))}
            <div className="flex justify-center p-3">
              <DarkModeToggle /> {/* ✅ Dark Mode Toggle in Mobile Menu */}
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Navigation;
