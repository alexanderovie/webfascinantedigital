import { Inter_Tight } from 'next/font/google';

const geistSans = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-sans',
  weight: ['300', '400', '500', '600', '700'],
});

const geistMono = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
  weight: ['300', '400', '500', '600', '700'],
});

export { geistSans, geistMono };
