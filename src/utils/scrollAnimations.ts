
export const initScrollAnimations = () => {
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
};
