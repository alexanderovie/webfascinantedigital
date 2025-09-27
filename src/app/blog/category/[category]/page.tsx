import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import { notFound } from 'next/navigation';
import BlogShowcase from '@/components/blog-02/BlogShowcase';
import FeaturedBlog from '@/components/blog-02/FeaturedBlog';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

// Generate metadata for each category
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = params.category;
  const categoryDisplayName = category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${categoryDisplayName} | Blog - Fascinante Digital`,
    description: `Explore our latest ${categoryDisplayName} insights, strategies, and tips. Expert content from Fascinante Digital's marketing professionals.`,
    alternates: {
      canonical: `/blog/category/${category}`,
    },
  };
}

// Generate static params for all categories
export async function generateStaticParams() {
  const blogs: IBlogPost[] = getMarkDownData('src/data/blogs');
  const categories = [...new Set(blogs.map(blog => blog.tag.toLowerCase()))];
  
  return categories.map((category) => ({
    category: category,
  }));
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  const { category } = params;
  const allBlogs: IBlogPost[] = getMarkDownData('src/data/blogs');
  
  // Filter blogs by category
  const categoryBlogs = allBlogs.filter(blog => 
    blog.tag.toLowerCase() === category.toLowerCase()
  );

  // If no blogs found for this category, show 404
  if (categoryBlogs.length === 0) {
    notFound();
  }

  const categoryDisplayName = category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <>
      <NavbarOne
        className="bg-white dark:border border-stroke-6 dark:bg-background-9"
        btnClassName="btn-secondary hover:btn-white dark:hover:btn-white-dark dark:btn-accent"
      />
      <main className="bg-background-4 dark:bg-background-9">
        <PageHero 
          title={`${categoryDisplayName} Articles`}
          heading={`Latest ${categoryDisplayName} Insights & Strategies`}
          description={`Discover expert insights, proven strategies, and actionable tips in ${categoryDisplayName}. Stay ahead with our marketing professionals' latest content.`}
          link={`/blog/category/${category}`}
          badge={categoryDisplayName}
          badgeClass="badge-blue-soft"
        />
        <FeaturedBlog />
        <BlogShowcase category={category} />
        <CTAV1
          className="dark:bg-background-7 bg-white"
          badgeClass="!badge-yellow-v2"
          badgeText="Get started"
          ctaHeading="Ready to implement these strategies?"
          description="Let our marketing experts help you apply these insights to grow your business."
          ctaBtnText="Get started"
        />
      </main>
      <FooterThree />
    </>
  );
};

export default CategoryPage;
