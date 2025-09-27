import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import PaginationWrapper from './PaginationWrapper';

interface BlogShowcaseProps {
  category?: string;
}

const BlogShowcase = ({ category }: BlogShowcaseProps) => {
  const allBlogs: IBlogPost[] = getMarkDownData('src/data/blogs');
  
  // Filter blogs by category if provided
  const blogs = category 
    ? allBlogs.filter(blog => blog.tag.toLowerCase() === category.toLowerCase())
    : allBlogs;

  return (
    <section className="pt-7 pb-14 md:pb-16 lg:pb-20 xl:pb-[100px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-10 md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2>
              {category ? (
                <>
                  <span className="text-primary-500 inline-block capitalize">{category.replace('-', ' ')}</span> articles
                </>
              ) : (
                <>
                  Our recent <span className="text-primary-500 inline-block">news &amp; insights</span>
                </>
              )}
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="max-w-[738px] mx-auto">
              {category ? (
                `Discover expert insights and proven strategies in ${category.replace('-', ' ')}. Stay ahead with our marketing professionals' latest content and actionable tips.`
              ) : (
                `Our recent news and insights highlight the latest developments, achievements, and thought leadership shaping our journey forward. From product innovations and strategic partnerships to industry trends`
              )}
            </p>
          </RevealAnimation>
        </div>

        {/* Blog grid with pagination wrapper */}
        <PaginationWrapper blogs={blogs} />
      </div>
    </section>
  );
};

BlogShowcase.displayName = 'BlogShowcase';
export default BlogShowcase;
