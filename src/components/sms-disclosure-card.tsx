import Link from 'next/link';
import { company } from '@/lib/company';

export function SmsDisclosureCard() {
  const sms = company.smsProgram;

  return (
    <aside className="rounded-[28px] border border-teal-200 bg-teal-50/70 p-6 text-sm leading-7 text-slate-700">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
        Messaging program disclosure
      </p>
      <p className="mt-3 font-semibold text-slate-900">{sms.brandDisplayName}</p>
      <p className="mt-2">{sms.description}</p>
      <ul className="mt-4 space-y-2">
        <li>
          <strong>Frequency:</strong> {sms.messageFrequency}
        </li>
        <li>
          <strong>Rates:</strong> {sms.ratesDisclosure}
        </li>
        <li>
          <strong>Help:</strong> {sms.helpInstructions} Email{' '}
          <a className="font-medium text-[var(--accent)]" href={`mailto:${company.emails.sms}`}>
            {company.emails.sms}
          </a>
          .
        </li>
        <li>
          <strong>Opt out:</strong> {sms.stopInstructions}
        </li>
        <li>
          <strong>Consent:</strong> Not a condition of purchase. Checkbox starts unchecked.
        </li>
      </ul>
      <p className="mt-4">
        Review our{' '}
        <Link href="/privacy/" className="font-medium text-[var(--accent)] underline-offset-2 hover:underline">
          Privacy Policy
        </Link>
        ,{' '}
        <Link href="/terms/" className="font-medium text-[var(--accent)] underline-offset-2 hover:underline">
          Terms & Conditions
        </Link>
        , and{' '}
        <Link href="/sms-terms/" className="font-medium text-[var(--accent)] underline-offset-2 hover:underline">
          SMS Terms
        </Link>
        .
      </p>
    </aside>
  );
}
