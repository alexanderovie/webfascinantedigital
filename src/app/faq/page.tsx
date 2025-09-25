import Contact from '@/components/faq/Contact';
import FaqTab from '@/components/faq/FaqTab';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Fascinante Digital\'s SEO, web development, and digital marketing services. Get answers to common questions about our process and results.',
  alternates: {
    canonical: '/faq',
  },
};

const FAQ = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero 
          title="FAQ" 
          heading="Frequently Asked Questions
& Quick Answers"
          description="Find answers to common questions about our marketing services, pricing, and how we can help grow your business. Can't find what you're looking for? Contact us directly."
          link="/faq"
          badge="Help Center"
          badgeClass="badge-blue-soft"
        />
        <FaqTab />
        <Contact />
        <CTAV1
          className="dark:bg-background-6 bg-white"
          badgeClass="!badge-cyan"
          badgeText="Get Started"
          ctaHeading="Ready to start earning with NextSaaS?"
          description="If you have any questions, feel free to reach out to our team."
          btnClass="hover:btn-secondary dark:hover:btn-accent"
          ctaBtnText="Get started"
        />
      </main>
      <FooterThree />
    </Fragment>
  );
};

export default FAQ;
