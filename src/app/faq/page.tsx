import type { Metadata } from 'next';
import { company } from '@/lib/company';
import { FaqAccordion } from '@/components/faq-accordion';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: `FAQ | ${company.serviceBrand}`,
  description:
    'Answers about managed IT, cybersecurity support, remote helpdesk, pricing, hours, and SMS choices.',
};

export default function FaqPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions about IT support."
          description="A practical overview of services, hours, SMS choices, and how engagements begin."
          align="center"
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqAccordion items={[...company.faq]} />
        </div>
      </section>
    </main>
  );
}
