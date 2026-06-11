# TDG Trading - Documentație WordPress

Documentație completă extrasă din WordPress pentru implementarea în Next.js.

---

## 📚 Documente Disponibile

### **1. wordpress-pages-structure.md**
Structura completă a celor 20 de pagini din WordPress:
- Homepage
- Pagini servicii (9)
- Pagini informative (4)
- Formulare (2)
- Pagini legale (2)
- Altele (3)

**Include:**
- ID-uri WordPress
- Slug-uri și URL-uri
- Categorii și tipuri
- Mapare pentru Next.js
- Structură meniu propusă

### **2. services-mapping.md**
Mapare detaliată a celor 9 servicii principale:
- Administrare Personal & Salarizare
- REVISAL
- Selecție & Recrutare Personal
- Aviz de Muncă
- Permis de Ședere
- Servicii Imigrări
- Detașare în Europa
- GDPR în Resurse Umane
- Consultanță în Management

**Include:**
- TypeScript interfaces
- GraphQL schema
- Iconuri Lucide React
- Gradient classes
- URL mapping
- Priority order

---

## 🎯 Quick Start

### **1. WordPress Docker**
```bash
cd /home/asns/wordpress-docker
docker compose up -d
```

**Access:**
- WordPress: http://localhost:8082
- Admin: http://localhost:8082/wp-admin
- phpMyAdmin: http://localhost:8081

**Credentials:**
- Username: `administrator`
- Password: `TDG2025Admin!`

### **2. Next.js Development**
```bash
cd /home/asns/tdg-trading-frontend
npm run dev
```

**Access:** http://localhost:3003

---

## 📦 WordPress Plugins Necesare

### **Instalate Deja:**
✅ Yoast SEO  
✅ Contact Form 7  
✅ WPBakery Page Builder  
✅ Slider Revolution  
✅ GDPR Cookie Compliance  

### **De Instalat pentru GraphQL:**
□ WPGraphQL  
□ WPGraphQL for ACF  
□ Advanced Custom Fields (ACF)  
□ Custom Post Type UI  

---

## 🔧 Setup Custom Post Type "Services"

### **În WordPress (CPT UI):**
```
Post Type Slug: services
Plural Label: Services
Singular Label: Service

Settings:
✓ Has Archive
✓ Show in REST API
✓ Hierarchical
✓ Show in GraphQL

GraphQL Settings:
GraphQL Single Name: service
GraphQL Plural Name: services
```

### **ACF Fields:**
```
Group: Service Details

Fields:
1. serviceIcon (Text)
2. serviceGradient (Text)
3. serviceFeatures (Repeater)
   - featureTitle (Text)
   - featureDescription (Textarea)
4. serviceBenefits (Wysiwyg)
5. serviceFaq (Repeater)
   - question (Text)
   - answer (Textarea)
```

---

## 🌐 GraphQL Queries

### **Get All Services:**
```graphql
query GetAllServices {
  services(first: 100) {
    nodes {
      id
      title
      slug
      excerpt
      serviceDetails {
        serviceIcon
        serviceGradient
        serviceFeatures {
          featureTitle
          featureDescription
        }
      }
    }
  }
}
```

### **Get Service by Slug:**
```graphql
query GetServiceBySlug($slug: ID!) {
  service(id: $slug, idType: SLUG) {
    id
    title
    content
    serviceDetails {
      serviceIcon
      serviceGradient
      serviceFeatures {
        featureTitle
        featureDescription
      }
      serviceFaq {
        question
        answer
      }
    }
  }
}
```

---

## 📁 Structură Proiect Next.js

```
src/
├── app/
│   └── [locale]/
│       ├── (main)/
│       │   ├── page.tsx                    # Homepage
│       │   ├── despre-noi/page.tsx        # About
│       │   ├── contact/page.tsx           # Contact
│       │   ├── blog/page.tsx              # Blog
│       │   ├── servicii/
│       │   │   ├── page.tsx               # Services Overview
│       │   │   └── [slug]/page.tsx        # Dynamic Service Pages
│       │   └── posturi-vacante/page.tsx   # Jobs
│       └── layout.tsx
│
├── components/
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── HowItWorks.tsx
│   │   └── CTASection.tsx
│   ├── services/
│   │   ├── ServiceCard.tsx
│   │   ├── ServiceGrid.tsx
│   │   └── ServiceDetail.tsx
│   ├── calculator/
│   │   └── QuoteCalculator.tsx
│   └── layout/
│       ├── Header.tsx
│       └── Footer.tsx
│
├── lib/
│   ├── graphql-client.ts
│   ├── graphql/
│   │   ├── queries.ts
│   │   └── types.ts
│   └── wordpress-api.ts
│
└── messages/
    ├── ro.json
    └── en.json
```

---

## 🎨 Design System

### **Colors:**
```
Primary: Teal (#0891B2)
Secondary: Green (#10B981)
Accent: Yellow (#F59E0B)
Dark: Gray-900 (#111827)
Light: Gray-50 (#F9FAFB)
```

### **Gradients:**
```css
.gradient-mesh {
  background: linear-gradient(135deg, #0891B2 0%, #10B981 100%);
}

.gradient-mesh-animated {
  background: linear-gradient(
    135deg,
    #0891B2 0%,
    #14B8A6 25%,
    #10B981 50%,
    #14B8A6 75%,
    #0891B2 100%
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
```

### **Typography:**
```
Font Family: Inter (sans-serif)
Headings: font-bold
Body: font-normal
```

---

## 🔗 Contact Information

```
Phone: 0722 638 928
Email: contact@tdgresursumane.ro
Office Email: office@tdgresurseumane.ro
Location: București, România
```

---

## 📊 Statistics

```
Clients: 500+
Experience: 15+ years
Projects: 2000+
Services: 9 main services
```

---

## 🚀 Deployment Checklist

### **WordPress:**
```
□ Install required plugins
□ Create Custom Post Type "services"
□ Setup ACF fields
□ Add all 9 services
□ Test GraphQL endpoint
□ Configure permalinks
□ Setup CORS for Next.js
```

### **Next.js:**
```
□ Install GraphQL dependencies
□ Create GraphQL client
□ Implement service pages
□ Migrate content from WordPress
□ Setup redirects
□ Configure environment variables
□ Test all pages
□ SEO optimization
□ Performance optimization
```

---

## 📝 Notes

### **WordPress Database:**
- **Prefix:** `wp30_`
- **Database:** `tdg_wordpress`
- **Total Pages:** 20
- **Total Posts:** 16

### **Technologies:**
- **WordPress:** Latest
- **MySQL:** 8.0
- **PHP:** 8.1+
- **Next.js:** 16.0.1
- **React:** 18.3
- **TypeScript:** 5.3

---

## 🔄 Implementation Strategy

### **Approach: Custom Landing Pages**
✅ **Service pages created directly in Next.js** (not from WordPress)  
✅ **Each service = Dedicated Landing Page**  
✅ **WordPress data used as reference only**  
✅ **Optimized for conversion**  

### **Phase 1: Landing Page Development**
1. Create service landing page template
2. Build reusable components (Hero, Features, FAQ, etc.)
3. Implement 9 service pages based on template
4. Add service-specific content and data
5. Optimize for SEO and performance

### **Phase 2: WordPress Setup (Optional)**
1. Use WordPress for blog posts only
2. Setup GraphQL for blog content
3. Keep WordPress as headless CMS for dynamic content

### **Phase 3: Content & Design**
1. Write compelling copy for each service
2. Create custom illustrations/images
3. Add testimonials and case studies
4. Configure pricing tables
5. Setup conversion tracking

### **Phase 4: Testing & Optimization**
1. A/B testing for CTAs
2. Performance optimization
3. SEO verification
4. Conversion rate optimization
5. Cross-browser testing

### **Phase 5: Deployment**
1. Next.js deployment (Vercel/Netlify)
2. Domain configuration
3. SSL certificates
4. Analytics setup
5. Monitoring and alerts

---

**Last Updated:** 3 Noiembrie 2025  
**Status:** Documentation Complete ✅  
**Next Steps:** Implement GraphQL and create service pages
