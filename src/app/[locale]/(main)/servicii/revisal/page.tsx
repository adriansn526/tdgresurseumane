'use client'
import ServiceHero from '@/components/services/ServiceHero'
import ProblemSolution from '@/components/services/ProblemSolution'
import FeaturesGrid from '@/components/services/FeaturesGrid'
import HowItWorks from '@/components/services/HowItWorks'
import ServiceFAQ from '@/components/services/ServiceFAQ'
import ServiceCTA from '@/components/services/ServiceCTA'
import { revisalData } from '@/data/services/revisal'

export default function RevisalPage() {
  return (
    <main className="min-h-screen">
      <ServiceHero {...revisalData.hero} onPrimaryCTA={() => {}} onSecondaryCTA={() => window.location.href = 'tel:+40722638928'} />
      <ProblemSolution {...revisalData.problemSolution} />
      <FeaturesGrid title={revisalData.features.title} subtitle={revisalData.features.subtitle} features={revisalData.features.items} />
      <HowItWorks title={revisalData.howItWorks.title} subtitle={revisalData.howItWorks.subtitle} steps={revisalData.howItWorks.steps} />
      <ServiceFAQ title={revisalData.faqs.title} subtitle={revisalData.faqs.subtitle} faqs={revisalData.faqs.items} />
      <ServiceCTA {...revisalData.cta} onPrimaryCTA={() => {}} />
    </main>
  )
}
