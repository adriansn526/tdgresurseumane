import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import HeroSection from '@/components/home/HeroSection'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import HowItWorks from '@/components/home/HowItWorks'
import QuoteCalculator from '@/components/calculator/QuoteCalculator'
import CTASection from '@/components/home/CTASection'

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'hero' })

  return {
    title: `TDG Trading - ${t('title')} ${t('titleHighlight')}`,
    description: t('description'),
    openGraph: {
      title: `TDG Trading - ${t('title')} ${t('titleHighlight')}`,
      description: t('description'),
      type: 'website',
      locale: locale === 'ro' ? 'ro_RO' : 'en_US',
    },
  }
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Service Cards */}
      <HeroSection />
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Quote Calculator Section */}
      <QuoteCalculator />
      
      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
