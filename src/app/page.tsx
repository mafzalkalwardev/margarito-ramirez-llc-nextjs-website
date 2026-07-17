'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, Phone, ShieldCheck, TrendingUp, Clock3, MapPin, CheckCircle2, MessageCircle, ChevronUp, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import { company } from '@/lib/company';
import { SectionHeading } from '@/components/section-heading';
import { FaqAccordion } from '@/components/faq-accordion';

const stats = [
  { value: '500+', label: 'Loads Managed' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '24/7', label: 'Support' },
  { value: '50 States', label: 'Coverage' },
];

const values = [
  'Professional dispatchers',
  'Higher paying loads',
  'Fast communication',
  'No forced dispatch',
  'Personal account manager',
  'Reliable broker network',
];

const services = [
  'Truck Dispatch',
  'Dedicated Dispatcher',
  'Rate Negotiation',
  'Load Planning',
  'Broker Communication',
  'Factoring Assistance',
  'Paperwork Management',
  '24/7 Driver Support',
  'DOT Compliance Assistance',
  'Route Optimization',
];

const industries = ['Dry Van', 'Flatbed', 'Power Only', 'Reefer', 'Hotshot', 'Box Truck', 'Step Deck', 'Car Hauler'];

const benefits = [
  'Reduce empty miles',
  'Maximize weekly revenue',
  'Less time searching loads',
  'Better broker relationships',
  'Professional negotiation',
  'Focus on driving',
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % company.testimonials.length);
    }, 5000);

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 480);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="text-lg font-semibold tracking-[0.22em] text-slate-900">
            {company.name}
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <Link href="#about" className="transition hover:text-[#0F172A]">About</Link>
            <Link href="#services" className="transition hover:text-[#0F172A]">Services</Link>
            <Link href="#faq" className="transition hover:text-[#0F172A]">FAQ</Link>
            <Link href="#contact" className="transition hover:text-[#0F172A]">Contact</Link>
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:8185550147" className="hidden rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#1E3A8A] hover:text-[#1E3A8A] sm:inline-flex">
              Call Now
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-[#0F172A] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1E3A8A]">
              Request Dispatch
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.96),rgba(30,58,138,0.7))]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676731-3a4f0f0bff9a?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.3em] text-slate-100">
              Professional Truck Dispatch Services
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Move More Freight. Earn More Revenue.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-200 sm:text-xl">
              Professional truck dispatch services helping owner-operators and small fleets stay loaded with high-paying freight across the United States.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                Request Dispatch
              </a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="rounded-[32px] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
            <div className="rounded-[24px] bg-white p-6 text-slate-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1E3A8A]">Dispatch support</p>
                  <h2 className="mt-2 text-2xl font-semibold">Built around your success</h2>
                </div>
                <div className="rounded-full bg-[#F59E0B]/10 p-3 text-[#F59E0B]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-8 space-y-4">
                {[
                  'Load planning with real-time lane awareness',
                  'Broker communication that protects your margins',
                  'Paperwork support that keeps operations moving',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#1E3A8A]" />
                    <span className="text-sm leading-7 text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className="mt-8 inline-flex items-center rounded-full bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1E3A8A]">
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="About the company" title="Reliable dispatch support grounded in experience and communication." description="Margarito Ramirez LLC provides professional dispatching services with a focus on practical support, clear communication, and strong load planning. The goal is simple: keep your truck moving with better opportunities and fewer operational headaches." />
            <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
              <p>We help owner-operators and small fleets navigate freight decisions with more confidence. From broker negotiation to paperwork support and route planning, our team is built to keep operations steady and profitable.</p>
              <p>Every load is evaluated with care, and each carrier relationship is handled with professionalism and respect. The service is designed to be responsive, transparent, and aligned with your business goals.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Industry knowledge', 'A practical understanding of carrier needs, lane timing, and broker expectations.'],
              ['Reliable communication', 'Fast updates and clear next steps so you can stay in control.'],
              ['Load planning', 'Planning that balances revenue opportunities with route efficiency.'],
              ['Compliance support', 'Paperwork and carrier support that help reduce avoidable issues.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-slate-200 bg-white/80 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Services" title="Dispatch support designed to keep your operation moving." description="The service framework is built around efficient communication, strong broker relationships, and dependable planning for a wide range of truck types." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.article key={service} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.04 }} className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1E3A8A]/10 text-[#1E3A8A]">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{service}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">Professional dispatch support focused on stronger lanes, better revenue, and smoother operations.</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-10 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F59E0B]">Why choose us</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight">A professional dispatch team that respects your time and your business.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">The goal is not to overwhelm you with volume. It is to provide dependable support that helps your operation stay profitable, organized, and moving.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#1E3A8A]" />
                  <h3 className="text-lg font-semibold text-slate-900">{value}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="How it works" title="Start with a simple, direct process." description="We keep the onboarding experience clear so you know what happens next from the first call onward." align="center" />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {[
              ['01', 'Submit Your Information'],
              ['02', 'Dispatcher Contacts You'],
              ['03', 'Complete Carrier Setup'],
              ['04', 'Start Receiving Loads'],
            ].map(([step, title]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8 text-center shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1E3A8A]">{step}</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading eyebrow="Industries served" title="Flexible support for a wide range of truck operations." description="We work with carriers and owner-operators across multiple equipment types and freight categories." align="center" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div key={industry} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{industry}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#F8FAFC] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <SectionHeading eyebrow="Benefits" title="Less time hunting loads. More time earning." description="The dispatch support is structured to reduce wasted miles, strengthen brokerage relationships, and give you a better path to consistent revenue." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-base font-semibold text-slate-900">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#F59E0B]/10 p-3 text-[#F59E0B]">
                <Clock3 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1E3A8A]">Testimonials</p>
                <h3 className="text-xl font-semibold text-slate-900">Trusted by carriers who value dependable support.</h3>
              </div>
            </div>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5">
              <p className="text-sm leading-7 text-slate-600">“{company.testimonials[activeTestimonial].quote}”</p>
              <div className="mt-3 text-sm font-semibold text-slate-900">{company.testimonials[activeTestimonial].name}</div>
              <div className="text-sm text-slate-500">{company.testimonials[activeTestimonial].role}</div>
              <div className="mt-5 flex gap-2">
                {company.testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    aria-label={`Show testimonial ${index + 1}`}
                    className={`h-2.5 w-2.5 rounded-full ${index === activeTestimonial ? 'bg-[#1E3A8A]' : 'bg-slate-300'}`}
                    onClick={() => setActiveTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-[36px] border border-slate-200 bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] p-8 text-white shadow-2xl lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F59E0B]">Ready to get started?</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Ready To Keep Your Truck Moving?</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">Our experienced dispatch team is ready to help you find better freight and maximize your earnings.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="tel:8185550147" className="inline-flex items-center justify-center rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110">
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                  Request Dispatch
                </a>
              </div>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur">
              <div className="flex items-start gap-3">
                <MessageCircle className="mt-1 h-5 w-5 text-[#F59E0B]" />
                <div>
                  <h3 className="text-xl font-semibold">Direct consultation</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-200">Speak with a dispatch professional about your lanes, equipment, and current goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading eyebrow="Contact" title="Let’s talk about your next lane." description="Reach out for dispatch support, carrier onboarding, or a quick conversation about your operation." />
            <div className="mt-8 space-y-4 rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-[#1E3A8A]" />
                <div>
                  <h3 className="font-semibold text-slate-900">California Address</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-600">{company.californiaAddress}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-[#1E3A8A]" />
                <div>
                  <h3 className="font-semibold text-slate-900">Texas Office</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-600">{company.texasOffice}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-[#1E3A8A]" />
                <div>
                  <h3 className="font-semibold text-slate-900">Phone</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-600">{company.phone}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-medium text-slate-700">
                  Name
                  <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none focus:border-[#1E3A8A]" placeholder="Your name" />
                </label>
                <label className="text-sm font-medium text-slate-700">
                  Phone
                  <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none focus:border-[#1E3A8A]" placeholder="(555) 123-4567" />
                </label>
              </div>
              <label className="text-sm font-medium text-slate-700">
                Email
                <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none focus:border-[#1E3A8A]" placeholder="you@example.com" />
              </label>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-medium text-slate-700">
                  Truck Type
                  <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none focus:border-[#1E3A8A]" placeholder="Dry Van" />
                </label>
                <label className="text-sm font-medium text-slate-700">
                  MC Number
                  <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none focus:border-[#1E3A8A]" placeholder="MC 123456" />
                </label>
              </div>
              <label className="text-sm font-medium text-slate-700">
                Message
                <textarea className="mt-2 min-h-32 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none focus:border-[#1E3A8A]" placeholder="Tell us about your operation and what you need." />
              </label>
              <button className="inline-flex items-center rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1E3A8A]">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Common questions about dispatch support." description="A clear overview of how the process works and what to expect when partnering with the team." align="center" />
        <div className="mt-10">
          <FaqAccordion items={company.faq} />
        </div>
      </section>

      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
        <a href="tel:8185550147" className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-[1.02]">
          <PhoneCall className="h-4 w-4" /> Call Now
        </a>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]">
          <MessageCircle className="h-4 w-4" /> Request Quote
        </a>
      </div>

      {showBackToTop ? (
        <button
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-5 z-40 rounded-full bg-white p-3 text-slate-900 shadow-lg ring-1 ring-slate-200 transition hover:bg-slate-50"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      ) : null}

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="text-base font-semibold tracking-[0.2em] text-slate-900">{company.name}</div>
            <p className="mt-2 max-w-md leading-7">Professional truck dispatch support built to help carriers stay loaded and improve revenue.</p>
          </div>
          <div className="flex flex-wrap gap-5">
            <Link href="#services" className="transition hover:text-[#1E3A8A]">Services</Link>
            <Link href="#contact" className="transition hover:text-[#1E3A8A]">Contact</Link>
            <Link href="/privacy" className="transition hover:text-[#1E3A8A]">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-[#1E3A8A]">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
