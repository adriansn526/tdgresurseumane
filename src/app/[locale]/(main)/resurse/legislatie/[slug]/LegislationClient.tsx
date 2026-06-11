'use client'

import { motion } from 'framer-motion'
import { 
  Calendar, Clock, ArrowLeft, BookOpen, CheckCircle, AlertTriangle, 
  FileText, Scale, Users, ChevronDown, ChevronUp, ExternalLink,
  Lightbulb, Shield, History
} from 'lucide-react'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { useState } from 'react'
import type { Legislation } from '@/types/legislation'
import { getStatusColor, getStatusLabel, getDifficultyColor, getDifficultyLabel } from '@/lib/api/legislation'

interface LegislationClientProps {
  legislation: Legislation
}

export default function LegislationClient({ legislation }: LegislationClientProps) {
  const locale = useLocale()
  const [showOriginal, setShowOriginal] = useState(false)
  const [activeTab, setActiveTab] = useState<'simplified' | 'original'>('simplified')

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href={`/${locale}`} className="text-gray-600 hover:text-blue-600">Acasă</Link></li>
            <span className="text-gray-400">/</span>
            <li><Link href={`/${locale}/resurse`} className="text-gray-600 hover:text-blue-600">Resurse</Link></li>
            <span className="text-gray-400">/</span>
            <li><Link href={`/${locale}/resurse?type=legislatie`} className="text-gray-600 hover:text-blue-600">Legislație</Link></li>
            <span className="text-gray-400">/</span>
            <li className="text-gray-900 font-semibold">{legislation.articleNumber || 'Codul Muncii'}</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto"
          >
            {/* Back Button */}
            <Link
              href={`/${locale}/resurse?type=legislatie`}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Înapoi la Legislație
            </Link>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white backdrop-blur-sm">
                <Scale className="h-4 w-4" />
                {legislation.legislationNumber}
              </span>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(legislation.legislationStatus || 'active')}`}>
                {getStatusLabel(legislation.legislationStatus || 'active')}
              </span>
              {legislation.difficultyLevel && (
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getDifficultyColor(legislation.difficultyLevel)}`}>
                  {getDifficultyLabel(legislation.difficultyLevel)}
                </span>
              )}
              {legislation.isImportant && (
                <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 text-sm font-semibold">
                  ⭐ Important
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              {legislation.title}
            </h1>

            {/* Chapter Info */}
            {legislation.chapterNumber && (
              <p className="text-xl text-white/90 mb-6">
                {legislation.chapterNumber}
              </p>
            )}

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-white/80">
              {legislation.legislationDate && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Publicat: {new Date(legislation.legislationDate).toLocaleDateString('ro-RO')}</span>
                </div>
              )}
              {legislation.readingTimeLegislation && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{legislation.readingTimeLegislation} min citire</span>
                </div>
              )}
              {legislation.officialSource && (
                <a 
                  href={legislation.officialSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Monitorul Oficial</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            {/* Tab Selector */}
            <div className="bg-white rounded-t-2xl border-b">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('simplified')}
                  className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                    activeTab === 'simplified'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Lightbulb className="h-5 w-5" />
                    Explicație Simplă
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('original')}
                  className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                    activeTab === 'original'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <FileText className="h-5 w-5" />
                    Text Original
                  </div>
                </button>
              </div>
            </div>

            {/* Content Tabs */}
            <div className="bg-white rounded-b-2xl shadow-sm border border-t-0 p-8 md:p-12">
              {activeTab === 'simplified' && legislation.simplifiedText && (
                <div 
                  className="prose prose-lg max-w-none
                    prose-headings:font-bold prose-headings:text-gray-900
                    prose-p:text-gray-600 prose-p:leading-relaxed
                    prose-ul:text-gray-600 prose-ol:text-gray-600
                    prose-strong:text-gray-900 prose-strong:font-bold"
                  dangerouslySetInnerHTML={{ __html: legislation.simplifiedText }}
                />
              )}

              {activeTab === 'original' && legislation.originalText && (
                <div 
                  className="prose prose-lg max-w-none bg-gray-50 p-6 rounded-lg
                    prose-p:text-gray-700 prose-p:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: legislation.originalText }}
                />
              )}
            </div>

            {/* Practical Examples */}
            {legislation.practicalExamples && legislation.practicalExamples.length > 0 && (
              <div className="mt-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Lightbulb className="h-6 w-6 text-green-600" />
                  Exemple Practice
                </h2>
                <div className="space-y-6">
                  {legislation.practicalExamples.map((example, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {index + 1}. {example.exampleTitle}
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm font-semibold text-gray-700">Scenariul:</span>
                          <p className="text-gray-600 mt-1">{example.exampleScenario}</p>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-green-700">✓ Soluția:</span>
                          <p className="text-gray-600 mt-1">{example.exampleSolution}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Points */}
            {legislation.keyPoints && legislation.keyPoints.length > 0 && (
              <div className="mt-8 bg-blue-50 rounded-2xl p-8 border border-blue-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  Puncte Cheie
                </h2>
                <ul className="space-y-3">
                  {legislation.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point.keyPointText}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Common Mistakes */}
            {legislation.commonMistakes && legislation.commonMistakes.length > 0 && (
              <div className="mt-8 bg-red-50 rounded-2xl p-8 border border-red-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  Greșeli Frecvente
                </h2>
                <ul className="space-y-3">
                  {legislation.commonMistakes.map((mistake, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                      <span className="text-gray-700">{mistake.mistakeText}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Compliance Checklist */}
            {legislation.complianceChecklist && legislation.complianceChecklist.length > 0 && (
              <div className="mt-8 bg-purple-50 rounded-2xl p-8 border border-purple-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Shield className="h-6 w-6 text-purple-600" />
                  Checklist Conformitate
                </h2>
                <p className="text-gray-600 mb-4">Pentru a fi conform cu acest articol:</p>
                <ul className="space-y-3">
                  {legislation.complianceChecklist.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 h-5 w-5 text-purple-600 rounded" />
                      <span className="text-gray-700">{item.checklistItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Modifications */}
            {legislation.modifications && legislation.modifications.length > 0 && (
              <div className="mt-8 bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <History className="h-6 w-6 text-yellow-600" />
                  Modificări Legislative
                </h2>
                <div className="space-y-4">
                  {legislation.modifications.map((mod, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border-l-4 border-yellow-400">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900">{mod.modificationLaw}</h3>
                          <p className="text-sm text-gray-600 mt-1">{mod.modificationDescription}</p>
                        </div>
                        <span className="text-sm text-gray-500 whitespace-nowrap">
                          {new Date(mod.modificationDate).toLocaleDateString('ro-RO')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Section */}
            <div className="mt-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ai nevoie de ajutor cu aplicarea acestui articol?
              </h2>
              <p className="text-gray-600 mb-6">
                Echipa noastră de consultanți HR te poate ajuta să implementezi corect prevederile legale.
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
