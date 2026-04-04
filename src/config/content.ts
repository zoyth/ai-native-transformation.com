// ABOUTME: Homepage content for the AI Native Transformation website.
// ABOUTME: Hero section describing the app: AI-coached transition planning for organizations.

export const content = {
  metadata: {
    siteName: 'AI Native Transformation',
    siteUrl: 'https://ai-native-transformation.com',
    defaultLocale: 'en',
    supportedLocales: ['en', 'fr'],
    contactEmail: '',
  },
  hero: {
    headline: {
      en: 'AI Doesn\'t Just Automate Tasks. It Reorganizes Your Entire Organization.',
      fr: 'L\'IA ne fait pas qu\'automatiser des tâches. Elle réorganise toute votre organisation.',
    },
    subheadline: {
      en: 'An operational framework and coaching platform for navigating the structural transformation — from role evolution to org-wide readiness.',
      fr: 'Un cadre opérationnel et une plateforme de coaching pour naviguer la transformation structurelle — de l\'évolution des rôles à la préparation organisationnelle.',
    },
    variant: 'dark' as const,
    cta: {
      primary: {
        text: {
          en: 'Apply for Early Access',
          fr: 'Postuler pour l\'accès anticipé',
        },
        href: '/sign-up',
      },
      secondary: {
        text: {
          en: 'See the Framework',
          fr: 'Voir le cadre',
        },
        href: 'https://framework.ai-native-transformation.com',
      },
    },
  },
};
