import { 
  GET_LEGISLATION, 
  GET_LEGISLATION_BY_SLUG, 
  GET_IMPORTANT_LEGISLATION,
  GET_LEGISLATION_TYPES,
  GET_LEGISLATION_CATEGORIES
} from '../graphql/queries/legislation'
import type { 
  LegislationResponse, 
  SingleLegislationResponse, 
  Legislation,
  LegislationTypesResponse,
  LegislationCategoriesResponse,
  TaxonomyTerm
} from '@/types/legislation'

// Use internal HTTP for server-side requests
const WORDPRESS_GRAPHQL_URL = typeof window === 'undefined' 
  ? 'http://localhost:8082/graphql'
  : (process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL || 'http://localhost:8082/graphql')

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
      revalidate: 300, // 5 minutes
      tags: ['legislation'],
    },
  })

  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.statusText}`)
  }

  const json = await response.json()

  if (json.errors) {
    console.error('GraphQL Errors:', json.errors)
    throw new Error('Failed to fetch legislation from WordPress')
  }

  return json.data
}

export async function getAllLegislation() {
  try {
    const data: LegislationResponse = await fetchGraphQL(GET_LEGISLATION, { first: 100 })
    return data.legislations?.nodes || []
  } catch (error) {
    console.error('Error fetching legislation:', error)
    return []
  }
}

export async function getLegislationBySlug(slug: string) {
  try {
    // Best practice: Fetch all and filter client-side
    // This works better with Next.js caching and is simpler
    const allLegislation = await getAllLegislation()
    
    // Find by slug
    const legislation = allLegislation.find(leg => leg.slug === slug)
    
    if (!legislation) {
      console.log(`Legislation not found with slug: ${slug}`)
      return null
    }
    
    return legislation
  } catch (error) {
    console.error('Error fetching legislation by slug:', error)
    return null
  }
}

export async function getImportantLegislation() {
  try {
    const data: LegislationResponse = await fetchGraphQL(GET_IMPORTANT_LEGISLATION)
    return data.legislations?.nodes || []
  } catch (error) {
    console.error('Error fetching important legislation:', error)
    return []
  }
}

export async function getLegislationTypes() {
  try {
    const data: LegislationTypesResponse = await fetchGraphQL(GET_LEGISLATION_TYPES)
    return data.legislationTypes?.nodes || []
  } catch (error) {
    console.error('Error fetching legislation types:', error)
    return []
  }
}

export async function getLegislationCategories() {
  try {
    const data: LegislationCategoriesResponse = await fetchGraphQL(GET_LEGISLATION_CATEGORIES)
    return data.legislationCategories?.nodes || []
  } catch (error) {
    console.error('Error fetching legislation categories:', error)
    return []
  }
}

// Helper: Get status badge color
export function getStatusColor(status: string) {
  switch (status) {
    case 'active':
      return 'bg-green-100 text-green-800'
    case 'modified':
      return 'bg-yellow-100 text-yellow-800'
    case 'repealed':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

// Helper: Get status label
export function getStatusLabel(status: string) {
  switch (status) {
    case 'active':
      return 'Activ'
    case 'modified':
      return 'Modificat'
    case 'repealed':
      return 'Abrogat'
    default:
      return status
  }
}

// Helper: Get difficulty badge color
export function getDifficultyColor(level: string) {
  switch (level) {
    case 'beginner':
      return 'bg-blue-100 text-blue-800'
    case 'intermediate':
      return 'bg-purple-100 text-purple-800'
    case 'advanced':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

// Helper: Get difficulty label
export function getDifficultyLabel(level: string) {
  switch (level) {
    case 'beginner':
      return 'Ușor'
    case 'intermediate':
      return 'Mediu'
    case 'advanced':
      return 'Avansat'
    default:
      return level
  }
}
