import type { Metadata } from 'next';
import { company } from '@/lib/company';
import { PageHero } from '@/components/page-hero';
import { SiteContainer } from '@/components/site-container';
import { SmsConsentForm, SmsOptOutForm } from '@/components/sms-forms';
import { SmsDisclosureCard } from '@/components/sms-disclosure-card';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: `SMS Consent & Opt-Out | ${company.serviceBrand}`,
  description:
    'Affirmatively enroll in or opt out of MARGARITO RAMIREZ LLC Customer Care SMS. Consent starts unchecked and is never a condition of purchase.',
  path: '/sms-consent/',
  keywords: ['SMS consent', 'customer care text messages', 'SMS opt out'],
});

export default function SmsConsentPage() {
  const sms = company.smsProgram;

  return (
    <main>
      <PageHero
        eyebrow="Messaging choices"
        title="Customer-care SMS consent"
        description={`Affirmatively choose whether to receive recurring IT support text messages from ${sms.brandDisplayName}. The checkbox starts unchecked, and consent is never a condition of purchase.`}
      />

      <SiteContainer className="grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-2xl font-semibold text-[var(--ink)]">Program: {sms.name}</h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">{sms.description}</p>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            {sms.messageFrequency} {sms.ratesDisclosure} {sms.helpInstructions} {sms.stopInstructions}
          </p>
        </div>
        <SmsDisclosureCard />
      </SiteContainer>

      <section className="border-t border-[var(--border)] bg-white py-16">
        <SiteContainer className="grid gap-10 lg:grid-cols-2">
          <div className="border border-[var(--border)] p-8">
            <h2 className="text-2xl font-semibold text-[var(--ink)]">Enroll</h2>
            <div className="mt-6">
              <SmsConsentForm />
            </div>
          </div>
          <div className="border border-[var(--border)] p-8">
            <h2 className="text-2xl font-semibold text-[var(--ink)]">Opt out online</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              For the fastest removal, reply STOP to any message. You may also submit your mobile
              number here.
            </p>
            <div className="mt-6">
              <SmsOptOutForm />
            </div>
          </div>
        </SiteContainer>
      </section>
    </main>
  );
}
