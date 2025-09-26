'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import useGTM from '@/hooks/useGTM';

interface GTMProviderProps {
  children: React.ReactNode;
}

export default function GTMProvider({ children }: GTMProviderProps) {
  const pathname = usePathname();
  const { trackPageView } = useGTM();

  useEffect(() => {
    // Track page view on route change
    trackPageView(pathname);
  }, [pathname, trackPageView]);

  return <>{children}</>;
}
