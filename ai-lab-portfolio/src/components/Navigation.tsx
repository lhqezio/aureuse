'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  
  // Transform values for scroll-based animations
  const navHeight = useTransform(scrollY, [0, 100], [80, 60]);
  const navWidth = useTransform(scrollY, [0, 100], ['100%', '90%']);
  const navOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const navLeft = useTransform(scrollY, [0, 100], ['0%', '5%']);
  const navBorderRadius = useTransform(scrollY, [0, 100], [0, 24]);
  const navMarginTop = useTransform(scrollY, [0, 100], [0, 10]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update border radius on scroll
  useEffect(() => {
    const unsubscribe = navBorderRadius.on('change', (latest) => {
      const navElement = document.querySelector('.ios-nav-dynamic');
      if (navElement) {
        (navElement as HTMLElement).style.borderRadius = `${latest}px`;
      }
    });
    return unsubscribe;
  }, [navBorderRadius]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{
        height: navHeight,
        width: navWidth,
        left: navLeft,
        opacity: navOpacity,
        borderRadius: navBorderRadius,
        marginTop: navMarginTop,
      }}
    >
      <div className="ios-nav-dynamic w-full h-full">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-10">
          {/* Warm, approachable logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <Link 
              href="/" 
              className="text-2xl font-extralight font-serif text-text-dark tracking-wide hover:text-orange-primary transition-all duration-300 relative group"
            >
              <span className="relative z-10">My AI Lab</span>
              {/* Warm, friendly underline */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-primary to-orange-secondary transition-all duration-500 ease-out group-hover:w-full rounded-full opacity-80" />
            </Link>
          </motion.div>

          {/* Human, approachable desktop navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -1, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className={`px-8 py-4 rounded-2xl text-sm font-outfit font-medium transition-all duration-300 relative overflow-hidden group ${
                      isActive(item.href)
                        ? 'text-cream-white'
                        : 'text-text-dark hover:text-orange-primary'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Warm, friendly active state */}
                    {isActive(item.href) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-primary to-orange-secondary rounded-2xl shadow-lg opacity-95" />
                    )}
                    
                    {/* Gentle hover state for non-active items */}
                    {!isActive(item.href) && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-primary/8 to-orange-secondary/8 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out rounded-2xl" />
                        <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-primary/60 to-orange-secondary/60 transition-all duration-500 ease-out group-hover:w-full rounded-full transform -translate-x-1/2" />
                      </>
                    )}
                  </Link>
                  
                  {/* Friendly accent dot */}
                  {isActive(item.href) && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cream-white rounded-full shadow-sm"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Warm, approachable mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-4 text-text-dark hover:text-orange-primary focus:outline-none transition-all duration-300 rounded-2xl overflow-hidden group"
            >
              {/* Gentle background */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-primary/8 to-orange-secondary/8 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out rounded-2xl" />
              
              {/* Warm icon container */}
              <div className="relative z-10 p-2 rounded-xl bg-white/90 backdrop-blur-sm border border-orange-primary/15 shadow-sm">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </div>
              
              {/* Gentle accent line */}
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-primary/60 to-orange-secondary/60 transition-all duration-500 ease-out group-hover:w-full rounded-full transform -translate-x-1/2" />
            </motion.button>
          </div>
        </div>
        
        {/* Warm, approachable mobile navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-10 pb-8 space-y-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                className="relative"
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-8 py-5 rounded-2xl text-base font-outfit font-medium transition-all duration-300 relative overflow-hidden group ${
                    isActive(item.href)
                      ? 'text-cream-white'
                      : 'text-text-dark hover:text-orange-primary'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Warm active state */}
                  {isActive(item.href) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-primary to-orange-secondary rounded-2xl opacity-95" />
                  )}
                  
                  {/* Gentle hover state */}
                  {!isActive(item.href) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-primary/8 to-orange-secondary/8 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out rounded-2xl" />
                  )}
                </Link>
                
                {/* Friendly accent for active mobile items */}
                {isActive(item.href) && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-cream-white rounded-full shadow-sm"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;