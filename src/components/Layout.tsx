
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
    }, 1000); // Reduced loading time for better user experience
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (isLoaded && isReady) {
      // Initialize GSAP animations for common elements
      gsap.utils.toArray('.reveal-gsap').forEach((element: any) => {
        if (!element) return;
        
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

  // Add SEO metadata for B.N. College
  useEffect(() => {
    const title = document.querySelector('title');
    if (title) {
      title.textContent = "B.N. College Bhagalpur - Official Website";
    }
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.getElementsByTagName('head')[0].appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'B.N. College Bhagalpur - Established in 1889, one of the oldest and premier institutions of higher education in Bihar offering UG, PG programs in Science, Arts & Commerce.');
    
    // Add proper viewport meta tag for all devices
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';
      document.getElementsByTagName('head')[0].appendChild(meta);
    } else {
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
    }
  }, []);
  
  // Fix for desktop responsiveness by adding overflow handling to the global styles
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      html, body {
        overflow-x: hidden;
        width: 100%;
        max-width: 100vw;
      }
      
      * {
        box-sizing: border-box;
      }
      
      @media (min-width: 1024px) {
        .container {
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
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
