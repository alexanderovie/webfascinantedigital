import BlogContent from '@/components/blod-details/BlogContent';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import getMarkDownContent from '@/utils/getMarkDownContent';
import getMarkDownData from '@/utils/getMarkDownData';
import { formatCategory } from '@/utils/formatCategory';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateStaticParams() {
  const blogs = getMarkDownData('src/data/blogs');
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug
  const blogContent = getMarkDownContent('src/data/blogs/', slug)
  
  // Acceder a metadatos del layout padre
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: blogContent.data.title,
    description: blogContent.data.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: blogContent.data.title,
      description: blogContent.data.description,
      type: 'article',
      publishedTime: blogContent.data.publishDate,
      authors: [blogContent.data.author],
      images: [
        {
          url: `https://fascinantedigital.com${blogContent.data.thumbnail}`,
          width: 1200,
          height: 630,
          alt: blogContent.data.title,
        },
        ...previousImages, // Mantener imágenes del layout padre como fallback
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blogContent.data.title,
      description: blogContent.data.description,
      images: [`https://fascinantedigital.com${blogContent.data.thumbnail}`],
    },
  }
}

const BlogDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  const blogContent = getMarkDownContent('src/data/blogs/', slug);
  const categoryTitle = formatCategory(blogContent.data.tag) + ' Articles';

  return (
    <>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title={categoryTitle} heading="Blog" />
        <BlogContent blog={blogContent} />
        <CTAV1
          className="dark:bg-background-7 bg-white"
          badgeClass="!badge-yellow-v2"
          badgeText="Get started"
          ctaHeading="Build a complete website using the assistance"
          description="Start your free trial today and see your ideas come to life easily and creatively."
          ctaBtnText="Get started"
        />
      </main>
      <FooterThree />
    </>
  );
};

export default BlogDetails;
