// ABOUTME: Navigation configuration for the website.
// ABOUTME: Minimal header with logo, footer with framework link and copyright.

import { type NavigationConfig } from '@zoyth/simple-site-framework';

export const navigation: NavigationConfig = {
  header: {
    logo: {
      image: '',
      imageAlt: {
        en: 'AI Native Transformation',
        fr: 'AI Native Transformation',
      },
      href: '/',
      text: {
        en: 'AI Native Transformation',
        fr: 'AI Native Transformation',
      },
    },
    mainNav: [],
    utilityNav: [],
  },
  footer: {
    sections: [
      {
        heading: { en: 'Resources', fr: 'Ressources' },
        links: [
          {
            id: 'framework',
            label: { en: 'Open-Source Framework', fr: 'Cadre open-source' },
            href: 'https://ai.cakemail.com',
            external: true,
          },
          {
            id: 'github',
            label: { en: 'GitHub', fr: 'GitHub' },
            href: 'https://github.com/cakemail/ai-native-transformation',
            external: true,
          },
        ],
      },
    ],
    copyright: {
      en: 'Copyright © {year} François Lane. All rights reserved.',
      fr: 'Copyright © {year} François Lane. Tous droits réservés.',
    },
  },
};
