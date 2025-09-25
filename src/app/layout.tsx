import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import { interTight } from '@/utils/font';
import { ReactNode, Suspense } from 'react';
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
    description: 'SEO avanzado, sitios web rápidos y automatización para crecer con resultados medibles.',
    images: [
      {
        url: '/static/og-image-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Fascinante Digital - Agencia de Marketing Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fascinante Digital — SEO & Web',
    description: 'Resultados medibles para PYMEs hispanas.',
    images: ['/static/og-image-1200x630.jpg'],
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
      <body className={`${interTight.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={<div>Loading...</div>}>
            <SmoothScrollProvider>{children}</SmoothScrollProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
