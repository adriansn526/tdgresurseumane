import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - TDG Trading | Resurse Umane București',
  description: 'Contactează TDG Trading pentru servicii complete de resurse umane. Telefon: 0722 638 928 | Email: office@tdgresurseumane.ro | Program: L-V 9:00 - 18:00',
  keywords: [
    'contact TDG Trading',
    'resurse umane București',
    'consultanță HR',
    'administrare personal contact',
    'telefon HR București',
    'email resurse umane'
  ],
  openGraph: {
    title: 'Contact - TDG Trading',
    description: 'Contactează-ne pentru servicii complete de resurse umane. Răspundem în 24h!',
    type: 'website',
    locale: 'ro_RO',
    siteName: 'TDG Trading',
    url: 'https://tdgresursumane.ro/contact'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact - TDG Trading',
    description: 'Contactează-ne pentru servicii complete de resurse umane.'
  },
  alternates: {
    canonical: 'https://tdgresursumane.ro/contact'
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
