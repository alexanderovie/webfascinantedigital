'use client';

import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: '¿Qué hace diferente a Fascinante Digital de otras agencias de marketing?',
      answer: 'Fascinante Digital se especializa en ayudar a negocios hispanos a dominar los resultados de búsqueda de Google y hacer crecer sus ingresos. Combinamos estrategias de SEO probadas, optimización de Google Ads y automatización de marketing para entregar resultados medibles a negocios latinos en EE.UU.'
    },
    {
      id: 2,
      question: '¿Qué servicios de marketing digital ofrece Fascinante Digital?',
      answer: 'Ofrecemos servicios integrales de marketing digital incluyendo SEO Local, SEO Técnico, optimización de Google Business Profile, gestión de Google Ads, diseño y desarrollo web, automatización de marketing, publicidad en redes sociales, marketing de contenido y optimización de tasa de conversión.'
    },
    {
      id: 3,
      question: '¿Cuánto tiempo toma ver resultados con SEO?',
      answer: 'Los resultados de SEO típicamente comienzan a mostrarse en 3-6 meses, con mejoras significativas en 6-12 meses. Sin embargo, nuestros clientes a menudo ven mejoras iniciales en rankings de búsqueda local en 30-60 días. Proporcionamos reportes mensuales para rastrear el progreso y ROI.'
    },
    {
      id: 4,
      question: '¿Trabajan con negocios fuera del mercado hispano?',
      answer: 'Aunque nos especializamos en ayudar a negocios hispanos, trabajamos con todos los negocios que quieren llegar a audiencias latinas o mejorar su marketing digital. Nuestras estrategias son efectivas para cualquier negocio que busque dominar los resultados de búsqueda local y hacer crecer sus ingresos.'
    },
    {
      id: 5,
      question: '¿Cuál es su estructura de precios para servicios de marketing digital?',
      answer: 'Nuestros precios se personalizan según las necesidades, objetivos y presupuesto de tu negocio. Ofrecemos paquetes flexibles para SEO Local, gestión de Google Ads, desarrollo web y automatización de marketing. Contáctanos para una consulta gratuita y cotización personalizada.'
    },
    {
      id: 6,
      question: '¿Proporcionan reportes mensuales y analíticas?',
      answer: 'Sí, proporcionamos reportes mensuales detallados mostrando el tráfico de tu sitio web, rankings de búsqueda, rendimiento de Google Ads, generación de leads y ROI. Nuestras analíticas te ayudan a entender exactamente cómo tu inversión en marketing digital está haciendo crecer tu negocio.'
    }
  ];

  return (
    <RevealAnimation delay={0.1}>
      <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] bg-background-3 dark:bg-background-7">
        <div className="main-container">
          <div className="space-y-14">
            {/* Header */}
            <div className="text-center space-y-3">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-cyan mb-5">FAQ</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="text-secondary dark:text-accent">
                  Preguntas Frecuentes sobre Marketing
                  <br className="hidden lg:block" />
                  <span className="lg:hidden"> </span>Digital para Latinos
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="max-w-[600px] mx-auto text-secondary/60 dark:text-accent/60">
                  Respuestas claras a las dudas más comunes de empresarios hispanos sobre marketing digital en EE.UU.
                </p>
              </RevealAnimation>
            </div>

            {/* FAQ Accordion */}
            <RevealAnimation delay={0.4}>
              <Accordion
                className="mx-auto w-full max-w-[850px] space-y-4"
                defaultValue="1"
                enableScrollAnimation={true}
                animationDelay={0.1}>
                {faqData.map((item) => (
                  <AccordionItem
                    className="dark:bg-background-7 rounded-[20px] bg-white px-6 sm:px-8"
                    key={item.id}
                    value={item.id.toString()}>
                    <AccordionTrigger
                      titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                      className="flex w-full cursor-pointer items-center justify-between pt-5 pb-5 sm:pt-8 sm:pb-8"
                      value={item.id.toString()}
                      iconType="arrow">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent value={item.id.toString()}>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </RevealAnimation>

            {/* CTA */}
            <RevealAnimation delay={0.8}>
              <div className="text-center">
                <p className="text-secondary/60 dark:text-accent/60 mb-4">
                  ¿Tienes más preguntas? Te respondemos en español.
                </p>
                <a
                  href="https://cal.fascinantedigital.com/fascinante/consultoria-estrategica-digital?user=FASCINANTE"
                  className="btn btn-primary hover:btn-white-dark dark:hover:btn-white btn-md"
                >
                  Hablar con un Experto
                </a>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default FAQ;
