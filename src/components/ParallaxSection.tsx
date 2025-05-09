
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

interface ParallaxSectionProps {
  backgroundImage: string;
  children: React.ReactNode;
  height?: string;
  darkOverlay?: boolean;
  speed?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  backgroundImage,
  children,
  height = '500px',
  darkOverlay = true,
  speed = 0.3
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current || !backgroundRef.current) return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(
      backgroundRef.current,
      { y: 0 },
      {
        y: -100 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [speed]);
  
  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ height }}
    >
      <div
        ref={backgroundRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      {darkOverlay && (
        <div className="absolute inset-0 bg-black/50" />
      )}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
