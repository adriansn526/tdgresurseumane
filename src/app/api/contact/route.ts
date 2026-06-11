import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/email'

// Simple in-memory rate limit: max 5 requests per IP per minute
const rateLimit = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 5
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
    const { name, email, phone, company, message } = body

    // Input validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Numele este obligatoriu (minim 2 caractere).' },
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
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Mesajul trebuie să aibă cel puțin 10 caractere.' },
        { status: 400 }
      )
    }

    await sendContactEmail({
      name: name.trim().slice(0, 200),
      email: email.trim().slice(0, 200),
      phone: phone.trim().slice(0, 50),
      company: company ? String(company).trim().slice(0, 200) : undefined,
      message: message.trim().slice(0, 5000),
    })

    return NextResponse.json({
      success: true,
      message: 'Mesajul a fost trimis cu succes!',
    })
  } catch (error) {
    // Log detailed error server-side only
    console.error('Error sending contact email:', error instanceof Error ? error.message : 'Unknown error')

    return NextResponse.json(
      { success: false, error: 'Nu am putut trimite mesajul. Încearcă din nou sau contactează-ne telefonic.' },
      { status: 500 }
    )
  }
}
