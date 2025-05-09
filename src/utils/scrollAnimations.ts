import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const initScrollAnimations = () => {
  // Basic reveal animations
  gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
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

  // Reveal from left
  gsap.utils.toArray<HTMLElement>('.reveal-left').forEach((element) => {
    gsap.fromTo(
      element,
      { x: -100, opacity: 0 },
      {
        x: 0,
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

  // Reveal from right
  gsap.utils.toArray<HTMLElement>('.reveal-right').forEach((element) => {
    gsap.fromTo(
      element,
      { x: 100, opacity: 0 },
      {
        x: 0,
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

  // Staggered container animations
  gsap.utils.toArray<HTMLElement>('.stagger-container').forEach((container) => {
    const items = container.querySelectorAll('.stagger-item');
    
    gsap.fromTo(
      items,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // Parallax sections
  gsap.utils.toArray<HTMLElement>('.parallax-section').forEach((section) => {
    const parallaxImage = section.querySelector('.parallax-image');
    
    if (parallaxImage) {
      gsap.fromTo(
        parallaxImage,
        { y: 0 },
        {
          y: 100,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }
  });

  // Set up sticky sections
  gsap.utils.toArray<HTMLElement>('.sticky-section').forEach((section) => {
    const content = section.querySelector('.sticky-content');
    const items = section.querySelectorAll('.sticky-item');
    
    if (content && items.length) {
      gsap.to(content, {
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${section.offsetHeight}`,
          pin: true,
          pinSpacing: true,
        },
      });
      
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: index === 0 ? 1 : 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }
  });

  // Custom cursor setup remains the same
  const setupCustomCursor = () => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
    
    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
    });
  };
  
  // Only setup custom cursor on non-touch devices
  if (!('ontouchstart' in window)) {
    setupCustomCursor();
  }
};

// Ticker animation setup
export const initTickerAnimation = () => {
  const tickerElements = document.querySelectorAll('.ticker');
  
  tickerElements.forEach(ticker => {
    const tickerContent = ticker.querySelector('.ticker-content');
    if (tickerContent) {
      // Clone the content for infinite loop
      const clone = tickerContent.cloneNode(true);
      ticker.appendChild(clone);
      
      // Calculate animation duration based on content width
      const tickerWidth = (tickerContent as HTMLElement).offsetWidth;
      const duration = tickerWidth / 100; // Speed of ticker
      
      // Set up GSAP animation
      gsap.to('.ticker-content', {
        x: -tickerWidth,
        ease: 'none',
        repeat: -1,
        duration: duration,
      });
    }
  });
};

// Initialize carousel navigation
export const initCarousels = () => {
  const carousels = document.querySelectorAll('.carousel');
  
  carousels.forEach(carousel => {
    const items = carousel.querySelectorAll('.carousel-item');
    const nextBtn = carousel.querySelector('.carousel-next');
    const prevBtn = carousel.querySelector('.carousel-prev');
    
    if (items.length && nextBtn && prevBtn) {
      let currentIndex = 0;
      
      const showItem = (index: number) => {
        items.forEach((item, i) => {
          gsap.to(item, {
            x: `${(i - index) * 100}%`,
            duration: 0.5,
            ease: 'power2.out',
          });
        });
      };
      
      // Initial display
      showItem(0);
      
      // Event listeners for buttons
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
      });
      
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
      });
    }
  });
};

// Create a hook for scroll transitions
export const scrollToSection = (targetId: string) => {
  const target = document.querySelector(targetId);
  if (target) {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: targetId, offsetY: 80 },
      ease: 'power3.inOut',
    });
  }
};
