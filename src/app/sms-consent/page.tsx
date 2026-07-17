import type { Metadata } from 'next';
import { company } from '@/lib/company';
import { SectionHeading } from '@/components/section-heading';
import { SmsConsentForm, SmsOptOutForm } from '@/components/sms-forms';
import { SmsDisclosureCard } from '@/components/sms-disclosure-card';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: `SMS Consent & Opt-Out | ${company.serviceBrand}`,
  description:
    'Affirmatively enroll in or opt out of MARGARITO RAMIREZ LLC Customer Care SMS. Consent starts unchecked and is never a condition of purchase.',
  path: '/sms-consent/',
  keywords: ['SMS consent', 'customer care text messages', 'SMS opt out'],
});

export default function SmsConsentPage() {
  const sms = company.smsProgram;

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
          Affirmatively choose whether to receive recurring IT support text messages from{' '}
          <strong>{sms.brandDisplayName}</strong>. The checkbox starts unchecked, and consent is never
          a condition of purchase.
        </p>
      </section>

      <section className="border-y border-slate-200 bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="What to expect"
              title={`Program: ${sms.name}`}
              description={sms.description}
            />
            <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600">
              {sms.messageFrequency} {sms.ratesDisclosure} {sms.helpInstructions}{' '}
              {sms.stopInstructions} Entering a phone number does not create consent. Enrollment
              occurs only after you select the separate checkbox and submit this form.
            </p>
          </div>
          <SmsDisclosureCard />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Enroll</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Separate affirmative opt-in for {sms.brandDisplayName} Customer Care SMS only.
            </p>
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
