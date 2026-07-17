import { company } from '@/lib/company';
import { SectionHeading } from '@/components/section-heading';

export const metadata = {
  title: 'Services | Margarito Ramirez LLC',
  description: 'Explore dispatch services including load planning, rate negotiation, broker communication, paperwork management, and compliance support.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading eyebrow="Services" title="The support behind steady freight movement." description="A focused dispatch service model built around strong communication, practical planning, and carrier support." align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {company.services.map((service) => (
            <div key={service} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{service}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Support tailored to improve operation flow, reduce friction, and strengthen your hauling strategy.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
