import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const TestimonialMenu = () => {
  return (
    <MobileMenuItem id="testimonial" title="Testimonial" hasSubmenu={false}>
      <ul>
        <li>
          <Link
            href="/testimonial"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 block w-full py-3 text-left font-normal transition-all duration-200">
            Testimonials
          </Link>
        </li>
      </ul>
    </MobileMenuItem>
  );
};

TestimonialMenu.displayName = 'TestimonialMenu';
export default TestimonialMenu;
