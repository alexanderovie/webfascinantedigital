import bannerImage from '@public/images/career/banner-image.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const CareerContent = () => {
  return (
    <section className="pb-[100px] xl:pb-[100px] pt-[100px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-[70px]">
          <RevealAnimation delay={0.3}>
            <h2>
              We&apos;re building the future of digital marketing— <br className="hidden md:block" />
              come build it with us.
            </h2>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.4}>
          <figure className="mb-18">
            <Image src={bannerImage} alt="banner-image" className="rounded-2xl" />
          </figure>
        </RevealAnimation>
        <RevealAnimation delay={0.5}>
          <div className="space-y-8 max-w-[840px] mx-auto">
            <h4>Become part of a passionate community dedicated to helping Hispanic businesses thrive.</h4>
            <p>
              At Fascinante Digital, we believe that every Hispanic business deserves access to world-class digital marketing strategies. Our team is united by a common mission: to level the playing field and help Hispanic entrepreneurs dominate their local markets.
            </p>
            <p>
              We&apos;re a fast-growing digital marketing agency that combines cutting-edge SEO strategies, innovative web development, and powerful marketing automation to deliver exceptional results. Our team members are passionate about digital marketing and committed to making a real impact in the Hispanic business community.
            </p>
            <p>
              When you join Fascinante Digital, you become part of a culture that values creativity, innovation, and results. We offer competitive benefits, flexible work arrangements, and opportunities for professional growth. Most importantly, you&apos;ll work on projects that directly help Hispanic businesses grow and succeed.
            </p>
            <p>
              Our team is diverse, talented, and driven by results. We&apos;re looking for individuals who are passionate about digital marketing, eager to learn, and committed to helping our clients achieve their goals. Whether you&apos;re a seasoned expert or just starting your career, we have opportunities that will challenge and inspire you.
            </p>
            <p>
              We believe in work-life balance, continuous learning, and creating an environment where everyone can thrive. Our office culture is collaborative, supportive, and focused on delivering exceptional results for our clients. Join us and be part of something bigger than just a job—be part of a movement that&apos;s helping Hispanic businesses succeed in the digital age.
            </p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CareerContent;
