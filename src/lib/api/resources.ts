import { GET_RESOURCES, GET_RESOURCE_BY_SLUG, GET_ALL_CATEGORIES, GET_ALL_TAGS, GET_FEATURED_RESOURCES } from '../graphql/queries/resources'
import type { ResourcesResponse, CategoriesResponse, TagsResponse, Resource } from '@/types/resource'

// Use internal HTTP for server-side requests, external HTTPS for client-side
const WORDPRESS_GRAPHQL_URL = typeof window === 'undefined' 
  ? 'http://localhost:8082/graphql' // Server-side: use internal HTTP
  : (process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL || 'http://localhost:8082/graphql') // Client-side: use env var

async function fetchGraphQL(query: string, variables?: Record<string, any>) {
  const response = await fetch(WORDPRESS_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: {
      revalidate: 300, // Revalidate every 5 minutes for SEO freshness
      tags: ['resources'],
    },
  })

  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.statusText}`)
  }

  const json = await response.json()

  if (json.errors) {
    console.error('GraphQL Errors:', json.errors)
    throw new Error('Failed to fetch data from WordPress')
  }

  return json.data
}

export async function getResources() {
  try {
    const data: ResourcesResponse = await fetchGraphQL(GET_RESOURCES, { first: 100 })
    
    // Return posts (legislations will be added later when CPT is fully configured)
    const allResources = data.posts?.nodes || []
    
    // Sort by date (newest first)
    return allResources.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  } catch (error) {
    console.error('Error fetching resources:', error)
    return []
  }
}

export async function getResourceBySlug(slug: string) {
  try {
    const data = await fetchGraphQL(GET_RESOURCE_BY_SLUG, { slug })
    return data.post as Resource
  } catch (error) {
    console.error('Error fetching resource:', error)
    return null
  }
}

export async function getAllCategories() {
  try {
    const data: CategoriesResponse = await fetchGraphQL(GET_ALL_CATEGORIES)
    
    // Return categories sorted by count
    const categories = data.categories?.nodes || []
    return categories.sort((a, b) => (b.count || 0) - (a.count || 0))
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export async function getAllTags() {
  try {
    const data: TagsResponse = await fetchGraphQL(GET_ALL_TAGS)
    
    // Return tags sorted by count
    const tags = data.tags?.nodes || []
    return tags.sort((a, b) => (b.count || 0) - (a.count || 0))
  } catch (error) {
    console.error('Error fetching tags:', error)
    return []
  }
}

export async function getFeaturedResources() {
  try {
    const data = await fetchGraphQL(GET_FEATURED_RESOURCES)
    return data.posts?.nodes || []
  } catch (error) {
    console.error('Error fetching featured resources:', error)
    return []
  }
}

// Helper function to calculate reading time
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const text = content.replace(/<[^>]*>/g, '') // Strip HTML
  const wordCount = text.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

// Helper function to clean WPBakery shortcodes
export function cleanShortcodes(text: string): string {
  if (!text) return ''
  
  // Remove WPBakery shortcodes like [vc_row], [vc_column], etc.
  let cleaned = text.replace(/\[vc_[^\]]*\]/g, '')
  
  // Remove other common shortcodes
  cleaned = cleaned.replace(/\[[^\]]*\]/g, '')
  
  // Remove multiple spaces
  cleaned = cleaned.replace(/\s+/g, ' ')
  
  return cleaned.trim()
}

// Helper function to strip HTML and get plain text excerpt
export function getPlainTextExcerpt(html: string, maxLength: number = 160): string {
  // First clean shortcodes
  let text = cleanShortcodes(html)
  
  // Then strip HTML tags
  text = text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
  
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
}
