
export const initScrollAnimations = () => {
  // Observer for basic reveal animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  const animateOnScrollElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  
  animateOnScrollElements.forEach(element => {
    observer.observe(element);
  });

  // For staggered animations
  const staggerContainers = document.querySelectorAll('.stagger-container');
  
  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('stagger-visible');
      }
    });
  }, observerOptions);

  staggerContainers.forEach(container => {
    staggerObserver.observe(container);
  });

  // For sticky sections
  const stickySections = document.querySelectorAll('.sticky-section');
  
  // Custom cursor setup
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
      const clone = tickerContent.cloneNode(true);
      ticker.appendChild(clone);
      
      const tickerWidth = (tickerContent as HTMLElement).offsetWidth;
      const duration = tickerWidth / 100; // Speed of ticker
      
      const animation = `ticker ${duration}s linear infinite`;
      (tickerContent as HTMLElement).style.animation = animation;
      (clone as HTMLElement).style.animation = animation;
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
          (item as HTMLElement).style.transform = `translateX(${100 * (i - index)}%)`;
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
