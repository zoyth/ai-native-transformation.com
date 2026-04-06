// ABOUTME: Client-side sign-up form with AJAX submission to Formspree.
// ABOUTME: Shows inline success message instead of redirecting away from the site.

'use client';

import { useState, type FormEvent } from 'react';

interface FormCopy {
  name: string;
  email: string;
  company: string;
  url: string;
  urlPlaceholder: string;
  size: string;
  sizeOptions: { value: string; label: string }[];
  role: string;
  roleOptions: { value: string; label: string }[];
  challenge: string;
  challengePlaceholder: string;
  notify: string;
  submit: string;
  submitted: string;
}

export function SignUpForm({ copy }: { copy: FormCopy }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mreooerq', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="mx-auto max-w-2xl rounded-xl border border-slate-200 p-12 text-center">
        <p className="text-xl font-semibold text-slate-900">{copy.submitted}</p>
      </div>
    );
  }

  const inputClass = 'w-full rounded-lg border border-slate-300 px-4 py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none';

  return (
    <form
      className="mx-auto max-w-2xl space-y-6"
      onSubmit={handleSubmit}
    >
      {/* Name + Email */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-base font-medium text-slate-900">
            {copy.name}
          </label>
          <input type="text" id="name" name="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-base font-medium text-slate-900">
            {copy.email}
          </label>
          <input type="email" id="email" name="email" required className={inputClass} />
        </div>
      </div>

      {/* Company + URL */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-base font-medium text-slate-900">
            {copy.company}
          </label>
          <input type="text" id="company" name="company" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="url" className="mb-1.5 block text-base font-medium text-slate-900">
            {copy.url}
          </label>
          <input type="url" id="url" name="url" placeholder={copy.urlPlaceholder} className={inputClass} />
        </div>
      </div>

      {/* Size + Role */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="size" className="mb-1.5 block text-base font-medium text-slate-900">
            {copy.size}
          </label>
          <select id="size" name="size" required className={inputClass}>
            {copy.sizeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="role" className="mb-1.5 block text-base font-medium text-slate-900">
            {copy.role}
          </label>
          <select id="role" name="role" required className={inputClass}>
            {copy.roleOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Challenge */}
      <div>
        <label htmlFor="challenge" className="mb-1.5 block text-base font-medium text-slate-900">
          {copy.challenge}
        </label>
        <textarea
          id="challenge"
          name="challenge"
          rows={3}
          placeholder={copy.challengePlaceholder}
          className={inputClass}
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
          {copy.notify}
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-hover focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none disabled:opacity-50 md:w-auto"
      >
        {status === 'submitting' ? '...' : copy.submit}
      </button>

      {status === 'error' && (
        <p className="text-red-600">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
