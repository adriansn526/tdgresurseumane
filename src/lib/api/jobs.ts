import { GET_JOBS, GET_JOB_BY_SLUG, GET_FEATURED_JOBS } from '../graphql/queries/jobs'
import type { JobsResponse, JobResponse } from '@/types/job'

const WORDPRESS_GRAPHQL_URL = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL || 'http://localhost:8082/graphql'

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
      revalidate: 60, // Revalidate every 60 seconds
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

export async function getJobs() {
  try {
    const data: JobsResponse = await fetchGraphQL(GET_JOBS)
    return data.jobs.nodes.filter(job => job.jobFields.jobStatus === 'active')
  } catch (error) {
    console.error('Error fetching jobs:', error)
    return []
  }
}

export async function getJobBySlug(slug: string) {
  try {
    const data: JobResponse = await fetchGraphQL(GET_JOB_BY_SLUG, { slug })
    return data.job
  } catch (error) {
    console.error('Error fetching job:', error)
    return null
  }
}

export async function getFeaturedJobs() {
  try {
    const data: JobsResponse = await fetchGraphQL(GET_FEATURED_JOBS)
    return data.jobs.nodes
  } catch (error) {
    console.error('Error fetching featured jobs:', error)
    return []
  }
}
