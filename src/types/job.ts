export interface JobFields {
  jobTitle: string
  jobLocation: string
  jobType: 'full-time' | 'part-time' | 'contract' | 'internship'
  jobDepartment: string
  jobExperience: 'entry' | 'mid' | 'senior' | 'lead'
  jobSalaryMin?: number
  jobSalaryMax?: number
  jobSalaryCurrency?: 'RON' | 'EUR' | 'USD'
  jobDeadline?: string
  jobEmail: string
  jobStatus: 'active' | 'closed' | 'draft'
  jobFeatured: boolean
  jobResponsibilities?: Array<{ item: string }>
  jobRequirements?: Array<{ item: string }>
  jobBenefits?: Array<{ item: string }>
}

export interface Job {
  id: string
  databaseId: number
  title: string
  excerpt?: string
  content?: string
  slug: string
  date: string
  featuredImage?: {
    node: {
      sourceUrl: string
      altText: string
    }
  }
  jobFields: JobFields
}

export interface JobsResponse {
  jobs: {
    nodes: Job[]
  }
}

export interface JobResponse {
  job: Job
}
