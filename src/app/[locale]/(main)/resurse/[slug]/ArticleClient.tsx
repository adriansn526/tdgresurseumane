'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import type { Resource } from '@/types/resource'
import { cleanShortcodes } from '@/lib/api/resources'

interface ArticleClientProps {
  resource: Resource
}

export default function ArticleClient({ resource }: ArticleClientProps) {
  const locale = useLocale()
  const cleanTitle = cleanShortcodes(resource.title)
  const cleanContent = resource.content ? cleanShortcodes(resource.content) : ''

  const allCategories = [
    ...(resource.categories?.nodes || []),
    ...(resource.resourceCategories?.nodes || [])
  ]

  const allTags = [
    ...(resource.tags?.nodes || []),
    ...(resource.resourceTags?.nodes || [])
  ]

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link
            href={`/${locale}/resurse`}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <ArrowLeft className="h-4 w-4" />
            Înapoi la Resurse
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1e88e5] via-[#0891b2] to-[#10b981] py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            {/* Categories */}
            {allCategories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {allCategories.map(cat => (
                  <span
                    key={cat.id}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm"
                  >
                    {cat.name}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              {cleanTitle}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={resource.date}>
                  {new Date(resource.date).toLocaleDateString('ro-RO', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>TDG Resurse Umane</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border p-8 md:p-12">
              {/* Featured Image */}
              {resource.featuredImage && (
                <div className="mb-8 -mx-8 md:-mx-12 -mt-8 md:-mt-12">
                  <img
                    src={resource.featuredImage.node.sourceUrl}
                    alt={resource.featuredImage.node.altText || cleanTitle}
                    className="w-full h-64 md:h-96 object-cover rounded-t-2xl"
                  />
                </div>
              )}

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-bold prose-headings:text-gray-900
                  prose-p:text-gray-600 prose-p:leading-relaxed
                  prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900 prose-strong:font-bold
                  prose-ul:text-gray-600 prose-ol:text-gray-600
                  prose-li:text-gray-600
                  prose-img:rounded-lg prose-img:shadow-md"
                dangerouslySetInnerHTML={{ __html: cleanContent }}
              />

              {/* Tags */}
              {allTags.length > 0 && (
                <div className="mt-12 pt-8 border-t">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Tag-uri:</h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => (
                      <span
                        key={tag.id}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                      >
                        #{tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA Section */}
            <div className="mt-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ai nevoie de consultanță HR?
              </h2>
              <p className="text-gray-600 mb-6">
                Echipa noastră de specialiști este gata să te ajute cu orice problemă de resurse umane.
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#1e88e5] to-[#0891b2] hover:from-[#1976d2] hover:to-[#0e7490] text-white font-semibold rounded-lg transition-all"
              >
                Contactează-ne
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
