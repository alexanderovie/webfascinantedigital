import ContactInfo from '@/components/contact-page/ContactInfo';
import ContactMap from '@/components/contact-page/ContactMap';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - NextSaaS',
  description: 'Contact Us Page - NextSaaS',
};

const ContactUs = () => {
  return (
    <>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          title="Contact Us"
          heading="Reach Out to Our Marketing Experts."
          description="Ready to grow your business online? Our team of digital marketing specialists is here to help you succeed. From SEO and web design to social media management, we provide personalized strategies that deliver measurable results."
          link="/contact-us"
          badge="Get in Touch"
          badgeClass="badge-teal-soft"
        />
        <ContactInfo />
        <ContactMap />
        <CTAV1
          className="dark:bg-background-5 bg-white"
          badgeClass="badge-yellow-v2"
          badgeText="Get Started"
          ctaBtnText="Start Your Project"
          ctaHeading="Ready to Transform Your Digital Presence?"
          description="Let's discuss how we can help your business grow online. Our team of marketing experts is ready to create a customized strategy that delivers real results for your business."
        />
      </main>
      <FooterThree />
    </>
  );
};
ContactUs.displayName = 'AboutPage03';
export default ContactUs;