import ProcessOperation from '@/components/process-02/ProcessOperation';
import ProcessStep from '@/components/process-02/ProcessStep';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Our Process - Fascinante Digital',
  description: 'Discover our proven 5-step process to dominate Google search results and grow your Hispanic business revenue with SEO, web development, and marketing automation.',
};

const Process02 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
        megaMenuColor="!bg-accent dark:!bg-background-9"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          title="Our Process"
          className="pt-24 md:pt-36 lg:pt-40 xl:pt-[200px]"
          heading="Our Proven 5-Step Process"
          description="From Google Business Profile setup to full marketing automation, we follow a systematic approach to grow your Hispanic business."
          link="/process"
        />
        <ProcessStep />
        <ProcessOperation />
        <CTAV1
          className="dark:bg-background-5 bg-white"
          badgeText="Get Started"
          badgeClass="badge-yellow-modern"
          ctaHeading="Ready To Start Your Digital Growth Journey?"
          description="Let&apos;s work together to dominate Google search results and grow your Hispanic business with our proven 5-step process."
          ctaBtnText="Get Started"
          btnClass="hover:btn-secondary dark:hover:btn-accent"
        />
      </main>
      <FooterOne />
    </Fragment>
  );
};

Process02.displayName = 'Process02';
export default Process02;
