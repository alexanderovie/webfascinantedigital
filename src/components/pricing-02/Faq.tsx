import faqImgDark from '@public/images/home-page-5/faq-img-01-dark.png';
import faqImg from '@public/images/home-page-5/faq-img-01.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const Faq = () => {
  return (
    <section
      className="py-[50px] md:py-[70px] lg:py-[85px] xl:pb-[100px] xl:pt-[200px]"
      aria-label="Frequently Asked Questions">
      <div className="main-container">
        <div className="flex items-center flex-col gap-8 lg:gap-0 lg:flex-row justify-between">
          <div className="space-y-14 text-center lg:text-left flex-1">
            <div className="space-y-5">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-cyan">FAQ</span>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h2 className="lg:max-w-[439px] mx-auto lg:mx-0" id="faq-heading">
                  Preguntas Frecuentes
                </h2>
              </RevealAnimation>
            </div>

            {/* faq accordion  */}
            <RevealAnimation delay={0.4}>
              <Accordion className="max-w-[576px] mx-auto lg:mx-0 w-full" defaultValue="1">
                <AccordionItem value="1">
                  <AccordionTrigger
                    className="flex items-center cursor-pointer justify-between pt-6 pb-6 w-full"
                    titleClassName="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                    value="1"
                    iconType="arrow">
                    ¿Qué servicios de marketing digital incluye cada plan?
                  </AccordionTrigger>

                  <AccordionContent value="1">
                    Nuestros planes incluyen SEO local, optimización del Perfil de Google Business, gestión de Google
                    Ads, redes sociales, desarrollo web y automatización de marketing. El plan Starter se centra en la
                    visibilidad local, el Professional añade publicidad de pago, y el Enterprise integra automatización
                    total y soporte dedicado.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="2">
                  <AccordionTrigger
                    className="flex items-center cursor-pointer justify-between pt-6 pb-6 w-full"
                    titleClassName="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                    value="2"
                    iconType="arrow">
                    How long does it take to see results from SEO?
                  </AccordionTrigger>

                  <AccordionContent value="2">
                    SEO results typically start showing within 3-6 months, with significant improvements in 6-12 months.
                    However, our clients often see initial improvements in local search rankings within 30-60 days. We
                    provide monthly reports to track progress and ROI.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="3">
                  <AccordionTrigger
                    className="flex items-center cursor-pointer justify-between pt-6 pb-6 w-full"
                    titleClassName="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                    value="3"
                    iconType="arrow">
                    Can I change my plan later?
                  </AccordionTrigger>

                  <AccordionContent value="3">
                    Yes, you can upgrade or downgrade your plan at any time. We understand that business needs change,
                    and we&apos;re flexible with our pricing plans. Contact us to discuss plan changes and we&apos;ll
                    help you transition smoothly.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="4">
                  <AccordionTrigger
                    className="flex items-center cursor-pointer justify-between pt-6 pb-6 w-full"
                    titleClassName="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                    value="4"
                    iconType="arrow">
                    Do you provide monthly reports and analytics?
                  </AccordionTrigger>

                  <AccordionContent value="4">
                    Yes, we provide detailed monthly reports showing your website traffic, search rankings, Google Ads
                    performance, lead generation, and ROI. Our analytics help you understand exactly how your digital
                    marketing investment is growing your business.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </RevealAnimation>
          </div>

          {/* <!-- faq image --> */}
          <RevealAnimation delay={0.3}>
            <figure className="w-full relative max-w-[684px] overflow-hidden flex-1">
              <Image
                className="size-full object-cover dark:hidden"
                src={faqImg}
                alt="Business agency services illustration"
                loading="lazy"
              />
              <Image
                className="size-full object-cover dark:inline-block hidden"
                src={faqImgDark}
                alt="Business agency services illustration"
                loading="lazy"
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Faq;
