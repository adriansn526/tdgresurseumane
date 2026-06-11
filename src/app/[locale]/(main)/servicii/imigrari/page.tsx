'use client'

import ServiceHero from '@/components/services/ServiceHero'
import ProblemSolution from '@/components/services/ProblemSolution'
import FeaturesGrid from '@/components/services/FeaturesGrid'
import HowItWorks from '@/components/services/HowItWorks'
import ServiceFAQ from '@/components/services/ServiceFAQ'
import ServiceCTA from '@/components/services/ServiceCTA'
import { imigrariData } from '@/data/services/imigrari'

export default function ImigrariPage() {
  return (
    <main className="min-h-screen">
      <ServiceHero {...imigrariData.hero} onPrimaryCTA={() => {}} onSecondaryCTA={() => window.location.href = 'tel:+40722638928'} />
      <ProblemSolution {...imigrariData.problemSolution} />
      <FeaturesGrid title={imigrariData.features.title} subtitle={imigrariData.features.subtitle} features={imigrariData.features.items} />
      <HowItWorks title={imigrariData.howItWorks.title} subtitle={imigrariData.howItWorks.subtitle} steps={imigrariData.howItWorks.steps} />
      <ServiceFAQ title={imigrariData.faqs.title} subtitle={imigrariData.faqs.subtitle} faqs={imigrariData.faqs.items} />
      <ServiceCTA {...imigrariData.cta} onPrimaryCTA={() => {}} />
    </main>
  )
}
