'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, ChevronUp, Mail, MessageSquare, Shield, Network, HardDrive, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import { company } from '@/lib/company';
import { SectionHeading } from '@/components/section-heading';
import { FaqAccordion } from '@/components/faq-accordion';
import { HeroNetwork } from '@/components/hero-network';
import { BrandLogo } from '@/components/brand-logo';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const trustChips = [
  { title: 'No invented promises', detail: 'Clear service scope' },
  { title: 'Customer Care SMS', detail: 'No promotional texts' },
];

const capabilityIcons = [Shield, Network, HardDrive, Headphones];

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 480);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero — brand-first, full-bleed visual */}
      <section className="relative isolate min-h-[760px] overflow-hidden border-b border-slate-800 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_42%,rgba(13,148,136,0.27),transparent_35%),linear-gradient(115deg,rgba(7,17,31,0.98),rgba(7,17,31,0.82))]" />
        <div className="ambient-grid absolute inset-0 opacity-60" />
        <div
          data-gsap-parallax
          className="absolute inset-0 scale-110 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="relative mx-auto grid min-h-[700px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex items-center gap-4">
              <BrandLogo size={56} />
              <div>
                <p className="text-lg font-semibold text-white sm:text-xl">{company.serviceBrand}</p>
                <p className="text-sm text-teal-100/80">{company.legalName}</p>
              </div>
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-100/90">
              IT support for businesses and remote professionals
            </p>
            <h1 className="text-balance mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Technology that works.
              <span className="block bg-gradient-to-r from-teal-200 via-cyan-200 to-teal-400 bg-clip-text text-transparent">
                Support you can reach.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              {company.serviceBrand} is the IT-support service brand of {company.legalName}, providing
              managed IT services, cybersecurity support, and remote helpdesk assistance across the
              United States.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/support/"
                className={buttonVariants({ variant: 'accent', size: 'lg' })}
              >
                Request IT Support <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/services/"
                className={buttonVariants({ variant: 'glass', size: 'lg' })}
              >
                Explore Services
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {trustChips.map((chip) => (
                <div
                  key={chip.title}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-100 backdrop-blur-sm"
                >
                  <span className="font-semibold">{chip.title}</span>
                  <span className="mx-2 text-white/40">·</span>
                  <span className="text-slate-200">{chip.detail}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <HeroNetwork />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 to-transparent" />
      </section>

      {/* Trust strip */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
          {[
            ['Legal business', company.legalName],
            ['Established', company.established],
            ['Entity number', company.entityNumber],
            ['Support region', company.supportRegion],
            ['Support hours', company.businessHours],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{label}</p>
              <p className="mt-2 text-sm font-medium leading-6 text-slate-900">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services teaser */}
      <section className="overflow-hidden border-b border-slate-200 bg-white py-6">
        <div className="marquee-track flex gap-3 pr-3">
          {[...company.capabilities, ...company.services.map((service) => service.shortName), ...company.capabilities, ...company.services.map((service) => service.shortName)].map(
            (item, index) => {
              const Icon = capabilityIcons[index % capabilityIcons.length] ?? Shield;
              return (
                <span
                  key={`${item}-${index}`}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-medium text-slate-700"
                >
                  <Icon className="h-4 w-4 text-[var(--accent)]" />
                  {item}
                </span>
              );
            },
          )}
        </div>
      </section>

      {/* Value */}
      <section className="border-y border-slate-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <SectionHeading
              eyebrow="IT that moves with your business"
              title="Less technical friction. More confident work."
              description="From an urgent desktop issue to a longer-term security priority, we begin with the real problem, clarify the next step, and keep communication understandable."
            />
            <div className="lg:text-right">
              <Link
                href="/about/"
                className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Meet the company <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div data-gsap-stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {company.processShort.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="border-t border-slate-200 pt-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                  {item.step}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core services */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Core services"
          title="Complete support for everyday business technology."
          description="Focused, practical services for organizations that need dependable technology without inflated promises or unclear scope."
          align="center"
        />
        <div data-gsap-stagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {company.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="h-full"
            >
              <Card className="group relative h-full overflow-hidden transition-shadow duration-300 hover:shadow-[0_30px_80px_rgba(15,118,110,0.13)]">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-teal-400 to-cyan-300 transition-transform duration-500 group-hover:scale-x-100" />
                <CardHeader>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                    {service.number}
                  </p>
                  <CardTitle className="mt-3 text-2xl">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-8 text-slate-600">{service.summary}</p>
                  <p className="mt-5 text-sm leading-6 text-slate-500">
                    <span className="font-semibold text-slate-700">Designed for</span>{' '}
                    {service.designedFor}
                  </p>
                  <Link
                    href="/support/"
                    className="mt-7 inline-flex items-center text-sm font-semibold text-[var(--accent)] transition hover:gap-3"
                  >
                    Discuss this service <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-slate-200 bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-300">
            Built around operational reality
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">
            Security and support are connected.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            A stable technology environment depends on visibility, sound configuration, maintained
            devices, recoverable data, and people who can get help.
          </p>
          <div data-gsap-stagger className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {company.pillars.map((pillar) => (
              <div key={pillar.title} className="border-t border-white/15 pt-6">
                <h3 className="text-xl font-semibold">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long process */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading
          eyebrow="A straightforward support experience"
          title="From request to resolution."
          description="Every engagement begins with clear information and a confirmed next step."
          align="center"
        />
        <div data-gsap-stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {company.processLong.map((item) => (
            <div key={item.step} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                {item.step}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SMS education */}
      <section className="border-y border-slate-200 bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Permission-based support communication"
              title="Useful updates. No promotional noise."
              description="Customers may separately choose Customer Care text messages for IT support tickets, troubleshooting coordination, and requested service information."
            />
            <ul className="mt-8 space-y-3 text-sm leading-7 text-slate-600">
              <li>• The consent box starts unchecked</li>
              <li>• Consent is not a condition of purchase</li>
              <li>• No marketing or promotional SMS</li>
              <li>• {company.smsProgram.messageFrequency}</li>
              <li>• {company.smsProgram.ratesDisclosure}</li>
              <li>• {company.smsProgram.stopInstructions} {company.smsProgram.helpInstructions}</li>
            </ul>
            <Link
              href="/sms-consent/"
              className="mt-8 inline-flex items-center rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent)]"
            >
              Review SMS Consent
            </Link>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-[var(--background)] p-8">
            <div className="rounded-[24px] bg-[var(--primary)] p-6 text-white shadow-xl">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
                <MessageSquare className="h-4 w-4" /> Customer Care SMS
              </div>
              <p className="mt-5 text-base leading-8 text-slate-100">
                Your IT support ticket has been updated. Our team can coordinate the next
                troubleshooting step.
              </p>
              <p className="mt-4 text-xs text-slate-400">Reply STOP to opt out · HELP for help</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 rounded-[36px] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
          <div>
            <SectionHeading
              eyebrow="Remote reach, accountable support"
              title="Supporting modern work across the United States."
              description="Remote IT support availability is confirmed for each request based on the service, systems, location, and schedule."
            />
            <Link
              href="/service-area/"
              className="mt-8 inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Explore Service Area <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-4 self-center">
            <div className="rounded-2xl border border-slate-200 bg-[var(--background)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Service model</p>
              <p className="mt-2 font-semibold text-slate-900">Remote support across the United States</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[var(--background)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Remote-first support
              </p>
              <p className="mt-2 font-semibold text-slate-900">Availability confirmed per request</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-slate-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Clear answers before you request support."
            description="Practical information about services, hours, SMS choices, and how engagements begin."
            align="center"
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <FaqAccordion items={[...company.faq]} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-[36px] bg-[linear-gradient(135deg,#0b1220,#0f766e)] p-8 text-white lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-200">
            Let’s solve the next technology issue
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Ready for clearer IT support?</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            Describe what you need and choose how our team should respond.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/support/"
              className="inline-flex items-center justify-center rounded-full bg-teal-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-200"
            >
              Start a Support Request
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Contact Us
            </Link>
            <a
              href={`mailto:${company.emails.support}`}
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              <Mail className="mr-2 h-4 w-4" /> Email Support
            </a>
          </div>
        </div>
      </section>

      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
        <a
          href={`mailto:${company.emails.support}`}
          className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-[1.02]"
        >
          <Mail className="h-4 w-4" /> Email Support
        </a>
        <Link
          href="/support/"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]"
        >
          <MessageSquare className="h-4 w-4" /> Request Support
        </Link>
      </div>

      {showBackToTop ? (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-28 right-5 z-40 rounded-full bg-white p-3 text-slate-900 shadow-lg ring-1 ring-slate-200 transition hover:bg-slate-50"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      ) : null}
    </main>
  );
}
