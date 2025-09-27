import { RefObject, useState, useEffect } from 'react';

// Lazy load GSAP to avoid blocking render
const loadGSAP = async () => {
  const [{ useGSAP }, { gsap }] = await Promise.all([
    import('@gsap/react'),
    import('gsap')
  ]);
  return { useGSAP, gsap };
};

interface UseLineExpandAnimationProps {
  refs: RefObject<HTMLDivElement | null>[];
  delay?: number;
  duration?: number;
}

export const useLineExpandAnimation = ({ refs, delay = 0.7, duration = 0.8 }: UseLineExpandAnimationProps) => {
  const [gsapLoaded, setGsapLoaded] = useState(false);
  
  useEffect(() => {
    loadGSAP().then(() => setGsapLoaded(true));
  }, []);

  useEffect(() => {
    if (!gsapLoaded) return;
    
    // Wait for next tick to ensure refs are available
    const timer = setTimeout(() => {
      const lines = refs.map((ref) => ref.current).filter(Boolean) as HTMLDivElement[];

      if (lines.length > 0) {
        lines.forEach((line) => {
          // Use CSS transitions as fallback for better performance
          line.style.transition = `height ${duration}s ease-out`;
          line.style.height = '100%';
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [gsapLoaded, refs, delay, duration]);
};
