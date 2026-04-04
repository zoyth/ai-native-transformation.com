// ABOUTME: Beta sign-up page with application form.
// ABOUTME: Collects prospect info for beta access or GA notification.

import type { Metadata } from 'next';
import type { Locale } from '@zoyth/simple-site-framework/lib/i18n';
import { buildPageMetadata } from '@/lib/metadata';

const copy = {
  en: {
    title: 'Early Access',
    subtitle: 'We\'re currently in a closed pilot with a small number of SaaS companies. Apply for early access or get notified when we open to more organizations.',
    form: {
      name: 'Name',
      email: 'Email',
      company: 'Company',
      url: 'Website',
      urlPlaceholder: 'https://',
      size: 'Company size',
      sizeOptions: [
        { value: '', label: 'Select...' },
        { value: '1-19', label: '1-19 employees' },
        { value: '20-50', label: '20-50 employees' },
        { value: '51-100', label: '51-100 employees' },
        { value: '101-200', label: '101-200 employees' },
        { value: '200+', label: '200+ employees' },
      ],
      role: 'Your role',
      roleOptions: [
        { value: '', label: 'Select...' },
        { value: 'ceo-cto', label: 'CEO / CTO / Co-founder' },
        { value: 'vp', label: 'VP Engineering / VP Product' },
        { value: 'director', label: 'Director / Head of' },
        { value: 'manager', label: 'Manager' },
        { value: 'ic', label: 'Individual contributor' },
        { value: 'other', label: 'Other' },
      ],
      challenge: 'What\'s your biggest challenge with AI transformation?',
      challengePlaceholder: 'Optional — helps us understand your situation',
      notify: 'Notify me when generally available',
      submit: 'Apply for Early Access',
      submitted: 'Thanks! We\'ll be in touch.',
    },
  },
  fr: {
    title: 'Accès anticipé',
    subtitle: 'Nous sommes présentement en pilote fermé avec un petit nombre d\'entreprises SaaS. Postulez pour un accès anticipé ou soyez notifié quand nous ouvrirons à plus d\'organisations.',
    form: {
      name: 'Nom',
      email: 'Courriel',
      company: 'Entreprise',
      url: 'Site web',
      urlPlaceholder: 'https://',
      size: 'Taille de l\'entreprise',
      sizeOptions: [
        { value: '', label: 'Sélectionner...' },
        { value: '1-19', label: '1-19 employés' },
        { value: '20-50', label: '20-50 employés' },
        { value: '51-100', label: '51-100 employés' },
        { value: '101-200', label: '101-200 employés' },
        { value: '200+', label: '200+ employés' },
      ],
      role: 'Votre rôle',
      roleOptions: [
        { value: '', label: 'Sélectionner...' },
        { value: 'ceo-cto', label: 'PDG / CTO / Cofondateur' },
        { value: 'vp', label: 'VP Ingénierie / VP Produit' },
        { value: 'director', label: 'Directeur / Responsable' },
        { value: 'manager', label: 'Gestionnaire' },
        { value: 'ic', label: 'Contributeur individuel' },
        { value: 'other', label: 'Autre' },
      ],
      challenge: 'Quel est votre plus grand défi avec la transformation IA?',
      challengePlaceholder: 'Optionnel — nous aide à comprendre votre situation',
      notify: 'Me notifier quand disponible pour tous',
      submit: 'Postuler pour l\'accès anticipé',
      submitted: 'Merci! Nous vous contacterons.',
    },
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
    path: '/sign-up',
    title: {
      en: 'Early Access | AI Native Transformation',
      fr: 'Accès anticipé | AI Native Transformation',
    },
    description: {
      en: 'Apply for early access to the AI-Native Transformation platform or get notified when we open to more organizations.',
      fr: 'Postulez pour un accès anticipé à la plateforme de transformation IA ou soyez notifié quand nous ouvrirons à plus d\'organisations.',
    },
  });
}

export default async function SignUpPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const t = locale === 'fr' ? 'fr' : 'en';
  const c = copy[t];

  return (
    <>
      {/* Page header */}
      <section className="pb-8 pt-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary sm:text-5xl">
            {c.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-600 leading-relaxed">
            {c.subtitle}
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-20 pt-4">
        <div className="container mx-auto px-4">
          <div className="mb-12 border-t border-slate-200" />
          <form
            className="mx-auto max-w-2xl space-y-6"
            action="https://formspree.io/f/placeholder"
            method="POST"
          >
            {/* Name + Email */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-base font-medium text-slate-900">
                  {c.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-base font-medium text-slate-900">
                  {c.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>

            {/* Company + URL */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="company" className="mb-1.5 block text-base font-medium text-slate-900">
                  {c.form.company}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="url" className="mb-1.5 block text-base font-medium text-slate-900">
                  {c.form.url}
                </label>
                <input
                  type="url"
                  id="url"
                  name="url"
                  placeholder={c.form.urlPlaceholder}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>

            {/* Size + Role */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="size" className="mb-1.5 block text-base font-medium text-slate-900">
                  {c.form.size}
                </label>
                <select
                  id="size"
                  name="size"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-base text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                >
                  {c.form.sizeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="role" className="mb-1.5 block text-base font-medium text-slate-900">
                  {c.form.role}
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-base text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                >
                  {c.form.roleOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Challenge */}
            <div>
              <label htmlFor="challenge" className="mb-1.5 block text-base font-medium text-slate-900">
                {c.form.challenge}
              </label>
              <textarea
                id="challenge"
                name="challenge"
                rows={3}
                placeholder={c.form.challengePlaceholder}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
              />
            </div>

            {/* Notify checkbox */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="notify"
                name="notify"
                defaultChecked
                className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
              />
              <label htmlFor="notify" className="text-base text-slate-700">
                {c.form.notify}
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-hover focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none md:w-auto"
            >
              {c.form.submit}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
