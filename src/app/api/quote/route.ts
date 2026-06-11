import { NextRequest, NextResponse } from 'next/server'
import { sendQuoteEmail } from '@/lib/email'

// Simple in-memory rate limit: max 3 requests per IP per minute
const rateLimit = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 3
const RATE_LIMIT_WINDOW_MS = 60_000

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimit.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  entry.count++
  return entry.count > RATE_LIMIT_MAX
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: 'Prea multe cereri. Încearcă din nou peste un minut.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { selectedServices, serviceDetails, contactInfo } = body

    // Input validation
    if (!Array.isArray(selectedServices) || selectedServices.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Selectează cel puțin un serviciu.' },
        { status: 400 }
      )
    }

    if (!contactInfo || typeof contactInfo !== 'object') {
      return NextResponse.json(
        { success: false, error: 'Datele de contact sunt obligatorii.' },
        { status: 400 }
      )
    }

    const { companyName, contactPerson, email, phone } = contactInfo

    if (!companyName || typeof companyName !== 'string' || companyName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Numele companiei este obligatoriu.' },
        { status: 400 }
      )
    }
    if (!contactPerson || typeof contactPerson !== 'string' || contactPerson.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Persoana de contact este obligatorie.' },
        { status: 400 }
      )
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Adresa de email nu este validă.' },
        { status: 400 }
      )
    }
    if (!phone || typeof phone !== 'string' || phone.trim().length < 6) {
      return NextResponse.json(
        { success: false, error: 'Numărul de telefon este obligatoriu.' },
        { status: 400 }
      )
    }

    // Sanitize input lengths
    const sanitizedData = {
      selectedServices: selectedServices.slice(0, 20).map((s: unknown) => String(s).slice(0, 100)),
      serviceDetails: serviceDetails && typeof serviceDetails === 'object' ? serviceDetails : {},
      contactInfo: {
        companyName: companyName.trim().slice(0, 200),
        contactPerson: contactPerson.trim().slice(0, 200),
        email: email.trim().slice(0, 200),
        phone: phone.trim().slice(0, 50),
        message: contactInfo.message ? String(contactInfo.message).trim().slice(0, 5000) : undefined,
      },
    }

    await sendQuoteEmail(sanitizedData)

    return NextResponse.json({
      success: true,
      message: 'Cererea de ofertă a fost trimisă cu succes!',
    })
  } catch (error) {
    // Log detailed error server-side only
    console.error('Error processing quote request:', error instanceof Error ? error.message : 'Unknown error')

    return NextResponse.json(
      { success: false, error: 'Nu am putut procesa cererea. Încearcă din nou sau contactează-ne telefonic.' },
      { status: 500 }
    )
  }
}
