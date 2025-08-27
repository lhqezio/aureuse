'use client';

import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [isClient, setIsClient] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Wait for the next tick to ensure we're fully on the client
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  if (!isClient || !isLoaded) {
    return <div className="absolute inset-0 -z-10" />;
  }

  // Use a completely different approach - render a simple animated background instead
  // This avoids all React Three Fiber issues while still providing visual interest
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 animate-pulse" />
      
      {/* Floating orbs using pure CSS */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl animate-float" />
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl animate-float-delayed" />
      <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-purple-400/20 rounded-full blur-xl animate-float-slow" />
      
      {/* Particle effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </div>
  );
};

export default AnimatedBackground;