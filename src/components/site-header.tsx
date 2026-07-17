'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { company } from '@/lib/company';
import { BrandLogo } from '@/components/brand-logo';
import { buttonVariants } from '@/components/ui/button';
import { SiteContainer } from '@/components/site-container';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/support/', label: 'Support' },
  { href: '/contact/', label: 'Contact' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md transition-shadow',
        scrolled ? 'border-[var(--border)] shadow-sm' : 'border-transparent',
      )}
    >
      <SiteContainer className="flex items-center justify-between gap-4 py-3.5">
        <Link href="/" className="min-w-0">
          <BrandLogo withWordmark size={40} />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--muted)] md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[var(--accent)]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={`mailto:${company.emails.support}`} className={buttonVariants({ variant: 'outline', size: 'sm' })}>
            Email
          </a>
          <Link href="/support/" className={buttonVariants({ variant: 'primary', size: 'sm' })}>
            Request support
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex border border-[var(--border)] p-2 text-[var(--foreground)] md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </SiteContainer>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[var(--border)] bg-white md:hidden"
          >
            <nav className="flex flex-col gap-4 px-4 py-5 text-sm font-medium text-[var(--foreground)]">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Link href="/sms-consent/" onClick={() => setOpen(false)}>
                SMS consent
              </Link>
              <Link href="/support/" onClick={() => setOpen(false)} className={buttonVariants({ variant: 'primary' })}>
                Request support
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
