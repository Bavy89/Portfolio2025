import { motion } from "framer-motion";
import auctionImage from "../assets/images/auction.png";
import hotelImage from "../assets/images/hotel.png";
import shopImage from "../assets/images/shop.png";
import albanianImage from "../assets/images/albanianSoccer.png";
import restaurantImage from "../assets/images/restaurant.png";
import fkTrefellingImage from "../assets/images/trefelling.png";

const Projects = () => {
  const projects = [
    {
      title: "Shop website",
      description: "A web shop website made with React",
      tech: ["React", "HTML", "CSS", "JS", "Tailwind", "vite", "Redux"],
      image: shopImage,
      link: "https://github.com/Bavy89/CA-react-Bave-Ado/tree/main",
      website: "https://baveadoshop.netlify.app/",
    },
    {
      title: "Book Venues",
      description: "Venue booking website made with React",
      tech: ["React", "HTML", "CSS", "JS", "Tailwind", "vite"],
      image: hotelImage,
      link: "https://github.com/Bavy89/Holidaze",
      website: "https://holidazebaveado.netlify.app/",
    },
    {
      title: "Auction Website",
      description: "A modern auction website",
      tech: ["SCSS", "HTML", "CSS", "JS", "Bootstrap"],
      image: auctionImage,
      link: "https://github.com/Bavy89/Semester-project-auction",
      website: "https://bave-auction.netlify.app/",
    },
    {
      title: "Albanian soccer website",
      description: "A WordPress-based project for Albanian national team. Fanpage",
      tech: ["WordPress", "PHP", "CSS", "JS"],
      image: albanianImage,
      website: "https://tifozatkuqezi.com.al",
    },
    {
      title: "Restaurant Project",
      description: "A restaurant website built with HTML, CSS, JS, and Bootstrap.",
      tech: ["HTML", "CSS", "JS", "Bootstrap"],
      image: restaurantImage,
      link: "https://github.com/Bavy89/projectexamblog",
      website: "https://grand-horse-ca0eca.netlify.app",
    },
    {
      title: "FK Trefelling",
      description: "A WordPress-based project for FK Trefelling.",
      tech: ["WordPress", "PHP", "CSS", "JS"],
      image: fkTrefellingImage,
      website: "https://www.fktrefelling.no",
    },
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      viewport={{ once: true, amount: 0.2 }} // Trigger animation once, when 20% of the section is visible
      transition={{ duration: 0.5 }} // Animation duration
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
              transition={{ duration: 0.5 }} // Fixed duration for all cards
              whileHover={{
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", // Shadow effect only
              }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-colors duration-300 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-2">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                    >
                      GitHub
                    </motion.a>
                  )}
                  <motion.a
                    href={project.website}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-6 py-2 bg-green-600 dark:bg-green-500 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors"
                  >
                    Website
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
