import type { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/lib/company';

export const metadata: Metadata = {
  title: `Privacy Policy | ${company.serviceBrand}`,
  description: `How ${company.legalName} collects, uses, protects, and retains information through this website and customer communications.`,
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          Legal & policy
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">Privacy Policy</h1>
        <p className="mt-4 text-sm text-slate-500">
          Effective {company.policyEffectiveDate} · Last updated {company.policyEffectiveDate}
        </p>
        <p className="mt-6 text-base leading-8 text-slate-600">
          This policy explains how {company.legalName} collects, uses, protects, and retains
          information through this website and its customer communications.
        </p>

        <div className="prose-legal mt-10 space-y-8 text-sm leading-7 text-slate-600">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">1. Who we are</h2>
            <p className="mt-3">
              {company.legalName}, a {company.businessType} (Entity No. {company.entityNumber}),
              operates {company.domain}. {company.brandStatement} Privacy questions may be sent to{' '}
              <a className="text-[var(--accent)]" href={`mailto:${company.emails.privacy}`}>
                {company.emails.privacy}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">2. Information we collect</h2>
            <p className="mt-3">
              We may collect contact details, service-request information, communication preferences,
              messages you send, IP addresses, browser or device information, security logs, and
              timestamps.
            </p>
            <h3 className="mt-5 text-base font-semibold text-slate-900">SMS information</h3>
            <p className="mt-2">
              If you submit the separate SMS consent form or exchange texts with us, the messaging
              system records the mobile number, name, selected category, exact consent disclosure and
              version, policy versions, source URL, timestamp, hashed IP address, user agent, consent
              status, and opt-out history.
            </p>
            <p className="mt-3">
              <strong>SMS privacy:</strong> No mobile information will be shared with third parties or
              affiliates for marketing or promotional purposes. All other categories exclude
              text-messaging originator opt-in data and consent; this information will not be shared
              with any third parties. Mobile numbers and personal information are not sold or rented.
            </p>
            <p className="mt-3">
              For the {company.smsProgram.name} program: {company.smsProgram.messageFrequency}{' '}
              {company.smsProgram.ratesDisclosure} {company.smsProgram.helpInstructions}{' '}
              {company.smsProgram.stopInstructions}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">3. How we use information</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Respond to inquiries and fulfill service requests.</li>
              <li>Schedule services and provide customer support.</li>
              <li>Send customer-care text messages after affirmative consent.</li>
              <li>Maintain consent evidence and suppression records.</li>
              <li>Operate, secure, debug, and improve the website.</li>
              <li>Comply with law and protect rights, safety, and integrity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">4. Cookies and analytics</h2>
            <p className="mt-3">
              Essential cookies may support security and form processing. We do not currently use
              advertising cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">5. Service providers and disclosures</h2>
            <p className="mt-3">
              We use hosting, security, email, form-delivery, and messaging providers to operate this
              website and customer communications. Service providers process information only to
              perform services on our behalf and are not authorized to use mobile opt-in data for their
              own marketing. We may also disclose information when required by law or necessary to
              protect legitimate rights and safety.
            </p>
            <p className="mt-3">
              No mobile information will be shared with third parties or affiliates for marketing or
              promotional purposes. Text-messaging originator opt-in data and consent will not be shared
              with any third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">6. SMS choices</h2>
            <p className="mt-3">
              {company.smsProgram.messageFrequency} {company.smsProgram.ratesDisclosure}{' '}
              {company.smsProgram.helpInstructions} {company.smsProgram.stopInstructions} You may also
              use the{' '}
              <Link href="/sms-consent/" className="text-[var(--accent)]">
                online opt-out form
              </Link>
              . Consent and suppression records may be retained to demonstrate and honor communication
              choices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">7. Data retention and security</h2>
            <p className="mt-3">
              We retain information only as long as reasonably necessary for the purposes described,
              contractual and legal obligations, dispute resolution, security, and suppression
              enforcement. No system can guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">8. Your choices and requests</h2>
            <p className="mt-3">
              You may request access, correction, or deletion, subject to identity verification and
              legal exceptions, by emailing{' '}
              <a className="text-[var(--accent)]" href={`mailto:${company.emails.privacy}`}>
                {company.emails.privacy}
              </a>
              . You can separately withdraw SMS consent using STOP.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">9. Children&apos;s privacy</h2>
            <p className="mt-3">
              The website and services are not directed to children under 13, and we do not knowingly
              collect their personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">10. Policy changes</h2>
            <p className="mt-3">
              We may update this policy and will post the revised date here.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">11. Contact</h2>
            <p className="mt-3">
              {company.legalName}
              <br />
              <a className="text-[var(--accent)]" href={`mailto:${company.emails.privacy}`}>
                {company.emails.privacy}
              </a>
            </p>
            <p className="mt-3">
              Also review our{' '}
              <Link href="/terms/" className="text-[var(--accent)]">
                Terms and Conditions
              </Link>{' '}
              and{' '}
              <Link href="/sms-terms/" className="text-[var(--accent)]">
                SMS Terms
              </Link>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
