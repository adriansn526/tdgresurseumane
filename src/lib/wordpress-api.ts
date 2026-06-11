const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://cms.tdgtrading.ro/wp-json/wp/v2'

export interface WordPressPost {
  id: number
  slug: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  date: string
  modified: string
  featured_media?: number
  acf?: any
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
    }>
  }
}

export interface Service extends WordPressPost {
  service_icon?: string
  service_subtitle?: string
  service_features?: Array<{
    feature_title: string
    feature_description: string
    feature_icon: string
  }>
}

class WordPressAPI {
  private baseUrl: string

  constructor() {
    this.baseUrl = WORDPRESS_API_URL
  }

  async fetchAPI(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}${endpoint}`
    
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        next: {
          revalidate: 3600, // Cache for 1 hour
          tags: ['wordpress'],
        },
      })

      if (!response.ok) {
        throw new Error(`WordPress API error: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error('WordPress API fetch error:', error)
      throw error
    }
  }

  // Get all services
  async getServices(params: { per_page?: number; page?: number } = {}) {
    const queryParams = new URLSearchParams({
      _embed: 'true',
      per_page: String(params.per_page || 10),
      page: String(params.page || 1),
    })

    return this.fetchAPI(`/services?${queryParams}`)
  }

  // Get service by slug
  async getServiceBySlug(slug: string): Promise<Service | null> {
    try {
      const services = await this.fetchAPI(`/services?slug=${slug}&_embed=true`)
      
      if (!services || services.length === 0) {
        return null
      }

      return services[0]
    } catch (error) {
      console.error('Error fetching service by slug:', error)
      return null
    }
  }

  // Get all posts
  async getPosts(params: { per_page?: number; page?: number } = {}) {
    const queryParams = new URLSearchParams({
      _embed: 'true',
      per_page: String(params.per_page || 10),
      page: String(params.page || 1),
    })

    return this.fetchAPI(`/posts?${queryParams}`)
  }

  // Get post by slug
  async getPostBySlug(slug: string): Promise<WordPressPost | null> {
    try {
      const posts = await this.fetchAPI(`/posts?slug=${slug}&_embed=true`)
      
      if (!posts || posts.length === 0) {
        return null
      }

      return posts[0]
    } catch (error) {
      console.error('Error fetching post by slug:', error)
      return null
    }
  }
}

export const wordpressAPI = new WordPressAPI()
export default wordpressAPI
