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

  console.log('useNavbarScroll hook initialized with threshold:', threshold);

  useEffect(() => {
    console.log('useEffect running, adding scroll listener');

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log('Scroll detected:', currentScrollY, 'lastScrollY:', lastScrollY);

      // Check if scrolled past threshold
      setIsScrolled(currentScrollY > threshold);

      // Hide/show navbar based on scroll direction
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
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      console.log('Removing scroll listener');
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, lastScrollY]);

  return { isScrolled, isVisible };
};
