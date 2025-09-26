import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const ProcessMenu = () => {
  return (
    <MobileMenuItem id="process" title="Process" hasSubmenu={false}>
      <ul>
        <li>
          <Link
            href="/process"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 block w-full py-3 text-left font-normal transition-all duration-200">
            Process
          </Link>
        </li>
      </ul>
    </MobileMenuItem>
  );
};

ProcessMenu.displayName = 'ProcessMenu';
export default ProcessMenu;
