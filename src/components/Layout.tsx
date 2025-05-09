
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

  return (
    <>
      {!isLoaded && <Preloader />}
      
      <div className="flex flex-col min-h-screen">
        {/* Only show ThreeJSBackground on desktop */}
        {!isMobile && <ThreeJSBackground className="hidden lg:block" />}
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main 
            key={location.pathname}
            className="flex-grow relative z-10 pb-16"
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
