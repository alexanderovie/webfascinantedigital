import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ✅ Performance optimizations modernas (Septiembre 2025)
  experimental: {
    optimizePackageImports: ['@gsap/react', 'swiper', 'react-leaflet', 'react-fast-marquee', 'gsap'],
    // optimizeCss: true, // ❌ Deshabilitado - causa error en Vercel
  },
  
  // ✅ Bundle optimization moderna
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // ✅ Compression moderna
  compress: true,
  
  // ✅ Image optimization moderna
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 1060], // Agregar 1060 para optimizar
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
