import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
// import RevealAnimation from '../animation/RevealAnimation'; // Unused
import FeaturedBlogSwiper from './FeaturedBlogSwiper';

const FeaturedBlog = () => {
  const featuredBlogs: IBlogPost[] = getMarkDownData('src/data/blogs').slice(0, 4);

  return (
    <section className="pt-7 pb-14 md:pb-16 lg:pb-20 xl:pb-[100px] bg-red-100">
      <div className="main-container bg-blue-200">
        <div className="bg-green-300">
          <div className="text-center bg-yellow-200">
          </div>
          {/* Featured blog swiper */}
          <div className="bg-purple-200">
            <FeaturedBlogSwiper featuredBlogs={featuredBlogs} />
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturedBlog.displayName = 'FeaturedBlog';
export default FeaturedBlog;
