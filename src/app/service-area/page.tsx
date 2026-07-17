import type { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/lib/company';
import { PageHero } from '@/components/page-hero';
import { SiteContainer } from '@/components/site-container';
import { buttonVariants } from '@/components/ui/button';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: `Service Area | Remote IT Support Across the United States | ${company.serviceBrand}`,
  description:
    'Margarito Ramirez IT Solutions provides remote-first IT support across the United States. Availability is confirmed for each request.',
  path: '/service-area/',
  keywords: ['remote IT support USA', 'nationwide IT support', 'service area'],
});

export default function ServiceAreaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Service area"
        title="Remote-first support across the United States."
        description="Availability is confirmed for each request based on the service, systems, location, and schedule."
      />

      <SiteContainer className="grid gap-8 py-16 md:grid-cols-3">
        {[
          [
            'Service model',
            'Remote support across the United States for managed IT, cybersecurity priorities, and helpdesk requests.',
          ],
          [
            'Availability',
            'Confirmed during intake — we clarify systems, access, priorities, and timing before work begins.',
          ],
          ['Support hours', company.businessHours],
        ].map(([title, text]) => (
          <div key={title} className="border-t border-[var(--border)] pt-5">
            <h2 className="text-xl font-semibold text-[var(--ink)]">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{text}</p>
          </div>
        ))}
      </SiteContainer>

      <section className="border-t border-[var(--border)] bg-white py-16">
        <SiteContainer>
          <h2 className="text-2xl font-semibold text-[var(--ink)]">Registered addresses</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="border border-[var(--border)] p-6">
              <h3 className="font-semibold text-[var(--ink)]">California</h3>
              <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[var(--muted)]">
                {company.californiaAddress}
              </p>
            </div>
            <div className="border border-[var(--border)] p-6">
              <h3 className="font-semibold text-[var(--ink)]">Texas office</h3>
              <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[var(--muted)]">
                {company.texasOffice}
              </p>
            </div>
          </div>
          <Link href="/support/" className={`${buttonVariants({ variant: 'primary' })} mt-10`}>
            Request IT Support
          </Link>
        </SiteContainer>
      </section>
    </main>
  );
}
