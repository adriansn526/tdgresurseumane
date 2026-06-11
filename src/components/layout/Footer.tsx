'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const navigation = [
  { key: 'home', href: '/' },
  { key: 'services', href: '/servicii' },
  { key: 'careers', href: '/cariere' },
  { key: 'resources', href: '/resurse' },
  { key: 'contact', href: '/contact' },
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
]

export default function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const locale = useLocale()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-green-500">
                <span className="text-xl font-bold text-white">TDG</span>
              </div>
              <span className="text-xl font-bold">Trading</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {t('description')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-teal-400" />
                <a href="tel:+40722638928" className="hover:text-teal-400 transition-colors">
                  0722 638 928
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-teal-400" />
                <a href="mailto:office@tdgresurseumane.ro" className="hover:text-teal-400 transition-colors">
                  office@tdgresurseumane.ro
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-teal-400" />
                <span>București, România</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.key}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {tNav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('followUs')}</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:bg-teal-600 hover:text-white transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <p className="text-sm text-gray-400">
              {t('copyright')}
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href={`/${locale}/politica-confidentialitate`} className="hover:text-teal-400 transition-colors">
                Politica de Confidențialitate
              </Link>
              <Link href={`/${locale}/termeni-conditii`} className="hover:text-teal-400 transition-colors">
                Termeni și Condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
