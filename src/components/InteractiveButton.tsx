
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ButtonProps } from '@/components/ui/button';

interface InteractiveButtonProps extends Omit<ButtonProps, 'variant'> {
  to?: string;
  external?: boolean;
  hoverText?: string;
  variant?: 'default' | 'outline' | 'gold' | 'blue' | 'destructive' | 'secondary' | 'ghost' | 'link';
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

const InteractiveButton: React.FC<InteractiveButtonProps> = ({
  children,
  to,
  external = false,
  hoverText,
  variant = 'default',
  className,
  onHoverStart,
  onHoverEnd,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getButtonClasses = () => {
    let baseClasses = 'relative overflow-hidden interactive';
    
    switch (variant) {
      case 'gold':
        baseClasses += ' bg-college-gold hover:bg-amber-600 text-white';
        break;
      case 'blue':
        baseClasses += ' bg-college-blue hover:bg-college-darkBlue text-white';
        break;
      case 'outline':
        baseClasses += ' border-2 border-college-blue text-college-blue hover:bg-college-blue hover:text-white';
        break;
      default:
        baseClasses += ' bg-primary hover:bg-primary/90';
        break;
    }
    
    return `${baseClasses} ${className || ''}`;
  };
  
  const handleHoverStart = () => {
    setIsHovered(true);
    if (onHoverStart) onHoverStart();
  };
  
  const handleHoverEnd = () => {
    setIsHovered(false);
    if (onHoverEnd) onHoverEnd();
  };
  
  const buttonContent = (
    <>
      <motion.span
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isHovered && hoverText ? -30 : 0,
          opacity: isHovered && hoverText ? 0 : 1
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
      
      {hoverText && (
        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ 
            y: isHovered ? 0 : 30,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.2 }}
        >
          {hoverText}
        </motion.span>
      )}
      
      <motion.span
        className="absolute bottom-0 left-0 h-0.5 bg-white"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? '100%' : '0%' }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
  
  if (to) {
    if (external) {
      return (
        <a 
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className={getButtonClasses()}
          onMouseEnter={handleHoverStart}
          onMouseLeave={handleHoverEnd}
        >
          {buttonContent}
        </a>
      );
    }
    
    return (
      <Link
        to={to}
        className={getButtonClasses()}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        {buttonContent}
      </Link>
    );
  }
  
  // For the built-in Button, pass a valid variant or default to 'default'
  const buttonVariant = (variant === 'gold' || variant === 'blue') 
    ? 'default' 
    : variant;
  
  return (
    <Button
      className={getButtonClasses()}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      variant={buttonVariant as any}
      {...props}
    >
      {buttonContent}
    </Button>
  );
};

export default InteractiveButton;
