import Features from '@/components/our-services-01/Features';
import Services from '@/components/our-services-02/Services';
import ServicesV2 from '@/components/our-services-02/ServicesV2';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive digital marketing services including SEO, web development, Google Ads, and marketing automation. Drive growth with Fascinante Digital.',
  alternates: {
    canonical: '/services',
  },
};

const OurServices02 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-white dark:border border-stroke-6 dark:bg-background-9"
        btnClassName="btn-secondary hover:btn-white dark:hover:btn-white-dark dark:btn-accent"
      />
      <main className="bg-background-1 dark:bg-background-6">
        <PageHero 
          title="Our Services" 
          heading="Marketing Services That
Drive Results"
          description="From SEO and SEM to social media and conversion optimization, we provide comprehensive marketing solutions tailored to your business goals and target audience."
          link="/services"
          badge="Our Services"
          badgeClass="badge-blue-soft"
        />
        <Services />
        <ServicesV2 />
        <Features
          className="lg:pt-[200px] lg:pb-[100px]"
          badgeClassName="badge-green-v2"
          btnClassName="btn btn-xl dark:btn-transparent hover:btn-primary btn-white"
        />
        <CTAV1
          className="dark:bg-background-6 bg-white"
          badgeClass="hidden"
          ctaHeading="Build A Complete Website Using The"
          spanText="Assistance"
          description="Start your free trial today and see your ideas come to life easily and creatively."
          btnClass="hover:btn-secondary dark:hover:btn-accent"
          ctaBtnText="Get Started"
        />
      </main>
      <FooterOne />
    </Fragment>
  );
};

export default OurServices02;
