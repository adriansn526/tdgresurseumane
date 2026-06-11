export interface LegislationImage {
  node: {
    sourceUrl: string
    altText: string
  }
}

export interface TaxonomyTerm {
  id: string
  name: string
  slug: string
  count?: number
}

export interface TaxonomyTerms {
  nodes: TaxonomyTerm[]
}

export interface PracticalExample {
  exampleTitle: string
  exampleScenario: string
  exampleSolution: string
}

export interface KeyPoint {
  keyPointText: string
}

export interface CommonMistake {
  mistakeText: string
}

export interface Modification {
  modificationLaw: string
  modificationDate: string
  modificationDescription: string
}

export interface RelatedLegislation {
  id: string
  title: string
  slug: string
  articleNumber: string
}

export interface ChecklistItem {
  checklistItem: string
}

export interface AppliesIfCondition {
  condition: string
}

export interface Legislation {
  id: string
  databaseId: number
  title: string
  content?: string
  excerpt?: string
  slug: string
  date: string
  featuredImage?: LegislationImage
  
  // Taxonomies
  legislationTypes?: TaxonomyTerms
  legislationCategories?: TaxonomyTerms
  
  // Informații Legislație
  legislationNumber?: string
  articleNumber?: string
  chapterNumber?: string
  sectionNumber?: string
  paragraphNumbers?: string
  legislationStatus?: 'active' | 'modified' | 'repealed'
  legislationDate?: string
  officialSource?: string
  lastModifiedDate?: string
  
  // Content
  originalText?: string
  simplifiedText?: string
  practicalExamples?: PracticalExample[]
  keyPoints?: KeyPoint[]
  commonMistakes?: CommonMistake[]
  
  // Modificări
  modifications?: Modification[]
  relatedLegislation?: RelatedLegislation[]
  
  // SEO și Metadata
  targetAudience?: string[]
  difficultyLevel?: 'beginner' | 'intermediate' | 'advanced'
  readingTimeLegislation?: number
  seoKeywords?: string
  isImportant?: boolean
  
  // Checklist
  complianceChecklist?: ChecklistItem[]
  appliesIf?: AppliesIfCondition[]
}

export interface LegislationResponse {
  legislations: {
    nodes: Legislation[]
  }
}

export interface SingleLegislationResponse {
  legislation: Legislation
}

export interface LegislationTypesResponse {
  legislationTypes: TaxonomyTerms
}

export interface LegislationCategoriesResponse {
  legislationCategories: TaxonomyTerms
}
