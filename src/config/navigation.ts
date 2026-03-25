// ABOUTME: Navigation configuration for the website.
// ABOUTME: Minimal header with text logo, footer with contact and related links.

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
        heading: { en: 'Contact', fr: 'Contact' },
        links: [
          {
            id: 'email',
            label: { en: 'f@cakemail.com', fr: 'f@cakemail.com' },
            href: 'mailto:f@cakemail.com',
          },
        ],
      },
      {
        heading: { en: 'Related', fr: 'Liens' },
        links: [
          {
            id: 'framework',
            label: { en: 'AI Transformation Framework', fr: 'Cadre de transformation IA' },
            href: 'https://ai.cakemail.com',
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
