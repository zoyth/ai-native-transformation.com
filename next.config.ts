// ABOUTME: Next.js configuration for the AI Native Transformation website.
// ABOUTME: Handles i18n rewrites/redirects and security headers.

import type { NextConfig } from 'next';
import { generateI18nRewrites, generateI18nRedirects, generateSecurityHeaders } from '@zoyth/simple-site-framework';
import { i18nConfig } from './src/config/i18n';

const nextConfig: NextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    return generateI18nRewrites(i18nConfig);
  },
  async redirects() {
    return generateI18nRedirects(i18nConfig);
  },
  async headers() {
    const securityHeaders = generateSecurityHeaders({
      presets: ['google-analytics'],
      contentSecurityPolicy: {
        'frame-ancestors': ["'none'"],
        'connect-src': ['https://formspree.io'],
        'form-action': ['https://formspree.io'],
      },
    });

    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        source: '/fr/:path*',
        headers: [{ key: 'Content-Language', value: 'fr' }],
      },
      {
        source: '/en/:path*',
        headers: [{ key: 'Content-Language', value: 'en' }],
      },
    ];
  },
};

export default nextConfig;
