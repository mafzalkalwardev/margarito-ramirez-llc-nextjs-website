import type { Metadata } from 'next';
import { company } from '@/lib/company';
import { SectionHeading } from '@/components/section-heading';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: `Contact | ${company.serviceBrand}`,
  description:
    'Submit an IT support or service inquiry. This form does not enroll you in recurring text messages.',
};

export default function ContactPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          Contact IT support
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Tell us how we can help.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Submit an IT support or service inquiry. This form does not enroll you in recurring text
          messages.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <SectionHeading
              eyebrow="Company contact"
              title={company.legalName}
              description={`${company.serviceBrand} service brand`}
            />
            <div className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
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
                <strong>Support hours</strong>
                <br />
                {company.businessHours}
              </p>
              <p>
                <strong>California</strong>
                <br />
                <span className="whitespace-pre-line">{company.californiaAddress}</span>
              </p>
              <p>
                <strong>Texas office</strong>
                <br />
                <span className="whitespace-pre-line">{company.texasOffice}</span>
              </p>
              <p className="rounded-2xl bg-[var(--background)] p-4 text-slate-500">
                Separate SMS choice: Contacting us here does not enroll you in recurring texts.
                Customer-care SMS requires a separate affirmative consent form.
              </p>
            </div>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
