import FinanceIntro from '@/components/aboutpage-02/FinanceIntro';
import OurMission from '@/components/aboutpage-02/OurMission';
import Reviews from '@/components/aboutpage-02/Reviews';
// import VisionStatement from '@/components/aboutpage-02/VisionStatement'; // Removed - content duplicated in PageHero
// import TrustedByUsers from '@/components/homepage-07/TrustedByUsers'; // Component removed
import CTAV2 from '@/components/shared/cta/CTAV2';

import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AboutPage-02 - NextSaaS',
  description: 'About Page - NextSaaS',
};

const AboutPage02 = () => {
  return (
    <>
      <NavbarOne
        megaMenuColor="!bg-background-3 dark:!bg-background-7"
        className="dark:border bg-accent/60 dark:border-stroke-7 dark:bg-background-7 backdrop-blur-[25px]"
        btnClassName="btn-secondary dark:btn-accent hover:btn-white dark:hover:btn-white-dark"
      />
      <main className="bg-white dark:bg-background-8">
        <PageHero 
          title="About" 
          heading="Built for Progress. Designed for Possibility."
          description="At Fascinante Digital, we believe marketing should empower businesses, not overwhelm them. That's why we've created a flexible, intuitive platform that helps teams streamline operations, gain clarity from data, and scale faster, without the complexity."
          link="/about"
          badge="Our Mission"
          badgeClass="badge-cyan"
        />
        {/* VisionStatement removed - content duplicated in PageHero */}
        {/* TrustedByUsers sections removed - component not available */}
        <OurMission />
        <FinanceIntro />
        <Reviews />
        <CTAV2
          ctaHeading="Experience a free trial today and watch your business grow."
          ctaDescription="Sign up today to enhance your customer support with our tools and solutions."
          ctaBtnText="7- day free trial"
          ctaCheckListData={[
            {
              id: '1',
              text: 'No credit card required',
            },
            {
              id: '2',
              text: 'free for 30 day trial.',
            },
            {
              id: '3',
              text: 'Money back guarantee.',
            },
          ]}
        />
      </main>
      <FooterThree />
    </>
  );
};
AboutPage02.displayName = 'AboutPage02';
export default AboutPage02;
