// ABOUTME: Internationalization configuration.
// ABOUTME: English default locale with French support.

import type { I18nConfig } from '@zoyth/simple-site-framework/lib/i18n';

export const i18nConfig: I18nConfig = {
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix: 'always',
  localeDetection: true,
  localeNames: {
    en: 'English',
    fr: 'Français',
  },
  localeLabels: {
    en: 'EN',
    fr: 'FR',
  },
  slugTranslations: {},
};
