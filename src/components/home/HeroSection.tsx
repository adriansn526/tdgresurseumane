'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight, 
  Sparkles, 
  Users, 
  TrendingUp, 
  Target, 
  Shield, 
  Globe, 
  Plane 
} from 'lucide-react'
import ServiceCard from './ServiceCard'

const services = [
  {
    id: 'administrarePersonal',
    icon: Users,
    gradient: 'from-cyan-500 to-blue-500',
    href: '/servicii/administrare-personal'
  },
  {
    id: 'consultantaManagement',
    icon: TrendingUp,
    gradient: 'from-blue-500 to-indigo-500',
    href: '/servicii/consultanta-management'
  },
  {
    id: 'recrutare',
    icon: Target,
    gradient: 'from-indigo-500 to-purple-500',
    href: '/servicii/recrutare'
  },
  {
    id: 'gdpr',
    icon: Shield,
    gradient: 'from-purple-500 to-pink-500',
    href: '/servicii/gdpr'
  },
  {
    id: 'imigrari',
    icon: Globe,
    gradient: 'from-pink-500 to-rose-500',
    href: '/servicii/imigrari'
  },
  {
    id: 'detasare',
    icon: Plane,
    gradient: 'from-rose-500 to-orange-500',
    href: '/servicii/detasare-europa'
  }
]

const stats = [
  { value: '500+', labelKey: 'stats.clients' },
  { value: '20+', labelKey: 'stats.expertise' },
  { value: '2000+', labelKey: 'stats.projects' }
]

export default function HeroSection() {
  const t = useTranslations('hero')
  const tServices = useTranslations('services')

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1e88e5] via-[#0891b2] to-[#10b981]">
      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
      
      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container relative mx-auto px-4 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 inline-flex items-center gap-2 self-start rounded-full bg-white/15 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md border border-white/30 shadow-lg"
            >
              <Sparkles className="h-4 w-4" />
              {t('badge')}
            </motion.div>

            {/* Main Heading */}
            <h1 className="mb-6 text-5xl font-extrabold leading-[1.1] text-white lg:text-6xl xl:text-7xl tracking-tight">
              {t('title')}{' '}
              <span className="block text-white/95">
                {t('titleHighlight')}
              </span>
            </h1>

            {/* Description */}
            <p className="mb-8 text-base text-white/85 lg:text-lg leading-relaxed max-w-xl">
              {t('description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 group font-semibold px-8 rounded-lg"
              >
                {t('ctaPrimary')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/80 bg-transparent backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300 font-semibold px-8 rounded-lg"
              >
                {t('ctaSecondary')}
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.labelKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-left"
                >
                  <div className="text-4xl font-extrabold text-white lg:text-5xl mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70 font-medium">
                    {t(`stats.${stat.labelKey}`)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Service Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={tServices(`${service.id}.title`)}
                description={tServices(`${service.id}.description`)}
                gradient={service.gradient}
                delay={0.3 + index * 0.1}
                href={service.href}
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
