import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Administrare Personal & Salarizare București | TDG Trading',
  description: 'Servicii complete de administrare personal, salarizare și REVISAL. Externalizează HR-ul și concentrează-te pe business. Ofertă gratuită! ☎ 0722 638 928',
  keywords: [
    'administrare personal',
    'salarizare externalizată',
    'outsourcing HR',
    'REVISAL',
    'servicii HR București',
    'externalizare salarizare',
    'administrare personal București'
  ],
  openGraph: {
    title: 'Administrare Personal & Salarizare | TDG Trading',
    description: 'Externalizează administrarea personalului. 500+ companii ne-au ales pentru servicii complete de HR.',
    type: 'website',
    locale: 'ro_RO',
    siteName: 'TDG Trading',
    url: 'https://tdgresursumane.ro/servicii/administrare-personal'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Administrare Personal & Salarizare | TDG Trading',
    description: 'Externalizează administrarea personalului. 500+ companii ne-au ales.'
  }
}

export default function AdministrarePersonalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
