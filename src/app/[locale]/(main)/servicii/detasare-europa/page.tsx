'use client'

import ServiceHero from '@/components/services/ServiceHero'
import ProblemSolution from '@/components/services/ProblemSolution'
import FeaturesGrid from '@/components/services/FeaturesGrid'
import HowItWorks from '@/components/services/HowItWorks'
import ServiceFAQ from '@/components/services/ServiceFAQ'
import ServiceCTA from '@/components/services/ServiceCTA'
import { detasareEuropaData } from '@/data/services/detasare-europa'

export default function DetasareEuropaPage() {
  return (
    <main className="min-h-screen">
      <ServiceHero {...detasareEuropaData.hero} onPrimaryCTA={() => {}} onSecondaryCTA={() => window.location.href = 'tel:+40722638928'} />
      <ProblemSolution {...detasareEuropaData.problemSolution} />
      <FeaturesGrid title={detasareEuropaData.features.title} subtitle={detasareEuropaData.features.subtitle} features={detasareEuropaData.features.items} />
      <HowItWorks title={detasareEuropaData.howItWorks.title} subtitle={detasareEuropaData.howItWorks.subtitle} steps={detasareEuropaData.howItWorks.steps} />
      <ServiceFAQ title={detasareEuropaData.faqs.title} subtitle={detasareEuropaData.faqs.subtitle} faqs={detasareEuropaData.faqs.items} />
      <ServiceCTA {...detasareEuropaData.cta} onPrimaryCTA={() => {}} />
    </main>
  )
}
