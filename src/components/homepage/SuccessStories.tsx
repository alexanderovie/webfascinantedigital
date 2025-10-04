'use client';

import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const SuccessStories = () => {
  return (
    <section
      id="casos-de-exito"
      className="pt-20 pb-28 md:pt-32 md:pb-32 lg:pt-[128px] lg:pb-[128px] xl:pt-[100px] xl:pb-[100px] bg-background-2 dark:bg-background-5"
      aria-label="Casos de éxito de negocios hispanos">
      <div className="main-container">
        <div className="text-center mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-blue-modern mb-5">Casos de Éxito</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">Casos de Éxito de Negocios Hispanos</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-w-[738px] mx-auto">
              Descubre cómo otros negocios latinos en EE.UU. lograron un crecimiento extraordinario con nuestras estrategias digitales personalizadas.
            </p>
          </RevealAnimation>
        </div>

        {/* Primera fila de casos */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-10 mb-8">
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
        </div>

        {/* Segunda fila de casos */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-10">
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

          {/* Caso 4 - Restaurante El Sabor */}
          <RevealAnimation delay={0.6}>
            <div className="bg-white dark:bg-background-6 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                <Image
                  src="/images/case-study/case-study-img-01.png"
                  alt="Restaurante El Sabor"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary dark:text-accent">
                Restaurante El Sabor: 300% más Pedidos Online
              </h3>
              <p className="text-secondary/60 dark:text-accent/60 mb-4 text-sm">
                Cómo un restaurante mexicano triplicó sus pedidos online y se convirtió en el favorito de la comunidad hispana local con Google Business Profile y marketing en redes sociales.
              </p>
              <Link
                href="/case-study#restaurante-el-sabor"
                className="text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors duration-200"
              >
                Leer más →
              </Link>
            </div>
          </RevealAnimation>
        </div>

        <div className="flex justify-center mt-7 md:mt-14">
          <RevealAnimation delay={0.7}>
            <Link
              href="/case-study"
              className="btn btn-secondary hover:btn-white dark:hover:btn-accent dark:btn-transparent btn-md"
              aria-label="Ver todos los casos de éxito">
              Ver Todos los Casos de Éxito
            </Link>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
