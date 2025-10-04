import Client from '@/components/pricing-02/Client';
import Faq from '@/components/pricing-02/Faq';
import Pricing from '@/components/pricing-02/Pricing';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Pricing - Fascinante Digital',
  description:
    'Transparent pricing for digital marketing services. Choose the plan that fits your business needs - from Local SEO to comprehensive marketing automation.',
};

const Pricing02 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
        megaMenuColor="!bg-accent dark:!bg-background-9"
      />
      <main className="bg-background-1 dark:bg-background-6">
        <PageHero
          title="Pricing"
          heading="Transparent Pricing for<br />Digital Marketing Success"
          description="Choose the perfect plan for your Hispanic business growth. From local SEO to comprehensive marketing automation, we offer flexible pricing that scales with your success."
          link="/pricing"
          badge="Our Pricing"
          badgeClass="badge-blue-soft"
        />
        <Pricing />
        <Client />
        <Faq />
        <CTAV1
          className="dark:bg-background-5 bg-background-1"
          badgeText="Get Started"
          badgeClass="badge-yellow-modern"
          ctaHeading="Ready To Dominate Your Local Market?"
          description="Start your digital marketing journey today and see your business grow with proven strategies."
          ctaBtnText="Get Started"
          btnClass="btn-primary hover:btn-secondary dark:hover:btn-accent"
        />
      </main>
      <FooterThree />
    </Fragment>
  );
};

Pricing02.displayName = 'Pricing02';
export default Pricing02;
