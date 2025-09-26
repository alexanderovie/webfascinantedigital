import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const PricingMenu = () => {
  return (
    <MobileMenuItem id="pricing" title="Pricing" hasSubmenu={false}>
      <ul>
        <li>
          <Link
            href="/pricing"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 block w-full py-3 text-left font-normal transition-all duration-200">
            Pricing
          </Link>
        </li>
      </ul>
    </MobileMenuItem>
  );
};

PricingMenu.displayName = 'PricingMenu';
export default PricingMenu;
