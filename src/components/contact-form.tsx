'use client';

import { company } from '@/lib/company';

type ContactFormProps = {
  heading?: string;
};

export function ContactForm({ heading = 'Send a support inquiry' }: ContactFormProps) {
  return (
    <form
      action={company.formEndpoints.contact}
      method="POST"
      className="space-y-5"
    >
      <input type="hidden" name="_subject" value="IT Support Request — Margarito Ramirez IT Solutions" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <h3 className="text-xl font-semibold text-slate-900">{heading}</h3>

      <label className="block text-sm font-medium text-slate-700">
        Full name
        <input
          required
          name="full_name"
          className="mt-2 w-full rounded-md border border-slate-200 bg-[var(--surface)] px-4 py-3 outline-none ring-[var(--accent)] focus:ring-2"
          placeholder="Your name"
        />
      </label>

      <label className="block text-sm font-medium text-slate-700">
        Email
        <input
          required
          type="email"
          name="email"
          className="mt-2 w-full rounded-md border border-slate-200 bg-[var(--surface)] px-4 py-3 outline-none ring-[var(--accent)] focus:ring-2"
          placeholder="you@example.com"
        />
      </label>

      <label className="block text-sm font-medium text-slate-700">
        Telephone (optional)
        <input
          type="tel"
          name="telephone"
          className="mt-2 w-full rounded-md border border-slate-200 bg-[var(--surface)] px-4 py-3 outline-none ring-[var(--accent)] focus:ring-2"
          placeholder="Optional"
        />
      </label>

      <label className="block text-sm font-medium text-slate-700">
        Service of interest
        <select
          required
          name="service_of_interest"
          defaultValue=""
          className="mt-2 w-full rounded-md border border-slate-200 bg-[var(--surface)] px-4 py-3 outline-none ring-[var(--accent)] focus:ring-2"
        >
          <option value="" disabled>
            Select a service
          </option>
          <option>Managed IT Services</option>
          <option>Cybersecurity & Threat Protection</option>
          <option>Remote Helpdesk Support</option>
          <option>General information</option>
        </select>
      </label>

      <label className="block text-sm font-medium text-slate-700">
        Message
        <textarea
          required
          name="message"
          className="mt-2 min-h-32 w-full rounded-md border border-slate-200 bg-[var(--surface)] px-4 py-3 outline-none ring-[var(--accent)] focus:ring-2"
          placeholder="Describe what is happening and what you need."
        />
      </label>

      <fieldset>
        <legend className="text-sm font-medium text-slate-700">Preferred contact method</legend>
        <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-700">
          {['Email', 'Phone', 'Text'].map((method) => (
            <label key={method} className="inline-flex items-center gap-2">
              <input type="radio" name="preferred_contact_method" value={method} required />
              {method}
            </label>
          ))}
        </div>
      </fieldset>

      <p className="text-sm leading-7 text-slate-600">
        By submitting this form, I authorize {company.legalName} to contact me regarding this specific
        request.
      </p>
      <p className="text-sm leading-7 text-slate-500">
        This request does not enroll you in recurring text messages. To receive customer-care SMS
        updates, use our separate{' '}
        <a href="/sms-consent/" className="font-medium text-[var(--accent)] underline-offset-2 hover:underline">
          SMS consent form
        </a>
        .
      </p>

      <button
        type="submit"
        className="inline-flex items-center rounded-md bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent)]"
      >
        Send message
      </button>
    </form>
  );
}
