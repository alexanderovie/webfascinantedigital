import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const SignUpMenu = () => {
  return (
    <MobileMenuItem id="signup" title="Sign up" hasSubmenu={false}>
      <ul>
        <li>
          <Link
            href="/signup"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 block w-full py-3 text-left font-normal transition-all duration-200">
            Sign up
          </Link>
        </li>
      </ul>
    </MobileMenuItem>
  );
};

SignUpMenu.displayName = 'SignUpMenu';
export default SignUpMenu;
