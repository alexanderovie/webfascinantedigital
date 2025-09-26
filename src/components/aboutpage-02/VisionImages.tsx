import vision1Img from '@public/images/about-page-02/vision-1.png';
import vision2Img from '@public/images/about-page-02/vision-2.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const VisionImages = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] pt-[100px]">
      <div className="main-container">
        <article className="flex flex-col md:flex-row gap-8">
          <RevealAnimation delay={0.5} instant={true}>
            <figure className="rounded-[20px] overflow-hidden max-w-full md:max-w-[630px]">
              <Image src={vision1Img} className="w-full h-full object-cover" alt="vision-1" />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.6} instant={true}>
            <figure className="rounded-[20px] overflow-hidden max-w-full md:max-w-[630px]">
              <Image src={vision2Img} className="w-full h-full object-cover" alt="vision-2" />
            </figure>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

export default VisionImages;
