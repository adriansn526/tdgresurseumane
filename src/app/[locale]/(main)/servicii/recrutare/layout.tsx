import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recrutare & Head Hunting București | TDG Trading',
  description: 'Servicii profesionale de recrutare, selecție personal și head hunting. Găsim candidații perfecți pentru compania ta. 2000+ candidați plasați. ☎ 0722 638 928',
  keywords: [
    'recrutare personal',
    'head hunting',
    'selecție candidați',
    'agenție recrutare București',
    'recrutare executivi',
    'recrutare masivă',
    'servicii HR'
  ],
  openGraph: {
    title: 'Recrutare & Head Hunting | TDG Trading',
    description: 'Găsim candidații perfecți pentru compania ta. 2000+ candidați plasați cu success rate de 92%.',
    type: 'website',
    locale: 'ro_RO',
    siteName: 'TDG Trading',
    url: 'https://tdgresursumane.ro/servicii/recrutare'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recrutare & Head Hunting | TDG Trading',
    description: 'Servicii profesionale de recrutare și head hunting. 2000+ candidați plasați.'
  }
}

export default function RecrutareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
