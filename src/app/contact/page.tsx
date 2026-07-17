import { company } from '@/lib/company';
import { SectionHeading } from '@/components/section-heading';

export const metadata = {
  title: 'Contact | Margarito Ramirez LLC',
  description: 'Contact Margarito Ramirez LLC for dispatch support, carrier onboarding, and freight consultation.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <SectionHeading eyebrow="Contact" title="Let’s talk about your next lane." description="Whether you are onboarding a new carrier setup or evaluating dispatch support, the team is ready to help." />
            <div className="mt-8 space-y-5 text-sm leading-7 text-slate-600">
              <p><strong>Business:</strong> {company.name}</p>
              <p><strong>Phone:</strong> {company.phone}</p>
              <p><strong>Email:</strong> {company.email}</p>
              <p><strong>California Address:</strong> {company.californiaAddress}</p>
              <p><strong>Texas Office:</strong> {company.texasOffice}</p>
            </div>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-medium text-slate-700">Name<input className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none focus:border-[#1E3A8A]" /></label>
                <label className="text-sm font-medium text-slate-700">Phone<input className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none focus:border-[#1E3A8A]" /></label>
              </div>
              <label className="text-sm font-medium text-slate-700">Email<input className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none focus:border-[#1E3A8A]" /></label>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-medium text-slate-700">Truck Type<input className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none focus:border-[#1E3A8A]" /></label>
                <label className="text-sm font-medium text-slate-700">MC Number<input className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none focus:border-[#1E3A8A]" /></label>
              </div>
              <label className="text-sm font-medium text-slate-700">Message<textarea className="mt-2 min-h-32 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none focus:border-[#1E3A8A]" /></label>
              <button className="inline-flex items-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1E3A8A]">Submit Request</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
