import type { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/lib/company';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: `Request IT Support | ${company.serviceBrand}`,
  description:
    'Start an IT support request for managed IT, cybersecurity, or remote helpdesk assistance.',
};

export default function SupportPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          Support request
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Start a support request.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Tell us what is happening, which systems are involved, and how you prefer to be contacted.
          We will acknowledge your request and confirm the next step.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            {company.processShort.map((item) => (
              <div key={item.step} className="border-t border-slate-200 pt-5">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                  {item.step}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
            <p className="rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600">
              Prefer email? Write to{' '}
              <a className="font-medium text-[var(--accent)]" href={`mailto:${company.emails.support}`}>
                {company.emails.support}
              </a>
              . For optional Customer Care SMS, use the{' '}
              <Link href="/sms-consent/" className="font-medium text-[var(--accent)]">
                SMS consent form
              </Link>
              .
            </p>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <ContactForm heading="Describe your request" />
          </div>
        </div>
      </section>
    </main>
  );
}
