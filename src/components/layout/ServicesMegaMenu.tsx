'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import {
  Users,
  Target,
  Shield,
  TrendingUp,
  Globe,
  Plane,
  FileText,
  ClipboardCheck,
  MapPin,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react'

interface ServiceItem {
  id: string
  title: string
  description: string
  icon: React.ElementType
  href: string
  gradient: string
}

interface ServicesMegaMenuProps {
  isOpen: boolean
  onClose: () => void
}

const servicesData = {
  hrCore: [
    {
      id: 'administrare-personal',
      title: 'Administrare Personal',
      description: 'Salarizare și REVISAL complete',
      icon: Users,
      href: '/servicii/administrare-personal',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'recrutare',
      title: 'Recrutare & Head Hunting',
      description: 'Găsim candidații perfecți',
      icon: Target,
      href: '/servicii/recrutare',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'gdpr',
      title: 'GDPR în HR',
      description: 'Conformitate și protecție date',
      icon: Shield,
      href: '/servicii/gdpr',
      gradient: 'from-amber-500 to-yellow-500'
    },
    {
      id: 'consultanta',
      title: 'Consultanță Management',
      description: 'Optimizare procese HR',
      icon: TrendingUp,
      href: '/servicii/consultanta-management',
      gradient: 'from-yellow-500 to-green-500'
    }
  ],
  imigrari: [
    {
      id: 'imigrari',
      title: 'Servicii Imigrări',
      description: 'Vize și relocare completă',
      icon: Globe,
      href: '/servicii/imigrari',
      gradient: 'from-rose-500 to-orange-500'
    },
    {
      id: 'detasare',
      title: 'Detașare Europa',
      description: 'Formular A1 în 5-7 zile',
      icon: Plane,
      href: '/servicii/detasare-europa',
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      id: 'aviz',
      title: 'Aviz de Muncă',
      description: '98% rată de aprobare',
      icon: ClipboardCheck,
      href: '/servicii/aviz-munca',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'permis',
      title: 'Permis de Ședere',
      description: '96% rată de aprobare',
      icon: MapPin,
      href: '/servicii/permis-sedere',
      gradient: 'from-pink-500 to-rose-500'
    }
  ],
  other: [
    {
      id: 'revisal',
      title: 'REVISAL',
      description: 'Raportări fără erori',
      icon: FileText,
      href: '/servicii/revisal',
      gradient: 'from-blue-500 to-indigo-500'
    }
  ]
}

export default function ServicesMegaMenu({ isOpen, onClose }: ServicesMegaMenuProps) {
  const locale = useLocale()

  const ServiceCard = ({ service }: { service: ServiceItem }) => {
    const Icon = service.icon
    return (
      <Link
        href={`/${locale}${service.href}`}
        onClick={onClose}
        className="group block p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
      >
        <div className="flex items-start gap-3">
          <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
            <Icon className="h-5 w-5 text-white" strokeWidth={2} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-teal-600 transition-colors mb-1">
              {service.title}
            </h3>
            <p className="text-xs text-gray-600 line-clamp-1">
              {service.description}
            </p>
          </div>
          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
        </div>
      </Link>
    )
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 z-40"
            onClick={onClose}
          />

          {/* Mega Menu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed left-0 right-0 top-[112px] z-50"
            onMouseLeave={onClose}
          >
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-8 p-8">
                  
                  {/* Column 1: HR Core Services */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-8 w-1 bg-gradient-to-b from-teal-500 to-green-500 rounded-full" />
                      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                        Servicii HR
                      </h3>
                    </div>
                    <div className="space-y-1">
                      {servicesData.hrCore.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                      ))}
                    </div>
                  </div>

                  {/* Column 2: Immigration Services */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-8 w-1 bg-gradient-to-b from-rose-500 to-orange-500 rounded-full" />
                      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                        Imigrări & Detașare
                      </h3>
                    </div>
                    <div className="space-y-1">
                      {servicesData.imigrari.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                      ))}
                    </div>
                    
                    {/* Other Services */}
                    <div className="mt-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full" />
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                          Alte Servicii
                        </h3>
                      </div>
                      <div className="space-y-1">
                        {servicesData.other.map((service) => (
                          <ServiceCard key={service.id} service={service} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Column 3: Featured Service + CTA */}
                  <div>
                    {/* Featured Service */}
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-teal-500 to-green-500 p-6 mb-6">
                      <div className="absolute top-0 right-0 -mt-4 -mr-4">
                        <Sparkles className="h-24 w-24 text-white/10" />
                      </div>
                      <div className="relative">
                        <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white mb-3">
                          <Sparkles className="h-3 w-3" />
                          Cel Mai Popular
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          Administrare Personal
                        </h3>
                        <p className="text-sm text-white/90 mb-4">
                          Externalizează HR-ul și concentrează-te pe business. 500+ companii ne-au ales.
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-white/90 text-xs">
                            <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                            <span>Salarizare completă</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/90 text-xs">
                            <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                            <span>Raportări REVISAL</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/90 text-xs">
                            <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                            <span>Conformitate GDPR</span>
                          </div>
                        </div>
                        <Link
                          href={`/${locale}/servicii/administrare-personal`}
                          onClick={onClose}
                          className="inline-flex items-center gap-2 bg-white text-teal-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
                        >
                          Află Mai Mult
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-sm font-bold text-gray-900 mb-4">
                        De Ce TDG Trading?
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <div className="text-2xl font-bold text-teal-600">500+</div>
                          <div className="text-xs text-gray-600">Companii Mulțumite</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-teal-600">15+</div>
                          <div className="text-xs text-gray-600">Ani Expertiză</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-teal-600">24h</div>
                          <div className="text-xs text-gray-600">Timp Răspuns</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={`/${locale}/contact`}
                      onClick={onClose}
                      className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors"
                    >
                      Solicită Ofertă Gratuită
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
