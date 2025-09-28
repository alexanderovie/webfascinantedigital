import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import TermsConditionContent from '@/components/terms-conditions/TermsConditionContent';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Fascinante Digital',
  description: 'Terms and conditions for Fascinante Digital digital marketing services. Learn about our service agreements, liability limitations, and client responsibilities.',
  alternates: {
    canonical: '/terms-conditions',
  },
};

const TermsConditions = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Terms & Conditions" heading="Terms & Conditions" link="/terms-conditions" />
        <TermsConditionContent />
        <CTAV1
          className="dark:bg-background-5 bg-white"
          badgeClass="badge-yellow-v2"
          badgeText="Get Started"
          ctaHeading="Ready to grow your business with Fascinante Digital?"
          description="If you have any questions about our services or terms, feel free to reach out to our team."
          btnClass="hover:btn-secondary dark:hover:btn-accent"
          ctaBtnText="Get Started"
        />
      </main>
      <FooterThree />
    </Fragment>
  );
};

export default TermsConditions;
