import Contents from '@/components/our-serices-details/Contents';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import getMarkDownData from '@/utils/getMarkDownData';
import getMarkDownContent from '@/utils/getMarkDownContent';
import { Metadata } from 'next';
import { Fragment } from 'react';

export async function generateStaticParams() {
  const services = getMarkDownData('src/data/services');
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const service = getMarkDownContent('src/data/services/', slug);
  
  return {
    title: `${service.data.title} - Fascinante Digital`,
    description: service.data.description,
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

const ServiceDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const service = getMarkDownContent('src/data/services/', slug);

  return (
    <Fragment>
      <NavbarOne
        className="bg-white/60 backdrop-blur-[25px] dark:border dark:border-stroke-7 dark:bg-background-7"
        btnClassName="btn-secondary hover:btn-primary dark:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero 
          title="Services" 
          heading={service.data.title} 
          link="/services"
          badge={service.data.title}
          badgeClass="badge-blue-soft"
        />
        <Contents slug={slug} />
        <CTAV1
          className="dark:bg-background-6 bg-white"
          badgeClass="hidden"
          ctaHeading="Ready To Grow With Fascinante Digital?"
          description="Let's discuss how we can help your business achieve its digital marketing goals. Get started with a free consultation today."
          btnClass="hover:btn-secondary dark:hover:btn-accent"
          ctaBtnText="Get Started"
        />
      </main>
      <FooterThree />
    </Fragment>
  );
};

export default ServiceDetails;
