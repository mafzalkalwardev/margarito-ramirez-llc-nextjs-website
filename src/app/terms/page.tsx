import { SectionHeading } from '@/components/section-heading';

export const metadata = {
  title: 'Terms | Margarito Ramirez LLC',
  description: 'Terms of use for the Margarito Ramirez LLC website.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-sm lg:p-14">
          <SectionHeading eyebrow="Terms" title="Website terms and conditions." description="This page is a placeholder for the final legal wording and should be reviewed by counsel before launch." />
          <div className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
            <p>Use of this website is subject to applicable laws and regulations. The content is provided for informational and business inquiry purposes.</p>
            <p>Any service discussions or requests submitted through the site are subject to the company’s standard business practices and applicable agreements.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
