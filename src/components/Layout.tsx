
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { AnimatePresence, motion } from 'framer-motion';
import Preloader from './Preloader';
import ThreeJSBackground from './ThreeJSBackground';
import { SmoothScrollProvider } from '../context/SmoothScrollProvider';
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
  
  useEffect(() => {
    // Set a timer to simulate loading time (can be removed in production)
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (isLoaded) {
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
  }, [isLoaded, location.pathname]);

  return (
    <SmoothScrollProvider>
      {!isLoaded && <Preloader />}
      
      <div className="flex flex-col min-h-screen">
        <ThreeJSBackground className="hidden lg:block" />
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main 
            key={location.pathname}
            className="flex-grow relative z-10"
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
    </SmoothScrollProvider>
  );
};

export default Layout;
