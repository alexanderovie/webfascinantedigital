import Client from '@/components/pricing-02/Client';
import Faq from '@/components/pricing-02/Faq';
import Pricing from '@/components/pricing-02/Pricing';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Planes y Precios de Agencia de Marketing Digital | Fascinante Digital',
  description:
    'Descubre precios claros y estrategias efectivas de marketing digital. Planes flexibles diseñados para negocios latinos en EE.UU. que buscan crecer con resultados reales.',
  alternates: {
    canonical: '/pricing',
  },
};

const Pricing02 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
        megaMenuColor="!bg-accent dark:!bg-background-9"
      />
      <main className="bg-background-1 dark:bg-background-6">
        <PageHero
          title="Precios"
          heading="Planes y Precios de Marketing Digital<br />Para Negocios Latinos en EE.UU."
          description="En Fascinante Digital creemos en la transparencia. Nuestros planes están diseñados para adaptarse a las necesidades y presupuesto de tu negocio. Desde SEO local hasta estrategias completas de marketing digital, obtén resultados medibles sin costos ocultos."
          link="/pricing"
          badge="Nuestros Precios"
          badgeClass="badge-blue-soft"
        />
        <Pricing />
        <Client />
        <Faq />
        <CTAV1
          className="dark:bg-background-5 bg-background-1"
          badgeText="Solicitar Auditoría"
          badgeClass="badge-yellow-modern"
          ctaHeading="¿Listo Para Impulsar Tu Negocio?"
          description="Comienza hoy con una agencia de marketing digital confiable y accesible. Solicita una auditoría gratuita y descubre el plan que mejor se ajusta a tus objetivos."
          ctaBtnText="Solicitar Auditoría Gratuita"
          btnClass="btn-primary hover:btn-secondary dark:hover:btn-accent"
        />
      </main>
      <FooterThree />

      {/* Schema FAQ + JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Cuánto cuesta el marketing digital en EE.UU.?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Los precios varían según los objetivos y el tipo de servicio. En promedio, las agencias en EE.UU. cobran entre $1,000 y $5,000 USD mensuales. En Fascinante Digital ofrecemos planes adaptados a cada negocio latino.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué incluye cada plan de marketing digital?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Cada plan incluye optimización SEO, publicidad digital, gestión de redes sociales y automatización de marketing. También implementamos herramientas de análisis y seguimiento de conversiones.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Puedo cambiar de plan más adelante?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sí. Puedes escalar tu plan en cualquier momento según el crecimiento de tu negocio y tus objetivos de marketing.',
                },
              },
            ],
          }),
        }}
      />
    </Fragment>
  );
};

Pricing02.displayName = 'Pricing02';
export default Pricing02;
