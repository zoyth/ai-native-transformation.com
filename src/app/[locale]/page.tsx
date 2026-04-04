// ABOUTME: Homepage for the AI Native Transformation website.
// ABOUTME: Placeholder landing page presenting the AI transformation platform.

import type { Locale } from '@zoyth/simple-site-framework/lib/i18n';
import { HeroSection } from '@/lib/framework';
import { content } from '@/config/content';

const problem = {
  en: {
    heading: 'The Real Challenge',
    cards: [
      {
        title: 'Organizations',
        text: 'You buy tools, run workshops, and hope adoption happens. It doesn\'t — or it happens unevenly, creating a two-speed organization where some teams leap ahead while others stall.',
      },
      {
        title: 'Individuals',
        text: 'Employees hear "AI will change your job" but get no guidance on how. The people who figure it out thrive. Everyone else watches the gap grow.',
      },
      {
        title: 'Managers',
        text: 'You\'re told to "lead the transformation" without a playbook — no way to assess readiness, set role-specific goals, or have the hard conversations when someone isn\'t progressing.',
      },
    ],
  },
  fr: {
    heading: 'Le vrai défi',
    cards: [
      {
        title: 'Organisations',
        text: 'Vous achetez des outils, organisez des ateliers, et espérez que l\'adoption suive. Elle ne suit pas — ou elle est inégale, créant une organisation à deux vitesses.',
      },
      {
        title: 'Individus',
        text: 'Les employés entendent « l\'IA va changer votre travail » sans recevoir de guidance. Ceux qui s\'adaptent prospèrent. Les autres regardent l\'écart se creuser.',
      },
      {
        title: 'Gestionnaires',
        text: 'On vous demande de « mener la transformation » sans mode d\'emploi — aucun moyen d\'évaluer la préparation, de fixer des objectifs par rôle, ou d\'avoir les conversations difficiles.',
      },
    ],
  },
};

const howItWorks = {
  en: {
    heading: 'How It Works',
    steps: [
      {
        title: 'Assess',
        description: 'Every employee takes a maturity assessment to establish their baseline — individuals are placed on a tier scale, engineering roles on an additional rung ladder.',
      },
      {
        title: 'Coach',
        description: 'An AI coach walks each employee through a structured 6-step session to reimagine their role, identify gaps, design systems, and build a 30/60/90 day transition plan.',
      },
      {
        title: 'Review',
        description: 'Managers review submitted plans against specification primitives — with AI-assisted pre-scoring to speed things up.',
      },
    ],
  },
  fr: {
    heading: 'Comment ça fonctionne',
    steps: [
      {
        title: 'Évaluer',
        description: 'Chaque employé complète une évaluation de maturité — les individus sont placés sur une échelle de niveaux, les rôles techniques sur une échelle d\'échelons additionnelle.',
      },
      {
        title: 'Coacher',
        description: 'Un coach IA guide chaque employé à travers une session structurée en 6 étapes pour réimaginer son rôle, identifier les écarts, concevoir des systèmes et bâtir un plan de transition 30/60/90 jours.',
      },
      {
        title: 'Réviser',
        description: 'Les gestionnaires révisent les plans soumis selon les primitives de spécification — avec une pré-évaluation IA pour accélérer le processus.',
      },
    ],
  },
};

const differentiation = {
  en: {
    heading: 'Not Another AI Workshop',
    items: [
      {
        theirs: 'AI tool adoption',
        ours: 'Structural transformation — roles, workflows, org design',
      },
      {
        theirs: 'Generic training courses',
        ours: 'Guided transition plans built by the employee, reviewed by the manager',
      },
      {
        theirs: 'Consultant-dependent',
        ours: 'Self-serve framework + AI coaching at scale',
      },
      {
        theirs: 'Optimistic ("everyone levels up")',
        ours: 'Honest about role evolution — including absorption and displacement',
      },
    ],
  },
  fr: {
    heading: 'Pas un autre atelier IA',
    items: [
      {
        theirs: 'Adoption d\'outils IA',
        ours: 'Transformation structurelle — rôles, flux de travail, conception organisationnelle',
      },
      {
        theirs: 'Formations génériques',
        ours: 'Plans de transition guidés, construits par l\'employé, révisés par le gestionnaire',
      },
      {
        theirs: 'Dépendant de consultants',
        ours: 'Cadre en libre-service + coaching IA à grande échelle',
      },
      {
        theirs: 'Optimiste (« tout le monde progresse »)',
        ours: 'Honnête sur l\'évolution des rôles — y compris l\'absorption et le déplacement',
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

      {/* Problem */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-2xl font-bold text-slate-900">
            {problem[t].heading}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {problem[t].cards.map((card) => (
              <div key={card.title} className="rounded-xl border border-slate-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-slate-900">{card.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-brand-gradient-light py-20">
        <div className="container mx-auto px-4">
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

      {/* Differentiation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-2xl font-bold text-slate-900">
            {differentiation[t].heading}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {differentiation[t].items.map((item) => (
              <div key={item.theirs} className="rounded-xl border border-slate-200 p-6">
                <p className="mb-2 text-sm text-slate-400 line-through">{item.theirs}</p>
                <p className="text-sm font-medium text-slate-900">{item.ours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-6 text-xl font-bold text-slate-900">
            {t === 'fr' ? 'Qui est derrière ce projet' : 'Who Built This'}
          </h2>
          <p className="mb-8 text-slate-700 leading-relaxed">
            {t === 'fr'
              ? 'Ce cadre a été conçu par François Lane, qui dirige actuellement la transformation IA de trois entreprises SaaS. Il n\'est pas né d\'une théorie — il a été construit en réponse aux défis réels d\'amener des équipes de 20 à 200 personnes de « curieux de l\'IA » à « natifs de l\'IA », un employé à la fois.'
              : 'This framework was designed by François Lane, who is currently leading the AI transformation of three SaaS companies. It wasn\'t born from theory — it was built in response to the real challenges of moving teams of 20-200 people from "AI-curious" to "AI-native," one employee at a time.'}
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate-500">
            <span>{t === 'fr' ? 'Pilote avec ~30 personnes' : '~30-person pilot'}</span>
            <span>{t === 'fr' ? 'Bilingue EN/FR' : 'Bilingual EN/FR'}</span>
            <span>{t === 'fr' ? 'Cadre open source (CC BY 4.0)' : 'Open source framework (CC BY 4.0)'}</span>
            <span>{t === 'fr' ? 'En production' : 'Running in production'}</span>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-hero-gradient-dark py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center">
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
