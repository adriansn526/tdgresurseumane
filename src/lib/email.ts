import nodemailer from 'nodemailer'

// TODO(security): In production, SMTP credentials MUST be stored in environment
// variables or a secrets manager, never hardcoded.
const SMTP_HOST = process.env.SMTP_HOST
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10)
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS
const SMTP_FROM = process.env.SMTP_FROM || 'office@tdgresurseumane.ro'
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'office@tdgresurseumane.ro'

function getTransporter() {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error(
      'Email configuration missing. Set SMTP_HOST, SMTP_USER, and SMTP_PASS environment variables.'
    )
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  })
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  company?: string
  message: string
}

export interface QuoteFormData {
  selectedServices: string[]
  serviceDetails: Record<string, Record<string, string | number>>
  contactInfo: {
    companyName: string
    contactPerson: string
    email: string
    phone: string
    message?: string
  }
}

/**
 * Send the contact form email to office and a confirmation to the sender.
 */
export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const transporter = getTransporter()

  // Email to office
  await transporter.sendMail({
    from: `"TDG Trading Website" <${SMTP_FROM}>`,
    to: CONTACT_EMAIL,
    replyTo: data.email,
    subject: `Mesaj nou de contact - ${data.name}`,
    html: buildContactEmailHTML(data),
  })

  // Confirmation email to sender
  await transporter.sendMail({
    from: `"TDG Trading" <${SMTP_FROM}>`,
    to: data.email,
    subject: 'Am primit mesajul tău - TDG Trading',
    html: buildContactConfirmationHTML(data),
  })
}

/**
 * Send the quote request email to office and a confirmation to the requester.
 */
export async function sendQuoteEmail(data: QuoteFormData): Promise<void> {
  const transporter = getTransporter()

  // Email to office
  await transporter.sendMail({
    from: `"TDG Trading Calculator" <${SMTP_FROM}>`,
    to: CONTACT_EMAIL,
    replyTo: data.contactInfo.email,
    subject: `Cerere Ofertă - ${data.contactInfo.companyName}`,
    html: buildQuoteEmailHTML(data),
  })

  // Confirmation email to sender
  await transporter.sendMail({
    from: `"TDG Trading" <${SMTP_FROM}>`,
    to: data.contactInfo.email,
    subject: 'Am primit cererea ta de ofertă - TDG Trading',
    html: buildQuoteConfirmationHTML(data),
  })
}

// ---------------------------------------------------------------------------
// Email HTML builders
// ---------------------------------------------------------------------------

const SERVICE_NAMES: Record<string, string> = {
  administrarePersonal: 'Administrare Personal & Salarizare',
  revisal: 'REVISAL',
  recrutare: 'Selecție & Recrutare Personal',
  avizMunca: 'Aviz de Muncă',
  permiseSedere: 'Permis de Ședere',
  imigrari: 'Servicii Imigrări',
  detasare: 'Detașare în Europa',
  gdpr: 'GDPR în Resurse Umane',
  consultantaManagement: 'Consultanță în Management',
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function emailWrapper(title: string, body: string): string {
  return `<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f4f4f7; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #0891B2 0%, #10B981 100%); color: #ffffff; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .header h1 { margin: 0 0 5px; font-size: 24px; }
    .header p { margin: 0; opacity: 0.9; font-size: 14px; }
    .content { background: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; }
    .field { margin-bottom: 16px; }
    .field-label { font-weight: bold; color: #555; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; }
    .field-value { margin-top: 4px; font-size: 15px; }
    .service-item { background: #f8fafb; padding: 15px; margin: 10px 0; border-left: 4px solid #0891B2; border-radius: 5px; }
    .footer { text-align: center; padding: 20px; color: #999; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>${escapeHtml(title)}</h1>
      <p>TDG Trading – Resurse Umane</p>
    </div>
    <div class="content">
      ${body}
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} TDG Trading &ndash; Partenerul tău în resurse umane</p>
      <p>Acest email a fost generat automat.</p>
    </div>
  </div>
</body>
</html>`
}

function buildContactEmailHTML(data: ContactFormData): string {
  const body = `
    <h2 style="margin-top:0;">Mesaj nou de pe site</h2>
    <div class="field">
      <div class="field-label">Nume</div>
      <div class="field-value">${escapeHtml(data.name)}</div>
    </div>
    <div class="field">
      <div class="field-label">Email</div>
      <div class="field-value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
    </div>
    <div class="field">
      <div class="field-label">Telefon</div>
      <div class="field-value"><a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></div>
    </div>
    ${data.company ? `
    <div class="field">
      <div class="field-label">Companie</div>
      <div class="field-value">${escapeHtml(data.company)}</div>
    </div>` : ''}
    <div class="field">
      <div class="field-label">Mesaj</div>
      <div class="field-value">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
    </div>
  `
  return emailWrapper('Mesaj Nou de Contact', body)
}

function buildContactConfirmationHTML(data: ContactFormData): string {
  const body = `
    <h2 style="margin-top:0;">Mulțumim, ${escapeHtml(data.name)}!</h2>
    <p>Am primit mesajul tău și îți vom răspunde în cel mai scurt timp posibil, de obicei în maximum 24 de ore lucrătoare.</p>
    <p style="color:#666;">Dacă ai o urgență, ne poți contacta direct la telefon: <a href="tel:+40722638928">0722 638 928</a></p>
    <hr style="border:none; border-top:1px solid #eee; margin:20px 0;">
    <p style="font-size:13px; color:#999;">Mesajul tău:</p>
    <blockquote style="margin:10px 0; padding:10px 15px; background:#f8f8f8; border-left:3px solid #0891B2; color:#555;">
      ${escapeHtml(data.message).replace(/\n/g, '<br>')}
    </blockquote>
  `
  return emailWrapper('Am primit mesajul tău', body)
}

function buildQuoteEmailHTML(data: QuoteFormData): string {
  const servicesHtml = data.selectedServices
    .map((serviceId) => {
      const details = data.serviceDetails[serviceId]
      const detailsHtml = details
        ? `<ul style="margin:5px 0 0; padding-left:20px;">${Object.entries(details)
            .map(([key, value]) => `<li>${escapeHtml(String(key))}: ${escapeHtml(String(value))}</li>`)
            .join('')}</ul>`
        : ''
      return `<div class="service-item"><strong>${escapeHtml(SERVICE_NAMES[serviceId] || serviceId)}</strong>${detailsHtml}</div>`
    })
    .join('')

  const c = data.contactInfo
  const body = `
    <h2 style="margin-top:0;">Cerere Ofertă Nouă</h2>
    <h3>Servicii solicitate (${data.selectedServices.length})</h3>
    ${servicesHtml}
    <h3>Date de Contact</h3>
    <div class="field">
      <div class="field-label">Companie</div>
      <div class="field-value">${escapeHtml(c.companyName)}</div>
    </div>
    <div class="field">
      <div class="field-label">Persoană de contact</div>
      <div class="field-value">${escapeHtml(c.contactPerson)}</div>
    </div>
    <div class="field">
      <div class="field-label">Email</div>
      <div class="field-value"><a href="mailto:${escapeHtml(c.email)}">${escapeHtml(c.email)}</a></div>
    </div>
    <div class="field">
      <div class="field-label">Telefon</div>
      <div class="field-value"><a href="tel:${escapeHtml(c.phone)}">${escapeHtml(c.phone)}</a></div>
    </div>
    ${c.message ? `
    <div class="field">
      <div class="field-label">Mesaj</div>
      <div class="field-value">${escapeHtml(c.message).replace(/\n/g, '<br>')}</div>
    </div>` : ''}
  `
  return emailWrapper('Cerere Ofertă Nouă', body)
}

function buildQuoteConfirmationHTML(data: QuoteFormData): string {
  const servicesList = data.selectedServices
    .map((id) => `<li>${escapeHtml(SERVICE_NAMES[id] || id)}</li>`)
    .join('')

  const body = `
    <h2 style="margin-top:0;">Mulțumim, ${escapeHtml(data.contactInfo.contactPerson)}!</h2>
    <p>Am primit cererea ta de ofertă pentru compania <strong>${escapeHtml(data.contactInfo.companyName)}</strong> și o procesăm acum.</p>
    <p>Te vom contacta în cel mai scurt timp cu o ofertă personalizată.</p>
    <h3>Servicii solicitate:</h3>
    <ul>${servicesList}</ul>
    <hr style="border:none; border-top:1px solid #eee; margin:20px 0;">
    <p style="color:#666;">Pentru orice întrebare, ne poți contacta la <a href="tel:+40722638928">0722 638 928</a> sau <a href="mailto:office@tdgresurseumane.ro">office@tdgresurseumane.ro</a></p>
  `
  return emailWrapper('Am primit cererea ta de ofertă', body)
}
