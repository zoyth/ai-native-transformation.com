// ABOUTME: Shared metadata builder for all pages.
// ABOUTME: Delegates to the framework's generateMetadata with site defaults.

import type { Metadata } from 'next';
import { generateMetadata } from '@zoyth/simple-site-framework';
import { i18nConfig } from '@/config/i18n';

const BASE_URL = 'https://ai-native-transformation.com';
const SITE_NAME = 'AI Native Transformation';

interface PageMetadataOptions {
  locale: string;
  path: string;
  title: { en: string; fr: string };
  description: { en: string; fr: string };
}

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
}: PageMetadataOptions): Metadata {
  return generateMetadata({
    title,
    description,
    locale,
    path,
    baseUrl: BASE_URL,
    siteName: SITE_NAME,
    locales: i18nConfig.locales,
    defaultLocale: i18nConfig.defaultLocale,
    slugTranslations: i18nConfig.slugTranslations,
  });
}
