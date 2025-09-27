import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const TermsConditionContent = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px] pt-[100px]">
      <div className="main-container">
        <RevealAnimation delay={0.3}>
          <div className="space-y-3">
            <h2>Terms &amp; conditions</h2>
            <div className="space-y-7">
              <p>
                This site, fascinantedigital.com (hereafter referred to as Fascinante Digital, site, or website) is owned and operated by
                Fascinante Digital LLC (hereafter referred to as Fascinante Digital, we, or company).
              </p>
              <p>
                Please carefully read, review, and understand our Terms and Conditions before using any services or
                products from fascinantedigital.com. Your access to and use of this website and its services indicate that you
                accept and agree to be bound by these terms and conditions.
              </p>
              <p>
                If you do not agree with these terms, you should leave the site immediately and not use any of the
                materials or services available here.
              </p>
            </div>
          </div>
        </RevealAnimation>
        <article className="terms-conditions-body">
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>1. Limitation of liability</h3>
              <p>
                Under no circumstances shall Fascinante Digital be liable for any direct, indirect, incidental, special, or
                consequential damages, including but not limited to loss of data, profits, or business interruption,
                arising out of the use, or inability to use, our digital marketing services, even if Fascinante Digital or an
                authorized representative has been advised of the possibility of such damages.
              </p>
              <p>
                Digital marketing results may vary and are not guaranteed. While we strive to deliver exceptional results,
                we cannot guarantee specific rankings, traffic increases, or conversion rates.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>2. Service agreements</h3>
              <p>
                Fascinante Digital services are provided under a service agreement that outlines the scope of work,
                deliverables, timelines, and payment terms. Each service package includes ongoing support and strategy
                adjustments for the duration of the agreement.
              </p>
              <p>
                Service agreements are customized based on your business needs and marketing goals. You are not permitted to
                resell, redistribute, or offer our marketing strategies, reports, or proprietary methodologies without our written
                consent.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>3. Intellectual property and ownership</h3>
              <p>
                All Fascinante Digital marketing strategies, methodologies, reports, and materials remain the intellectual property of Fascinante Digital
                LLC. You may not claim ownership of our proprietary marketing approaches, whether modified or unmodified.
              </p>
              <p>
                Our marketing services are provided &quot;as is&quot; without warranty of any kind, expressed or
                implied. Fascinante Digital is not liable for any losses or damages resulting from the use or inability to use our
                services.
              </p>
              <p>
                Client accounts and service agreements are
                <strong className="font-bold !text-secondary dark:!text-accent"> non-transferable </strong>. For
                agencies and partners: Please ensure your clients have their own service agreements if they
                require direct support access.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>4. Refund policy</h3>
              <p>
                We believe you&apos;ll love our digital marketing services! Still, if you&apos;re not satisfied, we offer a 14-day
                no-questions-asked refund policy for new clients. Simply contact our support team within 14 days of your original
                service agreement, and we&apos;ll issue a full refund. We might ask for feedback to help us improve, but
                you&apos;re under no obligation to share.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <Link
              href="/refund-policy"
              className="section-button btn dark:btn-accent hover:btn-primary btn-xl btn-secondary">
              Learn more about our refund policy
            </Link>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>5. Service warranty</h3>
              <p>
                Fascinante Digital services are provided without any warranty, either expressed or implied. We do not guarantee
                specific results, rankings, or performance metrics. Digital marketing results depend on various factors including
                market conditions, competition, and industry changes. Before starting services, you may review our case studies
                or contact our support team to discuss realistic expectations for your industry.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>6. Service termination and suspension</h3>
              <p>
                Fascinante Digital reserves the right to suspend or terminate any service agreement without prior notice for reasons
                including but not limited to
              </p>
              <ul>
                <li>Abusive, defamatory, or malicious behavior towards Fascinante Digital staff or other clients</li>
                <li>Spreading false information or misleading reviews about our services</li>
                <li>Unauthorized sharing or distribution of our marketing strategies with competitors</li>
                <li>Involvement in illegal business activities or unethical marketing practices</li>
                <li>Non-payment of services or breach of service agreement terms</li>
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>7. Privacy policy</h3>
              <p>
                We value your privacy. Fascinante Digital does not sell, rent, or share your personal information with third
                parties. Your data is used solely for purposes such as
              </p>
              <ul>
                <li>Service delivery and account management</li>
                <li>Marketing strategy development and reporting</li>
                <li>Billing and payment processing</li>
                <li>Client communication and support</li>
                <li>Legal compliance and fraud prevention</li>
              </ul>
              <p>
                By using Fascinante Digital services, you consent to the collection and use of your data by our Privacy Policy.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <Link
              href="/privacy"
              className="section-button btn btn-xl dark:btn-accent hover:btn-primary btn-secondary">
              Read our detailed privacy policy
            </Link>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

export default TermsConditionContent;
