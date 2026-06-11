import { Globe, Plane, FileText, Users, Shield, CheckCircle2, Clock, AlertCircle, DollarSign, MessageSquare, Settings, Rocket } from 'lucide-react'

export const imigrariData = {
  hero: {
    title: 'Servicii Complete de Imigrări',
    subtitle: 'Relocare și Documentație pentru Străini',
    description: 'Asistență completă pentru relocarea în România. Vize, permise de muncă, permise de ședere și toate documentele necesare.',
    gradient: 'from-rose-500 to-orange-500',
    icon: Globe,
    stats: [
      { value: '500+', label: 'Dosare Procesate' },
      { value: '95%', label: 'Rată Aprobare' },
      { value: '30', label: 'Zile Mediu' }
    ],
    primaryCTA: 'Solicită Asistență',
    secondaryCTA: 'Sună Acum'
  },
  problemSolution: {
    problems: [
      { icon: AlertCircle, title: 'Proceduri Complicate', description: 'Legislație complexă și proceduri birocratice pentru obținerea documentelor de imigrare.' },
      { icon: Clock, title: 'Termene Lungi', description: 'Procese care durează luni de zile fără asistență specializată și cunoaștere a sistemului.' },
      { icon: DollarSign, title: 'Risc de Respingere', description: 'Dosare incomplete sau greșeli în documentație duc la respingeri și costuri suplimentare.' }
    ],
    solution: {
      title: 'Soluția Noastră Completă',
      description: 'Gestionăm întregul proces de imigrare de la A la Z. Echipa noastră de experți asigură documentație corectă și maximizează șansele de aprobare.',
      benefits: ['Rată de aprobare 95%', 'Proces accelerat cu 50%', 'Documentație completă și corectă', 'Suport în limba maternă', 'Asistență la autorități']
    }
  },
  features: {
    title: 'Servicii de Imigrări',
    subtitle: 'Tot ce ai nevoie pentru relocarea în România',
    items: [
      { icon: Plane, title: 'Vize de Muncă', description: 'Obținere vize pentru lucru în România', details: ['Viză tip D pentru muncă', 'Viză scurtă ședere', 'Viză lungă ședere', 'Prelungiri vize', 'Asistență completă', 'Urmărire dosar'], gradient: 'from-rose-500 to-orange-500' },
      { icon: FileText, title: 'Permise de Muncă', description: 'Avize de muncă pentru cetățeni non-UE', details: ['Aviz de muncă IGI', 'Permis de muncă', 'Prelungiri', 'Modificări', 'Consultanță gratuită', 'Depunere dosare'], gradient: 'from-orange-500 to-amber-500' },
      { icon: Shield, title: 'Permise de Ședere', description: 'Permise temporare și permanente', details: ['Permis temporar', 'Permis permanent', 'Prelungiri', 'Schimbări date', 'Reunificare familială', 'Cetățenie'], gradient: 'from-amber-500 to-yellow-500' },
      { icon: Users, title: 'Relocare Completă', description: 'Asistență pentru relocarea în România', details: ['Planificare relocare', 'Găsire cazare', 'Deschidere cont bancar', 'Înmatriculare auto', 'Școlarizare copii', 'Integrare'], gradient: 'from-yellow-500 to-green-500' }
    ]
  },
  howItWorks: {
    title: 'Procesul de Imigrare',
    subtitle: 'Pași simpli pentru relocarea în România',
    steps: [
      { number: '01', icon: MessageSquare, title: 'Consultație Gratuită', description: 'Evaluăm situația și stabilim documentele necesare', duration: '1 zi', deliverables: ['Evaluare caz', 'Lista documente', 'Ofertă'] },
      { number: '02', icon: Settings, title: 'Pregătire Dosare', description: 'Pregătim și verificăm toate documentele necesare', duration: '1-2 săptămâni', deliverables: ['Documente completate', 'Traduceri legalizate', 'Apostilă'] },
      { number: '03', icon: FileText, title: 'Depunere și Urmărire', description: 'Depunem dosarul și urmărim procesul', duration: '2-4 săptămâni', deliverables: ['Depunere dosar', 'Urmărire status', 'Comunicare autorități'] },
      { number: '04', icon: Rocket, title: 'Obținere Documente', description: 'Ridicăm documentele și asistăm la integrare', duration: '1 săptămână', deliverables: ['Ridicare documente', 'Asistență integrare', 'Suport continuu'] }
    ]
  },
  faqs: {
    title: 'Întrebări Frecvente',
    subtitle: 'Tot ce trebuie să știi despre imigrarea în România',
    items: [
      { question: 'Cât durează obținerea unui permis de muncă?', answer: 'Procesul durează în medie 30-45 zile de la depunerea dosarului complet. Pentru cazuri urgente, putem accelera procesul prin proceduri speciale.' },
      { question: 'Ce documente sunt necesare?', answer: 'Depinde de tipul documentului: pașaport valid, cazier judiciar, certificat medical, contract de muncă, dovada cazării, poliță asigurare medicală. Vă oferim lista completă după consultație.' },
      { question: 'Care sunt costurile?', answer: 'Taxele de stat variază: aviz muncă 100 EUR, permis ședere 120 EUR, viză 120 EUR. Serviciile noastre încep de la 500 EUR în funcție de complexitate. Oferim pachete complete.' },
      { question: 'Pot aduce familia?', answer: 'Da, prin reunificare familială. Soț/soție și copii minori pot obține permise de ședere pe baza permisului tău. Procesul durează 60-90 zile.' },
      { question: 'Ce se întâmplă dacă dosarul este respins?', answer: 'Ratăm de aprobare este 95%. Dacă dosarul este respins, analizăm motivele, corectăm și redepunem fără costuri suplimentare pentru serviciile noastre (se plătesc doar taxele de stat).' }
    ]
  },
  cta: {
    title: 'Pregătit pentru Relocarea în România?',
    subtitle: 'Hai să discutăm despre situația ta și cum te putem ajuta cu procesul de imigrare',
    primaryCTA: 'Solicită Asistență',
    secondaryCTA: 'Sună Acum',
    gradient: 'from-rose-500 to-orange-500',
    trustIndicators: [
      { icon: 'check' as const, text: '95% Rată Aprobare' },
      { icon: 'shield' as const, text: '500+ Dosare' },
      { icon: 'award' as const, text: '15+ Ani Expertiză' }
    ]
  }
}
