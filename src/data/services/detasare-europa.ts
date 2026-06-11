import { Plane, FileCheck, Shield, Users, Globe, CheckCircle2, Clock, AlertCircle, DollarSign, MessageSquare, Settings, Rocket } from 'lucide-react'

export const detasareEuropaData = {
  hero: {
    title: 'Detașare Angajați în Europa',
    subtitle: 'Formular A1 și Conformitate Detașare',
    description: 'Asistență completă pentru detașarea angajaților în țările UE. Obținem formularul A1 și asigurăm conformitatea cu legislația europeană.',
    gradient: 'from-orange-500 to-amber-500',
    icon: Plane,
    stats: [
      { value: '300+', label: 'Formulare A1' },
      { value: '100%', label: 'Conformitate' },
      { value: '5-7', label: 'Zile Procesare' }
    ],
    primaryCTA: 'Solicită Formular A1',
    secondaryCTA: 'Sună Acum'
  },
  problemSolution: {
    problems: [
      { icon: AlertCircle, title: 'Risc de Amenzi', description: 'Amenzi mari în țara gazdă pentru detașare fără formular A1 sau documentație incompletă.' },
      { icon: Clock, title: 'Proceduri Complexe', description: 'Legislație diferită în fiecare țară UE și cerințe specifice pentru detașare.' },
      { icon: DollarSign, title: 'Dublă Impozitare', description: 'Risc de plată contribuții sociale în ambele țări fără formular A1 valid.' }
    ],
    solution: {
      title: 'Soluția Noastră de Detașare',
      description: 'Gestionăm întregul proces de detașare conform Directivei 96/71/CE. Obținem formularul A1 și asigurăm conformitatea cu legislația din țara gazdă.',
      benefits: ['Formular A1 în 5-7 zile', 'Conformitate 100% UE', 'Evitare dublă impozitare', 'Documentație completă', 'Suport în țara gazdă']
    }
  },
  features: {
    title: 'Servicii Detașare',
    subtitle: 'Tot ce ai nevoie pentru detașarea legală în UE',
    items: [
      { icon: FileCheck, title: 'Formular A1', description: 'Obținere certificat A1 de la Casa de Asigurări', details: ['Pregătire documentație', 'Depunere CNAS', 'Urmărire dosar', 'Obținere A1', 'Prelungiri', 'Consultanță gratuită'], gradient: 'from-orange-500 to-amber-500' },
      { icon: Shield, title: 'Consultanță Detașare', description: 'Asistență pentru conformitatea cu legislația UE', details: ['Analiză legislație țară gazdă', 'Verificare eligibilitate', 'Durata maximă detașare', 'Condiții salariale', 'Drepturi angajați', 'Obligații angajator'], gradient: 'from-amber-500 to-yellow-500' },
      { icon: Users, title: 'Contracte Detașare', description: 'Redactare contracte conforme cu legislația', details: ['Contract detașare', 'Acte adiționale', 'Clauze specifice', 'Traduceri legalizate', 'Verificare juridică', 'Actualizări legislative'], gradient: 'from-yellow-500 to-green-500' },
      { icon: Globe, title: 'Asigurări Sociale', description: 'Gestionare contribuții și asigurări', details: ['Menținere asigurări RO', 'Evitare dublă cotizare', 'Certificat asigurare', 'Raportări CNAS', 'Asistență controale', 'Consultanță fiscală'], gradient: 'from-green-500 to-teal-500' }
    ]
  },
  howItWorks: {
    title: 'Procesul de Detașare',
    subtitle: 'Pași simpli pentru detașarea legală în UE',
    steps: [
      { number: '01', icon: MessageSquare, title: 'Evaluare Eligibilitate', description: 'Verificăm dacă detașarea este posibilă conform legislației', duration: '1 zi', deliverables: ['Analiză caz', 'Verificare condiții', 'Recomandări'] },
      { number: '02', icon: Settings, title: 'Pregătire Documentație', description: 'Pregătim toate documentele necesare pentru A1', duration: '2-3 zile', deliverables: ['Contract detașare', 'Documente CNAS', 'Traduceri'] },
      { number: '03', icon: FileCheck, title: 'Depunere și Obținere A1', description: 'Depunem la CNAS și obținem formularul A1', duration: '5-7 zile', deliverables: ['Depunere CNAS', 'Urmărire dosar', 'Formular A1'] },
      { number: '04', icon: Rocket, title: 'Suport Detașare', description: 'Asistență pe toată durata detașării', duration: 'Ongoing', deliverables: ['Consultanță continuă', 'Prelungiri A1', 'Asistență controale'] }
    ]
  },
  faqs: {
    title: 'Întrebări Frecvente',
    subtitle: 'Tot ce trebuie să știi despre detașarea în UE',
    items: [
      { question: 'Ce este formularul A1?', answer: 'Formularul A1 (fostul E101) este un certificat care atestă că angajatul detașat rămâne asigurat în România și nu trebuie să plătească contribuții sociale în țara gazdă. Este obligatoriu pentru orice detașare în UE.' },
      { question: 'Cât durează obținerea formularului A1?', answer: 'Procesul durează 5-7 zile lucrătoare de la depunerea dosarului complet la CNAS. Pentru urgențe, putem accelera procesul prin proceduri speciale.' },
      { question: 'Cât timp este valabil formularul A1?', answer: 'Formularul A1 este valabil pentru perioada specificată în contract, maximum 24 luni pentru detașare inițială. Poate fi prelungit cu încă 12 luni cu aprobare specială.' },
      { question: 'Ce documente sunt necesare?', answer: 'Contract de muncă în România, contract de detașare, dovada activității în România (min. 1 lună), dovada plății contribuțiilor sociale, detalii despre activitatea în țara gazdă.' },
      { question: 'Pot detașa angajați în orice țară UE?', answer: 'Da, formularul A1 este valabil în toate țările UE/SEE și Elveția. Fiecare țară poate avea cerințe suplimentare de notificare sau înregistrare.' },
      { question: 'Ce se întâmplă dacă lucrez fără A1?', answer: 'Riscați amenzi mari (până la 10.000 EUR per angajat în unele țări), plata retroactivă a contribuțiilor sociale în țara gazdă și posibile sancțiuni penale pentru muncă la negru.' }
    ]
  },
  cta: {
    title: 'Pregătit pentru Detașarea în Europa?',
    subtitle: 'Obține formularul A1 rapid și legal. Consultație gratuită pentru evaluarea situației tale',
    primaryCTA: 'Solicită Formular A1',
    secondaryCTA: 'Sună Acum',
    gradient: 'from-orange-500 to-amber-500',
    trustIndicators: [
      { icon: 'check' as const, text: '300+ Formulare A1' },
      { icon: 'shield' as const, text: '100% Conformitate' },
      { icon: 'award' as const, text: '5-7 Zile Procesare' }
    ]
  }
}
