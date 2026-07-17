import Link from 'next/link';
import { company } from '@/lib/company';
import { BrandLogo } from '@/components/brand-logo';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.35fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <BrandLogo withWordmark size={48} />
          <p className="mt-4 text-sm leading-7 text-slate-600">{company.brandStatement}</p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            Legal name: {company.legalName}
            <br />
            Sole member: {company.soleMember}
            <br />
            Entity No. {company.entityNumber}
            <br />
            {company.businessType}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Company</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
            <Link href="/about/" className="transition hover:text-[var(--accent)]">
              About
            </Link>
            <Link href="/services/" className="transition hover:text-[var(--accent)]">
              Services
            </Link>
            <Link href="/service-area/" className="transition hover:text-[var(--accent)]">
              Service Area
            </Link>
            <Link href="/faq/" className="transition hover:text-[var(--accent)]">
              FAQ
            </Link>
            <Link href="/contact/" className="transition hover:text-[var(--accent)]">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Locations</h3>
          <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600">{company.californiaAddress}</p>
          <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-600">{company.texasOffice}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact & SMS</h3>
          <div className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
            <a className="block transition hover:text-[var(--accent)]" href={`mailto:${company.emails.support}`}>
              {company.emails.support}
            </a>
            <a className="block transition hover:text-[var(--accent)]" href={`mailto:${company.emails.service}`}>
              {company.emails.service}
            </a>
            <a className="block transition hover:text-[var(--accent)]" href={`mailto:${company.emails.sms}`}>
              {company.emails.sms}
            </a>
            <p>{company.businessHours}</p>
            {!company.phoneIsPlaceholder ? <p>Phone: {company.phone}</p> : null}
          </div>
          <div className="mt-5 flex flex-col gap-2 text-sm text-slate-600">
            <Link href="/privacy/" className="font-medium transition hover:text-[var(--accent)]">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="font-medium transition hover:text-[var(--accent)]">
              Terms & Conditions
            </Link>
            <Link href="/sms-terms/" className="font-medium transition hover:text-[var(--accent)]">
              SMS Terms
            </Link>
            <Link href="/sms-consent/" className="font-medium transition hover:text-[var(--accent)]">
              SMS Consent / Opt-Out
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs leading-6 text-slate-500 lg:px-8">
          <p>
            Customer Care SMS: {company.smsProgram.messageFrequency}{' '}
            {company.smsProgram.ratesDisclosure} {company.smsProgram.helpInstructions}{' '}
            {company.smsProgram.stopInstructions} Consent is not a condition of purchase.
          </p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {company.legalName}. All rights reserved.
            </p>
            <p>{company.tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
