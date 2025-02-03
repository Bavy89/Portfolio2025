import './App.css'
import { motion, AnimatePresence } from 'framer-motion'
import { Navigation, Hero, Projects, Contact } from './components'

function App() {
  return (
    <AnimatePresence>
      <Navigation />
      <main className="bg-gray-50">
        <Hero />
        <Projects />
        <Contact />
      </main>
    </AnimatePresence>
  )
}

export default App