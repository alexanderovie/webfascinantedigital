import ContactInfo from '@/components/contact-page/ContactInfo';
import ContactMap from '@/components/contact-page/ContactMap';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contáctanos',
  description:
    'Ponte en contacto con Fascinante Digital. Contacta a nuestros expertos en marketing digital en West Palm Beach para servicios de SEO, desarrollo web y automatización de marketing.',
  alternates: {
    canonical: '/contact-us',
  },
};

const ContactUs = () => {
  const contactStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Fascinante Digital',
    description:
      'Digital marketing agency specializing in SEO, web development, and marketing automation in West Palm Beach, FL.',
    url: 'https://fascinantedigital.com',
    telephone: '+1-800-886-4981',
    email: 'info@fascinantedigital.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2054 Vista Pkwy # 400',
      addressLocality: 'West Palm Beach',
      addressRegion: 'FL',
      postalCode: '33411',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '26.7153',
      longitude: '-80.0534',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Credit Card', 'Check'],
    currenciesAccepted: 'USD',
    sameAs: ['https://www.instagram.com/fascinantedigital/', 'https://www.facebook.com/fascinantedigital/'],
    areaServed: ['West Palm Beach', 'Palm Beach County', 'United States', 'Latin America'],
    serviceType: [
      'SEO',
      'Local SEO',
      'Technical SEO',
      'Web Design',
      'Web Development',
      'Marketing Automation',
      'Social Media Advertising',
      'Google Ads',
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactStructuredData) }} />
      <NavbarOne
        className="bg-white dark:border border-stroke-6 dark:bg-background-9"
        btnClassName="btn-secondary hover:btn-white dark:hover:btn-white-dark dark:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          title="Contáctanos"
          heading="Ponte en Contacto con<br />Nuestro Equipo de Soporte"
          description="Ya sea que tengas una pregunta, necesites asistencia técnica o simplemente quieras orientación, nuestro equipo de soporte está aquí para ayudarte. Estamos disponibles las 24 horas para brindarte soporte rápido y amigable."
          link="/contact-us"
          badge="Ponte en Contacto"
          badgeClass="badge-blue-soft"
        />
        <ContactInfo />
        <ContactMap />
        <CTAV1
          className="dark:bg-background-5 bg-white"
          badgeClass="badge-yellow-modern"
          badgeText="Comenzar"
          ctaBtnText="Contáctanos"
          ctaHeading="Ponte en Contacto"
          description="Estamos aquí para ayudarte con tus consultas y necesidades. No dudes en contactarnos usando el formulario de contacto a continuación, y te responderemos lo antes posible."
        />
      </main>
      <FooterOne />
    </>
  );
};
ContactUs.displayName = 'AboutPage03';
export default ContactUs;
