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
    label: 'Inicio',
    href: '/',
    hasDropdown: false,
  },
  {
    id: 'about',
    label: 'Nosotros',
    href: '/about',
    hasDropdown: false,
  },
  {
    id: 'services',
    label: 'Servicios',
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
    label: 'Contáctanos',
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
      { id: 'service-1', label: '01. SEO Local', href: '/services/local-seo' },
      { id: 'service-2', label: '02. SEO Técnico', href: '/services/technical-seo' },
      { id: 'service-3', label: '03. Perfil de Negocio Google', href: '/services/google-business-profile' },
      { id: 'service-4', label: '04. Diseño y Desarrollo Web', href: '/services/web-design-development' },
      { id: 'service-5', label: '05. Automatización Marketing', href: '/services/marketing-automation' },
      { id: 'service-6', label: '06. Publicidad Redes Sociales', href: '/services/social-media-ads' },
      { id: 'service-7', label: '07. Google Ads', href: '/services/google-ads' },
      { id: 'service-8', label: '08. Marketing de Contenidos', href: '/services/content-marketing' },
      { id: 'service-9', label: '09. Email Marketing', href: '/services/email-marketing' },
      { id: 'service-10', label: '10. Gestión PPC', href: '/services/ppc-management' },
      { id: 'service-11', label: '11. Gestión Redes Sociales', href: '/services/social-media-management' },
      { id: 'service-12', label: '12. Optimización Conversión', href: '/services/conversion-rate-optimization' },
    ],
  },
  {
    id: 'column-2',
    items: [
      { id: 'service-13', label: '13. Diseño Landing Pages', href: '/services/landing-page-design' },
      { id: 'service-14', label: '14. SEO E-commerce', href: '/services/ecommerce-seo' },
      { id: 'service-15', label: '15. Auditoría SEO Local', href: '/services/local-seo-audit' },
      { id: 'service-16', label: '16. Auditoría SEO Técnico', href: '/services/technical-seo-audit' },
      { id: 'service-17', label: '17. Análisis Competencia', href: '/services/competitor-analysis' },
      { id: 'service-18', label: '18. Investigación Keywords', href: '/services/keyword-research' },
      { id: 'service-19', label: '19. Construcción Enlaces', href: '/services/link-building' },
      { id: 'service-20', label: '20. Estrategia Contenidos', href: '/services/content-strategy' },
      { id: 'service-21', label: '21. Marketing Video', href: '/services/video-marketing' },
      { id: 'service-22', label: '22. Marketing Influencers', href: '/services/influencer-marketing' },
      { id: 'service-23', label: '23. Desarrollo Marca', href: '/services/brand-development' },
      { id: 'service-24', label: '24. Configuración Analytics', href: '/services/web-analytics-setup' },
    ],
  },
  {
    id: 'column-3',
    items: [
      { id: 'service-25', label: '25. Google Tag Manager', href: '/services/google-tag-manager' },
      { id: 'service-26', label: '26. Configuración Facebook Pixel', href: '/services/facebook-pixel-setup' },
      { id: 'service-27', label: '27. Integración CRM', href: '/services/crm-integration' },
      { id: 'service-28', label: '28. Generación Leads', href: '/services/lead-generation' },
      { id: 'service-29', label: '29. Diseño Embudo Ventas', href: '/services/sales-funnel-design' },
      { id: 'service-30', label: '30. Pruebas A/B', href: '/services/ab-testing' },
      { id: 'service-31', label: '31. Consultoría Marketing', href: '/services/marketing-consulting' },
      { id: 'service-32', label: '32. Estrategia Digital', href: '/services/digital-strategy' },
      { id: 'service-33', label: '33. Marketing Rendimiento', href: '/services/performance-marketing' },
      { id: 'service-34', label: '34. Growth Hacking', href: '/services/growth-hacking' },
      { id: 'service-35', label: '35. Análisis ROI Marketing', href: '/services/marketing-roi-analysis' },
      { id: 'service-36', label: '36. Marketing de Contenidos', href: '/services/content-marketing' },
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
      { id: 'integration', label: 'Integration', href: '/integration' },
      { id: 'process', label: 'Process', href: '/process' },
      { id: 'analytics', label: 'Analytics Page', href: '/analytics' },
      { id: 'affiliate', label: 'Affiliate Policy', href: '/affiliate-policy' },
      { id: 'gdpr', label: 'GDPR Page', href: '/gdpr' },
    ],
  },
  {
    id: 'column-3',
    items: [
      { id: 'testimonial', label: 'Testimonials', href: '/testimonial' },
      { id: 'case-study', label: 'Case Study Page', href: '/case-study' },
      {
        id: 'case-study-details',
        label: 'Case Study Details',
        href: '/case-study/cove-financial-risk-management-and-compliance',
      },
      { id: 'our-team', label: 'Our Team', href: '/our-team' },
      { id: 'team-details', label: 'Team details', href: '/team/cody-fisher' },
      { id: 'pricing', label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    id: 'column-4',
    items: [
      { id: 'login', label: 'Login', href: '/login' },
      { id: 'signup', label: 'Signup', href: '/signup' },
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
    label: 'Get Started',
    href: '/signup',
  },
};
