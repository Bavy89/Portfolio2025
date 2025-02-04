import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation, Hero, Projects, Contact } from "./components";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <AnimatePresence>
      <Navigation />
      <main className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <ScrollToTop /> {/* ✅ Back to Top Button */}
    </AnimatePresence>
  );
}

export default App;
