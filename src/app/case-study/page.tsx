import CaseStudy from '@/components/case-study/CaseStudy';
import Feature from '@/components/case-study/Feature';
import Success from '@/components/case-study/Success';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies - Fascinante Digital',
  description: 'Real success stories from Hispanic businesses that dominated Google search results and grew their revenue with our proven digital marketing strategies.',
};

const CaseStudyPage = () => {
  return (
    <>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          title="Case Studies"
          heading="Real Success Stories"
          description="See how Hispanic businesses like yours achieved remarkable growth with our proven digital marketing strategies."
          link="/case-study"
          className="pt-24 md:pt-36 lg:pt-40 xl:pt-[200px]"
        />
        <CaseStudy />
        <Success />
        <Feature />
        <CTAV1
          className="dark:bg-background-5 bg-white"
          badgeClass="badge-yellow-modern"
          badgeText="Get Started"
          ctaHeading="Ready To Be Our Next Success Story?"
          description="Join hundreds of Hispanic businesses that have transformed their digital presence and grown their revenue with our proven strategies."
          ctaBtnText="Get Started"
          btnClass="hover:btn-secondary dark:hover:btn-accent"
        />
      </main>
      <FooterThree />
    </>
  );
};
CaseStudyPage.displayName = 'CaseStudyPage';
export default CaseStudyPage;
