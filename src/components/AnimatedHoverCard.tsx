
import React from 'react';
import { motion } from 'framer-motion';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './ui/hover-card';

interface AnimatedHoverCardProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  align?: "center" | "start" | "end";
  side?: "top" | "right" | "bottom" | "left";
}

const AnimatedHoverCard: React.FC<AnimatedHoverCardProps> = ({ 
  trigger, 
  content,
  align = "center",
  side = "top"
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="cursor-pointer">{trigger}</span>
      </HoverCardTrigger>
      <HoverCardContent 
        align={align} 
        side={side}
        className="w-80 p-0 overflow-hidden"
        asChild
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          {content}
        </motion.div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default AnimatedHoverCard;
