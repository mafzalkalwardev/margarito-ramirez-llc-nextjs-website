import type { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/lib/company';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: `Terms and Conditions | ${company.serviceBrand}`,
  description: `Terms governing the ${company.serviceBrand} website, IT service requests, and the ${company.legalName} customer-care messaging program.`,
  path: '/terms/',
  keywords: ['terms and conditions', 'website terms', 'IT service terms'],
});

export default function TermsPage() {
  return (
    <main>
      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          Legal & policy
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          Terms and Conditions
        </h1>
        <p className="mt-4 text-sm text-slate-500">
          Effective {company.policyEffectiveDate} · Last updated {company.policyEffectiveDate}
        </p>
        <p className="mt-6 text-base leading-8 text-slate-600">
          These terms govern this website, IT service requests, and the {company.legalName}{' '}
          customer-care messaging program.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">1. Agreement and identity</h2>
            <p className="mt-3">
              These Terms apply between you and {company.legalName}, a {company.businessType}.{' '}
              {company.brandStatement} By using this website, you agree to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">2. Website use and IT service requests</h2>
            <p className="mt-3">
              Website content is general information and does not guarantee availability, pricing,
              scheduling, technical outcomes, or acceptance of a request. A submitted request becomes
              an agreement only after the company confirms scope and you accept the applicable service
              terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">3. Your responsibilities</h2>
            <p className="mt-3">
              You must provide accurate information, use contact details you control, maintain
              authorized access and backups, and comply with law. You may not misuse forms, impersonate
              others, transmit malware, probe security, scrape content, or use the site fraudulently.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              4. Pricing, payment, scheduling, and cancellation
            </h2>
            <p className="mt-3">
              Confirmed pricing, payment terms, scheduling, cancellation rules, and refund terms are
              provided before a binding transaction. No website content constitutes a quote.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">5. Customer-care SMS program</h2>
            <p className="mt-3">
              Program: {company.smsProgram.name}. Users enroll only through a separate affirmative SMS
              consent action. Messages include IT support ticket updates, troubleshooting appointment
              coordination, requested service information, and direct support responses. No marketing
              or promotional messages are sent. Consent is not a condition of purchase.
            </p>
            <p className="mt-3">
              Message frequency varies. Message and data rates may apply. Reply HELP for help and STOP
              to opt out. Supported opt-out words include{' '}
              {company.smsProgram.optOutWords.join(', ')}. For customer care, email{' '}
              <a className="text-[var(--accent)]" href={`mailto:${company.emails.sms}`}>
                {company.emails.sms}
              </a>
              . Read the{' '}
              <Link href="/sms-terms/" className="text-[var(--accent)]">
                SMS Terms
              </Link>
              , or use the{' '}
              <Link href="/sms-consent/" className="text-[var(--accent)]">
                SMS consent and opt-out page
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">6. Intellectual property</h2>
            <p className="mt-3">
              The website design, text, graphics, and company identifiers are owned by or licensed to
              the company, except third-party materials. No rights are granted beyond personal, lawful
              website use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">7. Third-party services</h2>
            <p className="mt-3">
              Hosting, form delivery, security, telecommunications, and other providers may have
              separate terms. Information handling is described in the{' '}
              <Link href="/privacy/" className="text-[var(--accent)]">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">8. Disclaimers and liability</h2>
            <p className="mt-3">
              To the extent permitted by law, the website is provided “as is” without warranties not
              expressly stated. Cybersecurity risk cannot be eliminated, and no specific technical
              result is guaranteed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">9. Indemnification</h2>
            <p className="mt-3">
              To the extent permitted by law, you agree to be responsible for losses arising from
              unlawful misuse of the website or material breach of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">10. Termination</h2>
            <p className="mt-3">
              We may restrict access for security, unlawful conduct, or material breach.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">11. Governing law and changes</h2>
            <p className="mt-3">
              California law governs these Terms without overriding mandatory consumer protections. We
              may update the Terms by posting a revised version and effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">12. Contact</h2>
            <p className="mt-3">
              {company.legalName}
              <br />
              <a className="text-[var(--accent)]" href={`mailto:${company.emails.support}`}>
                {company.emails.support}
              </a>
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
