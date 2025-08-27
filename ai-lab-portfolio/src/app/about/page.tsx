'use client';

import { motion, Variants } from 'framer-motion';

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Lead AI Researcher",
      bio: "Pioneering research in natural language processing and machine learning with over 10 years of experience in the field.",
      avatar: "/api/placeholder/150/150",
    },
    {
      id: 2,
      name: "Alex Rodriguez",
      role: "Computer Vision Specialist",
      bio: "Expert in deep learning and computer vision, specializing in real-time object detection and autonomous systems.",
      avatar: "/api/placeholder/150/150",
    },
    {
      id: 3,
      name: "Dr. Maya Patel",
      role: "Quantum AI Researcher",
      bio: "Leading research in quantum machine learning and quantum computing applications for AI optimization.",
      avatar: "/api/placeholder/150/150",
    },
    {
      id: 4,
      name: "James Kim",
      role: "Robotics Engineer",
      bio: "Specializing in AI-driven robotics and autonomous navigation systems for industrial applications.",
      avatar: "/api/placeholder/150/150",
    },
    {
      id: 5,
      name: "Dr. Elena Vasquez",
      role: "Edge AI Specialist",
      bio: "Expert in optimizing AI models for edge devices and developing lightweight neural networks.",
      avatar: "/api/placeholder/150/150",
    },
    {
      id: 6,
      name: "Marcus Thompson",
      role: "Data Scientist",
      bio: "Specializing in predictive analytics and large-scale data processing for machine learning applications.",
      avatar: "/api/placeholder/150/150",
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
            About Our Lab
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We are a team of passionate researchers and engineers dedicated to advancing the frontiers of artificial intelligence.
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-400 text-lg leading-relaxed">
              Our mission is to develop lightweight, efficient AI solutions that can be deployed anywhere, 
              from edge devices to cloud platforms. We believe in making AI accessible, practical, and 
              beneficial for everyone.
            </p>
          </div>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-charcoal rounded-2xl p-6 border border-gray-800 hover:border-neon-blue/50 transition-all duration-300 group"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center">
                    <div className="text-gray-500 text-xs text-center">Avatar</div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">
                  {member.name}
                </h3>
                
                <p className="text-neon-blue text-sm font-medium mb-4">
                  {member.role}
                </p>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue/5 to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Lab Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">50+</div>
            <div className="text-gray-400">Research Papers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">15+</div>
            <div className="text-gray-400">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">100+</div>
            <div className="text-gray-400">Citations</div>
          </div>
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
            Want to join our research team?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-neon-blue text-black font-semibold rounded-full text-lg transition-all duration-300 hover:bg-neon-cyan"
          >
            Contact Us
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

export default AboutPage;