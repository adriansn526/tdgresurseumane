'use client'
import ServiceHero from '@/components/services/ServiceHero'
import ProblemSolution from '@/components/services/ProblemSolution'
import FeaturesGrid from '@/components/services/FeaturesGrid'
import HowItWorks from '@/components/services/HowItWorks'
import ServiceFAQ from '@/components/services/ServiceFAQ'
import ServiceCTA from '@/components/services/ServiceCTA'
import { permiseSedereData } from '@/data/services/permis-sedere'

export default function PermisSederePage() {
  return (
    <main className="min-h-screen">
      <ServiceHero {...permiseSedereData.hero} onPrimaryCTA={() => {}} onSecondaryCTA={() => window.location.href = 'tel:+40722638928'} />
      <ProblemSolution {...permiseSedereData.problemSolution} />
      <FeaturesGrid title={permiseSedereData.features.title} subtitle={permiseSedereData.features.subtitle} features={permiseSedereData.features.items} />
      <HowItWorks title={permiseSedereData.howItWorks.title} subtitle={permiseSedereData.howItWorks.subtitle} steps={permiseSedereData.howItWorks.steps} />
      <ServiceFAQ title={permiseSedereData.faqs.title} subtitle={permiseSedereData.faqs.subtitle} faqs={permiseSedereData.faqs.items} />
      <ServiceCTA {...permiseSedereData.cta} onPrimaryCTA={() => {}} />
    </main>
  )
}
