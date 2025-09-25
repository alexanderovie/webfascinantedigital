import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import FeaturedBlogSwiper from './FeaturedBlogSwiper';

const FeaturedBlog = () => {
  const featuredBlogs: IBlogPost[] = getMarkDownData('src/data/blogs').slice(0, 4);

  return (
    <section className="pt-7 pb-14 md:pb-16 lg:pb-20 xl:pb-[100px]">
      <div className="main-container">
        <div className="space-y-14 md:space-y-[70px]">
          <div className="text-center">
          </div>
          {/* Featured blog swiper */}
          <FeaturedBlogSwiper featuredBlogs={featuredBlogs} />
        </div>
      </div>
    </section>
  );
};

FeaturedBlog.displayName = 'FeaturedBlog';
export default FeaturedBlog;
