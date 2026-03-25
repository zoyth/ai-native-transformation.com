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
        description: 'Every employee takes a maturity assessment to establish their baseline — from AI-aware to AI-native. Engineering roles get a more granular scale.',
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
        description: 'Chaque employé complète une évaluation de maturité pour établir son point de départ — de sensibilisé à l\'IA jusqu\'à natif de l\'IA. Les rôles techniques ont une échelle plus granulaire.',
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

const features = {
  en: {
    heading: 'Platform Features',
    items: [
      {
        title: 'AI Coaching Sessions',
        description: 'A streaming chat interface where Claude guides employees through role assessment, AI-first vision, gap analysis, system design, metrics, and milestone planning. Each step produces a reviewable artifact.',
      },
      {
        title: 'Workflow Census',
        description: 'A conversational AI intake that documents business workflows across the organization — capturing time, coordination overhead, tools, and bottlenecks. Each workflow gets an AI opportunity score (1-100) to identify the highest-value transformation candidates.',
      },
      {
        title: 'Transition Plan Builder',
        description: 'Coaching artifacts are assembled into a structured transition plan that employees can edit before submitting for review. Full revision history with snapshots tracks how plans evolve.',
      },
      {
        title: 'Manager Review Dashboard',
        description: 'Managers see their direct reports\' plan statuses at a glance. Plans are scored on four criteria with AI pre-scoring as hints. Status flows from draft through submission, review, and approval.',
      },
      {
        title: 'Admin Analytics',
        description: 'Organization-wide KPIs: adoption rates, tier distribution, workflow analysis, AI transformation candidates. Includes GitHub activity metrics and Claude Code usage tracking per employee.',
      },
    ],
  },
  fr: {
    heading: 'Fonctionnalités',
    items: [
      {
        title: 'Sessions de coaching IA',
        description: 'Une interface de chat en streaming où Claude guide les employés à travers l\'évaluation du rôle, la vision IA, l\'analyse des écarts, la conception de systèmes, les métriques et la planification des jalons. Chaque étape produit un artéfact révisable.',
      },
      {
        title: 'Recensement des flux de travail',
        description: 'Une saisie conversationnelle par IA qui documente les flux de travail à travers l\'organisation — temps, coordination, outils et goulots d\'étranglement. Chaque flux reçoit un score d\'opportunité IA (1-100) pour identifier les meilleurs candidats à la transformation.',
      },
      {
        title: 'Constructeur de plans de transition',
        description: 'Les artéfacts du coaching sont assemblés en un plan de transition structuré que les employés peuvent modifier avant soumission. Un historique complet avec captures suit l\'évolution des plans.',
      },
      {
        title: 'Tableau de bord gestionnaire',
        description: 'Les gestionnaires voient le statut des plans de leurs subordonnés directs. Les plans sont évalués selon quatre critères avec pré-évaluation IA. Le flux va du brouillon à la soumission, la révision et l\'approbation.',
      },
      {
        title: 'Analytiques administrateur',
        description: 'KPIs organisationnels : taux d\'adoption, distribution des niveaux, analyse des flux de travail, candidats à la transformation IA. Inclut les métriques d\'activité GitHub et le suivi d\'utilisation de Claude Code par employé.',
      },
    ],
  },
};

const cta = {
  en: {
    heading: 'Interested?',
    text: 'This app is in active development, currently piloted across a ~30-person team. If you\'re leading an AI transformation at your organization and want to learn more, get in touch.',
    button: 'Contact François on LinkedIn',
  },
  fr: {
    heading: 'Intéressé?',
    text: 'Cette application est en développement actif, présentement en pilote avec une équipe d\'environ 30 personnes. Si vous menez une transformation IA dans votre organisation et souhaitez en savoir plus, contactez-nous.',
    button: 'Contacter François sur LinkedIn',
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

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
            {features[t].heading}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features[t].items.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-200 p-8"
              >
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
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
