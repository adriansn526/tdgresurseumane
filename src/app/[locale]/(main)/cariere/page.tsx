import { Suspense } from 'react'
import { getJobs } from '@/lib/api/jobs'
import CariereClient from './CariereClient'

export const metadata = {
  title: 'Cariere - TDG Trading | Alătură-te Echipei Noastre',
  description: 'Descoperă oportunitățile de carieră la TDG Trading. Căutăm profesioniști pasionați în resurse umane, recrutare și consultanță.',
  keywords: ['cariere TDG Trading', 'joburi resurse umane', 'recrutare București', 'locuri de muncă HR'],
}

export default async function CarierePage() {
  const jobs = await getJobs()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CariereClient jobs={jobs} />
    </Suspense>
  )
}
