// ABOUTME: Navigation configuration for the website.
// ABOUTME: Minimal header with text logo, footer with contact and related links.

import { type NavigationConfig } from '@zoyth/simple-site-framework';

export const navigation: NavigationConfig = {
  header: {
    logo: {
      image: '/images/logo.png',
      imageAlt: {
        en: 'ai-native trx',
        fr: 'ai-native trx',
      },
      href: '/',
      width: 1203,
      height: 217,
      displayHeight: 29,
    },
    mainNav: [
      {
        id: 'product',
        label: { en: 'Product', fr: 'Produit' },
        href: '/product',
      },
      {
        id: 'framework',
        label: { en: 'Framework', fr: 'Cadre' },
        href: 'https://framework.ai-native-transformation.com',
        external: true,
      },
    ],
    utilityNav: [
      {
        id: 'login',
        label: { en: 'Log in', fr: 'Se connecter' },
        href: 'https://app.ai-native-transformation.com/',
        external: true,
      },
    ],
  },
  footer: {
    sections: [
      {
        heading: { en: 'App', fr: 'Application' },
        links: [
          {
            id: 'login',
            label: { en: 'Log in', fr: 'Se connecter' },
            href: 'https://app.ai-native-transformation.com/',
            external: true,
          },
        ],
      },
      {
        heading: { en: 'Contact', fr: 'Contact' },
        links: [
          {
            id: 'linkedin',
            label: { en: 'François Lane on LinkedIn', fr: 'François Lane sur LinkedIn' },
            href: 'https://www.linkedin.com/in/francoislane/',
            external: true,
          },
        ],
      },
      {
        heading: { en: 'Related', fr: 'Liens' },
        links: [
          {
            id: 'framework',
            label: { en: 'AI Transformation Framework', fr: 'Cadre de transformation IA' },
            href: 'https://framework.ai-native-transformation.com',
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
