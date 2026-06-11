'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  details: string[]
  gradient: string
}

interface FeaturesGridProps {
  title: string
  subtitle: string
  features: Feature[]
}

export default function FeaturesGrid({ title, subtitle, features }: FeaturesGridProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isExpanded = expandedIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300">
                  {/* Icon */}
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-md mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>

                  {/* Expandable Details */}
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition-colors"
                  >
                    <span>Vezi detalii</span>
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Details List */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-4 space-y-2 pl-5">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-gray-600 list-disc">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
