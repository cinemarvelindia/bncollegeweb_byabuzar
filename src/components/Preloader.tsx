
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time (replace with actual resource loading if needed)
    const timer = setTimeout(() => {
      setLoading(false);
      
      // Animate content in after preloader disappears
      gsap.to('.content-container', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
      });
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: loading ? 1 : 0,
        pointerEvents: loading ? 'auto' : 'none' 
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center">
        <motion.div 
          className="w-32 h-32 mb-4 relative"
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.2, 1] }}
          transition={{ 
            duration: 1.5, 
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl font-bold text-college-blue">BNC</span>
          </div>
          <motion.div 
            className="absolute inset-0 border-4 border-college-gold rounded-full"
            initial={{ opacity: 0.2, scale: 0.6 }}
            animate={{ 
              opacity: [0.2, 1, 0.2], 
              scale: [0.6, 1.1, 0.6],
              rotate: 360 
            }}
            transition={{ 
              duration: 2,
              ease: "linear",
              repeat: Infinity
            }}
          />
        </motion.div>
        <motion.p 
          className="text-lg font-medium text-college-blue"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;
