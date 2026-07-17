import type { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/lib/company';
import { PageHero } from '@/components/page-hero';
import { SiteContainer } from '@/components/site-container';
import { ContactForm } from '@/components/contact-form';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: `Request IT Support | ${company.serviceBrand}`,
  description:
    'Start an IT support request for managed IT, cybersecurity, or remote helpdesk assistance with Margarito Ramirez IT Solutions.',
  path: '/support/',
  keywords: ['request IT support', 'open support ticket', 'helpdesk request'],
});

export default function SupportPage() {
  return (
    <main>
      <PageHero
        eyebrow="Support"
        title="Start a support request."
        description="Tell us what is happening, which systems are involved, and how you prefer to be contacted."
      />

      <SiteContainer className="grid gap-10 py-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-8">
          {company.processShort.map((item) => (
            <div key={item.step} className="border-t border-[var(--border)] pt-5">
              <p className="text-sm font-semibold text-[var(--accent)]">{item.step}</p>
              <h2 className="mt-2 text-xl font-semibold text-[var(--ink)]">{item.title}</h2>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
            </div>
          ))}
          <p className="border border-[var(--border)] bg-white p-5 text-sm leading-7 text-[var(--muted)]">
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

        <div className="border border-[var(--border)] bg-white p-8">
          <ContactForm heading="Describe your request" />
        </div>
      </SiteContainer>
    </main>
  );
}
