import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import { company } from '@/lib/company';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: company.seo.title,
  description: company.seo.description,
  keywords: company.seo.keywords,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/logo.svg',
  },
  openGraph: {
    title: company.seo.title,
    description: company.seo.description,
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://margaritoramirezllc.com',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#F8FAFC] text-slate-900">{children}</body>
    </html>
  );
}
