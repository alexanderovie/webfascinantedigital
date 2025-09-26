import ContactInfo from '@/components/contact-page/ContactInfo';
import ContactMap from '@/components/contact-page/ContactMap';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Fascinante Digital. Contact our digital marketing experts in West Palm Beach for SEO, web development, and marketing automation services.',
  alternates: {
    canonical: '/contact-us',
  },
};

const ContactUs = () => {
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Fascinante Digital",
    "description": "Digital marketing agency specializing in SEO, web development, and marketing automation in West Palm Beach, FL.",
    "url": "https://fascinantedigital.com",
    "telephone": "+1-800-886-4981",
    "email": "info@fascinantedigital.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2054 Vista Pkwy # 400",
      "addressLocality": "West Palm Beach",
      "addressRegion": "FL",
      "postalCode": "33411",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.7153",
      "longitude": "-80.0534"
    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }],
    "sameAs": [
      "https://www.instagram.com/fascinantedigital/",
      "https://www.facebook.com/fascinantedigital/"
    ],
    "areaServed": ["West Palm Beach","Palm Beach County","United States","Latin America"],
    "serviceType": [
      "SEO",
      "Local SEO",
      "Technical SEO",
      "Web Design",
      "Web Development",
      "Marketing Automation",
      "Social Media Advertising",
      "Google Ads"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactStructuredData) }}
      />
      <NavbarOne
        className="bg-white dark:border border-stroke-6 dark:bg-background-9"
        btnClassName="btn-secondary hover:btn-white dark:hover:btn-white-dark dark:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          title="Contact Us"
          heading="Reach Out to Our
Support Team for Help."
          description="Whether you have a question, need technical assistance, or just want some guidance, our support team is here to help. We're available around the clock to provide quick and friendly support."
          link="/contact-us"
          badge="Get in Touch"
          badgeClass="badge-blue-soft"
        />
        <ContactInfo />
        <ContactMap />
        <CTAV1
          className="dark:bg-background-5 bg-white"
          badgeClass="badge-yellow-v2"
          badgeText="Get Started"
          ctaBtnText="Contact Us"
          ctaHeading="Get in Touch"
          description="We're here to help you with your inquiries and needs. Feel free to reach out to us using the contact form below, and we'll get back to you as soon as possible."
        />
      </main>
      <FooterThree />
    </>
  );
};
ContactUs.displayName = 'AboutPage03';
export default ContactUs;