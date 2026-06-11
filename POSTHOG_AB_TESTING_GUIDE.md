# 🔬 PostHog A/B Testing - Ghid Complet TDG

## 📋 Cuprins
1. [Setup PostHog Account](#1-setup-posthog-account)
2. [Configurare Environment Variables](#2-configurare-environment-variables)
3. [Integrare în Layout](#3-integrare-în-layout)
4. [Creare Experiment în PostHog](#4-creare-experiment-în-posthog)
5. [Implementare A/B Test în Cod](#5-implementare-ab-test-în-cod)
6. [Tracking Evenimente](#6-tracking-evenimente)
7. [Analiză Rezultate](#7-analiză-rezultate)

---

## 1. Setup PostHog Account

### Opțiuni:

**A. PostHog Cloud (Recomandat pentru început)**
1. Mergi la https://app.posthog.com/signup
2. Creează cont gratuit
3. Creează un nou project "TDG Trading"
4. Copiază **Project API Key** din Settings → Project → API Keys

**B. PostHog Self-Hosted (Pentru control complet)**
```bash
# Docker Compose setup
git clone https://github.com/PostHog/posthog.git
cd posthog
docker-compose up -d
```

---

## 2. Configurare Environment Variables

Adaugă în `.env.local`:

```bash
# PostHog Configuration
NEXT_PUBLIC_POSTHOG_KEY=phc_YOUR_PROJECT_API_KEY_HERE
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Sau pentru self-hosted:
# NEXT_PUBLIC_POSTHOG_HOST=https://your-posthog-instance.com
```

**⚠️ Important**: 
- `NEXT_PUBLIC_` prefix este necesar pentru client-side
- Nu commita `.env.local` în Git!

---

## 3. Integrare în Layout

### A. Actualizează Root Layout

Editează `app/layout.tsx`:

```typescript
import { PostHogProvider } from '@/components/providers/PostHogProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body>
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  )
}
```

### B. Pentru Multilingual (cu next-intl)

Editează `app/[locale]/layout.tsx`:

```typescript
import { PostHogProvider } from '@/components/providers/PostHogProvider'

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <PostHogProvider>
      {children}
    </PostHogProvider>
  )
}
```

---

## 4. Creare Experiment în PostHog

### Pași în PostHog Dashboard:

1. **Mergi la Experiments** (din meniul lateral)
2. **Click "New experiment"**
3. **Configurează experimentul:**

```
Name: Hero Section Redesign
Feature flag key: hero-redesign
Description: Test new hero section design vs original

Variants:
- control (50%) - Original design
- test (50%) - New design with gradient mesh

Goal metric: Form submissions
Secondary metrics:
- Time on page
- Scroll depth
- CTA clicks
```

4. **Launch experiment** → Click "Launch"

---

## 5. Implementare A/B Test în Cod

### Exemplu 1: Test Hero Section

Creează `components/HeroSection.tsx`:

```typescript
'use client'

import { usePostHogExperiment } from '@/hooks/usePostHogExperiment'

export function HeroSection() {
  const variant = usePostHogExperiment('hero-redesign')

  // Loading state
  if (variant === 'loading') {
    return <div className="h-screen animate-pulse bg-gray-100" />
  }

  // Control variant (original)
  if (variant === 'control') {
    return (
      <section className="hero-original">
        <h1>Servicii Resurse Umane Profesionale</h1>
        <p>Soluții complete pentru afacerea ta</p>
        <button>Solicită Ofertă</button>
      </section>
    )
  }

  // Test variant (new design)
  return (
    <section className="hero-gradient-mesh">
      <div className="gradient-mesh-animated">
        <h1 className="text-gradient">
          Transformăm HR-ul Companiei Tale
        </h1>
        <p className="text-xl">
          Servicii premium de resurse umane
        </p>
        <button className="cta-gradient">
          Descoperă Serviciile →
        </button>
      </div>
    </section>
  )
}
```

### Exemplu 2: Test CTA Button

```typescript
'use client'

import { usePostHogExperiment, usePostHogTracking } from '@/hooks/usePostHogExperiment'

export function CTAButton() {
  const variant = usePostHogExperiment('cta-button-test')
  const { trackEvent } = usePostHogTracking()

  const handleClick = () => {
    trackEvent('cta_clicked', {
      variant,
      location: 'hero-section'
    })
    // Navigate to contact form
  }

  if (variant === 'loading') return null

  return (
    <button
      onClick={handleClick}
      className={variant === 'test' ? 'btn-gradient' : 'btn-solid'}
    >
      {variant === 'test' ? 'Începe Acum →' : 'Solicită Ofertă'}
    </button>
  )
}
```

### Exemplu 3: Test Pricing Display

```typescript
'use client'

import { usePostHogExperiment } from '@/hooks/usePostHogExperiment'

export function PricingSection() {
  const variant = usePostHogExperiment('pricing-display')

  if (variant === 'loading') return null

  // Control: Show prices
  if (variant === 'control') {
    return (
      <div className="pricing-cards">
        <PriceCard price="299 RON/lună" />
      </div>
    )
  }

  // Test: Hide prices, show "Contact for pricing"
  return (
    <div className="pricing-cards">
      <PriceCard contactOnly />
    </div>
  )
}
```

---

## 6. Tracking Evenimente

### A. Track Conversions

```typescript
'use client'

import { usePostHogTracking } from '@/hooks/usePostHogExperiment'

export function ContactForm() {
  const { trackConversion } = usePostHogTracking()

  const handleSubmit = async (data: FormData) => {
    // Submit form
    await submitForm(data)

    // Track conversion
    trackConversion('form_submission', 1)
  }

  return <form onSubmit={handleSubmit}>...</form>
}
```

### B. Track Custom Events

```typescript
import { usePostHogTracking } from '@/hooks/usePostHogExperiment'

export function ServiceCard({ service }: { service: Service }) {
  const { trackEvent } = usePostHogTracking()

  return (
    <div
      onClick={() => {
        trackEvent('service_card_clicked', {
          service_name: service.name,
          service_id: service.id
        })
      }}
    >
      {service.name}
    </div>
  )
}
```

### C. Track Scroll Depth

```typescript
'use client'

import { useEffect } from 'react'
import { usePostHogTracking } from '@/hooks/usePostHogExperiment'

export function ScrollTracker() {
  const { trackEvent } = usePostHogTracking()

  useEffect(() => {
    let maxScroll = 0

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent
        
        if (scrollPercent >= 25 && maxScroll < 26) {
          trackEvent('scroll_depth', { depth: 25 })
        } else if (scrollPercent >= 50 && maxScroll < 51) {
          trackEvent('scroll_depth', { depth: 50 })
        } else if (scrollPercent >= 75 && maxScroll < 76) {
          trackEvent('scroll_depth', { depth: 75 })
        } else if (scrollPercent >= 90 && maxScroll < 91) {
          trackEvent('scroll_depth', { depth: 90 })
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [trackEvent])

  return null
}
```

---

## 7. Analiză Rezultate

### În PostHog Dashboard:

1. **Mergi la Experiments** → Selectează experimentul tău
2. **Verifică metrici:**
   - **Conversion rate** pentru fiecare variantă
   - **Statistical significance** (PostHog calculează automat)
   - **Secondary metrics** (time on page, scroll depth, etc.)

3. **Interpretare:**
   - ✅ **Significant win**: p-value < 0.05 și improvement > 5%
   - ⚠️ **Inconclusive**: Continuă testul sau crește traficul
   - ❌ **Significant loss**: Oprește testul, folosește control

### Minimum Sample Size:

```
Pentru 95% confidence și 80% power:
- Baseline conversion: 5%
- Minimum detectable effect: 20%
- Sample size needed: ~3,000 visitors per variant
```

---

## 8. Best Practices

### ✅ DO:

1. **Test o singură variabilă** per experiment
2. **Rulează testul minimum 1-2 săptămâni**
3. **Așteaptă statistical significance** (p < 0.05)
4. **Documentează ipotezele** înainte de test
5. **Track multiple metrics** (nu doar conversii)

### ❌ DON'T:

1. **Nu opri testul prea devreme** (chiar dacă pare câștigător)
2. **Nu testezi prea multe variante** simultan
3. **Nu ignori seasonality** (sărbători, weekend vs weekday)
4. **Nu schimbi experimentul** în timpul rulării
5. **Nu testezi pe trafic prea mic** (< 100 conversii/săptămână)

---

## 9. Exemple de Experimente pentru TDG

### Experiment 1: Hero Section
```
Hypothesis: Un hero section cu gradient mesh și CTA mai vizibil 
va crește conversiile cu 15%

Variants:
- Control: Design actual simplu
- Test: Gradient mesh + CTA gradient button

Primary metric: Form submissions
Duration: 2 weeks
```

### Experiment 2: Service Cards Layout
```
Hypothesis: Layout în grid 3x2 cu iconițe mai mari va crește 
engagement-ul cu serviciile

Variants:
- Control: Lista verticală
- Test: Grid 3x2 cu iconițe

Primary metric: Service detail page views
Duration: 1 week
```

### Experiment 3: Pricing Transparency
```
Hypothesis: Afișarea prețurilor va crește trust-ul și conversiile

Variants:
- Control: "Contactează-ne pentru preț"
- Test: Prețuri afișate transparent

Primary metric: Contact form submissions
Duration: 2 weeks
```

---

## 10. Comenzi Utile

```bash
# Install dependencies
npm install posthog-js posthog-node

# Development server
npm run dev

# Build for production
npm run build

# Check TypeScript errors
npx tsc --noEmit

# Restart PM2 after deploy
pm2 restart tdg-frontend
```

---

## 11. Troubleshooting

### PostHog nu se încarcă:

```typescript
// Verifică în browser console
console.log('PostHog loaded:', typeof window !== 'undefined' && window.posthog)
```

### Feature flags nu funcționează:

1. Verifică că experimentul e **launched** în PostHog
2. Verifică că **NEXT_PUBLIC_POSTHOG_KEY** e corect
3. Așteaptă 1-2 minute după launch (cache)
4. Clear browser cache

### Tracking nu apare în PostHog:

1. Verifică Network tab în DevTools
2. Caută requests către `app.posthog.com`
3. Verifică că events au `distinct_id`

---

## 📊 Dashboard Recomandat

Creează un dashboard în PostHog cu:

1. **Experiment Overview**
   - Conversion rate per variant
   - Statistical significance
   - Sample size

2. **User Behavior**
   - Pageviews per variant
   - Time on page
   - Scroll depth

3. **Conversions**
   - Form submissions
   - CTA clicks
   - Service inquiries

4. **Segmentation**
   - Desktop vs Mobile
   - New vs Returning visitors
   - Traffic source

---

## 🎯 Success Metrics

### Primary:
- **Conversion Rate**: Form submissions / Visitors
- **Target**: +15% improvement

### Secondary:
- **Engagement**: Time on page > 2 minutes
- **Bounce Rate**: < 40%
- **Scroll Depth**: > 50% reach 75% scroll

---

**Creat**: 2025-11-05  
**Autor**: Cascade AI Assistant  
**Status**: ✅ Ready for implementation
