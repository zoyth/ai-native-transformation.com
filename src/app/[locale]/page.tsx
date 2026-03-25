// ABOUTME: Homepage for the AI Native Transformation website.
// ABOUTME: Placeholder landing page with hero section and key value propositions.

import type { Locale } from '@zoyth/simple-site-framework/lib/i18n';
import { HeroSection } from '@/lib/framework';
import { content } from '@/config/content';

const pillars = {
  en: [
    {
      title: 'Open-Source Framework',
      description: 'A complete operational framework for transforming a traditional organization into an AI-native one. Free to use, adapt, and contribute to.',
    },
    {
      title: 'Guided Platform',
      description: 'A structured 90-day process that takes every employee through assessment, role reimagination, gap analysis, and measurable transition planning.',
    },
    {
      title: 'Built from Practice',
      description: 'Developed and battle-tested during a real organizational transformation. Not theory — this is what actually works.',
    },
  ],
  fr: [
    {
      title: 'Cadre open-source',
      description: 'Un cadre opérationnel complet pour transformer une organisation traditionnelle en organisation native de l\'IA. Libre d\'utilisation, d\'adaptation et de contribution.',
    },
    {
      title: 'Plateforme guidée',
      description: 'Un processus structuré de 90 jours qui accompagne chaque employé à travers l\'évaluation, la réimagination de son rôle, l\'analyse des écarts et la planification mesurable de la transition.',
    },
    {
      title: 'Construit à partir de la pratique',
      description: 'Développé et éprouvé lors d\'une vraie transformation organisationnelle. Pas de la théorie — c\'est ce qui fonctionne réellement.',
    },
  ],
};

const cta = {
  en: {
    heading: 'Interested?',
    text: 'This project is in active development. If you\'re leading an AI transformation and want to learn more, get in touch.',
    button: 'Contact François',
    framework: 'Or read the framework',
  },
  fr: {
    heading: 'Intéressé?',
    text: 'Ce projet est en développement actif. Si vous menez une transformation IA et souhaitez en savoir plus, contactez-nous.',
    button: 'Contacter François',
    framework: 'Ou lire le cadre',
  },
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const t = locale === 'fr' ? 'fr' : 'en';

  return (
    <>
      <HeroSection
        content={content.hero}
        locale={locale}
      />

      {/* Key pillars */}
      <section className="bg-brand-gradient-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {pillars[t].map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl bg-white p-8 shadow-md"
              >
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">
            {cta[t].heading}
          </h2>
          <p className="mb-8 text-lg text-slate-700">
            {cta[t].text}
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:f@cakemail.com"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-hover"
            >
              {cta[t].button}
            </a>
            <a
              href="https://ai.cakemail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border-2 border-primary px-6 py-3 text-base font-semibold text-primary hover:bg-slate-50"
            >
              {cta[t].framework} →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
