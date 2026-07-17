'use client';

import Link from 'next/link';
import { company } from '@/lib/company';

export function SmsConsentForm() {
  return (
    <form action={company.formEndpoints.smsConsent} method="POST" className="space-y-5">
      <input type="hidden" name="_subject" value="SMS Consent Enrollment — Customer Care" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="form_type" value="sms_consent" />
      <input type="hidden" name="program" value={company.smsProgram.name} />
      <input type="hidden" name="disclosure_version" value={company.policyEffectiveDate} />
      <input type="hidden" name="source_url" value={`${company.domain}/sms-consent/`} />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          First name
          <input
            required
            name="first_name"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-[var(--surface)] px-4 py-3 outline-none ring-[var(--accent)] focus:ring-2"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Last name
          <input
            required
            name="last_name"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-[var(--surface)] px-4 py-3 outline-none ring-[var(--accent)] focus:ring-2"
          />
        </label>
      </div>

      <label className="block text-sm font-medium text-slate-700">
        Mobile telephone number
        <input
          required
          type="tel"
          name="mobile_number"
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-[var(--surface)] px-4 py-3 outline-none ring-[var(--accent)] focus:ring-2"
          placeholder="Mobile number"
        />
      </label>

      <label className="block text-sm font-medium text-slate-700">
        Email (optional)
        <input
          type="email"
          name="email"
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-[var(--surface)] px-4 py-3 outline-none ring-[var(--accent)] focus:ring-2"
        />
      </label>

      <label className="block text-sm font-medium text-slate-700">
        Preferred message category
        <select
          required
          name="message_category"
          defaultValue=""
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-[var(--surface)] px-4 py-3 outline-none ring-[var(--accent)] focus:ring-2"
        >
          <option value="" disabled>
            Select a category
          </option>
          {company.smsProgram.categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>

      <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[var(--surface)] p-4 text-sm leading-7 text-slate-700">
        <input
          required
          type="checkbox"
          name="sms_consent"
          value="yes"
          className="mt-1.5 h-4 w-4 shrink-0"
          defaultChecked={false}
        />
        <span>
          By checking this box and submitting the form, you agree to receive recurring customer-care
          text messages from {company.legalName} at the mobile number provided. {company.brandStatement}{' '}
          Messages include IT support ticket updates, troubleshooting appointment coordination,
          requested service information, and direct support responses. No marketing or promotional
          messages are sent. Message frequency varies. Message and data rates may apply. Reply STOP
          to opt out or HELP for help. Consent is not a condition of purchase. View our{' '}
          <Link href="/terms/" className="font-medium text-[var(--accent)] underline-offset-2 hover:underline">
            Terms & Conditions
          </Link>
          ,{' '}
          <Link href="/sms-terms/" className="font-medium text-[var(--accent)] underline-offset-2 hover:underline">
            SMS Terms
          </Link>
          , and{' '}
          <Link href="/privacy/" className="font-medium text-[var(--accent)] underline-offset-2 hover:underline">
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      <p className="text-sm leading-7 text-slate-500">
        Entering a phone number does not create consent. Enrollment occurs only after you select the
        separate checkbox and submit this form. SMS consent records are emailed to{' '}
        {company.emails.sms} for processing; production messaging should use a configured customer-care
        messaging provider separate from ordinary contact form delivery.
      </p>

      <button
        type="submit"
        className="inline-flex items-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent)]"
      >
        Agree and enroll
      </button>
    </form>
  );
}

export function SmsOptOutForm() {
  return (
    <form action={company.formEndpoints.smsOptOut} method="POST" className="space-y-5">
      <input type="hidden" name="_subject" value="SMS Opt-Out Request — Customer Care" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="form_type" value="sms_opt_out" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <label className="block text-sm font-medium text-slate-700">
        Mobile telephone number
        <input
          required
          type="tel"
          name="mobile_number"
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-[var(--surface)] px-4 py-3 outline-none ring-[var(--accent)] focus:ring-2"
        />
      </label>

      <label className="flex items-start gap-3 text-sm leading-7 text-slate-700">
        <input required type="checkbox" name="opt_out_confirmation" value="yes" className="mt-1.5 h-4 w-4 shrink-0" />
        <span>
          I confirm that I control this mobile number and want to stop customer-care text messages from{' '}
          {company.legalName}.
        </span>
      </label>

      <button
        type="submit"
        className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
      >
        Stop text messages
      </button>
    </form>
  );
}
