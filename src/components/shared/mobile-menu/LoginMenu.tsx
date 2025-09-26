import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const LoginMenu = () => {
  return (
    <MobileMenuItem id="login" title="Login" hasSubmenu={false}>
      <ul>
        <li>
          <Link
            href="/login"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 block w-full py-3 text-left font-normal transition-all duration-200">
            Login
          </Link>
        </li>
      </ul>
    </MobileMenuItem>
  );
};

LoginMenu.displayName = 'LoginMenu';
export default LoginMenu;
