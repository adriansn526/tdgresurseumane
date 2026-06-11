'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Briefcase, TrendingUp, Search, Filter } from 'lucide-react'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { useState } from 'react'
import type { Job } from '@/types/job'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface CariereClientProps {
  jobs: Job[]
}

const jobTypeLabels = {
  'full-time': 'Full-time',
  'part-time': 'Part-time',
  'contract': 'Contract',
  'internship': 'Internship',
}

const experienceLabels = {
  'entry': 'Entry Level',
  'mid': 'Mid Level',
  'senior': 'Senior',
  'lead': 'Lead/Manager',
}

export default function CariereClient({ jobs }: CariereClientProps) {
  const locale = useLocale()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')

  // Get unique departments
  const departments = Array.from(new Set(jobs.map(job => job.jobFields.jobDepartment)))

  // Filter jobs
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.jobFields.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === 'all' || job.jobFields.jobDepartment === selectedDepartment
    const matchesType = selectedType === 'all' || job.jobFields.jobType === selectedType
    
    return matchesSearch && matchesDepartment && matchesType
  })

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
              Alătură-te Echipei TDG Trading
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
              Construim împreună viitorul resurselor umane în România. Descoperă oportunitățile de carieră și dezvoltă-ți potențialul alături de noi.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                <span className="font-semibold">{jobs.length} Poziții Deschise</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                <span className="font-semibold">Creștere Continuă</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Caută poziție..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>

              {/* Department Filter */}
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="h-12 px-4 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Toate Departamentele</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>

              {/* Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="h-12 px-4 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Toate Tipurile</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>

            {/* Results count */}
            <div className="mt-4 text-sm text-gray-600">
              {filteredJobs.length} {filteredJobs.length === 1 ? 'poziție găsită' : 'poziții găsite'}
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12">
                <Filter className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Nu am găsit poziții
                </h3>
                <p className="text-gray-600">
                  Încearcă să modifici filtrele sau caută alt termen.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={`/${locale}/cariere/${job.slug}`}
                      className="block bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                                {job.jobFields.jobTitle}
                              </h3>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  {job.jobFields.jobLocation}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Briefcase className="h-4 w-4" />
                                  {jobTypeLabels[job.jobFields.jobType]}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {experienceLabels[job.jobFields.jobExperience]}
                                </span>
                              </div>
                            </div>
                            {job.jobFields.jobFeatured && (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
                                Featured
                              </span>
                            )}
                          </div>

                          {job.excerpt && (
                            <p className="text-gray-600 text-sm line-clamp-2" dangerouslySetInnerHTML={{ __html: job.excerpt }} />
                          )}

                          {/* Salary Range */}
                          {job.jobFields.jobSalaryMin && job.jobFields.jobSalaryMax && (
                            <div className="mt-3 text-sm font-semibold text-blue-600">
                              {job.jobFields.jobSalaryMin.toLocaleString()} - {job.jobFields.jobSalaryMax.toLocaleString()} {job.jobFields.jobSalaryCurrency}
                            </div>
                          )}
                        </div>

                        <div className="flex md:flex-col items-center gap-3">
                          <Button
                            className="bg-gradient-to-r from-[#1e88e5] to-[#0891b2] hover:from-[#1976d2] hover:to-[#0e7490] text-white"
                          >
                            Vezi Detalii
                          </Button>
                          {job.jobFields.jobDeadline && (
                            <span className="text-xs text-gray-500 whitespace-nowrap">
                              Deadline: {new Date(job.jobFields.jobDeadline).toLocaleDateString('ro-RO')}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nu ai găsit poziția potrivită?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Trimite-ne CV-ul tău și te vom contacta când avem o oportunitate care ți se potrivește.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#1e88e5] to-[#0891b2] hover:from-[#1976d2] hover:to-[#0e7490] text-white px-8"
            >
              Trimite CV Spontan
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
