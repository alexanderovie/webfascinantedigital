'use client';

import RevealAnimation from '../animation/RevealAnimation';
import BotonCal from '../shared/BotonCal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: '¿Por qué elegir Fascinante Digital?',
      answer:
        'Ayudamos a negocios hispanos a aparecer primero en Google. Usamos SEO, Meta Ads, Google Ads, LinkedIn Ads, TikTok Ads, YouTube Ads y marketing automático. Los resultados son claros y medibles.',
    },
    {
      id: 2,
      question: '¿Qué servicios ofrecen?',
      answer:
        'SEO local, Google Business Profile (optimización y verificación), Meta Ads, Google Ads, LinkedIn Ads, TikTok Ads, YouTube Ads, sitios web profesionales, publicidad paga y marketing automático. Todo lo que necesitas para crecer online.',
    },
    {
      id: 3,
      question: '¿Cuándo veré resultados?',
      answer:
        'Los primeros resultados aparecen en 1-2 meses. El crecimiento fuerte viene en 3-6 meses. Te enviamos reportes cada mes para que veas el progreso.',
    },
    {
      id: 4,
      question: '¿Trabajan con otros negocios?',
      answer:
        'Sí, trabajamos con todos los negocios. Pero somos expertos en ayudar a latinos. Nuestras estrategias funcionan para cualquier negocio que quiera crecer.',
    },
    {
      id: 5,
      question: '¿Cuánto cuesta?',
      answer:
        'Los precios dependen de tu negocio y presupuesto. Tenemos paquetes desde $500 hasta $5,000 por mes. Te damos una consulta gratis para ver qué necesitas.',
    },
    {
      id: 6,
      question: '¿Me envían reportes?',
      answer:
        'Sí, cada mes te enviamos un reporte. Te mostramos cuántas personas visitan tu sitio, dónde apareces en Google y cuántos clientes nuevos tienes. Así sabes que tu dinero está funcionando.',
    },
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
                    <AccordionContent value={item.id.toString()}>
                      <div className="space-y-3">
                        <p>{item.answer}</p>
                      </div>
                    </AccordionContent>
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
                <BotonCal className="btn btn-primary hover:btn-white-dark dark:hover:btn-white btn-md">
                  Hablar con un Experto
                </BotonCal>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default FAQ;
