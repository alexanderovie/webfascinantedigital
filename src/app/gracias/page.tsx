import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '¡Gracias por tu Consulta! | Fascinante Digital',
  description:
    'Tu consulta estratégica con Fascinante Digital ha sido agendada exitosamente. Te contactaremos en las próximas 24 horas con tu sesión estratégica personalizada.',
  keywords: 'consulta estratégica, marketing digital, latinos EE.UU, agencia digital, fascinante digital',
  alternates: {
    canonical: '/gracias',
  },
  openGraph: {
    title: '¡Gracias por tu Consulta! | Fascinante Digital',
    description:
      'Tu consulta estratégica con Fascinante Digital ha sido agendada exitosamente. Te contactaremos pronto.',
    url: 'https://fascinantedigital.com/gracias',
    type: 'website',
  },
};

const GraciasPage = () => {
  return (
    <>
      {/* Schema JSON-LD para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Thank You Page - Fascinante Digital',
            description: 'Página de agradecimiento posterior a la conversión para clientes de Fascinante Digital.',
            url: 'https://fascinantedigital.com/gracias',
            about: {
              '@type': 'Thing',
              name: 'Conversión completada',
              description: 'Lead confirmado en Fascinante Digital',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Fascinante Digital',
              url: 'https://fascinantedigital.com',
            },
          }),
        }}
      />

      {/* Evento de conversión GTM */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ event: 'conversion_thankyou' });
          `,
        }}
      />

      <NavbarOne
        className="bg-white dark:border border-stroke-6 dark:bg-background-9"
        btnClassName="btn-secondary hover:btn-white dark:hover:btn-white-dark dark:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7 pt-20 min-h-screen flex items-center justify-center">
        <div className="main-container py-14 md:py-16 lg:py-20 text-center max-w-4xl">
          {/* Imagen optimizada */}
          <div className="mb-8">
            <Image
              src="/images/shared/main-logo.svg"
              alt="Fascinante Digital - Gracias por tu consulta"
              title="Agencia de Marketing Digital para Latinos en EE.UU."
              width={200}
              height={60}
              className="mx-auto dark:invert"
              priority
            />
          </div>

          {/* H1 principal */}
          <h1 className="text-heading-1 text-secondary dark:text-accent mb-4">¡Gracias por tu Consulta! 🚀</h1>

          {/* H2 explicativo */}
          <h2 className="text-xl md:text-2xl text-secondary dark:text-accent mb-6 font-semibold">
            Te contactaremos en las próximas 24 horas con tu sesión estratégica personalizada.
          </h2>

          {/* Texto semántico expandido */}
          <div className="text-secondary/80 dark:text-accent/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            <p className="mb-4">
              Nuestro equipo de expertos en{' '}
              <Link href="/services" className="text-primary-500 hover:text-primary-600 underline">
                marketing digital
              </Link>{' '}
              para negocios latinos en Estados Unidos revisará tu información y preparará una estrategia personalizada
              basada en tu industria, objetivos y competencia local.
            </p>
            <p className="mb-4">
              Durante tu sesión estratégica gratuita, analizaremos tu presencia digital actual, identificaremos
              oportunidades de crecimiento y te presentaremos un plan de acción concreto para aumentar tu visibilidad,
              generar más clientes calificados y hacer crecer tu negocio de manera sostenible.
            </p>
            <p>
              Mientras tanto, te invitamos a explorar nuestros{' '}
              <Link href="/faq" className="text-primary-500 hover:text-primary-600 underline">
                casos de éxito
              </Link>{' '}
              y conocer cómo hemos ayudado a más de 300 negocios hispanos a triplicar su tráfico orgánico y aumentar sus
              conversiones.
            </p>
          </div>

          {/* CTAs principales */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/" className="btn btn-primary hover:btn-white-dark dark:hover:btn-white btn-md px-8">
              Volver a la página de inicio
            </Link>
            <Link
              href="/case-study"
              className="btn btn-secondary hover:btn-white dark:hover:btn-white-dark dark:btn-accent btn-md px-8">
              Ver Casos de Éxito
            </Link>
          </div>

          {/* Enlaces internos estratégicos */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/services" className="text-primary-500 hover:text-primary-600 underline transition-colors">
              Nuestros Servicios
            </Link>
            <Link href="/faq" className="text-primary-500 hover:text-primary-600 underline transition-colors">
              Preguntas Frecuentes
            </Link>
            <Link href="/blog" className="text-primary-500 hover:text-primary-600 underline transition-colors">
              Blog de Marketing
            </Link>
            <Link href="/contact-us" className="text-primary-500 hover:text-primary-600 underline transition-colors">
              Contacto
            </Link>
          </div>

          {/* Microcopy final */}
          <div className="mt-8 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
            <p className="text-primary-700 dark:text-primary-300 font-medium">
              Nos emociona ayudarte a crecer digitalmente. Prepárate para ver resultados reales 🚀
            </p>
          </div>
        </div>
      </main>
      <FooterThree />
    </>
  );
};

export default GraciasPage;
