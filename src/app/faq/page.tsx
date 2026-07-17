import type { Metadata } from 'next';
import { company } from '@/lib/company';
import { FaqAccordion } from '@/components/faq-accordion';
import { SectionHeading } from '@/components/section-heading';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: `FAQ | ${company.serviceBrand}`,
  description:
    'Answers about managed IT, cybersecurity support, remote helpdesk, pricing, hours, nationwide coverage, and SMS choices for Margarito Ramirez IT Solutions.',
  path: '/faq/',
  keywords: ['IT support FAQ', 'managed IT questions', 'remote helpdesk FAQ'],
});

function FaqJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: company.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export default function FaqPage() {
  return (
    <main>
      <FaqJsonLd />
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
