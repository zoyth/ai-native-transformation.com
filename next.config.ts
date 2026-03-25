// ABOUTME: Next.js configuration for the AI Native Transformation website.
// ABOUTME: Handles i18n rewrites/redirects and security headers.

import type { NextConfig } from 'next';
import { generateI18nRewrites, generateI18nRedirects, generateSecurityHeaders } from '@zoyth/simple-site-framework';
import { i18nConfig } from './src/config/i18n';

const nextConfig: NextConfig = {
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
      contentSecurityPolicy: {
        'frame-ancestors': ["'none'"],
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
