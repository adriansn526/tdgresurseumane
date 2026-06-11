'use client'

import ServiceHero from '@/components/services/ServiceHero'
import ProblemSolution from '@/components/services/ProblemSolution'
import FeaturesGrid from '@/components/services/FeaturesGrid'
import CostComparison from '@/components/services/CostComparison'
import HowItWorks from '@/components/services/HowItWorks'
import ServiceFAQ from '@/components/services/ServiceFAQ'
import ServiceCTA from '@/components/services/ServiceCTA'
import { administrarePersonalData } from '@/data/services/administrare-personal'

export default function AdministrarePersonalPage() {
  const handlePrimaryCTA = () => {
    // Open quote calculator or contact form
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
        {...administrarePersonalData.hero}
        onPrimaryCTA={handlePrimaryCTA}
        onSecondaryCTA={handleSecondaryCTA}
      />

      {/* Problem/Solution Section */}
      <ProblemSolution {...administrarePersonalData.problemSolution} />

      {/* Features Grid */}
      <FeaturesGrid
        title={administrarePersonalData.features.title}
        subtitle={administrarePersonalData.features.subtitle}
        features={administrarePersonalData.features.items}
      />

      {/* Cost Comparison */}
      <CostComparison
        title={administrarePersonalData.costSavings.title}
        subtitle={administrarePersonalData.costSavings.subtitle}
        comparison={administrarePersonalData.costSavings.comparison}
        savings={administrarePersonalData.costSavings.savings}
      />

      {/* How It Works */}
      <HowItWorks
        title={administrarePersonalData.howItWorks.title}
        subtitle={administrarePersonalData.howItWorks.subtitle}
        steps={administrarePersonalData.howItWorks.steps}
      />

      {/* FAQ */}
      <ServiceFAQ
        title={administrarePersonalData.faqs.title}
        subtitle={administrarePersonalData.faqs.subtitle}
        faqs={administrarePersonalData.faqs.items}
      />

      {/* Final CTA */}
      <ServiceCTA
        {...administrarePersonalData.cta}
        onPrimaryCTA={handlePrimaryCTA}
      />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Administrare Personal & Salarizare',
            description: 'Servicii complete de administrare personal, salarizare și REVISAL pentru companii',
            provider: {
              '@type': 'Organization',
              name: 'TDG Trading',
              telephone: '+40722638928',
              email: 'office@tdgresurseumane.ro',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'București',
                addressCountry: 'RO'
              }
            },
            areaServed: 'România',
            serviceType: 'Human Resources',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'RON',
              price: '500',
              description: 'De la 500 RON/lună'
            }
          })
        }}
      />
    </main>
  )
}
