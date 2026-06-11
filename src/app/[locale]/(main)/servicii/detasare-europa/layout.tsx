import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Detașare Europa - Formular A1 | TDG Trading',
  description: 'Formular A1 pentru detașare în UE. Conformitate 100%, procesare în 5-7 zile. Evită amenzile! ☎ 0722 638 928',
  keywords: ['formular A1', 'detașare Europa', 'detașare angajați UE', 'certificat A1', 'CNAS', 'București']
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
