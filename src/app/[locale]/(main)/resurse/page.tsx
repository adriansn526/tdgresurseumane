import { Metadata } from 'next'
import { getResources, getAllCategories, getAllTags } from '@/lib/api/resources'
import { getAllLegislation, getLegislationTypes, getLegislationCategories } from '@/lib/api/legislation'
import ResurseClient from './ResurseClient'

export const metadata: Metadata = {
  title: 'Centrul de Resurse HR | Ghiduri, Legislație și Template-uri | TDG Trading',
  description: 'Descoperă ghiduri complete HR, Codul Muncii, template-uri descărcabile și articole despre salarizare, GDPR, recrutare. Resurse gratuite pentru profesioniști HR.',
  keywords: [
    'resurse HR',
    'ghiduri resurse umane',
    'Codul Muncii',
    'template contracte',
    'legislație HR',
    'GDPR resurse umane',
    'salarizare ghid',
    'REVISAL',
    'recrutare articole',
    'consultanță HR'
  ],
  openGraph: {
    title: 'Centrul de Resurse HR - Ghiduri, Legislație și Template-uri',
    description: 'Resurse complete pentru profesioniști HR: ghiduri practice, legislație actualizată, template-uri descărcabile.',
    type: 'website',
    locale: 'ro_RO',
    siteName: 'TDG Trading',
    url: 'https://tdgresursumane.ro/resurse'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centrul de Resurse HR | TDG Trading',
    description: 'Ghiduri complete HR, Codul Muncii, template-uri și articole pentru profesioniști.'
  },
  alternates: {
    canonical: 'https://tdgresursumane.ro/resurse'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default async function ResursePage() {
  const resources = await getResources()
  const legislation = await getAllLegislation()
  const categories = await getAllCategories()
  const tags = await getAllTags()
  const legislationTypes = await getLegislationTypes()
  const legislationCategories = await getLegislationCategories()

  return (
    <>
      <ResurseClient 
        resources={resources}
        legislation={legislation}
        categories={categories}
        tags={tags}
        legislationTypes={legislationTypes}
        legislationCategories={legislationCategories}
      />
      
      {/* JSON-LD Schema for CollectionPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Centrul de Resurse HR',
            description: 'Colecție completă de resurse pentru profesioniști în resurse umane: ghiduri, legislație, template-uri și articole.',
            url: 'https://tdgresursumane.ro/resurse',
            publisher: {
              '@type': 'Organization',
              name: 'TDG Trading',
              logo: {
                '@type': 'ImageObject',
                url: 'https://tdgresursumane.ro/logo.png'
              }
            },
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: resources.length,
              itemListElement: resources.slice(0, 10).map((resource, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                  '@type': 'Article',
                  headline: resource.title,
                  url: `https://tdgresursumane.ro/resurse/${resource.slug}`,
                  datePublished: resource.date,
                  author: {
                    '@type': 'Organization',
                    name: 'TDG Trading'
                  }
                }
              }))
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Acasă',
                  item: 'https://tdgresursumane.ro'
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Resurse',
                  item: 'https://tdgresursumane.ro/resurse'
                }
              ]
            }
          })
        }}
      />
    </>
  )
}
