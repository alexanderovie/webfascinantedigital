import CareerContent from '@/components/career/CareerContent';
import Positions from '@/components/career/Positions';
// import Features from '@/components/homepage-07/Features'; // Component removed
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Career - Fascinante Digital',
  description: 'Join our team at Fascinante Digital. We\'re looking for passionate digital marketing professionals to help Hispanic businesses grow in the USA.',
  alternates: {
    canonical: '/career',
  },
};

const Career = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-5">
        <PageHero 
          title="Career" 
          heading="We're building the future of digital marketing—come build it with us." 
          description="Join our passionate team of digital marketing experts dedicated to helping Hispanic businesses dominate online."
          link="/career" 
          className="bg-background-3 dark:bg-background-5" 
        />
        <CareerContent />
        {/* Features section removed - component not available */}
        <Positions />
        <CTAV1
          className="dark:bg-background-6 bg-white"
          badgeClass="badge-green"
          badgeText="Join Our Team"
          ctaHeading="Ready to make an impact with Fascinante Digital?"
          description="If you're passionate about digital marketing and helping Hispanic businesses grow, we'd love to hear from you."
          btnClass="hover:btn-secondary dark:hover:btn-accent"
          ctaBtnText="Apply Now"
        />
      </main>
      <FooterThree />
    </Fragment>
  );
};

export default Career;
