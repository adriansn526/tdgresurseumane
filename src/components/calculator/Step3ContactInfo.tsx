'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface Step3Props {
  contactInfo: {
    companyName: string
    contactPerson: string
    email: string
    phone: string
    message: string
  }
  onUpdate: (info: any) => void
  onNext: () => void
  onBack: () => void
}

export default function Step3ContactInfo({ contactInfo, onUpdate, onNext, onBack }: Step3Props) {
  const tCalc = useTranslations('calculator')

  const updateField = (field: string, value: string) => {
    onUpdate({
      ...contactInfo,
      [field]: value
    })
  }

  const isValid = contactInfo.companyName && contactInfo.contactPerson && contactInfo.email && contactInfo.phone

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2 text-gray-900">
          {tCalc('step3.title')}
        </h3>
        <p className="text-gray-600">
          {tCalc('step3.subtitle')}
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <Label htmlFor="companyName">{tCalc('contact.companyName')} *</Label>
          <Input
            id="companyName"
            placeholder="Ex: ABC Company SRL"
            value={contactInfo.companyName}
            onChange={(e) => updateField('companyName', e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="contactPerson">{tCalc('contact.contactPerson')} *</Label>
          <Input
            id="contactPerson"
            placeholder="Ex: Ion Popescu"
            value={contactInfo.contactPerson}
            onChange={(e) => updateField('contactPerson', e.target.value)}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="email">{tCalc('contact.email')} *</Label>
            <Input
              id="email"
              type="email"
              placeholder="email@companie.ro"
              value={contactInfo.email}
              onChange={(e) => updateField('email', e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">{tCalc('contact.phone')} *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+40 XXX XXX XXX"
              value={contactInfo.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="message">{tCalc('contact.message')}</Label>
          <Textarea
            id="message"
            placeholder="Adaugă orice detalii suplimentare..."
            rows={4}
            value={contactInfo.message}
            onChange={(e) => updateField('message', e.target.value)}
          />
        </div>
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
          disabled={!isValid}
          className="gradient-mesh text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          {tCalc('buttons.continue')}
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  )
}
