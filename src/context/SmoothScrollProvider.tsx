
import React, { createContext, useContext, useEffect, useState } from 'react';

interface SmoothScrollContextType {
  isReady: boolean;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({ isReady: false });

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lenis, setLenis] = useState<any>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initSmoothScroll = async () => {
      try {
        // Import Lenis dynamically to avoid SSR issues
        const { default: Lenis } = await import('@studio-freight/lenis');

        const lenisInstance = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical', // Using orientation instead of direction
          wheelMultiplier: 1, // Using wheelMultiplier instead of mouseMultiplier
          smoothWheel: true, // Use smoothWheel instead of smooth
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
        });

        function raf(time: number) {
          lenisInstance.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        setLenis(lenisInstance);
        setIsReady(true);

      } catch (error) {
        console.error("Failed to initialize smooth scroll:", error);
      }
    };

    initSmoothScroll();

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ isReady }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};
