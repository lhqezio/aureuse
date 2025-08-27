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
    return <div className="fixed inset-0 -z-10" />;
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ height: '100vh' }}>
      {/* Full-page gradient background covering entire height */}
      <div className="absolute inset-0 bg-gradient-to-b from-claude-primary/8 via-claude-secondary/6 via-claude-accent/5 to-claude-primary/8 animate-pulse-slow" />
      
      {/* Large background orbs distributed across full page height */}
      <div className="absolute inset-0 w-full h-full">
        {/* Top section orbs (under navbar) */}
        <div className="absolute top-0 left-1/6 w-96 h-96 bg-claude-primary/8 rounded-full blur-3xl animate-float-gentle" />
        <div className="absolute top-1/6 right-1/4 w-80 h-80 bg-claude-accent/6 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-claude-secondary/7 rounded-full blur-3xl animate-float-slow" />
        
        {/* Middle section orbs */}
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-claude-primary/5 rounded-full blur-3xl animate-breathe" />
        <div className="absolute top-2/3 left-1/4 w-96 h-96 bg-claude-accent/4 rounded-full blur-3xl animate-float-gentle" />
        <div className="absolute top-3/4 right-1/3 w-56 h-56 bg-claude-secondary/6 rounded-full blur-3xl animate-float-slow" />
        
        {/* Bottom section orbs (under footer) */}
        <div className="absolute top-5/6 left-1/8 w-88 h-88 bg-claude-primary/7 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-6/7 right-1/6 w-72 h-72 bg-claude-accent/5 rounded-full blur-3xl animate-float-gentle" />
        <div className="absolute top-7/8 left-1/2 w-64 h-64 bg-claude-secondary/8 rounded-full blur-3xl animate-float-slow" />
        
        {/* Far bottom orbs */}
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-claude-primary/6 rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-claude-accent/7 rounded-full blur-3xl animate-float-gentle" />
        <div className="absolute bottom-0 left-2/3 w-72 h-72 bg-claude-secondary/5 rounded-full blur-3xl animate-float-slow" />
      </div>
      
      {/* Medium floating orbs distributed across full page height */}
      <div className="absolute inset-0 w-full h-full">
        {/* Top section */}
        <div className="absolute top-1/8 left-1/8 w-32 h-32 bg-claude-primary/12 rounded-full blur-xl animate-float-gentle" />
        <div className="absolute top-1/4 right-1/6 w-28 h-28 bg-claude-accent/10 rounded-full blur-xl animate-float-delayed" />
        <div className="absolute top-1/3 left-1/6 w-36 h-36 bg-claude-secondary/11 rounded-full blur-xl animate-float-slow" />
        
        {/* Middle section */}
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-claude-primary/9 rounded-full blur-xl animate-float-gentle" />
        <div className="absolute top-2/3 right-1/8 w-40 h-40 bg-claude-accent/8 rounded-full blur-xl animate-float-slow" />
        <div className="absolute top-3/4 left-1/2 w-20 h-20 bg-claude-secondary/10 rounded-full blur-xl animate-float-delayed" />
        
        {/* Bottom section */}
        <div className="absolute top-5/6 left-0 w-32 h-32 bg-claude-primary/7 rounded-full blur-xl animate-float-gentle" />
        <div className="absolute top-6/7 right-1/2 w-28 h-28 bg-claude-accent/9 rounded-full blur-xl animate-float-slow" />
        <div className="absolute top-7/8 left-1/4 w-36 h-36 bg-claude-secondary/8 rounded-full blur-xl animate-float-delayed" />
      </div>
      
      {/* Small floating orbs distributed across full page height */}
      <div className="absolute inset-0 w-full h-full">
        {/* Top section */}
        <div className="absolute top-1/5 left-1/4 w-16 h-16 bg-claude-primary/15 rounded-full blur-lg animate-float-gentle" />
        <div className="absolute top-2/5 right-1/5 w-12 h-12 bg-claude-accent/13 rounded-full blur-lg animate-float-delayed" />
        <div className="absolute top-3/5 left-2/3 w-20 h-20 bg-claude-secondary/14 rounded-full blur-lg animate-float-slow" />
        
        {/* Middle section */}
        <div className="absolute top-1/2 left-1/6 w-14 h-14 bg-claude-primary/12 rounded-full blur-lg animate-float-gentle" />
        <div className="absolute top-2/3 right-1/3 w-18 h-18 bg-claude-accent/11 rounded-full blur-lg animate-float-delayed" />
        <div className="absolute top-3/4 right-1/6 w-10 h-10 bg-claude-secondary/13 rounded-full blur-lg animate-float-slow" />
        
        {/* Bottom section */}
        <div className="absolute top-5/6 left-1/3 w-16 h-16 bg-claude-primary/14 rounded-full blur-lg animate-float-gentle" />
        <div className="absolute top-6/7 right-1/4 w-12 h-12 bg-claude-accent/12 rounded-full blur-lg animate-float-delayed" />
        <div className="absolute top-7/8 left-1/2 w-20 h-20 bg-claude-secondary/15 rounded-full blur-lg animate-float-slow" />
      </div>
      
      {/* Comprehensive particle effect covering entire page height */}
      <div className="absolute inset-0 w-full h-full">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-claude-accent/25 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      {/* Additional smaller particles for more density across full height */}
      <div className="absolute inset-0 w-full h-full">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-claude-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Full-page grid pattern covering entire height */}
      <div className="absolute inset-0 w-full h-full opacity-3">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(16, 163, 127, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 163, 127, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>
      
      {/* Secondary grid pattern for depth covering entire height */}
      <div className="absolute inset-0 w-full h-full opacity-2">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(52, 211, 153, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(52, 211, 153, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '160px 160px'
        }} />
      </div>
      
      {/* Ambient light effects covering entire height */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 w-full h-full bg-claude-primary/2 rounded-full blur-3xl animate-breathe" />
        <div className="absolute top-0 right-0 w-full h-full bg-claude-accent/1 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-claude-secondary/2 rounded-full blur-3xl animate-float-gentle" />
      </div>
      
      {/* Subtle wave effects covering entire height */}
      <div className="absolute inset-0 w-full h-full opacity-10">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-claude-primary/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-claude-accent/10 to-transparent" />
      </div>
    </div>
  );
};

export default AnimatedBackground;