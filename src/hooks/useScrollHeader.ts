'use client';

import { useEffect, useRef, useState } from 'react';

export interface ButtonConfig {
  scrolledClass: string;
  defaultClass: string;
}

export const useNavbarScroll = (threshold: number = 100) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const lastScrollY = useRef<number>(0);

  console.log('useNavbarScroll hook initialized with threshold:', threshold);

  useEffect(() => {
    console.log('useEffect running, adding scroll listener');

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log('Scroll detected:', currentScrollY, 'lastScrollY:', lastScrollY.current);

      // Check if scrolled past threshold
      setIsScrolled(currentScrollY > threshold);

      // 🎯 FIX: Solo aplicar hide/show en móvil, mantener navbar visible en escritorio
      const isMobile = window.innerWidth < 1280; // xl breakpoint

      if (isMobile) {
        // Comportamiento original solo en móvil
        if (currentScrollY > lastScrollY.current && currentScrollY > threshold) {
          // Scrolling down - hide navbar
          console.log('Hiding navbar - scrolling down (mobile)');
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current || currentScrollY <= threshold) {
          // Scrolling up OR at top - show navbar immediately
          console.log('Showing navbar - scrolling up or at top (mobile)');
          setIsVisible(true);
        }
      } else {
        // En escritorio, mantener navbar siempre visible
        console.log('Desktop detected - keeping navbar visible');
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      console.log('Removing scroll listener');
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return { isScrolled, isVisible };
};
