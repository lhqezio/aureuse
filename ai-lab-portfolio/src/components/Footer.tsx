'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-2xl font-bold gradient-text mb-4">
            My AI Lab
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} My AI Lab. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;