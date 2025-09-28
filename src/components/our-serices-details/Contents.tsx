import { IService } from '@/interface';
import getMarkDownContent from '@/utils/getMarkDownContent';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import RevealAnimation from '../animation/RevealAnimation';
import TableOfContent from './TableOfContent';
import UserReview from './UserReview';

const Contents = ({ slug }: { slug: string }) => {
  const service = getMarkDownContent('src/data/services/', slug);

  return (
    <section className="pt-8 md:pt-12 lg:pt-16 xl:pt-20 pb-24 md:pb-36 lg:pb-44 xl:pb-[200px]">
      <div className="main-container">
        <div className="flex items-start lg:gap-[72px]">
          <div className="lg:max-w-[767px] max-w-full w-full">
            <RevealAnimation delay={0.3}>
              <div className="services-details-content mb-[72px]">
                <ReactMarkdown rehypePlugins={[[rehypeRaw, { allowDangerousHtml: true }], [rehypeSlug]]}>{service.content}</ReactMarkdown>
              </div>
            </RevealAnimation>

            {/* user review  */}
            <div>
              <UserReview service={service.data as IService} />
            </div>
          </div>

          {/* Table of Contents */}
          <div className="lg:flex-shrink-0 lg:w-[449px]">
            <TableOfContent markdownContent={service.content} />
          </div>
        </div>
      </div>
    </section>
  );
};
Contents.displayName = 'Contents';
export default Contents;