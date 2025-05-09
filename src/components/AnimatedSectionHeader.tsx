
import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface AnimatedSectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  underline?: boolean;
}

const AnimatedSectionHeader: React.FC<AnimatedSectionHeaderProps> = ({ 
  title, 
  subtitle, 
  centered = true, 
  underline = true 
}) => {
  const headerRef = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <div 
      className={`mb-12 ${centered ? 'text-center' : ''} reveal`}
      ref={headerRef as React.RefObject<HTMLDivElement>}
    >
      <motion.h2 
        className={`text-3xl md:text-4xl font-bold mb-4 ${underline ? 'heading-underline' : ''} ${centered ? 'mx-auto' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="mt-4 text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      {underline && centered && (
        <motion.div 
          className="w-24 h-1 bg-college-gold mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      )}
    </div>
  );
};

export default AnimatedSectionHeader;
