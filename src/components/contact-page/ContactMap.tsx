import RevealAnimation from '../animation/RevealAnimation';
import Map from '../shared/Map';

const ContactMap = () => {
  return (
    <section className="pt-7 pb-14 md:pb-16 lg:pb-20 xl:pb-[100px]" aria-label="Location Map">
      <div className="main-container">
        <RevealAnimation>
          <div className="rounded-[20px] bg-white dark:bg-background-6 p-2.5">
            <div className="w-full h-[300px] overflow-hidden rounded-2xl lg:h-[566px]">
              <Map />
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ContactMap;
