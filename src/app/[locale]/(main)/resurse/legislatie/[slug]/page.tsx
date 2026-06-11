import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getLegislationBySlug } from '@/lib/api/legislation'
import LegislationClient from './LegislationClient'

interface PageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const legislation = await getLegislationBySlug(slug)

  if (!legislation) {
    return {
      title: 'Legislație negăsită',
    }
  }

  return {
    title: `${legislation.title} | Codul Muncii | TDG Resurse Umane`,
    description: legislation.excerpt || legislation.simplifiedText?.substring(0, 160) || '',
    keywords: legislation.seoKeywords || '',
  }
}

export default async function LegislationPage({ params }: PageProps) {
  const { slug } = await params
  const legislation = await getLegislationBySlug(slug)

  if (!legislation) {
    notFound()
  }

  return <LegislationClient legislation={legislation} />
}
