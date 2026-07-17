import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { company } from '@/lib/company';
import { SiteContainer } from '@/components/site-container';
import { buttonVariants } from '@/components/ui/button';
import { HomeMotion } from '@/components/home-motion';

export default function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[var(--ink)] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 18% 20%, rgba(193,18,31,0.35), transparent 34%), radial-gradient(circle at 82% 10%, rgba(255,255,255,0.08), transparent 28%), linear-gradient(160deg, #0b0f19 0%, #171212 55%, #0b0f19 100%)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden w-[42%] bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-35 lg:block"
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden w-[42%] bg-gradient-to-l from-transparent to-[var(--ink)] lg:block"
        />

        <SiteContainer className="relative py-24 sm:py-28 lg:py-32">
          <HomeMotion>
            <p className="text-sm font-semibold tracking-[0.04em] text-red-300">{company.serviceBrand}</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {company.heroPromise}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              {company.brandStatement} Managed IT, cybersecurity support, and remote helpdesk assistance
              across the United States — with scope confirmed before work begins.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/support/" className={buttonVariants({ variant: 'primary', size: 'lg' })}>
                Request support
              </Link>
              <Link href="/about/" className={buttonVariants({ variant: 'glass', size: 'lg' })}>
                Meet the company
              </Link>
            </div>
            <p className="mt-8 text-sm text-slate-400">
              Legal entity: {company.legalName} · Support:{' '}
              <a className="text-red-200 underline-offset-2 hover:underline" href={`mailto:${company.emails.support}`}>
                {company.emails.support}
              </a>
            </p>
          </HomeMotion>
        </SiteContainer>
      </section>

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

      <section className="border-y border-[var(--border)] bg-white py-20 sm:py-24">
        <SiteContainer className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Real support work
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
              {company.typicalRequest.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">{company.typicalRequest.scenario}</p>
          </div>
          <ol className="space-y-6 border border-[var(--border)] bg-[var(--background)] p-7">
            {company.typicalRequest.steps.map((step, index) => (
              <li key={step} className="grid gap-3 sm:grid-cols-[48px_1fr]">
                <span className="text-sm font-semibold text-[var(--accent)]">0{index + 1}</span>
                <p className="text-sm leading-7 text-[var(--muted)]">{step}</p>
              </li>
            ))}
          </ol>
        </SiteContainer>
      </section>

      <section className="bg-[var(--background)] py-20 sm:py-24">
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

      <section className="border-y border-[var(--border)] bg-white py-20 sm:py-24">
        <SiteContainer className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Owner</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
              {company.owner}
            </h2>
            <p className="mt-2 text-sm font-medium text-[var(--muted)]">{company.soleMember}</p>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">{company.ownerBio}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about/" className={buttonVariants({ variant: 'outline' })}>
                About the company
              </Link>
              <Link href="/faq/" className={buttonVariants({ variant: 'ghost' })}>
                Read FAQ
              </Link>
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--background)] p-8">
            <dl className="space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-[var(--ink)]">Legal name</dt>
                <dd className="mt-1 text-[var(--muted)]">{company.legalName}</dd>
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
              {!company.phoneIsPlaceholder ? (
                <div>
                  <dt className="font-semibold text-[var(--ink)]">Phone</dt>
                  <dd className="mt-1 text-[var(--muted)]">{company.phone}</dd>
                </div>
              ) : null}
            </dl>
          </div>
        </SiteContainer>
      </section>

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
