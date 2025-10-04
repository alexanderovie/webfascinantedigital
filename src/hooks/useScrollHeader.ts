'use client';

import { useEffect, useState } from 'react';

export interface ButtonConfig {
  scrolledClass: string;
  defaultClass: string;
}

export const useNavbarScroll = (threshold: number = 100) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Check if scrolled past threshold
          setIsScrolled(currentScrollY > threshold);

          // Hide/show navbar based on scroll direction with debounce
          if (currentScrollY > lastScrollY && currentScrollY > threshold) {
            // Scrolling down - hide navbar
            console.log('Hiding navbar - scrolling down');
            setIsVisible(false);
          } else if (currentScrollY < lastScrollY || currentScrollY <= threshold) {
            // Scrolling up OR at top - show navbar immediately
            console.log('Showing navbar - scrolling up or at top');
            setIsVisible(true);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return { isScrolled, isVisible };
};
