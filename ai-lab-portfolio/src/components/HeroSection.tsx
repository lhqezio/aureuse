'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
        duration: 0.4,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants: Variants = {
    hover: {
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-20"
        >
          {/* Enhanced headline with signature elements */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="relative">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight leading-[0.9] text-balance font-serif text-text-dark tracking-tight">
                My AI Lab
              </h1>
              {/* Signature accent line with shimmer effect */}
              <div className="accent-line w-40 mx-auto mt-6" />
              {/* Signature accent dots */}
              <div className="flex justify-center space-x-3 mt-4">
                <div className="accent-dot" />
                <div className="accent-dot" />
                <div className="accent-dot" />
              </div>
            </div>
          </motion.div>

          {/* Professional subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl text-text-dark-secondary max-w-4xl mx-auto leading-tight text-balance font-outfit font-light tracking-tight"
          >
            <span className="text-text-dark font-normal">Pioneering the future</span> of artificial intelligence through{' '}
            <span className="text-orange-primary font-normal">enterprise-grade solutions</span>
            {' '}that <span className="text-text-dark font-normal">redefine industry standards</span>
          </motion.p>

          {/* Enhanced CTA Buttons with signature style */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-24"
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/portfolio"
                className="signature-button inline-flex items-center px-12 py-6 text-xl rounded-2xl shadow-signature hover:shadow-signature-hover"
              >
                <span className="font-outfit tracking-wide">View Projects</span>
                <svg
                  className="ml-3 w-5 h-5"
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
              </Link>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/contact"
                className="ios-button inline-flex items-center px-12 py-6 text-orange-primary font-medium text-xl transition-all duration-300 hover:bg-orange-primary/5 border-2 border-orange-primary/40 hover:border-orange-primary/60 rounded-2xl hover:shadow-lg font-outfit tracking-wide"
              >
                <span>Contact Us</span>
                <svg
                  className="ml-3 w-5 h-5"
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
              </Link>
            </motion.div>
          </motion.div>

          {/* Enhanced feature highlights with signature cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-32"
          >
            {[
              { 
                title: 'Enterprise Intelligence', 
                desc: 'State-of-the-art AI algorithms with enterprise-grade scalability and performance'
              },
              { 
                title: 'Lightning Performance', 
                desc: 'Optimized for real-time enterprise applications with 99.9% uptime guarantee'
              },
              { 
                title: 'Bank-Grade Security', 
                desc: 'SOC 2 Type II compliant with enterprise security protocols and encryption'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="ios-card feature-card p-8 text-center group hover:ios-card-hover transition-all duration-500 cursor-pointer"
                whileHover={{ y: -4 }}
              >
                <h3 className="text-xl font-light text-text-dark mb-4 font-outfit tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-text-dark-secondary text-base font-outfit leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced scroll indicator with signature style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-orange-primary/30 rounded-full flex justify-center relative overflow-hidden">
              <div className="w-1 h-3 bg-orange-primary/50 rounded-full mt-2" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-primary/20 to-transparent animate-pulse" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;