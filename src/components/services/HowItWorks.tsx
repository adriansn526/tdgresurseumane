'use client'

import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface Step {
  number: string
  icon: LucideIcon
  title: string
  description: string
  duration: string
  deliverables: string[]
}

interface HowItWorksProps {
  title: string
  subtitle: string
  steps: Step[]
}

export default function HowItWorks({ title, subtitle, steps }: HowItWorksProps) {
  return (
    <section className="py-20 bg-gray-50">
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

        {/* Steps - Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connector Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-green-500 to-teal-500" />

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Number Badge */}
                  <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <Icon className="h-6 w-6 text-teal-600" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 text-center">
                      {step.description}
                    </p>

                    {/* Duration */}
                    <div className="text-xs text-teal-600 font-semibold text-center mb-3">
                      ⏱️ {step.duration}
                    </div>

                    {/* Deliverables */}
                    <div className="border-t border-gray-200 pt-3">
                      <div className="text-xs font-semibold text-gray-700 mb-2">
                        Deliverables:
                      </div>
                      <ul className="space-y-1">
                        {step.deliverables.map((item, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                            <span className="text-teal-500 mt-0.5">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Steps - Mobile Vertical */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-16"
              >
                {/* Number Badge */}
                <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-white">
                    {step.number}
                  </span>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-green-500" />
                )}

                {/* Card */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  {/* Icon */}
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="h-5 w-5 text-teal-600" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-3">
                    {step.description}
                  </p>

                  {/* Duration */}
                  <div className="text-xs text-teal-600 font-semibold mb-3">
                    ⏱️ {step.duration}
                  </div>

                  {/* Deliverables */}
                  <div className="border-t border-gray-200 pt-3">
                    <div className="text-xs font-semibold text-gray-700 mb-2">
                      Deliverables:
                    </div>
                    <ul className="space-y-1">
                      {step.deliverables.map((item, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-teal-500 mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
