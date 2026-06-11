import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Consultanță în Management HR București | TDG Trading',
  description: 'Consultanță strategică HR. Optimizează procesele, crește performanța echipei. 40% creștere eficiență. ☎ 0722 638 928',
  keywords: ['consultanță HR', 'management resurse umane', 'optimizare procese HR', 'strategie HR', 'București']
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
