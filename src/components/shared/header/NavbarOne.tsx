'use client';

// Header v1
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { navigationItems } from '@/data/header';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import { FC } from 'react';
import MobileMenu from '../MobileMenu';
// import AboutMenu from '../mega-menu/AboutMenu'; // Removed - About is now direct link
// import BlogMenu from '../mega-menu/BlogMenu'; // Removed - Blog is now direct link
// import HomeMegaMenu from '../mega-menu/HomeMegaMenu'; // Removed - Home is now direct link
// import PageMegaMenu from '../mega-menu/PageMegaMenu'; // Removed - Pages menu removed
import BotonCal from '../BotonCal';
import ServicesMegaMenu from '../mega-menu/ServicesMegaMenu';
import Logo from './Logo';
import MobileMenuButton from './MobileMenuButton';
import NavItemLink from './NavItemLink';

interface NavbarOneProps {
  className?: string;
  megaMenuColor?: string;
  btnClassName?: string;
}

const NavbarOne: FC<NavbarOneProps> = ({ className, megaMenuColor, btnClassName }) => {
  const { isScrolled } = useNavbarScroll(100);

  return (
    <MobileMenuProvider>
      <header>
        <div
          className={cn(
            'main-container fixed top-0 xl:top-0 left-1/2 z-50 mx-auto flex w-full -translate-x-1/2 items-center justify-between rounded-full xl:rounded-full px-5 py-2.5 transition-all duration-500 ease-in-out xl:py-0',
            isScrolled && 'xl:top-0 transition-all duration-500 ease-in-out',
            className,
          )}>
          {/* logo */}
          <Logo />
          {/* navigation */}
          <nav className="hidden items-center xl:flex">
            <ul className="flex items-center">
              {navigationItems.map((item) => {
                const renderMegaMenu = () => {
                  switch (item?.megaMenuComponent) {
                    case 'ServicesMegaMenu':
                      return <ServicesMegaMenu className={megaMenuColor} />;
                    default:
                      return null;
                  }
                };

                // mega menu render
                return (
                  <li key={item?.id} className={cn('py-2.5', item?.hasDropdown && 'group/nav relative cursor-pointer')}>
                    <NavItemLink item={item} />
                    {item.hasDropdown && renderMegaMenu()}
                  </li>
                );
              })}
            </ul>
          </nav>
          {/* Desktop CTA Button - Hidden on mobile */}
          <div className="hidden xl:block">
            <BotonCal className={btnClassName} />
          </div>
          {/* mobile menu btn */}
          <MobileMenuButton />
        </div>
        <MobileMenu />
      </header>
    </MobileMenuProvider>
  );
};

NavbarOne.displayName = 'NavbarOne';
export default NavbarOne;
