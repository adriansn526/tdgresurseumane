# TDG Trading - Next.js Frontend

Modern Next.js 15 website for TDG Trading with WordPress headless CMS, advanced UI/UX, and best SEO practices.

## 🚀 Features

- ✅ **Next.js 15** with App Router and TypeScript
- ✅ **Multilingual Support** (Romanian/English) with next-intl
- ✅ **WordPress Headless CMS** with RankMath SEO
- ✅ **Advanced UI/UX** with Tailwind CSS and shadcn/ui
- ✅ **Framer Motion** animations
- ✅ **SEO Optimized** with JSON-LD structured data
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Glass Morphism** and gradient mesh effects
- ✅ **ISR (Incremental Static Regeneration)**

## 📦 Tech Stack

### Frontend
- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI)
- **Animations:** Framer Motion
- **Internationalization:** next-intl
- **Forms:** React Hook Form + Zod

### Backend
- **CMS:** WordPress (Headless)
- **SEO:** RankMath Pro
- **Custom Fields:** ACF Pro
- **API:** WordPress REST API

## 🛠️ Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd tdg-trading-frontend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Setup environment variables:**
```bash
# Copy the example file
cp ENV_SETUP.md .env.local

# Edit .env.local with your values
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WORDPRESS_API_URL=http://localhost:8080/wp-json/wp/v2
```

4. **Run the development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```
tdg-trading-frontend/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── (main)/
│   │   │   │   ├── page.tsx           # Homepage
│   │   │   │   ├── servicii/          # Services
│   │   │   │   ├── cariere/           # Careers
│   │   │   │   ├── resurse/           # Blog/Resources
│   │   │   │   └── contact/           # Contact
│   │   │   └── layout.tsx
│   │   ├── sitemap.ts                 # Dynamic sitemap
│   │   └── robots.ts                  # Robots.txt
│   ├── components/
│   │   ├── ui/                        # shadcn/ui components
│   │   ├── layout/                    # Header, Footer
│   │   ├── home/                      # Homepage components
│   │   ├── services/                  # Service components
│   │   └── shared/                    # Shared components
│   ├── lib/
│   │   ├── wordpress-api.ts           # WordPress API client
│   │   ├── seo/                       # SEO utilities
│   │   └── utils.ts                   # Utility functions
│   ├── messages/
│   │   ├── ro.json                    # Romanian translations
│   │   └── en.json                    # English translations
│   └── middleware.ts                  # next-intl middleware
├── public/
│   └── images/                        # Static images
├── ENV_SETUP.md                       # Environment setup guide
├── WORDPRESS_SETUP.md                 # WordPress configuration
└── README.md
```

## 🎨 Key Components

### Hero Section
- Gradient mesh animated background
- Service cards with glass morphism
- Stats counter (500+ clients, 15+ years, 2000+ projects)
- Dual CTA buttons

### Header
- Sticky navigation with backdrop blur
- Language switcher (RO/EN)
- Mobile hamburger menu
- Gradient CTA button

### Footer
- Company information
- Quick links
- Social media links
- Contact information

## 🌐 WordPress Setup

See [WORDPRESS_SETUP.md](./WORDPRESS_SETUP.md) for detailed WordPress configuration including:
- Custom Post Types (Services)
- ACF Field Groups
- RankMath SEO configuration
- REST API setup

## 🔧 Environment Variables

See [ENV_SETUP.md](./ENV_SETUP.md) for all required environment variables.

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
```

## 🎯 SEO Features

- **JSON-LD Structured Data:**
  - Organization schema
  - Service schema
  - Breadcrumb schema
  - Article schema
  - FAQ schema

- **Dynamic Sitemap:** Auto-generated from WordPress content
- **Robots.txt:** Configured for optimal crawling
- **Open Graph & Twitter Cards:** Social media optimization
- **Multilingual SEO:** Proper hreflang tags

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Manual Deployment

```bash
npm run build
npm run start
```

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🎨 Design System

### Colors
- **Primary Gradient:** Teal (#0891B2) → Green (#10B981)
- **Text Gradient:** Yellow (#FDE68A) → Yellow (#FCD34D)
- **Background:** White / Gray-50
- **Text:** Gray-900

### Typography
- **Font Family:** Inter (via next/font)
- **Headings:** 700-800 weight
- **Body:** 400-500 weight

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 📞 Support

For support, email contact@tdgtrading.ro or visit our website.

---

**Built with ❤️ by TDG Trading Team**
