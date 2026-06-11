import { MetadataRoute } from 'next'
import { wordpressAPI } from '@/lib/wordpress-api'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tdgtrading.ro'
const locales = ['ro', 'en']

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemap: MetadataRoute.Sitemap = []

  // Static pages
  const staticPages = ['', '/servicii', '/cariere', '/resurse', '/contact']

  for (const locale of locales) {
    for (const page of staticPages) {
      sitemap.push({
        url: `${SITE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page === '' ? 1 : 0.8,
        alternates: {
          languages: {
            ro: `${SITE_URL}/ro${page}`,
            en: `${SITE_URL}/en${page}`,
          },
        },
      })
    }
  }

  // Dynamic service pages
  try {
    const services = await wordpressAPI.getServices({ per_page: 100 })
    
    for (const service of services) {
      for (const locale of locales) {
        sitemap.push({
          url: `${SITE_URL}/${locale}/servicii/${service.slug}`,
          lastModified: new Date(service.modified),
          changeFrequency: 'monthly',
          priority: 0.7,
          alternates: {
            languages: {
              ro: `${SITE_URL}/ro/servicii/${service.slug}`,
              en: `${SITE_URL}/en/servicii/${service.slug}`,
            },
          },
        })
      }
    }
  } catch (error) {
    console.error('Error generating sitemap for services:', error)
  }

  // Dynamic blog posts
  try {
    const posts = await wordpressAPI.getPosts({ per_page: 100 })
    
    for (const post of posts) {
      for (const locale of locales) {
        sitemap.push({
          url: `${SITE_URL}/${locale}/resurse/${post.slug}`,
          lastModified: new Date(post.modified),
          changeFrequency: 'monthly',
          priority: 0.6,
          alternates: {
            languages: {
              ro: `${SITE_URL}/ro/resurse/${post.slug}`,
              en: `${SITE_URL}/en/resurse/${post.slug}`,
            },
          },
        })
      }
    }
  } catch (error) {
    console.error('Error generating sitemap for posts:', error)
  }

  return sitemap
}
