import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ✅ Performance optimizations modernas (Septiembre 2025)
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@gsap/react', 'swiper', 'react-leaflet'],
  },
  
  // ✅ Image optimization moderna
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // ✅ Turbopack optimizations
  turbopack: {
    resolveAlias: {
      '@': './src',
      '@public': './public',
    },
  },
  
  // ✅ Performance headers modernos
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
