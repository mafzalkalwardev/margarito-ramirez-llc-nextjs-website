import type { Metadata } from 'next';
import { company } from '@/lib/company';
import { SectionHeading } from '@/components/section-heading';
import { SmsConsentForm, SmsOptOutForm } from '@/components/sms-forms';

export const metadata: Metadata = {
  title: `SMS Consent & Opt-Out | ${company.serviceBrand}`,
  description:
    'Affirmatively choose whether to receive recurring IT support text messages from MARGARITO RAMIREZ LLC.',
};

export default function SmsConsentPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          Your communication choices
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Customer-care SMS consent
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Affirmatively choose whether to receive recurring IT support text messages. The checkbox
          starts unchecked, and consent is never a condition of purchase.
        </p>
      </section>

      <section className="border-y border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="What to expect"
            title={`Program: ${company.smsProgram.name}`}
            description={`${company.brandStatement} Messages concern IT support tickets, scheduled troubleshooting, requested service information, and direct support responses. No marketing or promotional messages are sent.`}
          />
          <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600">
            Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP
            for help. Entering a phone number does not create consent. Enrollment occurs only after you
            select the separate checkbox and submit this form.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Enroll</h2>
            <div className="mt-6">
              <SmsConsentForm />
            </div>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Opt out online</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              For the fastest removal, reply STOP to any message. You may also submit your mobile
              number here.
            </p>
            <div className="mt-6">
              <SmsOptOutForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
