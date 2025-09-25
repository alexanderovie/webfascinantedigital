// import Testimonial from '@/components/homepage-03/Testimonial'; // Component removed
// import FAQ from '@/components/homepage-12/FAQ'; // Component removed
import CTA from '@/components/our-team-01/CTA';
import Experience from '@/components/our-team-01/Experience';
import Teams from '@/components/our-team-01/Teams';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Our Team 01 - NextSaaS',
};

const OurTeam01 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-accent/60 border border-stroke-2 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Our Team" heading="Our Team" link="/our-team-01" />
        <Teams />
        <Experience />
        {/* Testimonial and FAQ sections removed - components not available */}
        <CTA />
      </main>
      <FooterThree />
    </Fragment>
  );
};

export default OurTeam01;
