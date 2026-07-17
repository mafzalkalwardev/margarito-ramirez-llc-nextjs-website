import type { Metadata } from 'next';
import { Outfit, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { company } from '@/lib/company';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { OrganizationJsonLd } from '@/components/json-ld';
import { ScrollExperience } from '@/components/scroll-experience';
import { absoluteUrl, createPageMetadata } from '@/lib/seo';

const outfit = Outfit({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const sourceSans = Source_Sans_3({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const homeSeo = createPageMetadata({
  title: company.seo.title,
  description: company.seo.description,
  path: '/',
});

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  ...homeSeo,
  applicationName: company.serviceBrand,
  authors: [{ name: company.legalName, url: absoluteUrl('/') }],
  creator: company.legalName,
  publisher: company.legalName,
  category: 'technology',
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png' }],
    apple: [{ url: '/logo.png', type: 'image/png' }],
    shortcut: '/logo.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${sourceSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[var(--background)] text-slate-900">
        <OrganizationJsonLd />
        <ScrollExperience />
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
