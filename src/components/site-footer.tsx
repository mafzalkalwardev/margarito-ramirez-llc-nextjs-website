import Link from 'next/link';
import { company } from '@/lib/company';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="text-base font-semibold text-slate-900">{company.serviceBrand}</div>
          <p className="mt-2 text-sm leading-7 text-slate-600">{company.brandStatement}</p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            Entity No. {company.entityNumber}
            <br />
            {company.businessType}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Locations</h3>
          <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600">{company.californiaAddress}</p>
          <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-600">{company.texasOffice}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</h3>
          <div className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
            <a className="block transition hover:text-[var(--accent)]" href={`mailto:${company.emails.support}`}>
              {company.emails.support}
            </a>
            <a className="block transition hover:text-[var(--accent)]" href={`mailto:${company.emails.service}`}>
              {company.emails.service}
            </a>
            <p>{company.businessHours}</p>
            {company.phoneIsPlaceholder ? (
              <p className="text-slate-500">Phone: placeholder pending</p>
            ) : (
              <p>Phone: {company.phone}</p>
            )}
          </div>
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
            <Link href="/privacy/" className="transition hover:text-[var(--accent)]">
              Privacy
            </Link>
            <Link href="/terms/" className="transition hover:text-[var(--accent)]">
              Terms
            </Link>
            <Link href="/sms-terms/" className="transition hover:text-[var(--accent)]">
              SMS Terms
            </Link>
            <Link href="/sms-consent/" className="transition hover:text-[var(--accent)]">
              SMS Consent
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <p>{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
