'use client'

import { Phone, Mail, Clock } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-[#1e88e5] to-[#0891b2] text-white py-2 border-b border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
          
          {/* Left Side - Contact Info */}
          <div className="flex flex-wrap items-center gap-6">
            {/* Phone */}
            <a 
              href="tel:+40722638928" 
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">0722 638 928</span>
            </a>
            
            {/* Email */}
            <a 
              href="mailto:office@tdgresurseumane.ro" 
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">office@tdgresurseumane.ro</span>
            </a>
          </div>

          {/* Right Side - Program */}
          <div className="flex items-center gap-2 text-white/90">
            <Clock className="h-4 w-4" />
            <span className="text-xs sm:text-sm">Program: L-V 9:00 - 18:00</span>
          </div>

        </div>
      </div>
    </div>
  )
}
