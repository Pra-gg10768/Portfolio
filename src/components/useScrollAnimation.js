import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.hero-section, .section, .about-section'); // Target sections with animations

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate'); // Remove animation class when out of view
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
};

export default useScrollAnimation;
