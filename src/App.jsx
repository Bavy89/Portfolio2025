import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation, Hero, Projects, Contact } from "./components";
import ScrollToTop from "./components/ScrollToTop";
import MouseGlow from './components/MouseGlow';

function App() {
  return (
    <AnimatePresence>
      <MouseGlow />
      <Navigation />
      <main className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <ScrollToTop />
    </AnimatePresence>
  );
}

export default App;