import { motion } from 'framer-motion';
import auctionImage from '../assets/images/auction.png'
import hotelImage from '../assets/images/hotel.png'
import shopImage from '../assets/images/shop.png'

const Projects = () => {
  const projects = [
    {
      title: "Shop website",
      description: "A full-stack e-commerce platform built with React and Node.js",
      tech: ["React", "HTML", "CSS", "JS"],
      image: shopImage,  
      link: "https://github.com/Bavy89/CA-react-Bave-Ado/tree/main",
      website: "https://baveadoshop.netlify.app/"
    },
    {
      title: "Book Venues",
      description: "A collaborative task management tool with real-time updates",
      tech: ["React", "HTML", "CSS", "JS","Tailwind"],
      image: hotelImage,
      link: "https://github.com/Bavy89/Holidaze",
      website: "https://holidazebaveado.netlify.app/"
    },
    {
      title: "Auction Website",
      description: "A modern portfolio website with smooth animations",
      tech: ["React", "HTML", "CSS", "JS"],
      image: auctionImage,
      link: "https://github.com/Bavy89/Semester-project-auction",
      website: "https://bave-auction.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                  GitHub
                  </motion.a>
                  <motion.a
                    href={project.website}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Website
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;