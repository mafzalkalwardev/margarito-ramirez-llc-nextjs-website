import Link from 'next/link';
import type { Metadata } from 'next';
import { company } from '@/lib/company';
import { SectionHeading } from '@/components/section-heading';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: `IT Services | Managed IT, Cybersecurity & Helpdesk | ${company.serviceBrand}`,
  description:
    'Explore managed IT services, cybersecurity and threat protection, and remote helpdesk support from Margarito Ramirez IT Solutions across the United States.',
  path: '/services/',
  keywords: ['managed IT services', 'cybersecurity services', 'remote helpdesk services'],
});

export default function ServicesPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">IT services</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Practical technology help, clearly explained.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Support for business devices, networks, cybersecurity priorities, and remote-work systems.
        </p>
      </section>

      <section className="border-y border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-6 lg:px-8">
          {company.services.map((service) => (
            <article key={service.id} className="grid gap-8 border-b border-slate-200 pb-16 last:border-0 last:pb-0 lg:grid-cols-[140px_1fr]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                Service {service.number}
              </p>
              <div>
                <h2 className="text-3xl font-semibold text-slate-900">{service.name}</h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{service.summary}</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-3">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Who it is for
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{service.designedFor}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      General process
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{service.process}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Service area
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{service.serviceArea}</p>
                  </div>
                </div>
                <Link
                  href="/support/"
                  className="mt-8 inline-flex items-center rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent)]"
                >
                  Request IT support
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Supporting capabilities"
          title="Everyday systems, people, and data."
          description="These themes run through our managed IT, cybersecurity, and helpdesk engagements."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {company.capabilities.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
            >
              {item}
            </span>
          ))}
          {company.pillars.map((pillar) => (
            <span
              key={pillar.title}
              className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-900"
            >
              {pillar.title}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
