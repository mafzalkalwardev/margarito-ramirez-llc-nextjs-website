import Link from 'next/link';
import type { Metadata } from 'next';
import { company } from '@/lib/company';
import { BrandLogo } from '@/components/brand-logo';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: `About | ${company.serviceBrand}`,
  description:
    'Learn about Margarito Ramirez IT Solutions — the IT-support service brand of MARGARITO RAMIREZ LLC.',
};

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-8">
          <BrandLogo size={72} />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          About our company
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {company.serviceBrand}
        </h1>
        <p className="mt-3 text-xl font-medium text-slate-700">
          Technology support grounded in clear communication.
        </p>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          {company.brandStatement} We are a {company.businessType}.
        </p>
      </section>

      <section className="border-y border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-slate-900">Company profile</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Legal name', company.legalName],
              ['Sole member', company.soleMember],
              ['Entity', company.businessType],
              ['Formed', company.established],
              ['Entity number', company.entityNumber],
              ['Service brand', company.serviceBrand],
            ].map(([label, value]) => (
              <div key={label} className="border-t border-slate-200 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{label}</p>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-900">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Our purpose"
              title="Practical IT support without inflated promises."
              description="We provide practical IT support and technology consulting for small and medium-sized businesses, local professional offices, and independent remote workers."
            />
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every engagement begins by understanding the request, confirming scope and availability,
              and communicating the next step clearly.
            </p>
            <ul className="mt-8 space-y-3 text-sm leading-7 text-slate-600">
              <li>• Clear customer communication</li>
              <li>• Service scope confirmed before work begins</li>
              <li>• Accessible email-based support channels</li>
              <li>• Optional, permission-based Customer Care SMS</li>
            </ul>
            <Link
              href="/contact/"
              className="mt-8 inline-flex items-center rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent)]"
            >
              Contact the company
            </Link>
          </div>
          <div className="rounded-[32px] bg-slate-950 p-8 text-white lg:p-10">
            <h3 className="text-2xl font-semibold">Locations</h3>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
                  California
                </p>
                <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-200">
                  {company.californiaAddress}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
                  Texas office
                </p>
                <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-200">
                  {company.texasOffice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
