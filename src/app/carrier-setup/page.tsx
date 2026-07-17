import { SectionHeading } from '@/components/section-heading';

export const metadata = {
  title: 'Carrier Setup | Margarito Ramirez LLC',
  description: 'Start the carrier setup process with Margarito Ramirez LLC for dispatch support and truck operations.',
};

export default function CarrierSetupPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-sm lg:p-14">
          <SectionHeading eyebrow="Carrier setup" title="Start your setup with a professional, straightforward onboarding process." description="The onboarding experience is designed to gather the information needed to begin support quickly and confidently." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[
              ['Company information', 'Provide basic carrier details so the team can understand your operation and equipment.'],
              ['Equipment and lanes', 'Share your equipment type, preferred lanes, and current operating priorities.'],
              ['Contact details', 'Make sure the dispatch team has the best number and email for fast communication.'],
              ['Next steps', 'Once the setup is reviewed, the team can begin discussing available opportunities and support options.'],
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
