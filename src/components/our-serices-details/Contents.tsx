import { IService } from '@/interface';
import getMarkDownContent from '@/utils/getMarkDownContent';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import RevealAnimation from '../animation/RevealAnimation';
import TableOfContent from './TableOfContent';
import UserReview from './UserReview';

const Contents = ({ slug }: { slug: string }) => {
  const service = getMarkDownContent('src/data/services/', slug);

  return (
    <section className="pt-8 md:pt-12 lg:pt-16 xl:pt-20 pb-24 md:pb-36 lg:pb-44 xl:pb-[200px] bg-red-100">
      <div className="main-container bg-blue-100">
        <div className="flex items-start lg:gap-[72px] bg-green-100">
          <div className="lg:max-w-[767px] max-w-full w-full bg-yellow-100">
            <RevealAnimation delay={0.3}>
              <div className="services-details-content mb-[72px] bg-purple-100 p-4">
                <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{service.content}</ReactMarkdown>
              </div>
            </RevealAnimation>

            {/* user review  */}
            <div className="bg-pink-100 p-4">
              <UserReview service={service.data as IService} />
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-indigo-100 p-4">
            <TableOfContent markdownContent={service.content} />
          </div>
        </div>
      </div>
    </section>
  );
};
Contents.displayName = 'Contents';
export default Contents;