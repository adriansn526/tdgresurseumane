'use client'

import { useTranslations } from 'next-intl'
import { MessageSquare, FileSearch, Rocket, HeadphonesIcon } from 'lucide-react'

const steps = [
  {
    key: 'step1',
    icon: MessageSquare,
    number: '01'
  },
  {
    key: 'step2',
    icon: FileSearch,
    number: '02'
  },
  {
    key: 'step3',
    icon: Rocket,
    number: '03'
  },
  {
    key: 'step4',
    icon: HeadphonesIcon,
    number: '04'
  }
]

export default function HowItWorks() {
  const t = useTranslations('howItWorks')

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.key}
                className="relative group"
              >
                {/* Connector Line (hidden on mobile, last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-teal-500 to-green-500 opacity-30" />
                )}

                {/* Card */}
                <div className="relative bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-md">
                      <Icon className="h-8 w-8 text-teal-600" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {t(`${step.key}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`${step.key}.description`)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
