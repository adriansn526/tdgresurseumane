'use client'

import { motion } from 'framer-motion'
import { ArrowRight, LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { useLocale } from 'next-intl'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
  delay?: number
  href?: string
}

export default function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  gradient,
  delay = 0,
  href
}: ServiceCardProps) {
  const locale = useLocale()
  const fullHref = href ? `/${locale}${href}` : '#'

  const cardContent = (
    <>
      {/* Gradient Glow on Hover */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} 
      />
      
      {/* Icon Container */}
      <div 
        className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}
      >
        <Icon className="h-7 w-7 text-white" strokeWidth={2} />
      </div>

      {/* Content */}
      <h3 className="mb-2 text-lg font-semibold text-white">
        {title}
      </h3>
      <p className="text-sm text-white/80 leading-relaxed">
        {description}
      </p>

      {/* Arrow Icon */}
      <ArrowRight className="mt-4 h-5 w-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
    </>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      {href ? (
        <Link href={fullHref} className="block">
          {cardContent}
        </Link>
      ) : (
        <div className="cursor-pointer">
          {cardContent}
        </div>
      )}
    </motion.div>
  )
}
