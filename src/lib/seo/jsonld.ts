import { Service, WordPressPost } from '../wordpress-api'

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TDG Trading',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://tdgtrading.ro',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
    description: 'Partenerul tău în resurse umane - administrare personal, consultanță management, recrutare și servicii de imigrări',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'RO',
      addressLocality: 'București',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+40-XXX-XXX-XXX',
      contactType: 'Customer Service',
      availableLanguage: ['Romanian', 'English'],
      areaServed: 'RO',
    },
    sameAs: [
      'https://facebook.com/tdgtrading',
      'https://linkedin.com/company/tdgtrading',
    ],
  }
}

export function generateServiceJsonLd(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title.rendered,
    description: service.excerpt.rendered.replace(/<[^>]*>/g, ''),
    provider: {
      '@type': 'Organization',
      name: 'TDG Trading',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://tdgtrading.ro',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Romania',
    },
    serviceType: 'Human Resources',
  }
}

export function generateBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateArticleJsonLd(post: WordPressPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, ''),
    datePublished: post.date,
    dateModified: post.modified,
    author: {
      '@type': 'Organization',
      name: 'TDG Trading',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TDG Trading',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
      },
    },
  }
}

export function generateFAQJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
