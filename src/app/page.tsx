import Hero from '@/components/homepage/Hero';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { Metadata } from 'next';
import { Fragment } from 'react';
import dynamic from 'next/dynamic';

// ✅ Lazy load componentes no críticos para reducir JavaScript inicial
const Audit = dynamic(() => import('@/components/homepage/Audit'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});
const Blog = dynamic(() => import('@/components/homepage/Blog'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});
const CTA = dynamic(() => import('@/components/homepage/CTA'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});
const Results = dynamic(() => import('@/components/homepage/Results'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});
const Services = dynamic(() => import('@/components/homepage/Services'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});
const Steps = dynamic(() => import('@/components/homepage/Steps'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});
const Testimonial = dynamic(() => import('@/components/homepage/Testimonial'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});
const WhyUs = dynamic(() => import('@/components/homepage/WhyUs'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});
const FooterOne = dynamic(() => import('@/components/shared/footer/FooterOne'), {
  loading: () => <div className="h-32 bg-gray-100 animate-pulse" />
});

export const metadata: Metadata = {
  title: 'Fascinante Digital | SEO y Desarrollo Web en West Palm Beach',
  alternates: {
    canonical: '/',
  },
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
