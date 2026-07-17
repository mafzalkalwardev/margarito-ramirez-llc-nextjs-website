import Link from 'next/link';
import type { Metadata } from 'next';
import { company } from '@/lib/company';
import { BrandLogo } from '@/components/brand-logo';
import { PageHero } from '@/components/page-hero';
import { SiteContainer } from '@/components/site-container';
import { buttonVariants } from '@/components/ui/button';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: `About ${company.serviceBrand} | ${company.legalName}`,
  description:
    'Learn about Margarito Ramirez IT Solutions, the IT-support service brand of MARGARITO RAMIREZ LLC, including entity details, purpose, and locations.',
  path: '/about/',
  keywords: ['about Margarito Ramirez', 'California LLC IT support', 'Sherman Oaks IT company'],
});

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title={company.serviceBrand}
        description="Technology support grounded in clear communication for small businesses, professional offices, and remote workers."
      />

      <SiteContainer className="grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 text-base leading-8 text-[var(--muted)]">
          <BrandLogo size={64} />
          <p>{company.brandStatement}</p>
          <p>
            Every engagement begins by understanding the request, confirming scope and availability,
            and communicating the next step clearly. We do not invent guarantees, inflate service
            promises, or enroll customers in text messages through ordinary contact forms.
          </p>
          <ul className="space-y-2">
            <li>• Clear customer communication</li>
            <li>• Service scope confirmed before work begins</li>
            <li>• Accessible email-based support channels</li>
            <li>• Optional, permission-based Customer Care SMS</li>
          </ul>
          <Link href="/contact/" className={buttonVariants({ variant: 'primary' })}>
            Contact the company
          </Link>
        </div>

        <aside className="border border-[var(--border)] bg-white p-8">
          <h2 className="text-xl font-semibold text-[var(--ink)]">Company profile</h2>
          <dl className="mt-6 space-y-5 text-sm">
            {[
              ['Legal name', company.legalName],
              ['Sole member', company.soleMember],
              ['Entity type', company.businessType],
              ['Entity number', company.entityNumber],
              ['Formed', company.established],
              ['California', company.californiaAddress],
              ['Texas office', company.texasOffice],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="font-semibold text-[var(--ink)]">{label}</dt>
                <dd className="mt-1 whitespace-pre-line text-[var(--muted)]">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </SiteContainer>
    </main>
  );
}
