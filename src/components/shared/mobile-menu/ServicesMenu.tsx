import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const ServicesMenu = () => {
  return (
    <MobileMenuItem id="services" title="Services" hasSubmenu={true}>
      <ul>
        <li>
          <Link
            href="/services"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            Our Services
          </Link>
        </li>
        <li>
          <Link
            href="/services/google-business-profile"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            Google Business Profile
          </Link>
        </li>
        <li>
          <Link
            href="/services/seo-optimization"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            SEO Optimization
          </Link>
        </li>
        <li>
          <Link
            href="/services/ppc-advertising"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 block w-full py-3 text-left font-normal transition-all duration-200">
            PPC Advertising
          </Link>
        </li>
      </ul>
    </MobileMenuItem>
  );
};

ServicesMenu.displayName = 'ServicesMenu';

export default ServicesMenu;
