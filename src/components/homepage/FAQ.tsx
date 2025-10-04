'use client';

import RevealAnimation from '../animation/RevealAnimation';

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: '¿Cómo funciona el SEO para negocios latinos en EE.UU.?',
      answer: 'Optimizamos tu sitio web para aparecer en búsquedas locales y nacionales. Trabajamos con palabras clave en español e inglés para captar clientes hispanos que buscan tus servicios.'
    },
    {
      id: 2,
      question: '¿Cuánto tiempo toma ver resultados con marketing digital?',
      answer: 'Los primeros resultados aparecen en 30-60 días. El crecimiento sostenido comienza a los 3-6 meses. Cada negocio es diferente, pero nuestros clientes ven mejoras constantes.'
    },
    {
      id: 3,
      question: '¿Trabajan con presupuestos pequeños?',
      answer: 'Sí. Creamos estrategias personalizadas para cada presupuesto. Desde $500/mes para SEO básico hasta campañas completas de $5,000/mes. Siempre con ROI positivo.'
    },
    {
      id: 4,
      question: '¿Qué incluye la auditoría gratuita?',
      answer: 'Análisis completo de tu sitio web, competencia local, palabras clave, Google Business Profile y redes sociales. Te damos un plan de acción claro con prioridades específicas.'
    },
    {
      id: 5,
      question: '¿Manejan Google Ads para la comunidad hispana?',
      answer: 'Absolutamente. Creamos campañas en español e inglés dirigidas a latinos en EE.UU. Conocemos las diferencias culturales y lingüísticas que generan mejores conversiones.'
    },
    {
      id: 6,
      question: '¿Ofrecen soporte en español?',
      answer: 'Sí, todo nuestro equipo habla español nativo. Reuniones, reportes y comunicación 100% en español. Entendemos tu cultura y tu negocio.'
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
                <h2 className="text-secondary dark:text-accent">
                  Preguntas Frecuentes sobre Marketing Digital
                  <br className="hidden lg:block" />
                  <span className="lg:hidden"> </span>para Latinos
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p className="max-w-[600px] mx-auto text-secondary/60 dark:text-accent/60">
                  Respuestas claras a las dudas más comunes de empresarios hispanos sobre marketing digital en EE.UU.
                </p>
              </RevealAnimation>
            </div>

            {/* FAQ Grid */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {faqData.map((faq, index) => (
                <RevealAnimation key={faq.id} delay={0.3 + index * 0.1}>
                  <div className="bg-white dark:bg-background-6 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-lg font-semibold mb-3 text-secondary dark:text-accent">
                      {faq.question}
                    </h3>
                    <p className="text-secondary/60 dark:text-accent/60 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </RevealAnimation>
              ))}
            </div>

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
