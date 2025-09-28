import { CheckIcon } from '@/icons';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

// Feature list
const featureList = [
  {
    id: 1,
    text: 'Google Business Profile optimization for local dominance',
  },
  {
    id: 2,
    text: 'SEO strategies that rank #1 for target keywords',
  },
  {
    id: 3,
    text: 'Google Ads campaigns with 300%+ ROI',
  },
  {
    id: 4,
    text: 'Professional websites that convert visitors to customers',
  },
  {
    id: 5,
    text: 'Monthly reporting and continuous optimization',
  },
];

const Feature = () => {
  return (
    <section className="pt-[80px] lg:pt-[100px] pb-24 md:pb-28 lg:pb-32 xl:pb-[200px]">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="relative z-10">
            <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 rounded-[20px] overflow-hidden">
              <Image
                src="/images/home-page-2/about-bg.png"
                alt="Decorative background pattern"
                width={1200}
                height={600}
                quality={90}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="py-14 px-6 md:px-11 grid max-sm:grid-cols-1 grid-cols-2 max-sm:gap-10 gap-5">
              <div className="max-w-[500px]">
                <h2 className="text-accent text-heading-5 mb-8">
                  Here are some of the strategies we&apos;ve successfully implemented: dominating local search results,
                  increasing revenue
                </h2>
                <div>
                  <Link
                    href="/our-services-01"
                    className="btn btn-md dark:btn-dark dark:hover:btn-white hover:btn-primary border-0 btn-white">
                    <span>Get Started</span>
                  </Link>
                </div>
              </div>
              <div>
                <ul className="space-y-4">
                  {featureList.map((feature) => (
                    <li key={feature.id} className="flex items-center gap-3">
                      <span className="size-5 rounded-full bg-accent/17 dark:bg-accent/10">
                        <CheckIcon className="dark:fill-accent" />
                      </span>

                      <span className="text-accent dark:text-accent/60">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Feature;
