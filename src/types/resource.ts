export interface Category {
  id: string
  name: string
  slug: string
  count?: number
}

export interface Tag {
  id: string
  name: string
  slug: string
  count?: number
}

export interface ResourceMetadata {
  readingTime?: number
  viewCount?: number
  isFeatured?: boolean
  downloadFile?: {
    url: string
    title: string
    fileSize?: number
  }
  externalLink?: string
  relatedPosts?: Array<{
    id: string
    title: string
    slug: string
    excerpt?: string
  }>
}

export interface LegislationDetails {
  legislationNumber?: string
  legislationDate?: string
  legislationStatus?: 'active' | 'modified' | 'repealed'
  legislationChapter?: string
  legislationArticle?: string
  legislationOfficialLink?: string
}

export interface Resource {
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
  categories?: {
    nodes: Category[]
  }
  tags?: {
    nodes: Tag[]
  }
  resourceCategories?: {
    nodes: Category[]
  }
  resourceTags?: {
    nodes: Tag[]
  }
  resourceMetadata?: ResourceMetadata
  legislationDetails?: LegislationDetails
}

export interface ResourcesResponse {
  posts: {
    nodes: Resource[]
  }
  legislations?: {
    nodes: Resource[]
  }
}

export interface CategoriesResponse {
  categories: {
    nodes: Category[]
  }
  resourceCategories?: {
    nodes: Category[]
  }
}

export interface TagsResponse {
  tags: {
    nodes: Tag[]
  }
  resourceTags?: {
    nodes: Tag[]
  }
}
