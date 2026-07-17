import { company } from '@/lib/company';
import { FaqAccordion } from '@/components/faq-accordion';
import { SectionHeading } from '@/components/section-heading';

export const metadata = {
  title: 'FAQ | Margarito Ramirez LLC',
  description: 'Answers to common questions about truck dispatch services, pricing, load control, nationwide support, and onboarding.',
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Questions carriers commonly ask before they begin." description="A practical overview of how the service is structured and what to expect from the first conversation onward." align="center" />
        <div className="mt-12">
          <FaqAccordion items={company.faq} />
        </div>
      </section>
    </main>
  );
}
