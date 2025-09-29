import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import GTMProvider from '@/components/analytics/GTMProvider';
import FacebookMeta from '@/components/shared/FacebookMeta';
import { geistSans, geistMono } from '@/utils/font';
import { ReactNode, Suspense } from 'react';
import Script from 'next/script';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Fascinante Digital',
    default: 'Fascinante Digital | SEO and Web Development Agency in West Palm Beach',
  },
  description:
    'Agencia de marketing digital especializada en SEO, desarrollo web y automatización. Impulsamos PYMEs hispanas en West Palm Beach con estrategias medibles.',
  keywords: ['SEO', 'desarrollo web', 'marketing digital', 'West Palm Beach', 'agencia digital', 'automatización'],
  authors: [{ name: 'Fascinante Digital' }],
  creator: 'Fascinante Digital',
  publisher: 'Fascinante Digital',
  metadataBase: new URL('https://fascinantedigital.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://fascinantedigital.com',
    siteName: 'Fascinante Digital',
    title: 'SEO and Web Development Agency in West Palm Beach',
    description:
      'Advanced SEO, fast websites, and marketing automation to grow with measurable results and proven strategies for Hispanic SMEs.',
    images: [
      {
        url: 'https://fascinantedigital.com/static/og-default-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Fascinante Digital - Agencia de Marketing Digital',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fascinante Digital — SEO & Web',
    description:
      'Agencia de marketing digital especializada en SEO, desarrollo web y automatización para PYMEs hispanas en West Palm Beach con resultados medibles.',
    images: ['https://fascinantedigital.com/static/og-default-1200x630.jpg'],
  },
  appleWebApp: {
    title: 'Fascinante Digital',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon1.png', type: 'image/png' },
      { url: '/icon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon0.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ DNS prefetch para performance (invisible) */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* ✅ Preconnect para scripts críticos de terceros */}
        <link rel="preconnect" href="https://js-na1.hs-scripts.com" />
        <link rel="preconnect" href="https://track.hubspot.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* ✅ Preload de imágenes críticas - Hero background ahora optimizado con next/image */}
        {/* <link 
          rel="preload" 
          as="image" 
          href="/images/home-page-33/hero-bg.webp"
          type="image/webp"
        /> */}

        {/* ✅ Global Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Fascinante Digital',
              url: 'https://fascinantedigital.com',
              logo: 'https://fascinantedigital.com/images/shared/main-logo.svg',
              description:
                'SEO and Web Development Agency in West Palm Beach specialized in digital marketing for Hispanic businesses',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '2054 Vista Pkwy # 400',
                addressLocality: 'West Palm Beach',
                addressRegion: 'FL',
                postalCode: '33411',
                addressCountry: 'US',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-800-886-4981',
                contactType: 'customer service',
                email: 'info@fascinantedigital.com',
              },
              sameAs: [
                'https://www.facebook.com/fascinantedigital/',
                'https://www.instagram.com/fascinantedigital/',
                'https://www.youtube.com/@fascinantedigital',
                'https://www.linkedin.com/company/fascinante-digital',
              ],
            }).replace(/</g, '\\u003c'),
          }}
        />

        {/* ✅ Facebook App ID con atributo property correcto */}
        <FacebookMeta />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning={true}>
        {/* ✅ Google Tag Manager - Modern Next.js Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T7SZM386');
            `,
          }}
        />

        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T7SZM386"
            height="0"
            width="0"
            className="hidden"
          />
        </noscript>

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <GTMProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <SmoothScrollProvider>{children}</SmoothScrollProvider>
            </Suspense>
          </GTMProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
