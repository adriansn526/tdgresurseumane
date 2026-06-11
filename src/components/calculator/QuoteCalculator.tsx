'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import StepIndicator from './StepIndicator'
import Step1SelectServices from './Step1SelectServices'
import Step2ServiceDetails from './Step2ServiceDetails'
import Step3ContactInfo from './Step3ContactInfo'
import Step4Confirmation from './Step4Confirmation'

export interface QuoteState {
  currentStep: number
  selectedServices: string[]
  serviceDetails: Record<string, any>
  contactInfo: {
    companyName: string
    contactPerson: string
    email: string
    phone: string
    message: string
  }
}

export default function QuoteCalculator() {
  const t = useTranslations('calculator')
  
  const [state, setState] = useState<QuoteState>({
    currentStep: 1,
    selectedServices: [],
    serviceDetails: {},
    contactInfo: {
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      message: ''
    }
  })

  const updateState = (updates: Partial<QuoteState>) => {
    setState(prev => ({ ...prev, ...updates }))
  }

  const nextStep = () => {
    if (state.currentStep < 4) {
      updateState({ currentStep: state.currentStep + 1 })
    }
  }

  const prevStep = () => {
    if (state.currentStep > 1) {
      updateState({ currentStep: state.currentStep - 1 })
    }
  }

  const resetCalculator = () => {
    setState({
      currentStep: 1,
      selectedServices: [],
      serviceDetails: {},
      contactInfo: {
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        message: ''
      }
    })
  }

  return (
    <section className="py-20 gradient-mesh-animated relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('title')}
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Calculator Container */}
        <div className="max-w-5xl mx-auto">
          {/* Progress Indicator */}
          <StepIndicator currentStep={state.currentStep} totalSteps={4} />

          {/* Step Content */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 min-h-[500px]">
            {state.currentStep === 1 && (
              <Step1SelectServices
                selectedServices={state.selectedServices}
                onUpdate={(services) => updateState({ selectedServices: services })}
                onNext={nextStep}
              />
            )}

            {state.currentStep === 2 && (
              <Step2ServiceDetails
                selectedServices={state.selectedServices}
                serviceDetails={state.serviceDetails}
                onUpdate={(details) => updateState({ serviceDetails: details })}
                onNext={nextStep}
                onBack={prevStep}
              />
            )}

            {state.currentStep === 3 && (
              <Step3ContactInfo
                contactInfo={state.contactInfo}
                onUpdate={(info) => updateState({ contactInfo: info })}
                onNext={nextStep}
                onBack={prevStep}
              />
            )}

            {state.currentStep === 4 && (
              <Step4Confirmation
                state={state}
                onBack={prevStep}
                onReset={resetCalculator}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
