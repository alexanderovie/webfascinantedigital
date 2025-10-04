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
import ServicesMegaMenu from '../mega-menu/ServicesMegaMenu';
import BotonCal from '../BotonCal';
import Logo from './Logo';
import MobileMenuButton from './MobileMenuButton';
import NavCTAButton from './NavCTAButton';
import NavItemLink from './NavItemLink';

interface NavbarOneProps {
  className?: string;
  megaMenuColor?: string;
  btnClassName?: string;
}

const NavbarOne: FC<NavbarOneProps> = ({ className, megaMenuColor, btnClassName }) => {
  const { isScrolled, isVisible } = useNavbarScroll(100);

  return (
    <MobileMenuProvider>
      <header>
        <div
          className={cn(
            'fixed top-0 left-0 w-full z-50 bg-white dark:bg-background-7 transition-transform duration-300 ease-in-out shadow-sm',
            !isVisible && '-translate-y-full',
            className,
          )}>
          <div className="main-container px-5">
            <div
              className={cn(
                'flex items-center justify-between py-2.5 transition-all duration-500 ease-in-out',
                isScrolled && 'xl:py-2 transition-all duration-500 ease-in-out',
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
                      <li
                        key={item?.id}
                        className={cn('py-2.5', item?.hasDropdown && 'group/nav relative cursor-pointer')}>
                        <NavItemLink item={item} />
                        {item.hasDropdown && renderMegaMenu()}
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <BotonCal className={btnClassName} />
              {/* mobile menu btn */}
              <MobileMenuButton />
            </div>
          </div>
        </div>
        <MobileMenu />
      </header>
    </MobileMenuProvider>
  );
};

NavbarOne.displayName = 'NavbarOne';
export default NavbarOne;
