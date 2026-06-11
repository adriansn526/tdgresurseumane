import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import "../globals.css";

export const metadata: Metadata = {
  title: "TDG Trading - Partenerul Tău în Resurse Umane",
  description: "Oferim servicii complete de administrare personal, consultanță în management, recrutare și servicii de imigrări pentru afacerea ta.",
  keywords: "resurse umane, HR, administrare personal, recrutare, consultanță management, GDPR, imigrări, detașare Europa",
  authors: [{ name: "TDG Trading" }],
  openGraph: {
    title: "TDG Trading - Partenerul Tău în Resurse Umane",
    description: "Soluții complete HR pentru afacerea ta",
    type: "website",
    locale: "ro_RO",
    alternateLocale: "en_US",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
