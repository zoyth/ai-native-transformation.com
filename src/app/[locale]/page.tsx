// ABOUTME: Homepage for the AI Native Transformation website.
// ABOUTME: Placeholder landing page presenting the AI transformation platform.

import type { Locale } from '@zoyth/simple-site-framework/lib/i18n';
import { HeroSection } from '@/lib/framework';
import { content } from '@/config/content';

const howItWorks = {
  en: {
    heading: 'How It Works',
    steps: [
      {
        title: 'Assess',
        description: 'Every employee takes a maturity assessment to establish their baseline across five tiers — from Pre-AI to AI-Native. Engineering roles get an additional granular rung ladder.',
      },
      {
        title: 'Coach',
        description: 'An AI coach walks each employee through a structured 6-step session to reimagine their role, identify gaps, design systems, and build a 30/60/90 day transition plan.',
      },
      {
        title: 'Review',
        description: 'Managers review submitted plans on four criteria — self-contained, testable, constrained, and decomposable — with AI-assisted pre-scoring to speed things up.',
      },
    ],
  },
  fr: {
    heading: 'Comment ça fonctionne',
    steps: [
      {
        title: 'Évaluer',
        description: 'Chaque employé complète une évaluation de maturité pour établir son point de départ sur cinq niveaux — de Pré-IA à Natif de l\'IA. Les rôles techniques ont une échelle granulaire additionnelle.',
      },
      {
        title: 'Coacher',
        description: 'Un coach IA guide chaque employé à travers une session structurée en 6 étapes pour réimaginer son rôle, identifier les écarts, concevoir des systèmes et bâtir un plan de transition 30/60/90 jours.',
      },
      {
        title: 'Réviser',
        description: 'Les gestionnaires révisent les plans soumis selon quatre critères — autonome, vérifiable, délimité et décomposable — avec une pré-évaluation IA pour accélérer le processus.',
      },
    ],
  },
};

const cta = {
  en: {
    heading: 'Ready to Transform Your Team?',
    text: 'Currently in pilot with three SaaS companies undergoing AI transformation. If you\'re leading a 20-200 person team and want to make AI a core competency, let\'s talk.',
    button: 'Connect on LinkedIn',
  },
  fr: {
    heading: 'Prêt à transformer votre équipe?',
    text: 'Présentement en pilote avec trois entreprises SaaS en transformation IA. Si vous dirigez une équipe de 20 à 200 personnes et souhaitez faire de l\'IA une compétence fondamentale, parlons-en.',
    button: 'Se connecter sur LinkedIn',
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

      {/* Audience signal */}
      <div className="bg-hero-gradient-dark -mt-8 pb-8 text-center">
        <p className="text-sm font-medium tracking-wide text-slate-300 uppercase">
          {t === 'fr'
            ? 'Conçu pour les entreprises SaaS de 20 à 200 employés prêtes à faire de l\'IA une compétence fondamentale.'
            : 'Built for SaaS companies with 20-200 employees ready to make AI a core competency.'}
        </p>
      </div>

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

      {/* Product teaser */}
      <section className="py-16 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            {t === 'fr' ? 'Évaluation, coaching, plans de transition et analytiques' : 'Assessment, Coaching, Transition Plans, and Analytics'}
          </h2>
          <p className="mb-6 text-slate-700 leading-relaxed">
            {t === 'fr'
              ? 'Six modules intégrés qui couvrent le parcours complet — de l\'évaluation initiale au tableau de bord de suivi organisationnel.'
              : 'Six integrated modules that cover the full journey — from initial assessment to org-wide tracking dashboards.'}
          </p>
          <a
            href={`/${locale}/product`}
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-hover"
          >
            {t === 'fr' ? 'Voir la plateforme' : 'See the Platform'}
          </a>
        </div>
      </section>

      {/* Credibility */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-xl font-bold text-slate-900">
            {t === 'fr' ? 'Qui est derrière ce projet' : 'Who Built This'}
          </h2>
          <p className="text-slate-700 leading-relaxed">
            {t === 'fr'
              ? 'Ce cadre a été conçu par François Lane, qui dirige actuellement la transformation IA de trois entreprises SaaS. Il n\'est pas né d\'une théorie — il a été construit en réponse aux défis réels d\'amener des équipes de 20 à 200 personnes de « curieux de l\'IA » à « natifs de l\'IA », un employé à la fois.'
              : 'This framework was designed by François Lane, who is currently leading the AI transformation of three SaaS companies. It wasn\'t born from theory — it was built in response to the real challenges of moving teams of 20-200 people from "AI-curious" to "AI-native," one employee at a time.'}
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-hero-gradient-dark py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white">
            {cta[t].heading}
          </h2>
          <p className="mb-8 text-lg text-slate-200">
            {cta[t].text}
          </p>
          <a
            href="https://www.linkedin.com/in/francoislane/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-primary-dark hover:bg-slate-100"
          >
            {cta[t].button}
          </a>
        </div>
      </section>
    </>
  );
}
