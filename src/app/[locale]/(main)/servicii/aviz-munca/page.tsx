'use client'
import ServiceHero from '@/components/services/ServiceHero'
import ProblemSolution from '@/components/services/ProblemSolution'
import FeaturesGrid from '@/components/services/FeaturesGrid'
import HowItWorks from '@/components/services/HowItWorks'
import ServiceFAQ from '@/components/services/ServiceFAQ'
import ServiceCTA from '@/components/services/ServiceCTA'
import { avizMuncaData } from '@/data/services/aviz-munca'

export default function AvizMuncaPage() {
  return (
    <main className="min-h-screen">
      <ServiceHero {...avizMuncaData.hero} onPrimaryCTA={() => {}} onSecondaryCTA={() => window.location.href = 'tel:+40722638928'} />
      <ProblemSolution {...avizMuncaData.problemSolution} />
      <FeaturesGrid title={avizMuncaData.features.title} subtitle={avizMuncaData.features.subtitle} features={avizMuncaData.features.items} />
      <HowItWorks title={avizMuncaData.howItWorks.title} subtitle={avizMuncaData.howItWorks.subtitle} steps={avizMuncaData.howItWorks.steps} />
      <ServiceFAQ title={avizMuncaData.faqs.title} subtitle={avizMuncaData.faqs.subtitle} faqs={avizMuncaData.faqs.items} />
      <ServiceCTA {...avizMuncaData.cta} onPrimaryCTA={() => {}} />
    </main>
  )
}
