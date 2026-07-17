import Link from 'next/link';
import type { Metadata } from 'next';
import { company } from '@/lib/company';
import { PageHero } from '@/components/page-hero';
import { SiteContainer } from '@/components/site-container';
import { buttonVariants } from '@/components/ui/button';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: `IT Services | Managed IT, Cybersecurity & Helpdesk | ${company.serviceBrand}`,
  description:
    'Explore managed IT services, cybersecurity and threat protection, and remote helpdesk support from Margarito Ramirez IT Solutions.',
  path: '/services/',
  keywords: ['managed IT services', 'cybersecurity services', 'remote helpdesk services'],
});

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Practical technology help, clearly explained."
        description="Support for business devices, networks, cybersecurity priorities, and remote-work systems."
      />

      <SiteContainer className="py-16">
        <div className="divide-y divide-[var(--border)] border-y border-[var(--border)] bg-white">
          {company.services.map((service) => (
            <article key={service.id} className="grid gap-8 px-6 py-12 lg:grid-cols-[120px_1fr] lg:px-10">
              <p className="text-sm font-semibold text-[var(--accent)]">Service {service.number}</p>
              <div>
                <h2 className="text-3xl font-semibold text-[var(--ink)]">{service.name}</h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">{service.summary}</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-3">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                      Who it is for
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{service.designedFor}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                      Process
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{service.process}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                      Service area
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{service.serviceArea}</p>
                  </div>
                </div>
                <Link href="/support/" className={`${buttonVariants({ variant: 'primary' })} mt-8`}>
                  Request IT support
                </Link>
              </div>
            </article>
          ))}
        </div>
      </SiteContainer>
    </main>
  );
}
