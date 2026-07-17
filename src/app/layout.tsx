import type { Metadata } from 'next';
import { Fraunces, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { company } from '@/lib/company';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { OrganizationJsonLd } from '@/components/json-ld';
import { ScrollExperience } from '@/components/scroll-experience';
import { absoluteUrl, createPageMetadata } from '@/lib/seo';

const display = Fraunces({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

const body = IBM_Plex_Sans({
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
    icon: [
      { url: absoluteUrl('/logo.svg'), type: 'image/svg+xml' },
      { url: absoluteUrl('/icon.png'), type: 'image/png' },
    ],
    apple: [{ url: absoluteUrl('/logo.png'), type: 'image/png' }],
    shortcut: absoluteUrl('/logo.svg'),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[var(--background)] text-[var(--foreground)]">
        <OrganizationJsonLd />
        <ScrollExperience />
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
