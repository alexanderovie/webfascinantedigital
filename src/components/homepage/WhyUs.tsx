import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface FeatureItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  side: 'left' | 'right';
}

const featureItems: FeatureItem[] = [
  {
    id: 1,
    icon: 'ns-shape-15',
    title: 'SaaS y tecnología',
    description: 'Reduce costos de adquisición de clientes, aumenta registros y escala el crecimiento predecible.',
    side: 'left',
  },
  {
    id: 2,
    icon: 'ns-shape-24',
    title: 'Bienes raíces',
    description: 'Genera leads calificados, optimiza SEO local y domina búsquedas de nicho.',
    side: 'left',
  },
  {
    id: 3,
    icon: 'ns-shape-9',
    title: 'E-commerce',
    description: 'Impulsa conversiones, minimiza abandono de carrito y aumenta el valor promedio del pedido.',
    side: 'left',
  },
  {
    id: 4,
    icon: 'ns-shape-7',
    title: 'Salud',
    description: 'Construye confianza, mejora la visibilidad en búsquedas y atrae más pacientes.',
    side: 'right',
  },
  {
    id: 5,
    icon: 'ns-shape-34',
    title: 'Negocio local',
    description: 'Posiciónate localmente, gana reseñas y destaca en marketing hiperlocal.',
    side: 'right',
  },
  {
    id: 6,
    icon: 'ns-shape-36',
    title: 'Educación',
    description: 'Aumenta inscripciones, mejora la visibilidad online y compromete a los estudiantes.',
    side: 'right',
  },
];

const WhyUs = () => {
  const leftFeatures = featureItems.filter((item) => item.side === 'left');
  const rightFeatures = featureItems.filter((item) => item.side === 'right');

  return (
    <RevealAnimation delay={0.1}>
      <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
        <div className="main-container">
          <div className="py-[42px] bg-secondary rounded-4xl px-6 sm:px-14 relative z-10 overflow-hidden">
            <RevealAnimation delay={0.1} direction="right" offset={100}>
              <figure className="-z-10 absolute -right-[120%] -top-[44%] sm:-right-[100%] sm:-top-[35%] md:-right-[104%] md:-top-[78%] lg:-right-[74%] lg:-top-[78%] xl:-right-[54%] xl:-top-[58%] -rotate-[290deg] sm:-rotate-[260deg] size-[1060px] pointer-events-none select-none">
                <Image
                  src="/images/gradient/gradient-6.webp"
                  alt="gradient"
                  width={1060}
                  height={1060}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, 1060px"
                />
              </figure>
            </RevealAnimation>
            <div className="space-y-[70px] relative z-10">
              <div className="md:w-full space-y-7 text-center md:text-left">
                <div className="md:w-full space-y-3">
                  <RevealAnimation delay={0.2}>
                    <h2 className="max-w-[571px] text-accent">¿Por qué Fascinante Digital?</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <p className="max-w-[448px] md:w-full text-accent/60">
                      Estrategias comprobadas y personalizadas, diseñadas para negocios latinos que buscan crecer con
                      datos y resultados reales.
                    </p>
                  </RevealAnimation>
                </div>
                <RevealAnimation delay={0.4}>
                  <div>
                    <LinkButton href="/" className="btn btn-dark btn-md hover:btn-white">
                      explora todas las características
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>

              <div className="max-w-[1178px] mx-auto flex items-center flex-col gap-y-8 sm:gap-y-0 sm:gap-x-8 md:flex-row justify-between">
                <div className="max-w-[300px] md:w-full space-y-8">
                  {leftFeatures.map((feature, index) => (
                    <RevealAnimation key={feature.id} delay={0.5 + index * 0.1} direction="left">
                      <div className="space-y-4">
                        <div className="overflow-hidden inline-block">
                          <span className={`${feature.icon} text-[36px] text-accent`}> </span>
                        </div>
                        <div>
                          <h3 className="text-tagline-1 font-medium text-accent">{feature.title}</h3>
                          <p className="text-tagline-2 text-accent/60">{feature.description}</p>
                        </div>
                      </div>
                    </RevealAnimation>
                  ))}
                </div>

                <RevealAnimation delay={0.4} offset={100}>
                  <figure className="md:max-w-[350px] lg:max-w-[400px] xl:max-w-[480px] rounded-2xl md:w-full order-last md:order-none">
                    <Image
                      src="/images/home-page-33/feature-img.webp"
                      alt="Interfaz de plataforma de inversión mostrando características clave"
                      className="rounded-2xl"
                      width={480}
                      height={400}
                    />
                  </figure>
                </RevealAnimation>

                <div className="max-w-[300px] md:w-full space-y-8">
                  {rightFeatures.map((feature, index) => (
                    <RevealAnimation key={feature.id} delay={0.5 + index * 0.1} direction="right">
                      <div className="space-y-3">
                        <div className="overflow-hidden inline-block">
                          <span className={`${feature.icon} text-[36px] text-accent`}> </span>
                        </div>
                        <div>
                          <h3 className="text-tagline-1 font-medium text-accent">{feature.title}</h3>
                          <p className="text-tagline-2 text-accent/60">{feature.description}</p>
                        </div>
                      </div>
                    </RevealAnimation>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default WhyUs;
