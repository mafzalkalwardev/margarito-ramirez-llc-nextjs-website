import { SectionHeading } from '@/components/section-heading';

export const metadata = {
  title: 'Privacy Policy | Margarito Ramirez LLC',
  description: 'Privacy policy for Margarito Ramirez LLC website visitors and inquiry submissions.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-sm lg:p-14">
          <SectionHeading eyebrow="Privacy policy" title="We respect your privacy and handle inquiries responsibly." description="This page is a placeholder for the final legal wording and should be reviewed by counsel before launch." />
          <div className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
            <p>Information collected through the site may be used to respond to requests, provide dispatch-related support, and communicate with you about your inquiry.</p>
            <p>We do not sell personal information. Any personal data collected will be handled in accordance with applicable privacy laws and business practices.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
