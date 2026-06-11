'use client'

import ServiceHero from '@/components/services/ServiceHero'
import ProblemSolution from '@/components/services/ProblemSolution'
import FeaturesGrid from '@/components/services/FeaturesGrid'
import HowItWorks from '@/components/services/HowItWorks'
import ServiceFAQ from '@/components/services/ServiceFAQ'
import ServiceCTA from '@/components/services/ServiceCTA'
import { consultantaManagementData } from '@/data/services/consultanta-management'

export default function ConsultantaManagementPage() {
  return (
    <main className="min-h-screen">
      <ServiceHero {...consultantaManagementData.hero} onPrimaryCTA={() => {}} onSecondaryCTA={() => window.location.href = 'tel:+40722638928'} />
      <ProblemSolution {...consultantaManagementData.problemSolution} />
      <FeaturesGrid title={consultantaManagementData.features.title} subtitle={consultantaManagementData.features.subtitle} features={consultantaManagementData.features.items} />
      <HowItWorks title={consultantaManagementData.howItWorks.title} subtitle={consultantaManagementData.howItWorks.subtitle} steps={consultantaManagementData.howItWorks.steps} />
      <ServiceFAQ title={consultantaManagementData.faqs.title} subtitle={consultantaManagementData.faqs.subtitle} faqs={consultantaManagementData.faqs.items} />
      <ServiceCTA {...consultantaManagementData.cta} onPrimaryCTA={() => {}} />
    </main>
  )
}
