'use client';

import { useMobileMenuContext } from '@/context/MobileMenuContext';
import { cn } from '@/utils/cn';
import mainLogo from '@public/images/shared/main-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
// import AboutUsMenu from './mobile-menu/AboutUsMenu'; // Removed - About is now direct link
// import BlogMenu from './mobile-menu/BlogMenu'; // Removed - Blog is now direct link
// import HomeMenu from './mobile-menu/HomeMenu'; // Removed - Home is now direct link
import ServicesMenu from './mobile-menu/ServicesMenu';

const MobileMenu = () => {
  const { isOpen, closeMenu } = useMobileMenuContext();
  const sidebarRef = useRef<HTMLElement>(null);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, closeMenu]);
  return (
    <aside
      ref={sidebarRef}
      className={cn(
        'dark:bg-background-7 scroll-bar fixed top-0 right-0 z-[999] h-[100dvh] w-full bg-white transition-transform duration-300 ease-in-out sm:w-1/2 xl:hidden',
        isOpen ? 'translate-x-0' : 'translate-x-full',
      )}>
      <div className="space-y-4 pt-1 px-5 pb-5 sm:pt-1 sm:px-8 sm:pb-8 lg:pt-1 lg:px-9 lg:pb-9">
        <div className="flex items-center justify-between pt-2.5">
          <Link href="/">
            <span className="sr-only">Home</span>
            <figure className="w-[153px] h-[34px] md:w-[162px] md:h-[36px] lg:w-[171px] lg:h-[38px]">
              <Image src={mainLogo} alt="Fascinante Digital" className="dark:invert w-full h-full object-contain" />
            </figure>
          </Link>
          {/* close menu btn */}
          <button
            onClick={closeMenu}
            className="nav-hamburger-close bg-background-4 dark:bg-background-9 hover:bg-background-5 dark:hover:bg-background-8 relative flex size-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full transition-all duration-200 hover:scale-105 group"
            aria-label="Cerrar menú móvil">
            <span className="sr-only">Cerrar Menú</span>
            <span className="bg-stroke-9/60 dark:bg-stroke-1 absolute block h-0.5 w-4 rotate-45 transition-all duration-200 group-hover:bg-stroke-1"></span>
            <span className="bg-stroke-9/60 dark:bg-stroke-1 absolute block h-0.5 w-4 -rotate-45 transition-all duration-200 group-hover:bg-stroke-1"></span>
          </button>
        </div>
        <div className="scroll-bar h-[calc(100dvh-120px)] w-full overflow-x-hidden overflow-y-auto pb-10">
          <ul>
            {/* Direct Links - Updated Order */}
            <li>
              <Link
                href="/"
                className="text-tagline-1 text-secondary dark:text-accent border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200 hover:text-primary-500 dark:hover:text-primary-400">
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-tagline-1 text-secondary dark:text-accent border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200 hover:text-primary-500 dark:hover:text-primary-400">
                Nosotros
              </Link>
            </li>

            <ServicesMenu />

            <li>
              <Link
                href="/faq"
                className="text-tagline-1 text-secondary dark:text-accent border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200 hover:text-primary-500 dark:hover:text-primary-400">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-tagline-1 text-secondary dark:text-accent border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200 hover:text-primary-500 dark:hover:text-primary-400">
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="text-tagline-1 text-secondary dark:text-accent border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200 hover:text-primary-500 dark:hover:text-primary-400">
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA Button - Bottom of mobile menu */}
        <div className="px-5 pb-6 sm:px-8 sm:pb-8 lg:px-9 lg:pb-10">
          <Link
            href="https://cal.fascinantedigital.com/fascinante/consultoria-estrategica-digital?user=FASCINANTE"
            className="btn btn-primary hover:btn-white-dark dark:hover:btn-white btn-md w-full text-center block"
            onClick={closeMenu}>
            Agendar Consulta
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default MobileMenu;
