'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { company } from '@/lib/company';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/service-area/', label: 'Service Area' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/contact/', label: 'Contact' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-all duration-300',
        scrolled
          ? 'border-slate-200/80 bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl'
          : 'border-transparent bg-white/75 backdrop-blur-md',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--primary)] shadow-lg shadow-slate-950/10">
            <span className="bg-gradient-to-br from-teal-200 to-teal-500 bg-clip-text text-base font-bold text-transparent">
              MR
            </span>
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-semibold tracking-tight text-slate-950 sm:text-lg">
              {company.serviceBrand}
            </span>
            <span className="mt-0.5 hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:block">
              Managed IT · Security · Helpdesk
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[var(--accent)]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <a
            href={`mailto:${company.emails.support}`}
            className={buttonVariants({ variant: 'outline', size: 'sm' })}
          >
            Email Support
          </a>
          <Link
            href="/sms-consent/"
            className={buttonVariants({ variant: 'ghost', size: 'sm' })}
          >
            Customer Care SMS
          </Link>
          <Link
            href="/support/"
            className={buttonVariants({ variant: 'primary', size: 'sm' })}
          >
            Request IT Support <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex rounded-full border border-slate-200 p-2 text-slate-700 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-4 px-6 py-5 text-sm font-medium text-slate-700">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <a href={`mailto:${company.emails.support}`} onClick={() => setOpen(false)}>
                Email Support
              </a>
              <Link href="/sms-consent/" onClick={() => setOpen(false)}>
                Customer Care SMS
              </Link>
              <Link
                href="/support/"
                onClick={() => setOpen(false)}
                className={buttonVariants({ variant: 'primary' })}
              >
                Request IT Support <ArrowUpRight className="h-4 w-4" />
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
