'use client'

import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Problem {
  icon: LucideIcon
  title: string
  description: string
}

interface ProblemSolutionProps {
  problems: Problem[]
  solution: {
    title: string
    description: string
    benefits: string[]
  }
}

export default function ProblemSolution({ problems, solution }: ProblemSolutionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
                Provocări
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Problemele Cu Care Te Confrunți
              </h2>
            </div>

            <div className="space-y-6">
              {problems.map((problem, index) => {
                const Icon = problem.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-6 bg-white rounded-xl border-2 border-red-100 hover:border-red-200 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-red-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {problem.title}
                      </h3>
                      <p className="text-gray-600">
                        {problem.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right - Solution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                Soluția Noastră
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {solution.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {solution.description}
              </p>
            </div>

            <div className="space-y-4">
              {solution.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-100"
                >
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-8 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl text-white"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-white/90">Conformitate Garantată</div>
                </div>
              </div>
              <p className="text-white/90">
                Preluăm integral responsabilitatea și garantăm conformitatea cu legislația în vigoare.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
