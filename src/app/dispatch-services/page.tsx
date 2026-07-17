import { SectionHeading } from '@/components/section-heading';

export const metadata = {
  title: 'Dispatch Services | Margarito Ramirez LLC',
  description: 'Professional dispatch support for owner-operators and small fleets focused on better freight opportunities and dependable communication.',
};

export default function DispatchServicesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-sm lg:p-14">
          <SectionHeading eyebrow="Dispatch services" title="A dispatch support model for carriers who want consistency and control." description="The service focuses on keeping your operation informed, prepared, and positioned for better opportunities." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[
              ['Load Sourcing', 'Identify and evaluate freight opportunities that align with your availability and equipment.'],
              ['Rate Review', 'Review lanes and offers with a practical focus on margin, efficiency, and fit.'],
              ['Communication', 'Keep you informed with updates so you can make decisions quickly and confidently.'],
              ['Operational Support', 'Provide the follow-through needed to keep paperwork, planning, and load execution organized.'],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-7">
                <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
