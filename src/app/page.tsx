import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { company } from '@/lib/company';
import { SiteContainer } from '@/components/site-container';
import { buttonVariants } from '@/components/ui/button';
import { HomeMotion } from '@/components/home-motion';

export default function Home() {
  return (
    <main>
      {/* Hero: one composition, brand-first, full-bleed photo */}
      <section className="relative isolate min-h-[88vh] overflow-hidden bg-[var(--ink)] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(11,15,25,0.92)_0%,rgba(11,15,25,0.78)_48%,rgba(11,15,25,0.45)_100%)]" />

        <SiteContainer className="relative flex min-h-[88vh] flex-col justify-end pb-16 pt-28 sm:pb-20">
          <HomeMotion>
            <p className="text-sm font-medium text-red-200">{company.serviceBrand}</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {company.legalName}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-200">
              Practical IT support for small businesses and remote professionals — managed systems,
              security, and helpdesk help with clear scope before work begins.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/support/" className={buttonVariants({ variant: 'primary', size: 'lg' })}>
                Request support
              </Link>
              <Link href="/services/" className={buttonVariants({ variant: 'glass', size: 'lg' })}>
                View services
              </Link>
            </div>
          </HomeMotion>
        </SiteContainer>
      </section>

      {/* Company facts — plain, not fake stats */}
      <section className="border-b border-[var(--border)] bg-white">
        <SiteContainer className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Hours', company.businessHours],
            ['Coverage', `Remote support · ${company.supportRegion}`],
            ['California', company.californiaAddress.replace(/\n/g, ', ')],
            ['Texas office', company.texasOffice.replace(/\n/g, ', ')],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">{label}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{value}</p>
            </div>
          ))}
        </SiteContainer>
      </section>

      {/* Services — editorial list, not card collage */}
      <section className="bg-[var(--background)] py-20 sm:py-24">
        <SiteContainer>
          <div className="flex flex-col gap-6 border-b border-[var(--border)] pb-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Services</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
                Three focused lines of support.
              </h2>
            </div>
            <Link href="/services/" className="inline-flex items-center text-sm font-semibold text-[var(--accent)]">
              Full service details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="divide-y divide-[var(--border)]">
            {company.services.map((service) => (
              <article key={service.id} className="grid gap-4 py-10 lg:grid-cols-[140px_1fr_220px] lg:gap-8">
                <p className="text-sm font-semibold text-[var(--accent)]">{service.number}</p>
                <div>
                  <h3 className="text-2xl font-semibold text-[var(--ink)]">{service.name}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-8 text-[var(--muted)]">{service.summary}</p>
                </div>
                <p className="text-sm leading-7 text-[var(--muted)]">
                  <span className="font-semibold text-[var(--ink)]">For</span>
                  <br />
                  {service.designedFor}
                </p>
              </article>
            ))}
          </div>
        </SiteContainer>
      </section>

      {/* How we work — one process only */}
      <section className="border-y border-[var(--border)] bg-white py-20 sm:py-24">
        <SiteContainer>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">How we work</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
              A clear path from request to next step.
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              We confirm what is happening, what systems are involved, and what we can do before any
              work begins.
            </p>
          </div>

          <ol className="mt-12 grid gap-8 sm:grid-cols-3">
            {company.processShort.map((step) => (
              <li key={step.step} className="border-t border-[var(--border)] pt-6">
                <p className="text-sm font-semibold text-[var(--accent)]">{step.step}</p>
                <h3 className="mt-3 text-xl font-semibold text-[var(--ink)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{step.description}</p>
              </li>
            ))}
          </ol>
        </SiteContainer>
      </section>

      {/* About / credibility */}
      <section className="bg-[var(--background)] py-20 sm:py-24">
        <SiteContainer className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Company</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
              A California LLC serving remote work across the United States.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              {company.brandStatement} Owned by {company.owner}. We keep communication plain, confirm
              scope before work, and separate ordinary support requests from optional Customer Care SMS.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about/" className={buttonVariants({ variant: 'outline' })}>
                About the company
              </Link>
              <Link href="/faq/" className={buttonVariants({ variant: 'ghost' })}>
                Read FAQ
              </Link>
            </div>
          </div>

          <div className="border border-[var(--border)] bg-white p-8">
            <dl className="space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-[var(--ink)]">Legal name</dt>
                <dd className="mt-1 text-[var(--muted)]">{company.legalName}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--ink)]">Sole member</dt>
                <dd className="mt-1 text-[var(--muted)]">{company.soleMember}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--ink)]">Entity number</dt>
                <dd className="mt-1 text-[var(--muted)]">{company.entityNumber}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--ink)]">Support email</dt>
                <dd className="mt-1">
                  <a className="text-[var(--accent)]" href={`mailto:${company.emails.support}`}>
                    {company.emails.support}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </SiteContainer>
      </section>

      {/* Closing CTA */}
      <section className="bg-[var(--ink)] py-20 text-white">
        <SiteContainer className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Need help with a system, security issue, or desktop problem?
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Describe what you need. We will confirm the next step and how we should reach you.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/support/" className={buttonVariants({ variant: 'primary', size: 'lg' })}>
              Start a support request
            </Link>
            <Link href="/contact/" className={buttonVariants({ variant: 'glass', size: 'lg' })}>
              Contact
            </Link>
          </div>
        </SiteContainer>
      </section>
    </main>
  );
}
