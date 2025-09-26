import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const TeamsMenu = () => {
  return (
    <MobileMenuItem id="teams" title="Teams" hasSubmenu={false}>
      <ul>
        <li>
          <Link
            href="/our-team"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 block w-full py-3 text-left font-normal transition-all duration-200">
            Our Team
          </Link>
        </li>
      </ul>
    </MobileMenuItem>
  );
};

TeamsMenu.displayName = 'TeamsMenu';
export default TeamsMenu;
