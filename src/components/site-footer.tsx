import Link from 'next/link';
import { company } from '@/lib/company';
import { BrandLogo } from '@/components/brand-logo';
import { SiteContainer } from '@/components/site-container';

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-white">
      <SiteContainer className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <BrandLogo withWordmark size={42} />
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{company.brandStatement}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--ink)]">Company</h3>
          <div className="mt-4 flex flex-col gap-2 text-sm text-[var(--muted)]">
            <Link href="/about/" className="hover:text-[var(--accent)]">
              About
            </Link>
            <Link href="/services/" className="hover:text-[var(--accent)]">
              Services
            </Link>
            <Link href="/support/" className="hover:text-[var(--accent)]">
              Support
            </Link>
            <Link href="/faq/" className="hover:text-[var(--accent)]">
              FAQ
            </Link>
            <Link href="/service-area/" className="hover:text-[var(--accent)]">
              Service area
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--ink)]">Contact</h3>
          <div className="mt-4 space-y-2 text-sm leading-7 text-[var(--muted)]">
            <a className="block hover:text-[var(--accent)]" href={`mailto:${company.emails.support}`}>
              {company.emails.support}
            </a>
            <p>{company.businessHours}</p>
            <p className="whitespace-pre-line">{company.californiaAddress}</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--ink)]">Policies</h3>
          <div className="mt-4 flex flex-col gap-2 text-sm text-[var(--muted)]">
            <Link href="/privacy/" className="hover:text-[var(--accent)]">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="hover:text-[var(--accent)]">
              Terms & Conditions
            </Link>
            <Link href="/sms-terms/" className="hover:text-[var(--accent)]">
              SMS Terms
            </Link>
            <Link href="/sms-consent/" className="hover:text-[var(--accent)]">
              SMS Consent
            </Link>
          </div>
          <p className="mt-6 text-xs leading-6 text-[var(--muted)]">
            Entity No. {company.entityNumber}
            <br />
            {company.legalName}
          </p>
        </div>
      </SiteContainer>

      <div className="border-t border-[var(--border)] bg-[var(--background)]">
        <SiteContainer className="flex flex-col gap-2 py-4 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}
          </p>
          <p>
            {company.smsProgram.messageFrequency} {company.smsProgram.ratesDisclosure}{' '}
            {company.smsProgram.stopInstructions}
          </p>
        </SiteContainer>
      </div>
    </footer>
  );
}
