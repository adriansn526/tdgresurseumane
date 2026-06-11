import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GDPR în Resurse Umane București | TDG Trading',
  description: 'Conformitate GDPR pentru departamentul HR. Protejează datele angajaților și evită amenzile ANSPDCP. Audit GDPR gratuit! ☎ 0722 638 928',
  keywords: [
    'GDPR resurse umane',
    'conformitate GDPR',
    'protecția datelor angajați',
    'ANSPDCP',
    'audit GDPR',
    'DPO extern',
    'GDPR HR București'
  ],
  openGraph: {
    title: 'GDPR în Resurse Umane | TDG Trading',
    description: 'Conformitate GDPR completă pentru HR. Protejează datele angajaților și evită amenzile.',
    type: 'website',
    locale: 'ro_RO',
    siteName: 'TDG Trading',
    url: 'https://tdgresursumane.ro/servicii/gdpr'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GDPR în Resurse Umane | TDG Trading',
    description: '100% conformitate GDPR pentru departamentul HR. Audit gratuit!'
  }
}

export default function GDPRLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
