import type { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/lib/company';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: `SMS Terms | ${company.serviceBrand}`,
  description: `SMS terms for the ${company.legalName} Customer Care and Support messaging program, including frequency, STOP/HELP, and enrollment rules.`,
  path: '/sms-terms/',
  keywords: ['SMS terms', 'text messaging terms', 'customer care SMS'],
});

export default function SmsTermsPage() {
  return (
    <main>
      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          Legal & policy
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">SMS Terms</h1>
        <p className="mt-4 text-sm text-slate-500">
          Effective {company.policyEffectiveDate} · Last updated {company.policyEffectiveDate}
        </p>
        <p className="mt-6 text-base leading-8 text-slate-600">
          Terms for the {company.legalName} Customer Care and Support messaging program.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">Program details</h2>
            <p className="mt-3">
              Program and sponsor: {company.smsProgram.name}
              <br />
              Service brand: {company.serviceBrand}
              <br />
              Customer care:{' '}
              <a className="text-[var(--accent)]" href={`mailto:${company.emails.sms}`}>
                {company.emails.sms}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Enrollment and message categories</h2>
            <p className="mt-3">
              Users affirmatively opt in through the public{' '}
              <Link href="/sms-consent/" className="text-[var(--accent)]">
                SMS consent form
              </Link>{' '}
              by entering a mobile number and selecting a separate checkbox that is unchecked by
              default. Messages are limited to IT support ticket updates, scheduled troubleshooting
              coordination, requested service information, and direct support responses. No marketing,
              promotional, or automated bulk messages are sent. Consent is not a condition of purchase.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Frequency and charges</h2>
            <p className="mt-3">
              {company.smsProgram.messageFrequency} {company.smsProgram.ratesDisclosure} Carriers are
              not responsible for delayed or undelivered messages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Stopping messages</h2>
            <p className="mt-3">
              Reply STOP to any program message to cancel. Supported opt-out words include{' '}
              {company.smsProgram.optOutWords.join(', ')}. Opt-outs suppress future program messages
              except the permitted final confirmation. You may also use the online opt-out form.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Help</h2>
            <p className="mt-3">
              Reply HELP or INFO for assistance, or email{' '}
              <a className="text-[var(--accent)]" href={`mailto:${company.emails.sms}`}>
                {company.emails.sms}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Re-enrollment</h2>
            <p className="mt-3">
              After opting out, a user must provide a new affirmative opt-in. Text-to-join or START
              applies only when disclosed for the registered campaign.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Privacy and general terms</h2>
            <p className="mt-3">
              Review the{' '}
              <Link href="/privacy/" className="text-[var(--accent)]">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/terms/" className="text-[var(--accent)]">
                Terms and Conditions
              </Link>
              . If terms conflict specifically about SMS, these SMS Terms govern that issue.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
