
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './FloatingGallery.css';

interface FloatingGalleryProps {
  className?: string;
  images: {
    src: string;
    alt: string;
  }[];
  reverse?: boolean;
}

const FloatingGallery = ({ className, images, reverse = false }: FloatingGalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('FloatingGallery mounted', { images, reverse });
    
    if (!trackRef.current) {
      console.error('Track ref not available');
      return;
    }

    // Animation function
    const animate = () => {
      if (!trackRef.current) return;
      
      // Calculate movement increment based on direction
      const increment = reverse ? 0.5 : -0.5;
      
      // Get current position
      const currentX = parseFloat(trackRef.current.style.transform.replace('translateX(', '').replace('px)', '') || '0');
      
      // Calculate track width
      const trackWidth = trackRef.current.scrollWidth / 2;
      
      // Move the track
      let newPos = currentX + increment;
      
      // Reset if we've gone too far
      if (reverse && newPos > 0) {
        newPos = -trackWidth;
      } else if (!reverse && newPos < -trackWidth) {
        newPos = 0;
      }
      
      // Apply the transform
      trackRef.current.style.transform = `translateX(${newPos}px)`;
      
      // Request next frame
      requestAnimationFrame(animate);
    };
    
    // Clone items for continuous loop
    const originalItems = trackRef.current.innerHTML;
    trackRef.current.innerHTML = originalItems + originalItems;
    
    console.log('Animation starting');
    
    // Start animation
    const animationId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      console.log('FloatingGallery unmounting');
      cancelAnimationFrame(animationId);
    };
  }, [reverse, images]);

  return (
    <div 
      ref={containerRef}
      className={`floating-gallery w-full overflow-hidden ${className || ''}`}
    >
      <div 
        ref={trackRef}
        className="floating-gallery-track flex gap-4"
        style={{ width: 'fit-content' }}
      >
        {images.map((image, index) => (
          <div 
            key={index}
            className="floating-gallery-item flex-none w-64 h-40 md:w-80 md:h-48 relative rounded-lg overflow-hidden shadow-lg"
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm font-medium">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingGallery;
