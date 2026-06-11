'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, Building2, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

const contactInfoItems = [
  {
    icon: Phone,
    title: 'Telefon',
    details: ['0722 638 928'],
    link: 'tel:+40722638928',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['office@tdgresurseumane.ro'],
    link: 'mailto:office@tdgresurseumane.ro',
    gradient: 'from-cyan-500 to-teal-500'
  },
  {
    icon: MapPin,
    title: 'Adresă',
    details: ['București, România'],
    link: null,
    gradient: 'from-teal-500 to-green-500'
  },
  {
    icon: Clock,
    title: 'Program',
    details: ['Luni - Vineri', '9:00 - 18:00'],
    link: null,
    gradient: 'from-green-500 to-emerald-500'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setStatusMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')
        setStatusMessage(data.message || 'Mesajul a fost trimis cu succes!')
        setFormData({ name: '', email: '', phone: '', company: '', message: '' })
      } else {
        setStatus('error')
        setStatusMessage(data.error || 'A apărut o eroare. Încearcă din nou.')
      }
    } catch {
      setStatus('error')
      setStatusMessage('Nu s-a putut trimite mesajul. Verifică conexiunea la internet.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    // Clear error when user starts typing again
    if (status === 'error') {
      setStatus('idle')
      setStatusMessage('')
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e88e5] via-[#0891b2] to-[#10b981] py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
        
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Contactează-ne
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Suntem aici să te ajutăm cu toate nevoile tale de resurse umane. Contactează-ne astăzi pentru o consultanță gratuită.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfoItems.map((item, index) => {
              const Icon = item.icon
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} mb-4`}>
                    <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              )

              return item.link ? (
                <a key={index} href={item.link} className="block">
                  {content}
                </a>
              ) : (
                <div key={index}>
                  {content}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Trimite-ne un mesaj
                </h2>
                <p className="text-gray-600 mb-8">
                  Completează formularul și te vom contacta în cel mai scurt timp posibil.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nume complet *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="pl-10 h-12"
                        placeholder="Ion Popescu"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 h-12"
                        placeholder="ion.popescu@company.ro"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10 h-12"
                        placeholder="0722 123 456"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Companie
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="pl-10 h-12"
                        placeholder="Numele companiei"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Mesaj *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="pl-10 resize-none"
                        placeholder="Descrie-ne nevoile tale..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === 'loading'}
                    className="w-full bg-gradient-to-r from-[#1e88e5] to-[#0891b2] hover:from-[#1976d2] hover:to-[#0e7490] text-white font-semibold h-12 disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Se trimite...</>
                    ) : (
                      <><Send className="mr-2 h-5 w-5" /> Trimite Mesajul</>
                    )}
                  </Button>

                  {/* Status Messages */}
                  {status === 'success' && (
                    <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">{statusMessage}</span>
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">{statusMessage}</span>
                    </div>
                  )}

                  <p className="text-xs text-gray-500 text-center">
                    Prin trimiterea acestui formular, ești de acord cu{' '}
                    <a href="/politica-confidentialitate" className="text-blue-600 hover:underline">
                      Politica de Confidențialitate
                    </a>
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182646.68739754224!2d25.93481!3d44.43225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucure%C8%99ti!5e0!3m2!1sro!2sro!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TDG Trading Location"
                />
              </div>

              {/* Why Contact Us */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  De ce să ne contactezi?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Consultanță gratuită pentru nevoile tale',
                    'Răspuns în maximum 24 de ore',
                    'Expertiză de peste 15 ani în HR',
                    'Soluții personalizate pentru afacerea ta',
                    'Suport dedicat pe toată perioada colaborării'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'TDG Trading',
            url: 'https://tdgresursumane.ro',
            logo: 'https://tdgresursumane.ro/logo.png',
            description: 'Servicii complete de resurse umane, administrare personal, recrutare și consultanță în management.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'București',
              addressCountry: 'RO'
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+40-722-638-928',
              contactType: 'customer service',
              email: 'office@tdgresurseumane.ro',
              availableLanguage: ['Romanian', 'English'],
              hoursAvailable: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '17:00'
              }
            },
            sameAs: [
              'https://www.facebook.com/tdgtrading',
              'https://www.linkedin.com/company/tdgtrading'
            ]
          })
        }}
      />
    </>
  )
}
