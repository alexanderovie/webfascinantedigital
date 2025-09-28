import avatar1 from '@public/images/home-page-33/avatar-1.webp';
import avatar2 from '@public/images/home-page-33/avatar-2.webp';
import avatar3 from '@public/images/home-page-33/avatar-3.webp';
import balanceDark from '@public/images/home-page-10/balance-dark.png';
import balance from '@public/images/home-page-10/balance.png';
import controlCard from '@public/images/home-page-10/control-card.png';
import dailyPaymentDark from '@public/images/home-page-10/daily-payment-dark.png';
import dailyPayment from '@public/images/home-page-10/daily-payment.png';
import earningDark from '@public/images/home-page-10/earning-dark.png';
import earning from '@public/images/home-page-10/earning.png';
import revenueDark from '@public/images/home-page-10/revenue-dark.png';
import revenue from '@public/images/home-page-10/revenue.png';
import timeIncrease from '@public/images/home-page-10/time-increase.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Services = () => {
  return (
    <section className="pt-7 pb-24 md:pb-32 lg:pb-44 xl:pb-[200px]">
      <div className="main-container">
        <div>
        </div>
        <div className="space-y-[42px] flex flex-wrap gap-4">
          <RevealAnimation delay={0.4}>
            <div className="p-7 lg:max-w-full lg:p-[42px] rounded-[20px] border border-stroke-1 dark:border-stroke-7 bg-background-1 dark:bg-background-6">
              <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 gap-y-10">
                <div className="col-span-12 lg:col-span-6">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3>SEO Optimization</h3>
                      <p className="max-w-[410px] w-full">
                        Dominate Google search results with comprehensive SEO strategies that drive organic traffic
                        and increase your online visibility and revenue.
                      </p>
                    </div>
                    <div>
                      <LinkButton
                        href="/services/seo-optimization"
                        className="btn hover:btn-primary btn-white dark:btn-transparent btn-md">
                        Read More
                      </LinkButton>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="flex items-center gap-8">
                    <figure className="max-w-[233px] w-full rounded-2xl overflow-hidden">
                      <Image src={timeIncrease} alt="Time Increase" className="w-full" />
                    </figure>
                    <figure className="max-w-[350px] w-full rounded-[20px] overflow-hidden">
                      <Image src={controlCard} alt="Control Card" className="w-full" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="p-7 lg:max-w-full lg:p-[42px] rounded-[20px] border border-stroke-1 dark:border-stroke-7 bg-background-1 dark:bg-background-6">
              <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 gap-y-10">
                <div className="col-span-12 lg:col-span-6">
                  <div className="flex items-center gap-8">
                    <figure className="max-w-[326px] max-h-[317px] h-full w-full rounded-[20px] overflow-hidden">
                      <Image src={revenue} alt="Revenue" className="w-full h-full object-cover dark:hidden" />
                      <Image src={revenueDark} alt="Revenue" className="w-full h-full object-cover hidden dark:block" />
                    </figure>
                    <figure className="max-w-[255px] max-h-[178px] h-full w-full rounded-2xl overflow-hidden">
                      <Image src={balance} alt="Balance" className="w-full h-full object-cover dark:hidden" />
                      <Image src={balanceDark} alt="Balance" className="w-full h-full object-cover hidden dark:block" />
                    </figure>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3>Google Ads Management</h3>
                      <p className="max-w-[493px] w-full">
                        Maximize your advertising ROI with strategic Google Ads campaigns that target high-intent
                        customers and drive qualified leads to your business.
                      </p>
                    </div>
                    <div>
                      <LinkButton
                        href="/services/google-ads"
                        className="btn hover:btn-primary btn-white dark:btn-transparent btn-md">
                        View More
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="p-7 lg:max-w-full lg:p-[42px] rounded-[20px] border border-stroke-1 dark:border-stroke-7 bg-background-1 dark:bg-background-6">
              <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 gap-y-10">
                <div className="col-span-12 lg:col-span-6">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3>Web Design &amp; Development</h3>
                      <p className="max-w-[380px] w-full">
                        Create stunning, conversion-focused websites that load fast, rank well, and turn visitors
                        into customers with professional design and development.
                      </p>
                    </div>
                    <div>
                      <LinkButton
                        href="/services/web-design-development"
                        className="btn hover:btn-primary btn-white dark:btn-transparent btn-md">
                        View More
                      </LinkButton>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="flex items-start gap-8">
                    <figure className="max-w-[350px] max-h-[345px] h-full w-full rounded-[20px] overflow-hidden">
                      <Image src={earning} alt="Earning" className="w-full h-full object-cover dark:hidden" />
                      <Image src={earningDark} alt="Earning" className="w-full h-full object-cover hidden dark:block" />
                    </figure>
                    <div className="space-y-8">
                      <figure className="max-w-[286px] max-h-[190px] h-full w-full rounded-2xl overflow-hidden">
                        <Image
                          src={dailyPayment}
                          alt="Daily Payment"
                          className="w-full h-full object-cover dark:hidden"
                        />
                        <Image
                          src={dailyPaymentDark}
                          alt="Daily Payment"
                          className="w-full h-full object-cover hidden dark:block"
                        />
                      </figure>
                      <div>
                        <div className="space-y-4">
                          <div className="flex -space-x-3.5 cursor-pointer">
                            <Image
                              className="inline-block size-11 rounded-full ring-4 ring-white bg-ns-green"
                              src={avatar1}
                              alt="Avatar 1"
                            />
                            <Image
                              className="inline-block size-11 rounded-full ring-4 ring-white bg-ns-green"
                              src={avatar2}
                              alt="Avatar 2"
                            />
                            <Image
                              className="inline-block size-11 rounded-full relative z-0 ring-4 ring-white bg-ns-green"
                              src={avatar3}
                              alt="Avatar 3"
                            />
                            <div className="inline-flex items-center relative z-10 justify-center size-11 bg-ns-green rounded-full ring-4 ring-white text-secondary/80 text-tagline-3 font-medium">
                              99+
                            </div>
                          </div>
                          <div>
                            <p className="font-medium text-secondary dark:text-accent">Trusted by 20k+</p>
                            <p className="text-tagline-2 font-normal">Customers across the globe</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.7}>
            <div className="p-7 lg:max-w-full lg:p-[42px] rounded-[20px] border border-stroke-1 dark:border-stroke-7 bg-background-1 dark:bg-background-6">
              <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 gap-y-10">
                <div className="col-span-12 lg:col-span-6">
                  <div className="flex items-start -space-x-20">
                    <figure className="max-w-[408px] w-full rounded-[20px] overflow-hidden">
                      <Image src={revenue} alt="Revenue" className="w-full h-full object-cover dark:hidden" />
                      <Image src={revenueDark} alt="Revenue" className="w-full h-full object-cover hidden dark:block" />
                    </figure>
                    <figure className="max-w-[225px] w-full rounded-2xl overflow-hidden mt-4">
                      <Image src={balance} alt="Balance" className="w-full h-full object-cover dark:hidden" />
                      <Image src={balanceDark} alt="Balance" className="w-full h-full object-cover hidden dark:block" />
                    </figure>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3>Marketing Automation</h3>
                      <p className="max-w-[493px] w-full">
                        Streamline your marketing efforts with automated campaigns that nurture leads, increase
                        conversions, and scale your business growth without extra manual work.
                      </p>
                    </div>
                    <div>
                      <LinkButton
                        href="/services/marketing-automation"
                        className="btn hover:btn-primary btn-white dark:btn-transparent btn-md">
                        Read More
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Services;
