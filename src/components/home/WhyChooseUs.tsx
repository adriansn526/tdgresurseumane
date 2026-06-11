'use client'

import { useTranslations } from 'next-intl'
import { Target, Zap, Handshake } from 'lucide-react'

const features = [
  {
    key: 'expertise',
    icon: Target,
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    key: 'speed',
    icon: Zap,
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    key: 'partnership',
    icon: Handshake,
    gradient: 'from-purple-500 to-pink-500'
  }
]

export default function WhyChooseUs() {
  const t = useTranslations('whyChooseUs')

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          {t('title')}
        </h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.key}
                className="group text-center p-8 rounded-2xl bg-white hover:shadow-xl transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="mb-6 inline-flex">
                  <div 
                    className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-10 w-10 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {t(`${feature.key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`${feature.key}.description`)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
