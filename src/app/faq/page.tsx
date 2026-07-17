import type { Metadata } from 'next';
import { company } from '@/lib/company';
import { FaqAccordion } from '@/components/faq-accordion';
import { PageHero } from '@/components/page-hero';
import { SiteContainer } from '@/components/site-container';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: `FAQ | ${company.serviceBrand}`,
  description:
    'Answers about managed IT, cybersecurity support, remote helpdesk, pricing, hours, nationwide coverage, and SMS choices.',
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
      <PageHero
        eyebrow="FAQ"
        title="Common questions about IT support."
        description="Practical information about services, hours, SMS choices, and how engagements begin."
      />
      <SiteContainer className="max-w-3xl py-16">
        <FaqAccordion items={[...company.faq]} />
      </SiteContainer>
    </main>
  );
}
