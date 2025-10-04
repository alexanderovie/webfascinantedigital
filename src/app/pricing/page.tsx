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
  title: 'Planes y Precios | Fascinante Digital',
  description:
    'Precios transparentes en marketing digital. Elige el plan que se adapta a tu negocio: desde SEO local hasta automatización completa.',
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
          heading="Precios Transparentes<br />Para Tu Éxito Digital"
          description="Elige el plan ideal para impulsar el crecimiento de tu negocio hispano. Desde SEO local hasta automatización avanzada, nuestros precios se adaptan a tu éxito."
          link="/pricing"
          badge="Nuestros Precios"
          badgeClass="badge-blue-soft"
        />
        <Pricing />
        <Client />
        <Faq />
        <CTAV1
          className="dark:bg-background-5 bg-background-1"
          badgeText="Comenzar Ahora"
          badgeClass="badge-yellow-modern"
          ctaHeading="¿Listo Para Dominar Tu Mercado Local?"
          description="Comienza hoy tu estrategia digital y observa cómo tu negocio crece con estrategias comprobadas."
          ctaBtnText="Comenzar Ahora"
          btnClass="btn-primary hover:btn-secondary dark:hover:btn-accent"
        />
      </main>
      <FooterThree />
    </Fragment>
  );
};

Pricing02.displayName = 'Pricing02';
export default Pricing02;
