'use client'

import ServiceHero from '@/components/services/ServiceHero'
import ProblemSolution from '@/components/services/ProblemSolution'
import FeaturesGrid from '@/components/services/FeaturesGrid'
import HowItWorks from '@/components/services/HowItWorks'
import ServiceFAQ from '@/components/services/ServiceFAQ'
import ServiceCTA from '@/components/services/ServiceCTA'
import { gdprData } from '@/data/services/gdpr'

export default function GDPRPage() {
  const handlePrimaryCTA = () => {
    const calculatorSection = document.getElementById('quote-calculator')
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSecondaryCTA = () => {
    window.location.href = 'tel:+40722638928'
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ServiceHero
        {...gdprData.hero}
        onPrimaryCTA={handlePrimaryCTA}
        onSecondaryCTA={handleSecondaryCTA}
      />

      {/* Problem/Solution Section */}
      <ProblemSolution {...gdprData.problemSolution} />

      {/* Features Grid */}
      <FeaturesGrid
        title={gdprData.features.title}
        subtitle={gdprData.features.subtitle}
        features={gdprData.features.items}
      />

      {/* How It Works */}
      <HowItWorks
        title={gdprData.howItWorks.title}
        subtitle={gdprData.howItWorks.subtitle}
        steps={gdprData.howItWorks.steps}
      />

      {/* FAQ */}
      <ServiceFAQ
        title={gdprData.faqs.title}
        subtitle={gdprData.faqs.subtitle}
        faqs={gdprData.faqs.items}
      />

      {/* Final CTA */}
      <ServiceCTA
        {...gdprData.cta}
        onPrimaryCTA={handlePrimaryCTA}
      />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'GDPR în Resurse Umane',
            description: 'Servicii complete de conformitate GDPR pentru departamentul HR',
            provider: {
              '@type': 'Organization',
              name: 'TDG Trading',
              telephone: '+40722638928',
              email: 'office@tdgresurseumane.ro'
            },
            areaServed: 'România',
            serviceType: 'GDPR Compliance & Data Protection'
          })
        }}
      />
    </main>
  )
}
