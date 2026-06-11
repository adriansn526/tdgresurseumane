'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { ArrowLeft, CheckCircle2, Loader2, Mail } from 'lucide-react'
import type { QuoteState } from './QuoteCalculator'

interface Step4Props {
  state: QuoteState
  onBack: () => void
  onReset: () => void
}

export default function Step4Confirmation({ state, onBack, onReset }: Step4Props) {
  const t = useTranslations('services')
  const tCalc = useTranslations('calculator')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          selectedServices: state.selectedServices,
          serviceDetails: state.serviceDetails,
          contactInfo: state.contactInfo,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert('A apărut o eroare. Vă rugăm încercați din nou.')
      }
    } catch (error) {
      console.error('Error submitting quote:', error)
      alert('A apărut o eroare. Vă rugăm încercați din nou.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-12 w-12 text-green-600" />
        </div>

        <h3 className="text-2xl font-bold mb-4 text-gray-900">
          {tCalc('confirmation.title')}
        </h3>

        <p className="text-lg text-gray-600 mb-2">
          {tCalc('confirmation.message')}
        </p>

        <p className="text-gray-500 mb-8">
          {tCalc('confirmation.emailSent')} <strong>{state.contactInfo.email}</strong>
        </p>

        <Button
          size="lg"
          onClick={onReset}
          className="gradient-mesh text-white hover:opacity-90 transition-opacity"
        >
          {tCalc('buttons.newQuote')}
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2 text-gray-900">
          {tCalc('step4.title')}
        </h3>
        <p className="text-gray-600">
          {tCalc('step4.subtitle')}
        </p>
      </div>

      {/* Summary */}
      <div className="space-y-6">
        {/* Selected Services */}
        <div className="p-6 border-2 border-gray-200 rounded-xl bg-gray-50">
          <h4 className="text-lg font-semibold mb-4 text-gray-900">
            Servicii Selectate ({state.selectedServices.length})
          </h4>
          <ul className="space-y-2">
            {state.selectedServices.map((serviceId) => (
              <li key={serviceId} className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                {t(`${serviceId}.title`)}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="p-6 border-2 border-gray-200 rounded-xl bg-gray-50">
          <h4 className="text-lg font-semibold mb-4 text-gray-900">
            Date de Contact
          </h4>
          <div className="space-y-2 text-gray-700">
            <p><strong>Companie:</strong> {state.contactInfo.companyName}</p>
            <p><strong>Contact:</strong> {state.contactInfo.contactPerson}</p>
            <p><strong>Email:</strong> {state.contactInfo.email}</p>
            <p><strong>Telefon:</strong> {state.contactInfo.phone}</p>
            {state.contactInfo.message && (
              <p><strong>Mesaj:</strong> {state.contactInfo.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        <Button
          size="lg"
          variant="outline"
          onClick={onBack}
          disabled={isSubmitting}
          className="group"
        >
          <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          {tCalc('buttons.back')}
        </Button>

        <Button
          size="lg"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="gradient-mesh text-white hover:opacity-90 transition-opacity disabled:opacity-50 group"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Se trimite...
            </>
          ) : (
            <>
              <Mail className="mr-2 h-5 w-5" />
              {tCalc('buttons.submit')}
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
