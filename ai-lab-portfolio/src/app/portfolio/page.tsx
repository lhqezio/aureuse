'use client';

import { motion, Variants } from 'framer-motion';

const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Image Recognition",
      description: "Advanced computer vision system using deep learning for real-time object detection and classification.",
      category: "Computer Vision",
      image: "/api/placeholder/400/300",
    },
    {
      id: 2,
      title: "Natural Language Processing Engine",
      description: "Sophisticated NLP system capable of understanding context and generating human-like responses.",
      category: "NLP",
      image: "/api/placeholder/400/300",
    },
    {
      id: 3,
      title: "Predictive Analytics Platform",
      description: "Machine learning platform for forecasting and trend analysis in complex datasets.",
      category: "Machine Learning",
      image: "/api/placeholder/400/300",
    },
    {
      id: 4,
      title: "Autonomous Robotics System",
      description: "AI-driven robotics platform with advanced navigation and decision-making capabilities.",
      category: "Robotics",
      image: "/api/placeholder/400/300",
    },
    {
      id: 5,
      title: "Quantum Computing Interface",
      description: "Innovative interface for quantum computing operations and algorithm optimization.",
      category: "Quantum Computing",
      image: "/api/placeholder/400/300",
    },
    {
      id: 6,
      title: "Edge AI Framework",
      description: "Lightweight AI framework optimized for edge devices and IoT applications.",
      category: "Edge Computing",
      image: "/api/placeholder/400/300",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our cutting-edge AI research and innovative projects that are shaping the future of technology.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-charcoal rounded-2xl overflow-hidden border border-gray-800 hover:border-neon-blue/50 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-gray-500 text-sm">Project Screenshot</div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-neon-blue/10 text-neon-blue text-xs font-medium rounded-full border border-neon-blue/20">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center text-neon-blue hover:text-neon-cyan text-sm font-medium transition-colors duration-300"
                >
                  Learn More
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-gray-300 text-lg mb-6">
            Interested in collaborating on a project?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-neon-blue text-black font-semibold rounded-full text-lg transition-all duration-300 hover:bg-neon-cyan"
          >
            Get in Touch
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPage;