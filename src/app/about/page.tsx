import FinanceIntro from '@/components/aboutpage-02/FinanceIntro';
import OurMission from '@/components/aboutpage-02/OurMission';
import Reviews from '@/components/aboutpage-02/Reviews';
import VisionImages from '@/components/aboutpage-02/VisionImages';
import TrustedByUsers from '@/components/homepage-07/TrustedByUsers';
import CTAV2 from '@/components/shared/cta/CTAV2';

import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Fascinante Digital, the leading digital marketing agency in West Palm Beach. We help Hispanic businesses grow with proven strategies.',
  alternates: {
    canonical: '/about',
  },
};

const AboutPage02 = () => {
  return (
    <>
      <NavbarOne
        className="bg-white dark:border border-stroke-6 dark:bg-background-9"
        btnClassName="btn-secondary hover:btn-white dark:hover:btn-white-dark dark:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          title="About"
          heading="Empowering Hispanic Businesses<br />to Dominate Digital"
          description="At Fascinante Digital, we believe every Hispanic business deserves to thrive in the digital landscape. That's why we've created comprehensive marketing strategies that help businesses increase visibility, drive qualified traffic, and scale revenue without the complexity."
          link="/about"
          badge="Our Mission"
          badgeClass="badge-blue-soft"
        />
        <VisionImages />
        <TrustedByUsers
          className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]"
          title="Grow Together"
          description="We're not just a digital marketing agency
        we're a partner in your long-term success."
        />
        <OurMission />
        <TrustedByUsers
          className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]"
          title="Grow Together"
          description="We're not just a digital marketing agency
        we're a partner in your long-term success."
        />
        <FinanceIntro />
        <Reviews />
        <CTAV2
          ctaHeading="Ready To Dominate Your Local Market With Proven Digital Marketing Strategies?"
          ctaDescription="Schedule a free consultation and discover how we can help your Hispanic business grow with data-driven SEO, web development, and marketing automation."
          ctaBtnText="Schedule Free Consultation"
          ctaCheckListData={[
            {
              id: '1',
              text: 'No credit card required',
            },
            {
              id: '2',
              text: 'Free comprehensive audit',
            },
            {
              id: '3',
              text: 'Custom growth strategy',
            },
          ]}
        />
      </main>
      <FooterOne />
    </>
  );
};
AboutPage02.displayName = 'AboutPage02';
export default AboutPage02;
