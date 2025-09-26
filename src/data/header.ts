export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  hasDropdown: boolean;
  megaMenuComponent?: string;
}

export interface MegaMenuItem {
  id: string;
  label: string;
  href: string;
}

export interface MegaMenuColumn {
  id: string;
  items: MegaMenuItem[];
}

export const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    hasDropdown: false,
  },
  {
    id: 'about',
    label: 'About',
    href: '/about',
    hasDropdown: false,
  },
  {
    id: 'services',
    label: 'Services',
    href: '#',
    hasDropdown: true,
    megaMenuComponent: 'ServicesMegaMenu',
  },
  {
    id: 'faq',
    label: 'FAQ',
    href: '/faq',
    hasDropdown: false,
  },
  {
    id: 'blog',
    label: 'Blog',
    href: '/blog',
    hasDropdown: false,
  },
  {
    id: 'contact',
    label: 'Contact Us',
    href: '/contact-us',
    hasDropdown: false,
  },
];

// About Menu Data removed - About is now a direct link

// Blog Menu Data removed - Blog is now a direct link

// Services Mega Menu Data (3 columns - 36 services total)
export const servicesMegaMenuColumns: MegaMenuColumn[] = [
  {
    id: 'column-1',
    items: [
      { id: 'service-1', label: '01. Local SEO', href: '/services/local-seo' },
      { id: 'service-2', label: '02. Technical SEO', href: '/services/technical-seo' },
      { id: 'service-3', label: '03. Google Business Profile', href: '/services/google-business-profile' },
      { id: 'service-4', label: '04. Web Design & Development', href: '/services/web-design-development' },
      { id: 'service-5', label: '05. Marketing Automation', href: '/services/marketing-automation' },
      { id: 'service-6', label: '06. Social Media Advertising', href: '/services/social-media-ads' },
      { id: 'service-7', label: '07. Google Ads', href: '/services/google-ads' },
      { id: 'service-8', label: '08. Content Marketing', href: '#' },
      { id: 'service-9', label: '09. Email Marketing', href: '#' },
      { id: 'service-10', label: '10. Marketing Automation', href: '#' },
      { id: 'service-11', label: '11. PPC Management', href: '#' },
      { id: 'service-12', label: '12. Social Media Management', href: '#' },
    ],
  },
  {
    id: 'column-2',
    items: [
      { id: 'service-13', label: '13. Conversion Rate Optimization', href: '#' },
      { id: 'service-14', label: '14. Landing Page Design', href: '#' },
      { id: 'service-15', label: '15. E-commerce SEO', href: '#' },
      { id: 'service-16', label: '16. Local SEO Audit', href: '#' },
      { id: 'service-17', label: '17. Technical SEO Audit', href: '#' },
      { id: 'service-18', label: '18. Competitor Analysis', href: '#' },
      { id: 'service-19', label: '19. Keyword Research', href: '#' },
      { id: 'service-20', label: '20. Link Building', href: '#' },
      { id: 'service-21', label: '21. Content Strategy', href: '#' },
      { id: 'service-22', label: '22. Video Marketing', href: '#' },
      { id: 'service-23', label: '23. Influencer Marketing', href: '#' },
      { id: 'service-24', label: '24. Brand Development', href: '#' },
    ],
  },
  {
    id: 'column-3',
    items: [
      { id: 'service-25', label: '25. Web Analytics Setup', href: '#' },
      { id: 'service-26', label: '26. Google Tag Manager', href: '#' },
      { id: 'service-27', label: '27. Facebook Pixel Setup', href: '#' },
      { id: 'service-28', label: '28. CRM Integration', href: '#' },
      { id: 'service-29', label: '29. Lead Generation', href: '#' },
      { id: 'service-30', label: '30. Sales Funnel Design', href: '#' },
      { id: 'service-31', label: '31. A/B Testing', href: '#' },
      { id: 'service-32', label: '32. Marketing Consulting', href: '#' },
      { id: 'service-33', label: '33. Digital Strategy', href: '#' },
      { id: 'service-34', label: '34. Performance Marketing', href: '#' },
      { id: 'service-35', label: '35. Growth Hacking', href: '#' },
      { id: 'service-36', label: '36. Marketing ROI Analysis', href: '#' },
    ],
  },
];

// Services Menu Data (legacy - keeping for compatibility)
export const servicesMenuItems: MegaMenuItem[] = [
  { id: 'google-business', label: 'Google Business Profile', href: '/services/google-business-profile' },
  { id: 'local-directories', label: 'Local Directories', href: '/services/local-directories' },
  { id: 'landing-pages', label: 'Landing Pages', href: '/services/landing-pages' },
  { id: 'website-creation', label: 'Website Creation', href: '/services/website-creation' },
  { id: 'google-ads', label: 'Google Ads Campaigns', href: '/services/google-ads-campaigns' },
  { id: 'social-media-ads', label: 'Social Media Ads', href: '/services/social-media-ads' },
  { id: 'seo-optimization', label: 'SEO Optimization', href: '/services/seo-optimization' },
];

// Home Mega Menu Data removed - Home is now a direct link

// Page Mega Menu Data (4 columns)
export const pageMegaMenuColumns: MegaMenuColumn[] = [
  {
    id: 'column-1',
    items: [
      { id: 'tutorial', label: 'Tutorial Page', href: '/tutorial' },
      { id: 'faq', label: 'FAQ Page', href: '/faq' },
      { id: 'support', label: 'Support', href: '/support' },
      { id: 'career', label: 'Career Page', href: '/career' },
      { id: 'career-details', label: 'Career Details', href: '/career/information-security-specialist' },
      { id: 'changelog', label: 'Changelog Page', href: '/changelog' },
      { id: 'terms', label: 'Terms & Conditions', href: '/terms-conditions' },
      { id: 'privacy', label: 'Privacy Policy', href: '/privacy' },
      { id: 'refund', label: 'Refund Policy', href: '/refund-policy' },
    ],
  },
  {
    id: 'column-2',
    items: [
      { id: 'integration-2', label: 'Integration Page 02', href: '/integration-02' },
      { id: 'process-1', label: 'Process Page 01', href: '/process-01' },
      { id: 'process-2', label: 'Process Page 02', href: '/process-02' },
      { id: 'analytics', label: 'Analytics Page', href: '/analytics' },
      { id: 'affiliate', label: 'Affiliate Policy', href: '/affiliate-policy' },
      { id: 'gdpr', label: 'GDPR Page', href: '/gdpr' },
    ],
  },
  {
    id: 'column-3',
    items: [
      { id: 'testimonial-1', label: 'Testimonials Page 01', href: '/testimonial-01' },
      { id: 'testimonial-2', label: 'Testimonials Page 02', href: '/testimonial-02' },
      { id: 'case-study', label: 'Case Study Page', href: '/case-study' },
      {
        id: 'case-study-details',
        label: 'Case Study Details',
        href: '/case-study/cove-financial-risk-management-and-compliance',
      },
      { id: 'team-1', label: 'Our team 01', href: '/our-team-01' },
      { id: 'team-2', label: 'Our team 02', href: '/our-team-02' },
      { id: 'team-details', label: 'Team details', href: '/team/cody-fisher' },
      { id: 'pricing-1', label: 'Pricing Page 01', href: '/pricing-01' },
      { id: 'pricing-2', label: 'Pricing Page 02', href: '/pricing-02' },
      { id: 'pricing-3', label: 'Pricing Page 03', href: '/pricing-03' },
    ],
  },
  {
    id: 'column-4',
    items: [
      { id: 'login-1', label: 'Login Page 01', href: '/login-01' },
      { id: 'login-2', label: 'Login Page 02', href: '/login-02' },
      { id: 'login-3', label: 'Login Page 03', href: '/login-03' },
      { id: 'login-4', label: 'Login Page 04', href: '/login-04' },
      { id: 'signup-1', label: 'Signup Page 01', href: '/signup-01' },
      { id: 'signup-2', label: 'Signup Page 02', href: '/signup-02' },
      { id: 'signup-3', label: 'Signup Page 03', href: '/signup-03' },
      { id: 'signup-4', label: 'Signup Page 04', href: '/signup-04' },
      { id: 'use-case', label: 'Use Case', href: '/use-case' },
      { id: 'affiliates', label: 'Affiliates', href: '/affiliates' },
    ],
  },
];

export const headerConfig = {
  logo: {
    alt: 'Fascinante Digital',
    mainLogoPath: '@public/images/shared/main-logo.svg',
    logoPath: '@public/images/shared/logo.svg',
    logoDarkPath: '@public/images/shared/logo-dark.svg',
  },
  cta: {
    label: 'Get started',
    href: '/signup-01',
  },
};
