# Service Landing Page Template

Template pentru fiecare serviciu TDG Trading - Landing Pages personalizate.

---

## 🎨 Structură Landing Page

### **Secțiuni (în ordine):**

1. **Hero Section** - Above the fold
2. **Problem/Solution** - De ce ai nevoie de acest serviciu
3. **Features/Benefits** - Ce oferim
4. **How It Works** - Procesul nostru (3-4 pași)
5. **Pricing/Packages** (opțional) - Pachete disponibile
6. **FAQ** - Întrebări frecvente
7. **Testimonials** (opțional) - Mărturii clienți
8. **CTA Section** - Call to action final

---

## 📐 Design Sections Detaliat

### **1. Hero Section**
```typescript
{
  // Visual
  gradient: 'from-cyan-500 to-blue-500', // Specific serviciului
  icon: 'Users', // Lucide icon
  
  // Content
  title: 'Administrare Personal & Salarizare',
  subtitle: 'Externalizează administrarea personalului și concentrează-te pe business',
  description: 'Servicii complete de salarizare, REVISAL și administrare personal pentru companii de orice dimensiune',
  
  // CTA
  primaryCTA: 'Solicită Ofertă Gratuită',
  secondaryCTA: 'Vezi Cum Funcționează',
  
  // Trust Indicators
  stats: [
    { value: '500+', label: 'Companii' },
    { value: '15+', label: 'Ani Experiență' },
    { value: '24h', label: 'Timp Răspuns' }
  ],
  
  // Visual Element
  image: '/images/services/administrare-personal-hero.jpg',
  // sau
  illustration: 'custom-svg-illustration'
}
```

**Design:**
- Full-width gradient background
- 2 coloane: Text (stânga) + Visual (dreapta)
- Floating cards cu stats
- CTA buttons prominent

---

### **2. Problem/Solution Section**
```typescript
{
  problem: {
    title: 'Provocările Administrării Personalului',
    points: [
      {
        icon: 'AlertCircle',
        title: 'Legislație complexă',
        description: 'Modificări frecvente ale legilor muncii și fiscale'
      },
      {
        icon: 'Clock',
        title: 'Timp consumat',
        description: 'Ore întregi petrecute cu salarizare și raportări'
      },
      {
        icon: 'FileWarning',
        title: 'Risc de erori',
        description: 'Greșeli în calcule sau raportări pot costa scump'
      }
    ]
  },
  
  solution: {
    title: 'Soluția Noastră',
    description: 'Preluăm integral administrarea personalului, astfel încât tu să te concentrezi pe dezvoltarea afacerii',
    benefits: [
      'Conformitate 100% cu legislația',
      'Zero erori în salarizare',
      'Economisești timp și resurse',
      'Acces 24/7 la date'
    ]
  }
}
```

**Design:**
- Split layout: Problem (stânga, roșu/orange) vs Solution (dreapta, verde/teal)
- Icons pentru fiecare punct
- Contrast vizual între problemă și soluție

---

### **3. Features/Benefits Section**
```typescript
{
  title: 'Ce Include Serviciul',
  subtitle: 'Pachet complet de administrare personal',
  
  features: [
    {
      icon: 'Calculator',
      title: 'Salarizare Completă',
      description: 'Calcul salarii, sporuri, concedii, bonusuri',
      details: [
        'Calcul automat salarii brute/nete',
        'Sporuri și adaosuri',
        'Concedii de odihnă și medicale',
        'Bonusuri și premii'
      ]
    },
    {
      icon: 'FileText',
      title: 'Raportări REVISAL',
      description: 'Toate raportările către ANOFM la timp',
      details: [
        'Înregistrare angajați',
        'Modificări contracte',
        'Încetări contracte',
        'Raportări lunare'
      ]
    },
    {
      icon: 'FolderOpen',
      title: 'Dosare Personal',
      description: 'Gestionare completă dosare angajați',
      details: [
        'Contracte de muncă',
        'Acte adiționale',
        'Fișe post',
        'Evaluări performanță'
      ]
    },
    {
      icon: 'Shield',
      title: 'Conformitate GDPR',
      description: 'Protecția datelor personale',
      details: [
        'Consimțăminte GDPR',
        'Registre prelucrări',
        'Politici interne',
        'Audit GDPR'
      ]
    }
  ]
}
```

**Design:**
- Grid 2x2 sau 3 coloane
- Cards cu hover effects
- Expandable details (accordion sau modal)
- Icons în gradient containers

---

### **4. How It Works Section**
```typescript
{
  title: 'Cum Funcționează',
  subtitle: 'Proces simplu în 4 pași',
  
  steps: [
    {
      number: '01',
      icon: 'MessageSquare',
      title: 'Consultație Gratuită',
      description: 'Discutăm despre nevoile tale și stabilim detaliile colaborării',
      duration: '30 min',
      deliverables: ['Analiză nevoi', 'Ofertă personalizată']
    },
    {
      number: '02',
      icon: 'FileCheck',
      title: 'Semnare Contract',
      description: 'Semnăm contractul și preluăm datele necesare',
      duration: '1 zi',
      deliverables: ['Contract semnat', 'Transfer date', 'Acces platformă']
    },
    {
      number: '03',
      icon: 'Settings',
      title: 'Setup & Configurare',
      description: 'Configurăm sistemul și importăm datele existente',
      duration: '2-3 zile',
      deliverables: ['Import date', 'Configurare', 'Training echipă']
    },
    {
      number: '04',
      icon: 'Rocket',
      title: 'Go Live',
      description: 'Începem administrarea și îți oferim suport continuu',
      duration: 'Ongoing',
      deliverables: ['Salarizare lunară', 'Raportări', 'Suport 24/7']
    }
  ]
}
```

**Design:**
- Timeline vertical (mobile) / horizontal (desktop)
- Connector lines între steps
- Number badges mari
- Progress indicator

---

### **5. Pricing/Packages Section** (Opțional)
```typescript
{
  title: 'Pachete Disponibile',
  subtitle: 'Alege pachetul potrivit pentru compania ta',
  
  packages: [
    {
      name: 'Starter',
      description: 'Pentru companii mici (1-10 angajați)',
      price: 'De la 500 RON/lună',
      features: [
        'Salarizare completă',
        'Raportări REVISAL',
        'Contracte de muncă',
        'Suport email'
      ],
      cta: 'Alege Starter',
      popular: false
    },
    {
      name: 'Business',
      description: 'Pentru companii medii (11-50 angajați)',
      price: 'De la 1.500 RON/lună',
      features: [
        'Tot din Starter +',
        'Dosare personal complete',
        'GDPR compliance',
        'Suport telefonic',
        'Pontaj electronic'
      ],
      cta: 'Alege Business',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Pentru companii mari (50+ angajați)',
      price: 'Ofertă personalizată',
      features: [
        'Tot din Business +',
        'Dedicated account manager',
        'Rapoarte personalizate',
        'Integrări custom',
        'SLA garantat'
      ],
      cta: 'Contactează-ne',
      popular: false
    }
  ]
}
```

**Design:**
- 3 coloane (cards)
- Middle card highlighted (popular)
- Hover effects cu scale
- Clear pricing display

---

### **6. FAQ Section**
```typescript
{
  title: 'Întrebări Frecvente',
  subtitle: 'Tot ce trebuie să știi despre serviciul nostru',
  
  faqs: [
    {
      question: 'Cât timp durează implementarea?',
      answer: 'Procesul de implementare durează în medie 2-3 zile lucrătoare. În această perioadă importăm datele existente, configurăm sistemul și oferim training echipei tale.'
    },
    {
      question: 'Ce date aveți nevoie de la noi?',
      answer: 'Avem nevoie de lista angajaților, contractele de muncă existente, ultimele state de plată și datele de acces la REVISAL (dacă există).'
    },
    {
      question: 'Cum se calculează prețul?',
      answer: 'Prețul se calculează în funcție de numărul de angajați și complexitatea serviciilor necesare. Oferim o ofertă personalizată după consultația inițială.'
    },
    {
      question: 'Putem rezilia contractul oricând?',
      answer: 'Da, contractul poate fi reziliat cu un preaviz de 30 de zile. Nu există penalități sau costuri ascunse.'
    },
    {
      question: 'Ce se întâmplă cu datele noastre?',
      answer: 'Toate datele sunt stocate securizat conform GDPR. La încetarea colaborării, îți returnăm toate datele într-un format utilizabil.'
    }
  ]
}
```

**Design:**
- Accordion expandable
- Search functionality
- Icons pentru Q&A
- Smooth animations

---

### **7. Testimonials Section** (Opțional)
```typescript
{
  title: 'Ce Spun Clienții Noștri',
  subtitle: 'Peste 500 de companii ne-au acordat încrederea',
  
  testimonials: [
    {
      quote: 'De când am externalizat administrarea personalului către TDG Trading, am economisit 20 de ore pe lună și zero erori în salarizare.',
      author: 'Maria Popescu',
      position: 'CEO',
      company: 'Tech Solutions SRL',
      image: '/images/testimonials/maria-popescu.jpg',
      rating: 5
    },
    {
      quote: 'Profesionalism și promptitudine. Răspund imediat la orice întrebare și rezolvă problemele foarte rapid.',
      author: 'Ion Ionescu',
      position: 'HR Manager',
      company: 'Construct Pro',
      image: '/images/testimonials/ion-ionescu.jpg',
      rating: 5
    }
  ]
}
```

**Design:**
- Carousel/Slider
- Cards cu quote, author, company
- Star ratings
- Company logos

---

### **8. Final CTA Section**
```typescript
{
  title: 'Pregătit să Simplifici Administrarea Personalului?',
  subtitle: 'Solicită o consultație gratuită și descoperă cum te putem ajuta',
  
  cta: {
    primary: {
      text: 'Solicită Ofertă Gratuită',
      action: 'openQuoteCalculator'
    },
    secondary: {
      text: 'Sună Acum: 0722 638 928',
      action: 'tel:+40722638928'
    }
  },
  
  trustIndicators: [
    { icon: 'CheckCircle', text: 'Răspuns în 24h' },
    { icon: 'Shield', text: 'Date Protejate GDPR' },
    { icon: 'Award', text: '15+ Ani Experiență' }
  ]
}
```

**Design:**
- Full-width gradient background
- Centered content
- Large CTA buttons
- Trust badges

---

## 🎨 Design Variations per Serviciu

### **Administrare Personal:**
- **Colors:** Cyan to Blue
- **Vibe:** Professional, trustworthy
- **Focus:** Time-saving, compliance

### **Recrutare:**
- **Colors:** Indigo to Purple
- **Vibe:** Dynamic, results-oriented
- **Focus:** Quality candidates, speed

### **GDPR:**
- **Colors:** Amber to Yellow
- **Vibe:** Secure, compliant
- **Focus:** Protection, peace of mind

### **Detașare Europa:**
- **Colors:** Orange to Amber
- **Vibe:** International, expert
- **Focus:** Simplicity, support

---

## 📱 Responsive Design

### **Mobile (<768px):**
- Single column layout
- Stacked sections
- Simplified navigation
- Touch-friendly buttons

### **Tablet (768-1024px):**
- 2 column grids
- Compact spacing
- Readable typography

### **Desktop (>1024px):**
- Full layouts
- 3-4 column grids
- Rich animations
- Hover effects

---

## 🔧 Technical Implementation

### **File Structure:**
```
src/app/[locale]/(main)/servicii/
├── administrare-personal/
│   └── page.tsx
├── recrutare/
│   └── page.tsx
├── gdpr/
│   └── page.tsx
└── [slug]/
    └── page.tsx (fallback)
```

### **Component Structure:**
```
src/components/services/
├── ServiceHero.tsx
├── ProblemSolution.tsx
├── FeaturesGrid.tsx
├── HowItWorks.tsx
├── PricingTable.tsx
├── FAQ.tsx
├── Testimonials.tsx
└── ServiceCTA.tsx
```

### **Data Structure:**
```typescript
// src/data/services/administrare-personal.ts
export const administrarePersonalData = {
  hero: { ... },
  problemSolution: { ... },
  features: [ ... ],
  howItWorks: [ ... ],
  pricing: [ ... ],
  faq: [ ... ],
  testimonials: [ ... ],
  cta: { ... }
}
```

---

## 🎯 SEO Optimization

### **Per Page:**
```typescript
export const metadata: Metadata = {
  title: 'Administrare Personal & Salarizare București | TDG Trading',
  description: 'Servicii complete de administrare personal, salarizare și REVISAL. Externalizează HR-ul și concentrează-te pe business. Ofertă gratuită!',
  keywords: ['administrare personal', 'salarizare', 'REVISAL', 'outsourcing HR'],
  openGraph: {
    title: 'Administrare Personal & Salarizare | TDG Trading',
    description: 'Externalizează administrarea personalului. 500+ companii ne-au ales.',
    images: ['/og-images/administrare-personal.jpg']
  }
}
```

### **Schema.org:**
```json
{
  "@type": "Service",
  "name": "Administrare Personal & Salarizare",
  "provider": {
    "@type": "Organization",
    "name": "TDG Trading"
  },
  "areaServed": "România",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "RON",
    "price": "500"
  }
}
```

---

## 📊 Conversion Optimization

### **CTA Placement:**
1. Hero section (above fold)
2. After problem/solution
3. After features
4. After pricing
5. Final CTA section

### **Trust Signals:**
- Client count (500+)
- Years experience (15+)
- Response time (24h)
- GDPR compliant
- Client logos
- Testimonials

### **Urgency/Scarcity:**
- "Consultație gratuită limitată"
- "Răspuns în 24h garantat"
- "Primii 10 clienți primesc 20% discount"

---

## 🚀 Performance

### **Optimization:**
- Lazy load images
- Code splitting per service
- Preload critical assets
- Optimize fonts
- Minimize CSS/JS

### **Target Metrics:**
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- Lighthouse Score: 90+

---

**Status:** Template ready for implementation  
**Next:** Create individual service pages based on this template
