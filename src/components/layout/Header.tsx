'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import ServicesMegaMenu from './ServicesMegaMenu'

const navigation = [
  { key: 'home', href: '/' },
  { key: 'services', href: '/servicii', hasMegaMenu: true },
  { key: 'careers', href: '/cariere' },
  { key: 'resources', href: '/resurse' },
  { key: 'contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false)
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, '')
    return `/${newLocale}${currentPath}`
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-lg">
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-green-500">
            <span className="text-xl font-bold text-white">TDG</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold text-gray-900 leading-tight">TDG</span>
            <span className="text-xs font-semibold text-gray-600 leading-tight">Resurse Umane</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
          {navigation.map((item) => (
            item.hasMegaMenu ? (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => setServicesMenuOpen(true)}
                onMouseLeave={() => setServicesMenuOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-semibold leading-6 text-gray-900 hover:text-teal-600 transition-colors">
                  {t(item.key)}
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                <ServicesMegaMenu 
                  isOpen={servicesMenuOpen} 
                  onClose={() => setServicesMenuOpen(false)} 
                />
              </div>
            ) : (
              <Link
                key={item.key}
                href={`/${locale}${item.href}`}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-teal-600 transition-colors"
              >
                {t(item.key)}
              </Link>
            )
          ))}
        </div>

        {/* Right Side - Language Switcher & CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-4">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Globe className="h-4 w-4" />
                <span className="uppercase">{locale}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={switchLocale('ro')} className="cursor-pointer">
                  🇷🇴 Română
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={switchLocale('en')} className="cursor-pointer">
                  🇬🇧 English
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* CTA Button */}
          <Button className="gradient-mesh text-white hover:opacity-90 transition-opacity">
            Solicită Consultanță
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}${item.href}`}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-teal-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="flex gap-2 px-3 py-2">
              <Link
                href={switchLocale('ro')}
                className={`flex-1 rounded-md px-3 py-2 text-center text-sm font-medium ${
                  locale === 'ro' ? 'bg-teal-100 text-teal-600' : 'bg-gray-100 text-gray-900'
                }`}
              >
                🇷🇴 RO
              </Link>
              <Link
                href={switchLocale('en')}
                className={`flex-1 rounded-md px-3 py-2 text-center text-sm font-medium ${
                  locale === 'en' ? 'bg-teal-100 text-teal-600' : 'bg-gray-100 text-gray-900'
                }`}
              >
                🇬🇧 EN
              </Link>
            </div>

            {/* Mobile CTA */}
            <div className="px-3 py-2">
              <Button className="w-full gradient-mesh text-white">
                Solicită Consultanță
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
