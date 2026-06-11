'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface Step2Props {
  selectedServices: string[]
  serviceDetails: Record<string, any>
  onUpdate: (details: Record<string, any>) => void
  onNext: () => void
  onBack: () => void
}

export default function Step2ServiceDetails({ selectedServices, serviceDetails, onUpdate, onNext, onBack }: Step2Props) {
  const t = useTranslations('services')
  const tCalc = useTranslations('calculator')

  const updateServiceDetail = (serviceId: string, field: string, value: any) => {
    onUpdate({
      ...serviceDetails,
      [serviceId]: {
        ...serviceDetails[serviceId],
        [field]: value
      }
    })
  }

  const renderServiceQuestions = (serviceId: string) => {
    const details = serviceDetails[serviceId] || {}

    switch (serviceId) {
      case 'administrarePersonal':
        return (
          <div className="space-y-4">
            <div>
              <Label>Câți angajați aveți?</Label>
              <Select
                value={details.employeeCount}
                onValueChange={(value) => updateServiceDetail(serviceId, 'employeeCount', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selectează..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 angajați</SelectItem>
                  <SelectItem value="11-50">11-50 angajați</SelectItem>
                  <SelectItem value="51-100">51-100 angajați</SelectItem>
                  <SelectItem value="100+">Peste 100 angajați</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Frecvența salarizării?</Label>
              <Select
                value={details.payrollFrequency}
                onValueChange={(value) => updateServiceDetail(serviceId, 'payrollFrequency', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selectează..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lunar">Lunar</SelectItem>
                  <SelectItem value="bi-saptamanal">Bi-săptămânal</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )

      case 'recrutare':
        return (
          <div className="space-y-4">
            <div>
              <Label>Câte poziții deschise?</Label>
              <Input
                type="number"
                placeholder="Ex: 3"
                value={details.positions || ''}
                onChange={(e) => updateServiceDetail(serviceId, 'positions', e.target.value)}
              />
            </div>
            <div>
              <Label>Nivel experiență?</Label>
              <Select
                value={details.experienceLevel}
                onValueChange={(value) => updateServiceDetail(serviceId, 'experienceLevel', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selectează..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="junior">Junior</SelectItem>
                  <SelectItem value="mid">Mid-level</SelectItem>
                  <SelectItem value="senior">Senior</SelectItem>
                  <SelectItem value="executive">Executive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )

      default:
        return (
          <div>
            <Label>Detalii suplimentare</Label>
            <Input
              placeholder="Adaugă detalii despre necesitățile tale..."
              value={details.notes || ''}
              onChange={(e) => updateServiceDetail(serviceId, 'notes', e.target.value)}
            />
          </div>
        )
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2 text-gray-900">
          {tCalc('step2.title')}
        </h3>
        <p className="text-gray-600">
          {tCalc('step2.subtitle')}
        </p>
      </div>

      {/* Service Details Forms */}
      <div className="space-y-6">
        {selectedServices.map((serviceId) => (
          <div key={serviceId} className="p-6 border-2 border-gray-200 rounded-xl bg-gray-50">
            <h4 className="text-lg font-semibold mb-4 text-gray-900">
              {t(`${serviceId}.title`)}
            </h4>
            {renderServiceQuestions(serviceId)}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        <Button
          size="lg"
          variant="outline"
          onClick={onBack}
          className="group"
        >
          <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          {tCalc('buttons.back')}
        </Button>

        <Button
          size="lg"
          onClick={onNext}
          className="gradient-mesh text-white hover:opacity-90 transition-opacity group"
        >
          {tCalc('buttons.continue')}
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  )
}
