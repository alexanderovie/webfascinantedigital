'use client';

import { cn } from '@/utils/cn';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import gradient22Img from '../../../public/images/gradient/gradient-22.webp';
import RevealAnimation from '../animation/RevealAnimation';

const Marquee = dynamic(() => import('react-fast-marquee'), {
  ssr: false,
  loading: () => <div className="flex gap-x-10 items-center scroll-bar" />,
});

interface TestimonialCard {
  id: number;
  name: string;
  company: string;
  avatar: string;
  testimonial: string;
  twitterUrl: string;
}

const testimonialCards: TestimonialCard[] = [
  {
    id: 1,
    name: 'Alexander Oviedo',
    company: 'Fascinante Digital',
    avatar: '/images/avatar/avatar-alexander-oviedo.webp',
    testimonial:
      'Fascinante Digital transformó nuestra estrategia de SEO local. Pasamos de la página 3 al #1 para nuestras palabras clave principales, y nuestro tráfico orgánico aumentó 450%. Los resultados hablan por sí solos.',
    twitterUrl: 'https://x.com/heystaticmania',
  },
  {
    id: 2,
    name: 'Roberto Silva',
    company: 'Bufete de Abogados Silva & Asociados',
    avatar: '/images/home-page-33/avatar-5.webp',
    testimonial:
      'Trabajar con Fascinante Digital fue un cambio total para nuestro bufete. Crearon un sitio web increíble que carga rápido, se ve profesional, y recibimos elogios de clientes todos los días.',
    twitterUrl: 'https://x.com/heystaticmania',
  },
  {
    id: 3,
    name: 'Miguel López',
    company: 'Clínica Dental West Palm Beach',
    avatar: '/images/home-page-33/avatar-6.webp',
    testimonial:
      'Nuestra optimización SEO con Fascinante Digital ha sido increíble. Pasamos de la página 3 al #1 para nuestras palabras clave principales, y nuestro tráfico orgánico aumentó 450%. ¡Altamente recomendado!',
    twitterUrl: 'https://x.com/heystaticmania',
  },
  {
    id: 4,
    name: 'Carmen Vega',
    company: 'Restaurante El Sabor Latino',
    avatar: '/images/avatar/avatar-7.png',
    testimonial:
      'El perfil de Google Business que crearon para nuestro restaurante nos trajo 3 veces más clientes. Ahora aparecemos en las primeras búsquedas locales y las reservas no paran de llegar.',
    twitterUrl: 'https://x.com/heystaticmania',
  },
];

const Testimonial = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[150px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[150px] bg-background-3 dark:bg-background-7">
        <div className="main-container">
          <div className="mb-[72px] text-center">
            <RevealAnimation delay={0.1}>
              <h2 className="text-secondary dark:text-accent">Palabras de Nuestros Clientes</h2>
            </RevealAnimation>
          </div>
        </div>

        <RevealAnimation delay={0.2}>
          <div className="relative">
            <div className="from-background-3 dark:from-background-7 absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r to-transparent md:w-[20%]" />
            <div className="from-background-3 dark:from-background-7 absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l to-transparent md:w-[20%]" />
            <Marquee>
              <div className="flex gap-x-10 items-center scroll-bar">
                {testimonialCards.map((testimonial, index) => (
                  <article
                    key={testimonial.id}
                    className={cn(
                      'bg-white dark:bg-background-5 rounded-[12px] lg:rounded-[20px] min-w-[320px] sm:min-w-[400px] cursor-pointer lg:min-w-[722px] space-y-6 lg:space-y-10 p-4 lg:p-14 backdrop-blur-[22px] relative group transition-all duration-500 ease-in-out hover:bg-secondary hover:dark:bg-background-8 overflow-hidden',
                      index === 0 && 'ml-10',
                    )}>
                    <div className="absolute -top-[147%] lg:-top-[162%] -right-[56%] lg:-right-[56%] max-w-[500px] lg:max-w-[723px] blur-[10px] rotate-[295deg] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out select-none pointer-events-none">
                      <Image
                        src={gradient22Img}
                        alt="gradient"
                        className="size-full object-cover"
                        width={723}
                        height={500}
                      />
                    </div>
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-2">
                        <figure className="size-[60px] md:size-[84px] rounded-full overflow-hidden transform group-hover:scale-[102%] transition-transform duration-500 ease-in-out">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="size-full object-cover bg-linear-[156deg,#a585ff_32.92%,#A585FF_91%]"
                            width={84}
                            height={84}
                          />
                        </figure>
                        <div className="space-y-1">
                          <h3 className="text-tagline-2 font-semibold group-hover:text-accent transition-all duration-500 ease-in-out transform group-hover:-translate-y-0.5 group-hover:transition-transform">
                            {testimonial.name}
                          </h3>
                          <p className="text-tagline-3 group-hover:text-accent/60 transition-all duration-500 ease-in-out transform group-hover:-translate-y-0.5 group-hover:transition-transform">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${testimonial.name}'s Twitter`}
                        href={testimonial.twitterUrl}
                        className="w-[74px] h-11 rounded-[360px] backdrop-blur-[15px] px-2.5 py-1 inline-flex items-center justify-center transition-all duration-500 ease-in-out bg-background-3 dark:bg-background-6 group-hover:bg-background-1 group-hover:dark:bg-background-7 hover:shadow-4 hover:scale-110">
                        <Image src="/images/icons/x.svg" alt="twitter" className="dark:invert" width={20} height={20} />
                      </Link>
                    </div>
                    <blockquote>
                      <p className="max-w-[530px] text-wrap group-hover:text-accent/60 transition-all duration-500 ease-in-out transform group-hover:translate-x-1">
                        {testimonial.testimonial}
                      </p>
                    </blockquote>
                  </article>
                ))}
              </div>
            </Marquee>
          </div>
        </RevealAnimation>
      </section>
    </RevealAnimation>
  );
};

export default Testimonial;
