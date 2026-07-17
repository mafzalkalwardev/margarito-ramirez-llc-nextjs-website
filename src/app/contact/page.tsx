import type { Metadata } from 'next';
import { company } from '@/lib/company';
import { PageHero } from '@/components/page-hero';
import { SiteContainer } from '@/components/site-container';
import { ContactForm } from '@/components/contact-form';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: `Contact | ${company.serviceBrand}`,
  description:
    'Contact Margarito Ramirez IT Solutions for managed IT, cybersecurity, or remote helpdesk inquiries. This form does not enroll you in recurring text messages.',
  path: '/contact/',
  keywords: ['contact IT support', 'IT support request', 'customer service email'],
});

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Tell us how we can help."
        description="Submit an IT support or service inquiry. This form does not enroll you in recurring text messages."
      />

      <SiteContainer className="grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="border border-[var(--border)] bg-white p-8">
          <h2 className="text-xl font-semibold text-[var(--ink)]">{company.legalName}</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">{company.serviceBrand}</p>
          <div className="mt-8 space-y-4 text-sm leading-7 text-[var(--muted)]">
            <p>
              <a className="font-medium text-[var(--accent)]" href={`mailto:${company.emails.support}`}>
                {company.emails.support}
              </a>
            </p>
            <p>
              <a className="font-medium text-[var(--accent)]" href={`mailto:${company.emails.service}`}>
                {company.emails.service}
              </a>
            </p>
            <p>
              <strong className="text-[var(--ink)]">Hours</strong>
              <br />
              {company.businessHours}
            </p>
            <p>
              <strong className="text-[var(--ink)]">California</strong>
              <br />
              <span className="whitespace-pre-line">{company.californiaAddress}</span>
            </p>
            <p>
              <strong className="text-[var(--ink)]">Texas office</strong>
              <br />
              <span className="whitespace-pre-line">{company.texasOffice}</span>
            </p>
            <p className="border border-[var(--border)] bg-[var(--background)] p-4 text-[var(--muted)]">
              Contacting us here does not enroll you in recurring texts. Customer-care SMS requires a
              separate affirmative consent form.
            </p>
          </div>
        </aside>

        <div className="border border-[var(--border)] bg-white p-8">
          <ContactForm />
        </div>
      </SiteContainer>
    </main>
  );
}
