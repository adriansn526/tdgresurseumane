'use client'

import { useTranslations } from 'next-intl'
import { Check } from 'lucide-react'

interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
}

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  const t = useTranslations('calculator')
  
  const steps = [
    { number: 1, key: 'step1' },
    { number: 2, key: 'step2' },
    { number: 3, key: 'step3' },
    { number: 4, key: 'step4' }
  ]

  return (
    <div className="mb-8">
      {/* Desktop Progress */}
      <div className="hidden md:flex items-center justify-between max-w-3xl mx-auto">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center flex-1">
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <div
                className={`
                  relative flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg transition-all duration-300
                  ${currentStep > step.number
                    ? 'bg-green-500 text-white'
                    : currentStep === step.number
                    ? 'bg-white text-teal-600 ring-4 ring-white/50'
                    : 'bg-white/30 text-white/60'
                  }
                `}
              >
                {currentStep > step.number ? (
                  <Check className="h-6 w-6" />
                ) : (
                  step.number
                )}
              </div>
              <span className={`mt-2 text-sm font-medium ${currentStep >= step.number ? 'text-white' : 'text-white/60'}`}>
                {t(`${step.key}.title`)}
              </span>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-1 mx-4 relative">
                <div className="absolute inset-0 bg-white/30 rounded-full" />
                <div
                  className={`absolute inset-0 bg-white rounded-full transition-all duration-500 ${
                    currentStep > step.number ? 'w-full' : 'w-0'
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Progress Bar */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white font-medium">
            {t(`step${currentStep}.title`)}
          </span>
          <span className="text-white/80 text-sm">
            {currentStep} / {totalSteps}
          </span>
        </div>
        <div className="h-2 bg-white/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-500"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
