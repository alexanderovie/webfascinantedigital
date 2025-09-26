import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const FeaturesMenu = () => {
  return (
    <MobileMenuItem id="features" title="Features" hasSubmenu={false}>
      <ul>
        <li>
          <Link
            href="/"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 block w-full py-3 text-left font-normal transition-all duration-200">
            Our Features
          </Link>
        </li>
      </ul>
    </MobileMenuItem>
  );
};

FeaturesMenu.displayName = 'FeaturesMenu';
export default FeaturesMenu;
