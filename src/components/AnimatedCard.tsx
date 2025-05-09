
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  hoverEffect?: 'zoom' | 'rotate' | 'glow' | 'none';
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  delay = 0, 
  className = '',
  hoverEffect = 'zoom' 
}) => {
  // Different hover animations based on the effect prop
  const getHoverAnimation = () => {
    switch(hoverEffect) {
      case 'zoom':
        return { scale: 1.05 };
      case 'rotate':
        return { rotate: 2, y: -5 };
      case 'glow':
        return { boxShadow: "0 0 15px rgba(212, 175, 55, 0.5)", y: -5 };
      case 'none':
      default:
        return {};
    }
  };

  return (
    <motion.div 
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={getHoverAnimation()}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
