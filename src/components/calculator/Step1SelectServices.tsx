'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Users, FileText, Target, ClipboardCheck, MapPin, Globe, Plane, Shield, TrendingUp } from 'lucide-react'

interface Step1Props {
  selectedServices: string[]
  onUpdate: (services: string[]) => void
  onNext: () => void
}

const services = [
  {
    id: 'administrarePersonal',
    icon: Users,
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    id: 'revisal',
    icon: FileText,
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'recrutare',
    icon: Target,
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'avizMunca',
    icon: ClipboardCheck,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'permiseSedere',
    icon: MapPin,
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: 'imigrari',
    icon: Globe,
    gradient: 'from-rose-500 to-orange-500'
  },
  {
    id: 'detasare',
    icon: Plane,
    gradient: 'from-orange-500 to-amber-500'
  },
  {
    id: 'gdpr',
    icon: Shield,
    gradient: 'from-amber-500 to-yellow-500'
  },
  {
    id: 'consultantaManagement',
    icon: TrendingUp,
    gradient: 'from-yellow-500 to-green-500'
  }
]

export default function Step1SelectServices({ selectedServices, onUpdate, onNext }: Step1Props) {
  const t = useTranslations('services')
  const tCalc = useTranslations('calculator')

  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      onUpdate(selectedServices.filter(id => id !== serviceId))
    } else {
      onUpdate([...selectedServices, serviceId])
    }
  }

  const handleContinue = () => {
    if (selectedServices.length > 0) {
      onNext()
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2 text-gray-900">
          {tCalc('step1.title')}
        </h3>
        <p className="text-gray-600">
          {tCalc('step1.subtitle')}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services.map((service) => {
          const Icon = service.icon
          const isSelected = selectedServices.includes(service.id)

          return (
            <button
              key={service.id}
              onClick={() => toggleService(service.id)}
              className={`
                relative group p-6 rounded-2xl border-2 transition-all duration-300
                ${isSelected
                  ? 'border-green-500 bg-green-50 shadow-lg scale-105'
                  : 'border-gray-200 bg-white hover:border-teal-300 hover:shadow-md'
                }
              `}
            >
              {/* Checkmark */}
              {isSelected && (
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-in zoom-in duration-200">
                  <Check className="h-5 w-5 text-white" strokeWidth={3} />
                </div>
              )}

              {/* Icon */}
              <div className={`mb-3 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="h-8 w-8 text-white" strokeWidth={2} />
              </div>

              {/* Title */}
              <h4 className={`text-sm font-semibold text-center ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                {t(`${service.id}.title`)}
              </h4>
            </button>
          )
        })}
      </div>

      {/* Validation Message */}
      {selectedServices.length === 0 && (
        <p className="text-center text-amber-600 text-sm">
          {tCalc('step1.minSelection')}
        </p>
      )}

      {/* Selected Count */}
      {selectedServices.length > 0 && (
        <p className="text-center text-teal-600 font-medium">
          {selectedServices.length} {selectedServices.length === 1 ? 'serviciu selectat' : 'servicii selectate'}
        </p>
      )}

      {/* Continue Button */}
      <div className="flex justify-end pt-4">
        <Button
          size="lg"
          onClick={handleContinue}
          disabled={selectedServices.length === 0}
          className="gradient-mesh text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          {tCalc('buttons.continue')}
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  )
}
