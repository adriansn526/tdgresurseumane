'use client'

import { motion } from 'framer-motion'
import { Check, X, TrendingDown, Sparkles } from 'lucide-react'

interface CostItem {
  item: string
  amount: string
}

interface ComparisonSide {
  title: string
  costs: CostItem[]
  total: string
  risks?: string[]
  benefits?: string[]
}

interface CostComparisonProps {
  title: string
  subtitle: string
  comparison: {
    internal: ComparisonSide
    external: ComparisonSide
  }
  savings: {
    percentage: string
    description: string
    additionalBenefits: string[]
  }
}

export default function CostComparison({ title, subtitle, comparison, savings }: CostComparisonProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
          {/* Internal Department */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{comparison.internal.title}</h3>
              <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                Costuri Mari
              </div>
            </div>

            {/* Costs */}
            <div className="space-y-3 mb-6">
              {comparison.internal.costs.map((cost, index) => (
                <div key={index} className="flex justify-between items-start pb-3 border-b border-gray-100">
                  <span className="text-gray-700 flex-1">{cost.item}</span>
                  <span className="font-semibold text-gray-900 ml-4">{cost.amount}</span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="bg-red-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">Total Lunar:</span>
                <span className="text-2xl font-bold text-red-600">{comparison.internal.total}</span>
              </div>
            </div>

            {/* Risks */}
            {comparison.internal.risks && (
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 mb-3">Riscuri:</h4>
                {comparison.internal.risks.map((risk, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{risk}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* External Service */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-xl p-8 border-2 border-blue-400 relative overflow-hidden"
          >
            {/* Sparkle Effect */}
            <div className="absolute top-4 right-4">
              <Sparkles className="h-8 w-8 text-yellow-300 animate-pulse" />
            </div>

            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">{comparison.external.title}</h3>
              <div className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-semibold">
                Economie {savings.percentage}
              </div>
            </div>

            {/* Costs */}
            <div className="space-y-3 mb-6">
              {comparison.external.costs.map((cost, index) => (
                <div key={index} className="flex justify-between items-start pb-3 border-b border-white/20">
                  <span className="text-white/90 flex-1">{cost.item}</span>
                  <span className="font-semibold text-white ml-4">{cost.amount}</span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-white">Total Lunar:</span>
                <span className="text-2xl font-bold text-white">{comparison.external.total}</span>
              </div>
            </div>

            {/* Benefits */}
            {comparison.external.benefits && (
              <div className="space-y-2">
                <h4 className="font-semibold text-white mb-3">Beneficii:</h4>
                {comparison.external.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Savings Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-center justify-center gap-4 mb-6">
              <TrendingDown className="h-12 w-12" />
              <div>
                <div className="text-5xl font-bold">{savings.percentage}</div>
                <div className="text-lg opacity-90">{savings.description}</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {savings.additionalBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                  <Check className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
