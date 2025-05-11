
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { AnimatePresence, motion } from 'framer-motion';
import Preloader from './Preloader';
import ThreeJSBackground from './ThreeJSBackground';
import { useSmoothScroll } from '../context/SmoothScrollProvider';
import { useIsMobile } from '../hooks/use-mobile';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

const Layout = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const { isReady } = useSmoothScroll();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Set a timer to simulate loading time (can be removed in production)
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (isLoaded && isReady) {
      // Initialize GSAP animations for common elements
      gsap.utils.toArray('.reveal-gsap').forEach((element: any) => {
        gsap.fromTo(
          element,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }
  }, [isLoaded, isReady, location.pathname]);

  // Ensure proper viewport settings for mobile
  useEffect(() => {
    const setViewportProperties = () => {
      const viewport = document.querySelector('meta[name=viewport]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
      }
    };
    
    setViewportProperties();
    window.addEventListener('resize', setViewportProperties);
    
    return () => {
      window.removeEventListener('resize', setViewportProperties);
    };
  }, []);

  // Fix for desktop responsiveness
  useEffect(() => {
    const handleResize = () => {
      // Force reflow on resize to fix any display issues
      document.body.style.display = 'none';
      document.body.offsetHeight; // Force reflow
      document.body.style.display = '';
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {!isLoaded && <Preloader />}
      
      <div className="flex flex-col min-h-screen w-full max-w-full overflow-x-hidden">
        {/* Only show ThreeJSBackground on desktop */}
        {!isMobile && <ThreeJSBackground className="hidden lg:block" />}
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main 
            key={location.pathname}
            className="flex-grow relative z-10 pb-16 w-full max-w-full overflow-x-hidden"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
