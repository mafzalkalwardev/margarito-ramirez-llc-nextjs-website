import type { Metadata } from 'next';
import { Outfit, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { company } from '@/lib/company';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { OrganizationJsonLd } from '@/components/json-ld';
import { ScrollExperience } from '@/components/scroll-experience';

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

export const metadata: Metadata = {
  metadataBase: new URL(company.domain),
  title: company.seo.title,
  description: company.seo.description,
  keywords: [...company.seo.keywords],
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png' }],
    apple: [{ url: '/logo.png', type: 'image/png' }],
    shortcut: '/logo.png',
  },
  openGraph: {
    title: company.seo.title,
    description: company.seo.description,
    type: 'website',
    locale: 'en_US',
    url: company.domain,
    images: [{ url: '/logo.png', width: 512, height: 512, alt: company.serviceBrand }],
  },
  alternates: {
    canonical: company.domain,
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
