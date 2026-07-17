'use client';

import Link from 'next/link';
import { company } from '@/lib/company';

export function SmsConsentForm() {
  const sms = company.smsProgram;

  return (
    <form action={company.formEndpoints.smsConsent} method="POST" className="space-y-5">
      <input type="hidden" name="_subject" value="SMS Consent Enrollment — Customer Care" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="form_type" value="sms_consent" />
      <input type="hidden" name="program" value={sms.name} />
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
          {sms.categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>

      <label className="flex items-start gap-3 rounded-2xl border border-teal-200 bg-teal-50/60 p-4 text-sm leading-7 text-slate-700">
        <input
          required
          type="checkbox"
          name="sms_consent"
          value="yes"
          className="mt-1.5 h-4 w-4 shrink-0"
          defaultChecked={false}
        />
        <span>
          By checking this box and submitting this form, I agree to receive recurring customer-care
          text messages from <strong>{sms.brandDisplayName}</strong> at the mobile number provided.
          Program: {sms.name}. {company.brandStatement} {sms.description} {sms.messageFrequency}{' '}
          {sms.ratesDisclosure} {sms.helpInstructions} {sms.stopInstructions} Consent is not a
          condition of purchase. View our{' '}
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
        Entering a phone number alone does not create consent. Enrollment occurs only after you select
        the separate unchecked checkbox and submit this form. Mobile information will not be shared
        with third parties or affiliates for marketing or promotional purposes.
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
        <input
          required
          type="checkbox"
          name="opt_out_confirmation"
          value="yes"
          className="mt-1.5 h-4 w-4 shrink-0"
        />
        <span>
          I confirm that I control this mobile number and want to stop customer-care text messages from{' '}
          {company.legalName}. You can also reply STOP to any message for the fastest removal.
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
