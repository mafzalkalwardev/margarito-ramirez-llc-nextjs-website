import type { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/lib/company';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: `Service Area | ${company.serviceBrand}`,
  description:
    'Remote IT support across the United States. Availability is confirmed for each request.',
};

export default function ServiceAreaPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          Service area
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Remote-first support across the United States.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          {company.serviceBrand} provides remote IT support nationwide. Availability is confirmed for
          each request based on the service, systems, location, and schedule.
        </p>
      </section>

      <section className="border-y border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              [
                'Service model',
                'Remote support across the United States for managed IT, cybersecurity priorities, and helpdesk requests.',
              ],
              [
                'Availability',
                'Confirmed per request during intake — we clarify systems, access, priorities, and timing before work begins.',
              ],
              [
                'Support hours',
                company.businessHours,
              ],
            ].map(([title, text]) => (
              <div key={title} className="border-t border-slate-200 pt-6">
                <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Company locations"
          title="Registered addresses for MARGARITO RAMIREZ LLC."
          description="Remote support is the primary service model. These addresses identify the legal entity."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8">
            <h3 className="text-lg font-semibold text-slate-900">California</h3>
            <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600">
              {company.californiaAddress}
            </p>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-white p-8">
            <h3 className="text-lg font-semibold text-slate-900">Texas office</h3>
            <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600">
              {company.texasOffice}
            </p>
          </div>
        </div>
        <Link
          href="/support/"
          className="mt-10 inline-flex items-center rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent)]"
        >
          Request IT Support
        </Link>
      </section>
    </main>
  );
}
