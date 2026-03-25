// ABOUTME: Homepage for the AI Native Transformation website.
// ABOUTME: Placeholder landing page presenting the AI coaching and transition planning app.

import type { Locale } from '@zoyth/simple-site-framework/lib/i18n';
import { HeroSection } from '@/lib/framework';
import { content } from '@/config/content';

const howItWorks = {
  en: {
    heading: 'How It Works',
    steps: [
      {
        title: 'Employees Get AI Coaching',
        description: 'Each employee goes through a structured AI-coached session that walks them through 6 steps: honest role assessment, AI-first vision, gap analysis, system design, metrics, and a 30/60/90 day plan.',
      },
      {
        title: 'Plans Get Built Automatically',
        description: 'At the end of the coaching session, the AI generates a structured transition plan — a concrete, measurable document ready for manager review.',
      },
      {
        title: 'Managers Review and Track',
        description: 'Managers see their team\'s plans on a dashboard, score them on clarity and feasibility, and track progress through 30-day and 90-day checkpoints.',
      },
    ],
  },
  fr: {
    heading: 'Comment ça fonctionne',
    steps: [
      {
        title: 'Les employés reçoivent un coaching IA',
        description: 'Chaque employé passe par une session structurée coachée par IA en 6 étapes : évaluation honnête du rôle, vision IA, analyse des écarts, conception de systèmes, métriques et plan 30/60/90 jours.',
      },
      {
        title: 'Les plans sont générés automatiquement',
        description: 'À la fin de la session, l\'IA génère un plan de transition structuré — un document concret et mesurable prêt pour la révision par le gestionnaire.',
      },
      {
        title: 'Les gestionnaires révisent et suivent',
        description: 'Les gestionnaires voient les plans de leur équipe sur un tableau de bord, les évaluent sur la clarté et la faisabilité, et suivent les progrès aux jalons de 30 et 90 jours.',
      },
    ],
  },
};

const cta = {
  en: {
    heading: 'Interested?',
    text: 'This app is in active development. If you\'re leading an AI transformation at your organization and want to learn more, get in touch.',
    button: 'Contact François',
  },
  fr: {
    heading: 'Intéressé?',
    text: 'Cette application est en développement actif. Si vous menez une transformation IA dans votre organisation et souhaitez en savoir plus, contactez-nous.',
    button: 'Contacter François',
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

      {/* How it works */}
      <section className="bg-brand-gradient-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
            {howItWorks[t].heading}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {howItWorks[t].steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-xl bg-white p-8 shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {step.description}
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
          <a
            href="mailto:f@cakemail.com"
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-hover"
          >
            {cta[t].button}
          </a>
        </div>
      </section>
    </>
  );
}
