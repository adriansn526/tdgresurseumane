'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Mail, CheckCircle } from 'lucide-react'

interface ServiceCTAProps {
  title: string
  subtitle: string
  primaryCTA: string
  secondaryCTA: string
  gradient: string
  onPrimaryCTA?: () => void
  trustIndicators?: Array<{
    icon: 'check' | 'phone' | 'shield' | 'award'
    text: string
  }>
}

const iconMap = {
  check: CheckCircle,
  phone: Phone,
  shield: CheckCircle,
  award: CheckCircle
}

export default function ServiceCTA({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  gradient,
  onPrimaryCTA,
  trustIndicators = [
    { icon: 'check', text: 'Răspuns în 24h' },
    { icon: 'shield', text: 'Date Protejate GDPR' },
    { icon: 'award', text: '15+ Ani Expertiză' }
  ]
}: ServiceCTAProps) {
  return (
    <section className={`relative py-20 overflow-hidden bg-gradient-to-br ${gradient}`}>
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Title */}
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={onPrimaryCTA}
              className="bg-white text-teal-700 hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 group min-w-[250px] font-semibold"
            >
              {primaryCTA}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex gap-4">
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-teal-700 transition-all duration-300 font-semibold"
              >
                <a href="tel:+40722638928">
                  <Phone className="mr-2 h-5 w-5" />
                  {secondaryCTA}
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-teal-700 transition-all duration-300 font-semibold"
              >
                <a href="mailto:office@tdgresurseumane.ro">
                  <Mail className="mr-2 h-5 w-5" />
                  Email
                </a>
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-white/80">
            {trustIndicators.map((indicator, index) => {
              const Icon = iconMap[indicator.icon]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{indicator.text}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
