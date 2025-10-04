'use client';

import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const SuccessStories = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section id="casos-de-exito" className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] bg-background-2 dark:bg-background-5">
        <div className="main-container">
          <div className="space-y-14">
            {/* Header */}
            <div className="text-center space-y-3">
              <RevealAnimation delay={0.1}>
                <h2 className="text-secondary dark:text-accent">Casos de Éxito de Negocios Hispanos</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p className="max-w-[738px] mx-auto text-secondary/60 dark:text-accent/60">
                  Descubre cómo otros negocios latinos en EE.UU. lograron un crecimiento extraordinario con nuestras estrategias digitales personalizadas.
                </p>
              </RevealAnimation>
            </div>

            {/* Case Studies Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Caso 1 - Ana Martínez */}
              <RevealAnimation delay={0.3}>
                <div className="bg-white dark:bg-background-6 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                    <Image
                      src="/images/case-study/case-study-img-01.png"
                      alt="Ana Martínez Life Insurance"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary dark:text-accent">
                    Ana Martínez Life Insurance: 450% más Leads Calificados
                  </h3>
                  <p className="text-secondary/60 dark:text-accent/60 mb-4 text-sm">
                    Cómo una agente de seguros de vida logró un aumento del 450% en leads calificados y se posicionó como autoridad entre familias hispanas con marketing de contenido y SEO.
                  </p>
                  <Link 
                    href="/case-study#ana-martinez" 
                    className="text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors duration-200"
                  >
                    Leer más →
                  </Link>
                </div>
              </RevealAnimation>

              {/* Caso 2 - Carlos Rodríguez */}
              <RevealAnimation delay={0.4}>
                <div className="bg-white dark:bg-background-6 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                    <Image
                      src="/images/case-study/case-study-img-01.png"
                      alt="Carlos Rodríguez Health Insurance"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary dark:text-accent">
                    Carlos Rodríguez Health Insurance: 300% ROI con Google Ads
                  </h3>
                  <p className="text-secondary/60 dark:text-accent/60 mb-4 text-sm">
                    Cómo un agente de seguros médicos logró un retorno del 300% y 250% más citas calificadas con campañas estratégicas de Google Ads dirigidas a la comunidad hispana.
                  </p>
                  <Link 
                    href="/case-study#carlos-rodriguez" 
                    className="text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors duration-200"
                  >
                    Leer más →
                  </Link>
                </div>
              </RevealAnimation>

              {/* Caso 3 - Limpieza Total */}
              <RevealAnimation delay={0.5}>
                <div className="bg-white dark:bg-background-6 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                    <Image
                      src="/images/case-study/case-study-img-01.png"
                      alt="Limpieza Total"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary dark:text-accent">
                    Limpieza Total: 500% más Reservas Online
                  </h3>
                  <p className="text-secondary/60 dark:text-accent/60 mb-4 text-sm">
                    Cómo una empresa de limpieza alcanzó un aumento del 500% en reservas online y se posicionó como líder en su ciudad gracias al SEO local y Google Business Profile.
                  </p>
                  <Link 
                    href="/case-study#limpieza-total" 
                    className="text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors duration-200"
                  >
                    Leer más →
                  </Link>
                </div>
              </RevealAnimation>
            </div>

            {/* CTA */}
            <RevealAnimation delay={0.6}>
              <div className="text-center">
                <Link
                  href="/case-study"
                  className="btn btn-primary hover:btn-white-dark dark:hover:btn-white btn-md"
                >
                  Ver Todos los Casos de Éxito
                </Link>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default SuccessStories;
