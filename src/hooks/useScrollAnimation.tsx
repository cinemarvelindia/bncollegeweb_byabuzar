
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale';
  threshold?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
}

const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const ref = useRef<HTMLElement>(null);
  const {
    animation = 'fade',
    delay = 0,
    duration = 0.8,
    once = true,
  } = options;
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let tl: gsap.core.Timeline;
    
    // Create initial state based on animation type
    const initialState: gsap.TweenVars = { opacity: 0 };
    
    switch (animation) {
      case 'slide-up':
        initialState.y = 50;
        break;
      case 'slide-left':
        initialState.x = -50;
        break;
      case 'slide-right':
        initialState.x = 50;
        break;
      case 'scale':
        initialState.scale = 0.9;
        break;
      default:
        break;
    }
    
    // Set initial state
    gsap.set(element, initialState);
    
    // Create animation timeline
    tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: once ? 'play none none none' : 'play reverse play reverse',
      },
    });
    
    // Build animation based on type
    const animatedState: gsap.TweenVars = { 
      opacity: 1, 
      duration, 
      delay, 
      ease: 'power3.out' 
    };
    
    // Add type-specific properties
    switch (animation) {
      case 'slide-up':
        animatedState.y = 0;
        break;
      case 'slide-left':
        animatedState.x = 0;
        break;
      case 'slide-right':
        animatedState.x = 0;
        break;
      case 'scale':
        animatedState.scale = 1;
        break;
      default:
        break;
    }
    
    tl.to(element, animatedState);
    
    return () => {
      // Clean up ScrollTrigger when component is unmounted
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [animation, delay, duration, once]);
  
  return ref;
};

export default useScrollAnimation;
