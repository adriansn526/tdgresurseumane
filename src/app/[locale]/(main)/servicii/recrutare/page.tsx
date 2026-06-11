'use client'

import ServiceHero from '@/components/services/ServiceHero'
import ProblemSolution from '@/components/services/ProblemSolution'
import FeaturesGrid from '@/components/services/FeaturesGrid'
import HowItWorks from '@/components/services/HowItWorks'
import ServiceFAQ from '@/components/services/ServiceFAQ'
import ServiceCTA from '@/components/services/ServiceCTA'
import { recrutareData } from '@/data/services/recrutare'

export default function RecrutarePage() {
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
        {...recrutareData.hero}
        onPrimaryCTA={handlePrimaryCTA}
        onSecondaryCTA={handleSecondaryCTA}
      />

      {/* Problem/Solution Section */}
      <ProblemSolution {...recrutareData.problemSolution} />

      {/* Features Grid */}
      <FeaturesGrid
        title={recrutareData.features.title}
        subtitle={recrutareData.features.subtitle}
        features={recrutareData.features.items}
      />

      {/* How It Works */}
      <HowItWorks
        title={recrutareData.howItWorks.title}
        subtitle={recrutareData.howItWorks.subtitle}
        steps={recrutareData.howItWorks.steps}
      />

      {/* FAQ */}
      <ServiceFAQ
        title={recrutareData.faqs.title}
        subtitle={recrutareData.faqs.subtitle}
        faqs={recrutareData.faqs.items}
      />

      {/* Final CTA */}
      <ServiceCTA
        {...recrutareData.cta}
        onPrimaryCTA={handlePrimaryCTA}
      />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Recrutare & Head Hunting',
            description: 'Servicii profesionale de recrutare, selecție personal și head hunting',
            provider: {
              '@type': 'Organization',
              name: 'TDG Trading',
              telephone: '+40722638928',
              email: 'office@tdgresurseumane.ro'
            },
            areaServed: 'România',
            serviceType: 'Recruitment & Head Hunting'
          })
        }}
      />
    </main>
  )
}
