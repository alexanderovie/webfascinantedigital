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
    megaMenuComponent: 'ServicesMenu',
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

// Blog Menu Data
export const blogMenuItems: MegaMenuItem[] = [
  { id: 'blog-1', label: 'Blog 01', href: '/blog-01' },
  { id: 'blog-2', label: 'Blog 02', href: '/blog-02' },
  { id: 'blog-3', label: 'Blog 03', href: '/blog-03' },
  { id: 'blog-details', label: 'Blog Details', href: '/blog/5-strategies-for-effective-brand-storytelling' },
];

// Services Menu Data
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
      { id: 'documentation', label: 'Documentation Page', href: '/documentation' },
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
      { id: 'features-1', label: 'Features Page 01', href: '/features-01' },
      { id: 'features-2', label: 'Features Page 02', href: '/features-02' },
      { id: 'integration-1', label: 'Integration Page 01', href: '/integration-01' },
      { id: 'integration-2', label: 'Integration Page 02', href: '/integration-02' },
      { id: 'integration-3', label: 'Integration Page 03', href: '/integration-03' },
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
    alt: 'NextSaaS',
    mainLogoPath: '@public/images/shared/main-logo.svg',
    logoPath: '@public/images/shared/logo.svg',
    logoDarkPath: '@public/images/shared/logo-dark.svg',
  },
  cta: {
    label: 'Get started',
    href: '/signup-01',
  },
};
