// ABOUTME: Root layout for the website, scoped by locale.
// ABOUTME: Renders html/body, header, footer, fonts, and initializes i18n.

import type { Metadata } from 'next';
import { neueMontreal, neueMontrealBody } from '@/lib/fonts';
import { setI18nConfig, getTextDirection } from '@zoyth/simple-site-framework/lib/i18n';
import type { Locale } from '@zoyth/simple-site-framework/lib/i18n';
import { generateThemeCSS, generateDesignTokens, createWebSite, serializeStructuredData } from '@zoyth/simple-site-framework';
import { I18nProvider } from '@zoyth/simple-site-framework/components';
import { theme } from '@/config/theme';
import { Header, Footer } from '@/lib/framework';
import { navigation } from '@/config/navigation';
import { i18nConfig } from '@/config/i18n';
import { buildPageMetadata } from '@/lib/metadata';
import '../globals.css';

setI18nConfig(i18nConfig);

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    ...buildPageMetadata({
      locale,
      path: '/',
      title: {
        en: 'AI Native Transformation | Transform Your Organization for the AI Era',
        fr: 'AI Native Transformation | Transformez votre organisation pour l\'ère de l\'IA',
      },
      description: {
        en: 'An open-source framework and guided platform to move your team from AI-aware to AI-native — systematically, measurably, and at scale.',
        fr: 'Un cadre open-source et une plateforme guidée pour faire passer votre équipe de sensibilisée à l\'IA à native de l\'IA — de manière systématique, mesurable et à grande échelle.',
      },
    }),
    icons: {
      icon: '/images/favicon.png',
      apple: '/images/favicon.png',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;

  const webSiteJsonLd = createWebSite({
    name: 'AI Native Transformation',
    url: 'https://ai-native-transformation.com',
    description: locale === 'fr'
      ? 'Cadre open-source et plateforme pour la transformation IA des organisations.'
      : 'Open-source framework and platform for organizational AI transformation.',
  });

  const themeCSS = `:root {\n${generateThemeCSS(theme)}\n${generateDesignTokens(theme)}\n}`;

  return (
    <html lang={locale} dir={getTextDirection(locale)}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeCSS }} />
      </head>
      <body
        className={`${neueMontreal.variable} ${neueMontrealBody.variable} antialiased flex min-h-screen flex-col`}
      >
        <I18nProvider config={i18nConfig}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: serializeStructuredData([webSiteJsonLd]) }}
          />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
          >
            {locale === 'fr' ? 'Aller au contenu principal' : 'Skip to main content'}
          </a>
          <Header locale={locale} config={navigation.header} />
          <main id="main-content" className="flex-1 pt-16">{children}</main>
          <Footer locale={locale} config={navigation.footer} />
        </I18nProvider>
      </body>
    </html>
  );
}
