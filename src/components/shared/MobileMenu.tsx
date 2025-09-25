'use client';

import { useMobileMenuContext } from '@/context/MobileMenuContext';
import { cn } from '@/utils/cn';
import logoDark from '@public/images/shared/logo-dark.svg';
import logo from '@public/images/shared/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
// import AboutUsMenu from './mobile-menu/AboutUsMenu'; // Removed - About is now direct link
// import BlogMenu from './mobile-menu/BlogMenu'; // Removed - Blog is now direct link
import FeaturesMenu from './mobile-menu/FeaturesMenu';
// import HomeMenu from './mobile-menu/HomeMenu'; // Removed - Home is now direct link
import IntegrationMenu from './mobile-menu/IntegrationMenu';
import LoginMenu from './mobile-menu/LoginMenu';
import PricingMenu from './mobile-menu/PricingMenu';
import ProcessMenu from './mobile-menu/ProcessMenu';
import ServicesMenu from './mobile-menu/ServicesMenu';
import SignUpMenu from './mobile-menu/SignUpMenu';
import TeamsMenu from './mobile-menu/TeamsMenu';
import TestimonialMenu from './mobile-menu/TestimonialMenu';

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
        'dark:bg-background-7 scroll-bar fixed top-0 right-0 z-[999] h-screen w-full bg-white transition-transform duration-300 ease-in-out sm:w-1/2 xl:hidden',
        isOpen ? 'translate-x-0' : 'translate-x-full',
      )}>
      <div className="space-y-4 p-5 sm:p-8 lg:p-9">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className="sr-only">Home</span>
            <figure className="max-w-[44px]">
              <Image src={logo} alt="NextSaaS" className="block w-full dark:hidden" />
              <Image src={logoDark} alt="NextSaaS" className="hidden w-full dark:block" />
            </figure>
          </Link>
          {/* close menu btn */}
          <button
            onClick={closeMenu}
            className="nav-hamburger-close bg-background-4 dark:bg-background-9 hover:bg-background-5 dark:hover:bg-background-8 relative flex size-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full transition-all duration-200 hover:scale-105 group"
            aria-label="Close mobile menu">
            <span className="sr-only">Close Menu</span>
            <span className="bg-stroke-9/60 dark:bg-stroke-1 absolute block h-0.5 w-4 rotate-45 transition-all duration-200 group-hover:bg-stroke-1"></span>
            <span className="bg-stroke-9/60 dark:bg-stroke-1 absolute block h-0.5 w-4 -rotate-45 transition-all duration-200 group-hover:bg-stroke-1"></span>
          </button>
        </div>
        <div className="scroll-bar h-[85vh] w-full overflow-x-hidden overflow-y-auto pb-10">
          <ul>
            {/* Direct Links - Updated Order */}
            <li>
              <Link
                href="/"
                className="text-tagline-1 text-secondary dark:text-accent border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200 hover:text-primary-500 dark:hover:text-primary-400">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-tagline-1 text-secondary dark:text-accent border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200 hover:text-primary-500 dark:hover:text-primary-400">
                About
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
                Contact
              </Link>
            </li>

            <IntegrationMenu />

            <FeaturesMenu />

            <ProcessMenu />

            <TestimonialMenu />

            <TeamsMenu />

            <PricingMenu />

            <LoginMenu />

            <SignUpMenu />
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default MobileMenu;
