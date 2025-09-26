import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const IntegrationMenu = () => {
  return (
    <MobileMenuItem id="integration" title="Integration" hasSubmenu={false}>
      <ul>
        <li>
          <Link
            href="/integration"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 block w-full py-3 text-left font-normal transition-all duration-200">
            Our Integrations
          </Link>
        </li>
      </ul>
    </MobileMenuItem>
  );
};

export default IntegrationMenu;
