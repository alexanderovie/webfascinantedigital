import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export { geistSans, geistMono };
