// ABOUTME: Product page showing platform details — how it works, features, and CTA.
// ABOUTME: Detailed view of the AI transformation platform for prospective customers.

import type { Metadata } from 'next';
import type { Locale } from '@zoyth/simple-site-framework/lib/i18n';
import { buildPageMetadata } from '@/lib/metadata';

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

const features = {
  en: {
    heading: 'Platform Features',
    items: [
      {
        title: 'AI Literacy Assessment',
        description: 'Know exactly where your team stands — and where the gaps are. Every employee takes a scenario-based self-assessment across five maturity tiers, from Pre-AI to AI-Native. Engineering roles get an additional granular rung ladder.',
      },
      {
        title: 'AI Coaching Sessions',
        description: 'Every employee gets a personal AI coach that knows their role, their workflows, and their maturity level. Six structured conversations produce a concrete transition plan — not a generic training module.',
      },
      {
        title: 'Workflow Census',
        description: 'Surface the hidden coordination tax across your organization. A conversational AI interviews each employee about their recurring work, capturing time, dependencies, bottlenecks, and an AI opportunity score for every workflow.',
      },
      {
        title: 'Transition Plan Builder',
        description: 'Turn coaching into commitment. Artifacts from each coaching session are assembled into a structured transition plan that employees own, edit, and submit for review — with full revision history.',
      },
      {
        title: 'Manager Review Dashboard',
        description: 'See who\'s progressing and who needs support at a glance. Track each direct report\'s maturity baseline, coaching progress, and plan status. Score plans on four criteria with AI pre-scoring to speed up reviews.',
      },
      {
        title: 'Admin Analytics',
        description: 'Get a strategic view of your transformation — not just a list of responses. Adoption funnels, tier distribution, workflow opportunity matrices, ghost time analysis, and dependency bottleneck maps across the entire organization.',
      },
    ],
  },
  fr: {
    heading: 'Fonctionnalités',
    items: [
      {
        title: 'Évaluation de la littératie IA',
        description: 'Sachez exactement où en est votre équipe — et où sont les écarts. Chaque employé complète une auto-évaluation par scénarios sur cinq niveaux de maturité, de Pré-IA à Natif de l\'IA. Les rôles techniques ont une échelle granulaire additionnelle.',
      },
      {
        title: 'Sessions de coaching IA',
        description: 'Chaque employé bénéficie d\'un coach IA personnel qui connaît son rôle, ses flux de travail et son niveau de maturité. Six conversations structurées produisent un plan de transition concret — pas un module de formation générique.',
      },
      {
        title: 'Recensement des flux de travail',
        description: 'Révélez la taxe de coordination cachée dans votre organisation. Une IA conversationnelle interroge chaque employé sur son travail récurrent, capturant le temps, les dépendances, les goulots d\'étranglement et un score d\'opportunité IA pour chaque flux.',
      },
      {
        title: 'Constructeur de plans de transition',
        description: 'Transformez le coaching en engagement. Les artéfacts de chaque session sont assemblés en un plan de transition structuré que les employés possèdent, modifient et soumettent pour révision — avec un historique complet.',
      },
      {
        title: 'Tableau de bord gestionnaire',
        description: 'Voyez d\'un coup d\'œil qui progresse et qui a besoin de soutien. Suivez la maturité de base, la progression du coaching et le statut des plans de chaque subordonné. Évaluez les plans selon quatre critères avec pré-évaluation IA.',
      },
      {
        title: 'Analytiques administrateur',
        description: 'Obtenez une vue stratégique de votre transformation — pas seulement une liste de réponses. Entonnoirs d\'adoption, distribution des niveaux, matrices d\'opportunités, analyse du temps fantôme et cartographie des goulots de dépendance à l\'échelle de l\'organisation.',
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return buildPageMetadata({
    locale,
    path: '/product',
    title: {
      en: 'Product | AI Native Transformation',
      fr: 'Produit | AI Native Transformation',
    },
    description: {
      en: 'An AI-coached platform where every employee builds a personal transition plan — assess, coach, review, and track across the organization.',
      fr: 'Une plateforme coachée par IA où chaque employé construit un plan de transition personnel — évaluer, coacher, réviser et suivre à travers l\'organisation.',
    },
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const t = locale === 'fr' ? 'fr' : 'en';

  return (
    <>
      {/* Page header */}
      <section className="pb-8 pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary sm:text-5xl">
            {t === 'fr' ? 'La plateforme' : 'The Platform'}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-600 leading-relaxed">
            {t === 'fr'
              ? 'Un système complet pour évaluer, coacher et suivre la transformation IA de chaque employé.'
              : 'A complete system to assess, coach, and track every employee\'s AI transformation.'}
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-t border-slate-200" />
          <h2 className="mb-10 text-2xl font-bold text-slate-900">
            {howItWorks[t].heading}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {howItWorks[t].steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-xl border border-slate-200 p-6"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-sm font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pb-20 pt-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-t border-slate-200" />
          <h2 className="mb-10 text-2xl font-bold text-slate-900">
            {features[t].heading}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features[t].items.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-200 p-6"
              >
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-slate-200 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            {cta[t].heading}
          </h2>
          <p className="mb-8 text-slate-600 leading-relaxed">
            {cta[t].text}
          </p>
          <a
            href="https://www.linkedin.com/in/francoislane/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50"
          >
            {cta[t].button}
          </a>
        </div>
      </section>
    </>
  );
}
