import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import GTMProvider from '@/components/analytics/GTMProvider';
import { geistSans, geistMono } from '@/utils/font';
import { ReactNode, Suspense } from 'react';
import Script from 'next/script';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Fascinante Digital',
    default: 'Fascinante Digital | Agencia SEO y Desarrollo Web en West Palm Beach',
  },
  description: 'Agencia de marketing digital especializada en SEO, desarrollo web y automatización. Impulsamos PYMEs hispanas en West Palm Beach con estrategias medibles.',
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
    title: 'Agencia SEO y Desarrollo Web en West Palm Beach',
    description: 'SEO avanzado, sitios web rápidos y automatización de marketing para crecer con resultados medibles y estrategias probadas para PYMEs hispanas.',
    images: [
      {
        url: 'https://fascinantedigital.com/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Fascinante Digital - Agencia de Marketing Digital',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fascinante Digital — SEO & Web',
    description: 'Agencia de marketing digital especializada en SEO, desarrollo web y automatización para PYMEs hispanas en West Palm Beach con resultados medibles.',
    images: ['https://fascinantedigital.com/opengraph-image'],
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
            style={{ display: 'none', visibility: 'hidden' }}
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
