import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicii Imigrări București | TDG Trading',
  description: 'Asistență completă pentru imigrare în România. Vize, permise de muncă, permise de ședere. 95% rată aprobare. ☎ 0722 638 928',
  keywords: ['servicii imigrări', 'vize România', 'permis muncă', 'permis ședere', 'relocare România', 'București']
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
