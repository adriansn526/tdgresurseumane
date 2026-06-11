import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getResourceBySlug } from '@/lib/api/resources'
import ArticleClient from './ArticleClient'

interface PageProps {
  params: {
    locale: string
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const resource = await getResourceBySlug(slug)

  if (!resource) {
    return {
      title: 'Articol negăsit',
    }
  }

  const plainTitle = resource.title.replace(/<[^>]*>/g, '')

  return {
    title: `${plainTitle} | TDG Resurse Umane`,
    description: resource.excerpt ? resource.excerpt.replace(/<[^>]*>/g, '').substring(0, 160) : '',
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const resource = await getResourceBySlug(slug)

  if (!resource) {
    notFound()
  }

  return <ArticleClient resource={resource} />
}
