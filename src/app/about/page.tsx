import Link from 'next/link';
import { company } from '@/lib/company';
import { SectionHeading } from '@/components/section-heading';

export const metadata = {
  title: 'About | Margarito Ramirez LLC',
  description: 'Learn more about Margarito Ramirez LLC and the professional dispatch support model built for owner-operators and small fleets.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-sm lg:p-14">
          <SectionHeading eyebrow="About" title="Built around professional dispatching, clear communication, and dependable support." description="Margarito Ramirez LLC is a California-based logistics support company focused on helping owner-operators and small fleets find better opportunities and stay organized in today’s freight market." />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>Dispatching is more than finding available loads. It requires planning, professional communication, and the ability to understand what matters to each carrier.</p>
              <p>That is the standard behind the service. Whether the need is route planning, paperwork support, broker communication, or consistent load follow-up, the focus remains on practical, reliable support that helps a trucking operation continue moving forward.</p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-[#F8FAFC] p-8">
              <h3 className="text-2xl font-semibold text-slate-900">Why carriers choose this approach</h3>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                <li>• Clear communication with a professional dispatch team</li>
                <li>• Stronger negotiation support for better rates</li>
                <li>• More informed load planning and route decisions</li>
                <li>• A service model focused on trust and accountability</li>
              </ul>
              <Link href="#contact" className="mt-8 inline-flex items-center rounded-full bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1E3A8A]">Contact the Team</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-10 text-white shadow-xl">
          <h3 className="text-2xl font-semibold">Company Details</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#F59E0B]">Business</p>
              <p className="mt-2 text-lg">{company.name}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#F59E0B]">Entity</p>
              <p className="mt-2 text-lg">{company.entityNumber}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#F59E0B]">California Address</p>
              <p className="mt-2 text-lg whitespace-pre-line">{company.californiaAddress}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#F59E0B]">Texas Office</p>
              <p className="mt-2 text-lg whitespace-pre-line">{company.texasOffice}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
