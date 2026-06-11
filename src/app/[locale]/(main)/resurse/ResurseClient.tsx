'use client'

import { motion } from 'framer-motion'
import { Search, Filter, BookOpen, Calendar, Clock, Download, ExternalLink, ChevronRight, Tag as TagIcon, Folder, Grid3x3, List } from 'lucide-react'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { useState, useMemo } from 'react'
import type { Resource, Category, Tag } from '@/types/resource'
import type { Legislation, TaxonomyTerm } from '@/types/legislation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { calculateReadingTime, getPlainTextExcerpt, cleanShortcodes } from '@/lib/api/resources'

interface ResurseClientProps {
  resources: Resource[]
  legislation: Legislation[]
  categories: Category[]
  tags: Tag[]
  legislationTypes: TaxonomyTerm[]
  legislationCategories: TaxonomyTerm[]
}

type ViewMode = 'grid' | 'list'
type ResourceType = 'all' | 'articles' | 'legislation'

export default function ResurseClient({ 
  resources, 
  legislation, 
  categories, 
  tags,
  legislationTypes,
  legislationCategories
}: ResurseClientProps) {
  const locale = useLocale()
  const [searchTerm, setSearchTerm] = useState('')
  const [resourceType, setResourceType] = useState<ResourceType>('all')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedLegislationTypes, setSelectedLegislationTypes] = useState<string[]>([])
  const [selectedLegislationCategories, setSelectedLegislationCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<'recent' | 'popular' | 'alphabetic'>('recent')
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState<ViewMode>('grid')

  // Filter and combine resources + legislation
  const allItems = useMemo(() => {
    // Convert resources to unified format
    const resourceItems = resources.map(r => ({
      ...r,
      type: 'article' as const,
      url: `/${locale}/resurse/${r.slug}`
    }))

    // Convert legislation to unified format
    const legislationItems = legislation.map(l => ({
      ...l,
      type: 'legislation' as const,
      url: `/${locale}/resurse/legislatie/${l.slug}`
    }))

    // Combine based on resource type filter
    if (resourceType === 'articles') return resourceItems
    if (resourceType === 'legislation') return legislationItems
    return [...resourceItems, ...legislationItems]
  }, [resources, legislation, resourceType, locale])

  // Filter and sort
  const filteredItems = useMemo(() => {
    let filtered = allItems.filter(item => {
      // Search filter
      const matchesSearch = searchTerm === '' || 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.excerpt && item.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.content && item.content.toLowerCase().includes(searchTerm.toLowerCase()))

      // Type-specific filters
      if (item.type === 'article') {
        // Category filter for articles
        const resourceCategories = [
          ...((item as any).categories?.nodes || []),
          ...((item as any).resourceCategories?.nodes || [])
        ]
        const matchesCategory = selectedCategories.length === 0 ||
          resourceCategories.some((cat: any) => selectedCategories.includes(cat.slug))

        // Tag filter for articles
        const resourceTags = [
          ...((item as any).tags?.nodes || []),
          ...((item as any).resourceTags?.nodes || [])
        ]
        const matchesTag = selectedTags.length === 0 ||
          resourceTags.some((tag: any) => selectedTags.includes(tag.slug))

        return matchesSearch && matchesCategory && matchesTag
      } else {
        // Legislation filters
        const legItem = item as Legislation
        
        // Legislation type filter
        const itemTypes = legItem.legislationTypes?.nodes || []
        const matchesLegType = selectedLegislationTypes.length === 0 ||
          itemTypes.some(t => selectedLegislationTypes.includes(t.slug))

        // Legislation category filter
        const itemCategories = legItem.legislationCategories?.nodes || []
        const matchesLegCategory = selectedLegislationCategories.length === 0 ||
          itemCategories.some(c => selectedLegislationCategories.includes(c.slug))

        return matchesSearch && matchesLegType && matchesLegCategory
      }
    })

    // Sort
    if (sortBy === 'recent') {
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } else if (sortBy === 'alphabetic') {
      filtered.sort((a, b) => a.title.localeCompare(b.title))
    }

    return filtered
  }, [allItems, searchTerm, selectedCategories, selectedTags, selectedLegislationTypes, selectedLegislationCategories, sortBy])

  const toggleCategory = (slug: string) => {
    setSelectedCategories(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    )
  }

  const toggleTag = (slug: string) => {
    setSelectedTags(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    )
  }

  const toggleLegislationType = (slug: string) => {
    setSelectedLegislationTypes(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    )
  }

  const toggleLegislationCategory = (slug: string) => {
    setSelectedLegislationCategories(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    )
  }

  const clearFilters = () => {
    setSearchTerm('')
    setResourceType('all')
    setSelectedCategories([])
    setSelectedTags([])
    setSelectedLegislationTypes([])
    setSelectedLegislationCategories([])
  }

  return (
    <>
      {/* Breadcrumbs - SEO */}
      <nav className="bg-gray-50 border-b" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href={`/${locale}`} className="text-gray-600 hover:text-blue-600" itemProp="item">
                <span itemProp="name">Acasă</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-gray-900 font-semibold" itemProp="name">Resurse</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e88e5] via-[#0891b2] to-[#10b981] py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
        
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Centrul de Resurse HR
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
              Ghiduri complete, legislație actualizată, template-uri descărcabile și articole pentru profesioniști în resurse umane.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Caută în resurse... (ex: Codul Muncii, GDPR, salarizare)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 h-14 text-base bg-white shadow-lg"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span className="font-semibold">{resources.length} Resurse</span>
              </div>
              <div className="flex items-center gap-2">
                <Folder className="h-5 w-5" />
                <span className="font-semibold">{categories.length} Categorii</span>
              </div>
              <div className="flex items-center gap-2">
                <TagIcon className="h-5 w-5" />
                <span className="font-semibold">{tags.length} Tag-uri</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-80 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                
                {/* Active Filters */}
                {(selectedCategories.length > 0 || selectedTags.length > 0) && (
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-sm text-gray-900">Filtre Active</h3>
                      <button
                        onClick={clearFilters}
                        className="text-xs text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Șterge Tot
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedCategories.map(slug => {
                        const cat = categories.find(c => c.slug === slug)
                        return cat ? (
                          <span
                            key={slug}
                            className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border"
                          >
                            {cat.name}
                            <button onClick={() => toggleCategory(slug)} className="hover:text-red-600">×</button>
                          </span>
                        ) : null
                      })}
                      {selectedTags.map(slug => {
                        const tag = tags.find(t => t.slug === slug)
                        return tag ? (
                          <span
                            key={slug}
                            className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border"
                          >
                            #{tag.name}
                            <button onClick={() => toggleTag(slug)} className="hover:text-red-600">×</button>
                          </span>
                        ) : null
                      })}
                    </div>
                  </div>
                )}

                {/* Sort */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    Sortare
                  </h3>
                  <div className="space-y-2">
                    {[
                      { value: 'recent', label: 'Cele mai recente' },
                      { value: 'popular', label: 'Cele mai populare' },
                      { value: 'alphabetic', label: 'Alfabetic (A-Z)' }
                    ].map(option => (
                      <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="sort"
                          value={option.value}
                          checked={sortBy === option.value}
                          onChange={(e) => setSortBy(e.target.value as any)}
                          className="text-blue-600"
                        />
                        <span className="text-sm text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Resource Type Filter */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Tip Resursă
                  </h3>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'Toate' },
                      { value: 'articles', label: 'Articole Generale' },
                      { value: 'legislation', label: 'Legislație' }
                    ].map(option => (
                      <label key={option.value} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                        <input
                          type="radio"
                          name="resourceType"
                          value={option.value}
                          checked={resourceType === option.value}
                          onChange={(e) => setResourceType(e.target.value as ResourceType)}
                          className="text-blue-600"
                        />
                        <span className="text-sm text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Legislation Type Filter - Show only when legislation is selected */}
                {(resourceType === 'legislation' || resourceType === 'all') && legislationTypes.length > 0 && (
                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Tip Legislație
                    </h3>
                    <div className="space-y-2">
                      {legislationTypes.map(type => (
                        <label key={type.slug} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                          <input
                            type="checkbox"
                            checked={selectedLegislationTypes.includes(type.slug)}
                            onChange={() => toggleLegislationType(type.slug)}
                            className="text-blue-600"
                          />
                          <span className="text-sm text-gray-700 flex-1">{type.name}</span>
                          {type.count && (
                            <span className="text-xs text-gray-500">({type.count})</span>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Legislation Category Filter - Show only when legislation is selected */}
                {(resourceType === 'legislation' || resourceType === 'all') && legislationCategories.length > 0 && (
                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Folder className="h-5 w-5" />
                      Categorie Legislație
                    </h3>
                    <div className="space-y-2">
                      {legislationCategories.map(category => (
                        <label key={category.slug} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                          <input
                            type="checkbox"
                            checked={selectedLegislationCategories.includes(category.slug)}
                            onChange={() => toggleLegislationCategory(category.slug)}
                            className="text-blue-600"
                          />
                          <span className="text-sm text-gray-700 flex-1">{category.name}</span>
                          {category.count && (
                            <span className="text-xs text-gray-500">({category.count})</span>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Categories - Show only for articles */}
                {resourceType !== 'legislation' && (
                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Folder className="h-5 w-5" />
                      Categorii Articole
                    </h3>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {categories.slice(0, 15).map(category => (
                      <label key={category.slug} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category.slug)}
                          onChange={() => toggleCategory(category.slug)}
                          className="text-blue-600"
                        />
                        <span className="text-sm text-gray-700 flex-1">{category.name}</span>
                        {category.count && (
                          <span className="text-xs text-gray-500">({category.count})</span>
                        )}
                      </label>
                    ))}
                  </div>
                </div>
                )}

                {/* Popular Tags - Show only for articles */}
                {resourceType !== 'legislation' && (
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <TagIcon className="h-5 w-5" />
                    Tag-uri Populare
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.slice(0, 20).map((tag: any) => (
                      <button
                        key={tag.slug}
                        onClick={() => toggleTag(tag.slug)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                          selectedTags.includes(tag.slug)
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        #{tag.name}
                        {tag.count && <span className="ml-1 opacity-75">({tag.count})</span>}
                      </button>
                    ))}
                  </div>
                </div>
                )}

              </div>
            </aside>

            {/* Mobile Filters Toggle */}
            <div className="lg:hidden">
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="w-full mb-4"
              >
                <Filter className="h-4 w-4 mr-2" />
                {showFilters ? 'Ascunde Filtre' : 'Afișează Filtre'}
              </Button>
            </div>

            {/* Resources Grid */}
            <main className="flex-1 min-w-0">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  {filteredItems.length} {filteredItems.length === 1 ? 'resursă găsită' : 'resurse găsite'}
                </p>
                
                {/* View Toggle */}
                <div className="flex items-center gap-2 bg-white rounded-lg border p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    title="Grid View"
                  >
                    <Grid3x3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    title="List View"
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {filteredItems.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-xl">
                  <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Nu am găsit resurse
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Încearcă să modifici filtrele sau caută alt termen.
                  </p>
                  <Button onClick={clearFilters} variant="outline">
                    Șterge Filtrele
                  </Button>
                </div>
              ) : (
                <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'grid gap-6'}>
                  {filteredItems.map((item: any, index: number) => {
                    const isArticle = item.type === 'article'
                    const allCategories = isArticle ? [
                      ...(item.categories?.nodes || []),
                      ...(item.resourceCategories?.nodes || [])
                    ] : (item.legislationCategories?.nodes || [])
                    const allTags = isArticle ? [
                      ...(item.tags?.nodes || []),
                      ...(item.resourceTags?.nodes || [])
                    ] : []
                    const readingTime = item.resourceMetadata?.readingTime || 
                      item.readingTimeLegislation ||
                      (item.content ? calculateReadingTime(item.content) : 5)
                    const excerpt = item.excerpt ? 
                      getPlainTextExcerpt(item.excerpt, 200) : 
                      ''
                    const cleanTitle = cleanShortcodes(item.title)

                    return (
                      <motion.article
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white rounded-xl overflow-hidden shadow-sm border hover:shadow-lg transition-all duration-300 group"
                        itemScope
                        itemType="https://schema.org/Article"
                      >
                        {viewMode === 'grid' ? (
                          // Grid View - Vertical Card
                          <div className="flex flex-col h-full">
                            {item.featuredImage && (
                              <Link href={item.url} className="block relative h-48 overflow-hidden">
                                <img
                                  src={item.featuredImage.node.sourceUrl}
                                  alt={item.featuredImage.node.altText || item.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  itemProp="image"
                                />
                              </Link>
                            )}
                            <div className="flex-1 p-6 flex flex-col">
                              {allCategories.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-3">
                                  {allCategories.slice(0, 1).map((cat: any) => (
                                    <span key={cat.id} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                                      {cat.name}
                                    </span>
                                  ))}
                                </div>
                              )}
                              <Link href={item.url}>
                                <h2 className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors mb-2 line-clamp-2" itemProp="headline">
                                  {cleanTitle}
                                </h2>
                              </Link>
                              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600 mb-3">
                                <time className="flex items-center gap-1" dateTime={item.date} itemProp="datePublished">
                                  <Calendar className="h-3 w-3" />
                                  {new Date(item.date).toLocaleDateString('ro-RO')}
                                </time>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {readingTime} min
                                </span>
                              </div>
                              {excerpt && (
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1" itemProp="description">
                                  {excerpt}
                                </p>
                              )}
                              <Link href={item.url} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm mt-auto">
                                Citește mai mult
                                <ChevronRight className="h-4 w-4" />
                              </Link>
                            </div>
                          </div>
                        ) : (
                          // List View - Horizontal Card
                          <div className="flex flex-col md:flex-row gap-6 p-6">
                            {item.featuredImage && (
                              <Link href={item.url} className="md:w-64 flex-shrink-0">
                                <img
                                  src={item.featuredImage.node.sourceUrl}
                                  alt={item.featuredImage.node.altText || item.title}
                                  className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                                  itemProp="image"
                                />
                              </Link>
                            )}
                            <div className="flex-1 min-w-0">
                              {allCategories.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-3">
                                  {allCategories.slice(0, 2).map((cat: any) => (
                                    <span key={cat.id} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                                      {cat.name}
                                    </span>
                                  ))}
                                </div>
                              )}
                              <Link href={item.url}>
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors mb-2 line-clamp-2" itemProp="headline">
                                  {cleanTitle}
                                </h2>
                              </Link>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                                <time className="flex items-center gap-1" dateTime={item.date} itemProp="datePublished">
                                  <Calendar className="h-4 w-4" />
                                  {new Date(item.date).toLocaleDateString('ro-RO')}
                                </time>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {readingTime} min citire
                                </span>
                              </div>
                              {excerpt && (
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2" itemProp="description">
                                  {excerpt}
                                </p>
                              )}
                              {allTags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {allTags.slice(0, 5).map((tag: any) => (
                                    <button key={tag.id} onClick={() => toggleTag(tag.slug)} className="text-xs text-gray-600 hover:text-blue-600 transition-colors">
                                      #{tag.name}
                                    </button>
                                  ))}
                                </div>
                              )}
                              <Link href={item.url} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm">
                                Citește mai mult
                                <ChevronRight className="h-4 w-4" />
                              </Link>
                            </div>
                          </div>
                        )}
                        <meta itemProp="author" content="TDG Trading" />
                        <link itemProp="url" href={`https://tdgresursumane.ro/resurse/${item.slug}`} />
                      </motion.article>
                    )
                  })}
                </div>
              )}
            </main>

          </div>
        </div>
      </section>
    </>
  )
}
