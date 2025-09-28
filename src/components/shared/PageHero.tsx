import { cn } from '@/utils/cn';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

interface PageHeroProps {
  className?: string;
  title?: string;
  heading?: string;
  description?: string;
  link?: string;
  badge?: string;
  badgeClass?: string;
}

const PageHero = ({ className, title, heading, description, link, badge, badgeClass }: PageHeroProps) => {
  return (
    <section className={cn('xl:pt-[180px] md:pt-42 sm:pt-36 pt-32', className)} aria-label="Page hero section">
      <div className="main-container">
        {/* Hero content */}
        <div className="text-center pb-0 lg:pb-0">
          <RevealAnimation delay={0.1}>
            <div className="mb-6">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
              <Link
                href="/"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                Home
              </Link>
              <span className="mx-2">-</span>
              <Link
                href={link || '/'}
                className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
                {title}
              </Link>
              </span>
            </div>
          </RevealAnimation>
          {badge && (
            <RevealAnimation delay={0.15}>
                <div className="mb-6">
                <span className={cn('badge', badgeClass || 'badge-cyan')}>{badge}</span>
              </div>
            </RevealAnimation>
          )}
          <RevealAnimation delay={0.2}>
                <div className="mb-6">
              <h1 className="font-semibold md:text-heading-2 text-heading-5 max-w-[649px] mx-auto">
                {heading?.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < heading.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h1>
            </div>
          </RevealAnimation>
          {description && (
            <RevealAnimation delay={0.3}>
                <div>
                <p className="text-secondary/60 max-w-[649px] mx-auto">
                  {description}
                </p>
              </div>
            </RevealAnimation>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
