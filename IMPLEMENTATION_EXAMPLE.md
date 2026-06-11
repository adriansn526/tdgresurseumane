# 🚀 Exemplu Practic: Implementare A/B Test

## Scenariul: Test Hero Section

Vrei să testezi dacă un hero section nou cu gradient mesh crește conversiile.

---

## Pas 1: Setup PostHog (5 minute)

1. **Creează cont**: https://app.posthog.com/signup
2. **Copiază API Key**: Settings → Project → API Keys
3. **Adaugă în `.env.local`**:

```bash
NEXT_PUBLIC_POSTHOG_KEY=phc_YOUR_KEY_HERE
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

---

## Pas 2: Creează Experiment în PostHog (3 minute)

1. Mergi la **Experiments** → **New experiment**
2. Configurează:

```
Name: Hero Section Redesign
Feature flag key: hero-redesign
Description: Test gradient mesh hero vs original

Variants:
- control (50%)
- test (50%)

Goal: form_submission
```

3. Click **Launch**

---

## Pas 3: Integrează PostHogProvider (2 minute)

### Dacă ai `app/layout.tsx`:

```typescript
import { PostHogProvider } from '@/components/providers/PostHogProvider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
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

### Dacă ai `app/[locale]/layout.tsx` (cu next-intl):

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

## Pas 4: Creează Component cu A/B Test (10 minute)

### Opțiunea A: Component Simplu

Creează `components/HeroSection.tsx`:

```typescript
'use client'

import { usePostHogExperiment } from '@/hooks/usePostHogExperiment'
import { usePostHogTracking } from '@/hooks/usePostHogExperiment'

export function HeroSection() {
  const variant = usePostHogExperiment('hero-redesign')
  const { trackEvent } = usePostHogTracking()

  const handleCTAClick = () => {
    trackEvent('hero_cta_clicked', { variant })
    // Navigate to contact form
    window.location.href = '/contact'
  }

  // Loading state
  if (variant === 'loading') {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse">Loading...</div>
      </div>
    )
  }

  // CONTROL VARIANT (Original)
  if (variant === 'control') {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Servicii Resurse Umane Profesionale
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Soluții complete pentru administrarea personalului companiei tale
          </p>
          <button
            onClick={handleCTAClick}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Solicită Ofertă
          </button>
        </div>
      </section>
    )
  }

  // TEST VARIANT (New Design)
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-green-50 to-blue-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,185,177,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
          Transformăm HR-ul Companiei Tale
        </h1>
        <p className="text-2xl text-gray-700 mb-8">
          Servicii premium de resurse umane pentru afaceri moderne
        </p>
        <button
          onClick={handleCTAClick}
          className="bg-gradient-to-r from-teal-600 to-green-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Descoperă Serviciile →
        </button>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8">
          <div>
            <div className="text-4xl font-bold text-teal-600">500+</div>
            <div className="text-gray-600">Clienți Mulțumiți</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-teal-600">15+</div>
            <div className="text-gray-600">Ani Experiență</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-teal-600">2000+</div>
            <div className="text-gray-600">Proiecte Finalizate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

### Opțiunea B: Component cu Framer Motion

```typescript
'use client'

import { usePostHogExperiment } from '@/hooks/usePostHogExperiment'
import { motion } from 'framer-motion'

export function HeroSection() {
  const variant = usePostHogExperiment('hero-redesign')

  if (variant === 'loading') return <div>Loading...</div>

  if (variant === 'test') {
    return (
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hero-gradient"
      >
        {/* New design with animations */}
      </motion.section>
    )
  }

  return <section className="hero-original">{/* Original */}</section>
}
```

---

## Pas 5: Track Conversions (5 minute)

### În Contact Form:

```typescript
'use client'

import { usePostHogTracking } from '@/hooks/usePostHogExperiment'
import { useState } from 'react'

export function ContactForm() {
  const { trackConversion, trackEvent } = usePostHogTracking()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Track form start
    trackEvent('form_started', { form_type: 'contact' })

    try {
      // Submit form
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        // Track successful conversion
        trackConversion('form_submission', 1)
        
        // Track additional details
        trackEvent('form_submitted', {
          form_type: 'contact',
          success: true
        })

        alert('Mulțumim! Vă vom contacta în curând.')
      }
    } catch (error) {
      trackEvent('form_error', { error: error.message })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <input
        type="text"
        placeholder="Nume"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full p-3 border rounded mb-4"
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full p-3 border rounded mb-4"
      />
      <textarea
        placeholder="Mesaj"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full p-3 border rounded mb-4 h-32"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-700"
      >
        Trimite Mesaj
      </button>
    </form>
  )
}
```

---

## Pas 6: Folosește în Pagină (2 minute)

### În `app/page.tsx` sau `app/[locale]/page.tsx`:

```typescript
import { HeroSection } from '@/components/HeroSection'
import { ContactForm } from '@/components/ContactForm'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      
      {/* Rest of page */}
      <section id="services">...</section>
      <section id="about">...</section>
      
      <section id="contact" className="py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Contactează-ne
        </h2>
        <ContactForm />
      </section>
    </main>
  )
}
```

---

## Pas 7: Deploy & Monitor (10 minute)

### 1. Build & Deploy:

```bash
cd /home/asns/tdg-trading-frontend

# Build
npm run build

# Restart PM2
pm2 restart tdg-frontend

# Verify
pm2 logs tdg-frontend
```

### 2. Verifică în Browser:

```
1. Deschide https://tdgresurseumane.ro
2. Refresh de câteva ori (vei vedea variante diferite)
3. Verifică în DevTools → Network → Filtrează "posthog"
4. Ar trebui să vezi requests către app.posthog.com
```

### 3. Monitorizează în PostHog:

```
1. Mergi la PostHog Dashboard
2. Experiments → "Hero Section Redesign"
3. Verifică:
   - Participants (ar trebui să crească)
   - Conversion rate per variant
   - Statistical significance
```

---

## Pas 8: Analizează Rezultate (după 1-2 săptămâni)

### Criterii de Succes:

```
✅ Significant Win:
- p-value < 0.05
- Improvement > 10%
- Minimum 100 conversions per variant

⚠️ Inconclusive:
- p-value > 0.05
- Continue testing sau increase traffic

❌ Significant Loss:
- p-value < 0.05
- Negative improvement
- Stop test, use control
```

### Acțiuni:

```typescript
// Dacă TEST câștigă:
// 1. Oprește experimentul în PostHog
// 2. Șterge codul pentru CONTROL variant
// 3. Folosește doar TEST design

// Dacă CONTROL câștigă:
// 1. Oprește experimentul
// 2. Șterge codul pentru TEST variant
// 3. Păstrează CONTROL design

// Dacă e INCONCLUSIVE:
// 1. Continuă testul încă 1-2 săptămâni
// 2. Sau testează o variantă mai diferită
```

---

## 🎯 Quick Checklist

- [ ] PostHog account creat
- [ ] API Key adăugat în `.env.local`
- [ ] PostHogProvider integrat în layout
- [ ] Experiment creat în PostHog Dashboard
- [ ] Component cu A/B test implementat
- [ ] Tracking conversii adăugat
- [ ] Build & deploy realizat
- [ ] Verificat în browser (vezi ambele variante)
- [ ] Monitorizat în PostHog (vezi participants)
- [ ] Așteaptă 1-2 săptămâni pentru rezultate

---

## 🆘 Troubleshooting Rapid

### Nu văd variante diferite:
```bash
# Clear browser cache
# Hard refresh: Ctrl+Shift+R (Windows) sau Cmd+Shift+R (Mac)
# Verifică că experimentul e "launched" în PostHog
```

### PostHog nu trimite date:
```javascript
// Verifică în browser console:
console.log('PostHog:', window.posthog)

// Ar trebui să vezi obiectul PostHog
// Dacă e undefined, verifică NEXT_PUBLIC_POSTHOG_KEY
```

### Build errors:
```bash
# Verifică TypeScript
npx tsc --noEmit

# Verifică imports
# Asigură-te că toate path-urile sunt corecte
```

---

**Timp total estimat**: ~45 minute  
**Dificultate**: Medie  
**ROI**: Potențial +15-30% conversii
