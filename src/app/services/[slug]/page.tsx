import Contents from '@/components/our-serices-details/Contents';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import getMarkDownData from '@/utils/getMarkDownData';
import getMarkDownContent from '@/utils/getMarkDownContent';
import type { Metadata, ResolvingMetadata } from 'next';
import { Fragment } from 'react';

export async function generateStaticParams() {
  const services = getMarkDownData('src/data/services');
  return services.map((service) => ({
    slug: service.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const service = getMarkDownContent('src/data/services/', slug);
  
  // Acceder a metadatos del layout padre
  const previousImages = (await parent).openGraph?.images || []
  
  return {
    title: `${service.data.title} - Fascinante Digital`,
    description: service.data.description,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: service.data.title,
      description: service.data.description,
      url: `https://fascinantedigital.com/services/${slug}`,
      type: 'website',
      images: [
        {
          url: `https://fascinantedigital.com${service.data.coverImg}`,
          width: 1200,
          height: 630,
          alt: service.data.title,
        },
        ...previousImages, // Mantener imágenes del layout padre como fallback
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.data.title,
      description: service.data.description,
      images: [`https://fascinantedigital.com${service.data.coverImg}`],
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
          badge="Our Services"
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
