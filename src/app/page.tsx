import Audit from '@/components/homepage-33/Audit';
import Blog from '@/components/homepage-33/Blog';
import CTA from '@/components/homepage-33/CTA';
import Hero from '@/components/homepage-33/Hero';
import Results from '@/components/homepage-33/Results';
import Services from '@/components/homepage-33/Services';
import Steps from '@/components/homepage-33/Steps';
import Testimonial from '@/components/homepage-33/Testimonial';
import WhyUs from '@/components/homepage-33/WhyUs';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Fascinante Digital | SEO y Desarrollo Web en West Palm Beach',
};

const Homepage33 = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Fascinante Digital",
    "image": "https://fascinantedigital.com/static/logo-512.png",
    "url": "https://fascinantedigital.com/",
    "telephone": "+1-800-886-4981",
    "email": "info@fascinantedigital.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2054 Vista Pkwy, Suite 400",
      "addressLocality": "West Palm Beach",
      "addressRegion": "FL",
      "postalCode": "33411",
      "addressCountry": "US"
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
      "SEO Local",
      "SEO Técnico",
      "Diseño y Desarrollo Web",
      "Automatización de Marketing",
      "Social Ads (Meta/Instagram)",
      "Google Ads"
    ]
  };

  return (
    <Fragment>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <NavbarOne
        className="bg-white dark:border border-stroke-6 dark:bg-background-9"
        btnClassName="btn-secondary hover:btn-white dark:hover:btn-white-dark dark:btn-accent"
      />
      <main className="bg-white dark:bg-black">
        <Hero />
        <Services />
        <Steps />
        <WhyUs />
        <Results />
        <Testimonial />
        <Audit />
        <Blog />
        <CTA />
      </main>
      <FooterOne />
    </Fragment>
  );
};

export default Homepage33;
