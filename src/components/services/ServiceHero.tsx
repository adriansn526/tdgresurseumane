'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ServiceHeroProps {
  title: string
  subtitle: string
  description: string
  gradient: string
  icon: LucideIcon
  stats: Array<{
    value: string
    label: string
  }>
  primaryCTA: string
  secondaryCTA: string
  onPrimaryCTA?: () => void
  onSecondaryCTA?: () => void
}

export default function ServiceHero({
  title,
  subtitle,
  description,
  gradient,
  icon: Icon,
  stats,
  primaryCTA,
  secondaryCTA,
  onPrimaryCTA,
  onSecondaryCTA
}: ServiceHeroProps) {
  return (
    <section className={`relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br ${gradient}`}>
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/90 text-lg mb-4 font-medium"
            >
              {subtitle}
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight"
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed"
            >
              {description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button
                size="lg"
                onClick={onPrimaryCTA}
                className="bg-white text-teal-700 hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 group font-semibold"
              >
                {primaryCTA}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={onSecondaryCTA}
                className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-teal-700 transition-all duration-300 font-semibold"
              >
                <Phone className="mr-2 h-5 w-5" />
                {secondaryCTA}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-white/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Icon/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Floating Icon Container */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl" />
                
                {/* Icon Container */}
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-16 border border-white/20">
                  <Icon className="h-48 w-48 text-white" strokeWidth={1.5} />
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-8 -right-8 w-24 h-24 border-4 border-white/20 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-8 -left-8 w-32 h-32 border-4 border-white/10 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
