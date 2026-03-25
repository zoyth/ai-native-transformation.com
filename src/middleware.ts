// ABOUTME: i18n middleware for locale detection and routing.
// ABOUTME: Handles English (default) and French locale prefixes.

import { createI18nMiddleware } from '@zoyth/simple-site-framework/lib/i18n';
import { i18nConfig } from '@/config/i18n';

export default createI18nMiddleware(i18nConfig);

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|robots.txt|sitemap.xml).*)'],
};
