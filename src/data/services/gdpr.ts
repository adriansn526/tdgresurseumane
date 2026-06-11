import {
  Shield,
  FileCheck,
  Lock,
  AlertTriangle,
  BookOpen,
  Users,
  Clock,
  AlertCircle,
  DollarSign,
  MessageSquare,
  Settings,
  Rocket
} from 'lucide-react'

export const gdprData = {
  // Hero Section
  hero: {
    title: 'GDPR în Resurse Umane',
    subtitle: 'Conformitate GDPR pentru Departamentul HR',
    description: 'Protejează datele angajaților și evită amenzile ANSPDCP. Servicii complete de conformitate GDPR pentru procesele de resurse umane.',
    gradient: 'from-amber-500 to-yellow-500',
    icon: Shield,
    stats: [
      { value: '100%', label: 'Conformitate' },
      { value: '0', label: 'Amenzi ANSPDCP' },
      { value: '24h', label: 'Răspuns Incident' }
    ],
    primaryCTA: 'Solicită Audit GDPR',
    secondaryCTA: 'Sună Acum'
  },

  // Problem/Solution Section
  problemSolution: {
    problems: [
      {
        icon: AlertCircle,
        title: 'Risc de Amenzi ANSPDCP',
        description: 'Amenzi de până la 20 milioane EUR sau 4% din cifra de afaceri pentru neconformitate cu GDPR în procesarea datelor angajaților.'
      },
      {
        icon: AlertTriangle,
        title: 'Procese HR Neconforme',
        description: 'Recrutare, salarizare și administrare personal fără documentație GDPR adecvată și consimțăminte valide.'
      },
      {
        icon: DollarSign,
        title: 'Costuri de Remediere',
        description: 'Costuri mari pentru remedierea neconformităților după controale ANSPDCP sau plângeri ale angajaților.'
      }
    ],
    solution: {
      title: 'Soluția Noastră de Conformitate GDPR',
      description: 'Implementăm un sistem complet de conformitate GDPR pentru toate procesele HR. Echipa noastră de experți DPO asigură protecția datelor și conformitatea cu legislația.',
      benefits: [
        'Conformitate 100% cu GDPR și legislația locală',
        'Protecție împotriva amenzilor ANSPDCP',
        'Documentație completă și actualizată',
        'Training pentru echipa HR',
        'Suport DPO dedicat'
      ]
    }
  },

  // Features Section
  features: {
    title: 'Servicii Complete GDPR pentru HR',
    subtitle: 'De la audit la implementare și mentenanță continuă',
    items: [
      {
        icon: FileCheck,
        title: 'Audit GDPR Complet',
        description: 'Evaluare detaliată a conformității proceselor HR cu GDPR',
        details: [
          'Analiza proceselor de prelucrare date',
          'Identificare gap-uri de conformitate',
          'Evaluare riscuri și impact',
          'Raport detaliat cu recomandări',
          'Plan de acțiune prioritizat',
          'Timeline implementare'
        ],
        gradient: 'from-amber-500 to-yellow-500'
      },
      {
        icon: BookOpen,
        title: 'Politici și Proceduri',
        description: 'Documentație GDPR completă pentru departamentul HR',
        details: [
          'Politică de confidențialitate internă',
          'Proceduri de prelucrare date',
          'Registre de evidență prelucrări',
          'Proceduri de securitate date',
          'Politică de retenție date',
          'Proceduri incident de securitate'
        ],
        gradient: 'from-yellow-500 to-green-500'
      },
      {
        icon: Lock,
        title: 'Consimțăminte și Documente',
        description: 'Formulare și consimțăminte GDPR pentru angajați',
        details: [
          'Formulare consimțământ GDPR',
          'Clauze contracte de muncă',
          'Informări privind prelucrarea datelor',
          'Formulare exercitare drepturi',
          'Acorduri de confidențialitate',
          'Template-uri actualizate legislație'
        ],
        gradient: 'from-green-500 to-teal-500'
      },
      {
        icon: Users,
        title: 'Training și Conștientizare',
        description: 'Formare echipă HR și angajați privind GDPR',
        details: [
          'Training GDPR pentru echipa HR',
          'Workshop-uri de conștientizare',
          'Materiale educaționale',
          'Sesiuni Q&A periodice',
          'Certificare participanți',
          'Actualizări legislative'
        ],
        gradient: 'from-teal-500 to-cyan-500'
      }
    ]
  },

  // How It Works Section
  howItWorks: {
    title: 'Procesul de Implementare GDPR',
    subtitle: 'Metodologie structurată pentru conformitate completă',
    steps: [
      {
        number: '01',
        icon: MessageSquare,
        title: 'Audit Inițial',
        description: 'Evaluăm starea actuală de conformitate GDPR a proceselor HR',
        duration: '1 săptămână',
        deliverables: [
          'Raport audit complet',
          'Gap analysis',
          'Plan de remediere'
        ]
      },
      {
        number: '02',
        icon: Settings,
        title: 'Implementare Măsuri',
        description: 'Dezvoltăm și implementăm politici, proceduri și documentație GDPR',
        duration: '2-3 săptămâni',
        deliverables: [
          'Politici și proceduri',
          'Registre prelucrări',
          'Formulare consimțământ'
        ]
      },
      {
        number: '03',
        icon: Users,
        title: 'Training Echipă',
        description: 'Formăm echipa HR și managementul privind cerințele GDPR',
        duration: '1 săptămână',
        deliverables: [
          'Sesiuni training',
          'Materiale educaționale',
          'Certificare participanți'
        ]
      },
      {
        number: '04',
        icon: Rocket,
        title: 'Mentenanță și Suport',
        description: 'Asigurăm conformitate continuă și actualizări legislative',
        duration: 'Ongoing',
        deliverables: [
          'Suport DPO dedicat',
          'Actualizări legislative',
          'Audit anual'
        ]
      }
    ]
  },

  // FAQ Section
  faqs: {
    title: 'Întrebări Frecvente',
    subtitle: 'Tot ce trebuie să știi despre GDPR în resurse umane',
    items: [
      {
        question: 'Ce date personale ale angajaților sunt protejate de GDPR?',
        answer: 'GDPR protejează toate datele cu caracter personal: nume, CNP, adresă, telefon, email, date bancare, informații medicale, evaluări de performanță, date biometrice (dacă sunt folosite), imagini video din camerele de supraveghere, etc. Practic, orice informație care poate identifica direct sau indirect un angajat.'
      },
      {
        question: 'Ce amenzi riscăm pentru neconformitate GDPR?',
        answer: 'ANSPDCP poate aplica amenzi de până la 20 milioane EUR sau 4% din cifra de afaceri anuală globală (se aplică suma mai mare). În România, amenzile practice variază între 10.000 - 100.000 EUR pentru încălcări grave. Există și amenzi contravenționale mai mici pentru neconformități minore.'
      },
      {
        question: 'Avem nevoie de un DPO (Data Protection Officer)?',
        answer: 'DPO este obligatoriu dacă: (1) sunteți autoritate publică, (2) activitățile principale implică monitorizare sistematică la scară largă, sau (3) procesați la scară largă date sensibile. Pentru majoritatea companiilor private, DPO nu este obligatoriu, dar este recomandat. Putem oferi servicii de DPO extern.'
      },
      {
        question: 'Ce consimțăminte trebuie să obținem de la angajați?',
        answer: 'Pentru procesarea datelor necesare contractului de muncă (salarizare, pontaj, etc.) nu este nevoie de consimțământ - baza legală este contractul. Consimțământ este necesar pentru: fotografii pe site/social media, date biometrice (dacă nu sunt obligatorii), marketing intern, monitorizare email/internet (în anumite condiții).'
      },
      {
        question: 'Cât timp putem păstra datele angajaților după plecare?',
        answer: 'Depinde de tipul datelor: dosarul personal - 75 ani (conform Legii Arhivelor), state de plată - 50 ani, contracte de muncă - 5 ani după expirare, CV-uri candidați respinși - maxim 6 luni (dacă au consimțit). Trebuie să aveți o politică clară de retenție.'
      },
      {
        question: 'Ce drepturi au angajații privind datele lor personale?',
        answer: 'Angajații au dreptul la: (1) informare despre prelucrare, (2) acces la datele lor, (3) rectificare date incorecte, (4) ștergere (în anumite condiții), (5) restricționare prelucrare, (6) portabilitate date, (7) opoziție la prelucrare, (8) să nu fie supuși deciziilor automate. Trebuie să răspundeți la cereri în 30 zile.'
      },
      {
        question: 'Cum protejăm datele angajaților de accesul neautorizat?',
        answer: 'Măsuri obligatorii: (1) acces restricționat la date (doar persoane autorizate), (2) parole puternice și autentificare, (3) criptare date sensibile, (4) backup-uri regulate, (5) proceduri de incident de securitate, (6) training angajați, (7) contracte de confidențialitate, (8) control acces fizic la documente.'
      },
      {
        question: 'Ce facem în caz de breach (încălcare securitate date)?',
        answer: 'Trebuie să: (1) documentați incidentul imediat, (2) notificați ANSPDCP în 72 ore dacă există risc pentru angajați, (3) notificați angajații afectați dacă riscul este ridicat, (4) implementați măsuri de remediere, (5) actualizați procedurile pentru prevenție. Vă ajutăm cu proceduri și template-uri pentru gestionarea incidentelor.'
      }
    ]
  },

  // Final CTA Section
  cta: {
    title: 'Pregătit pentru Conformitate GDPR Completă?',
    subtitle: 'Protejează datele angajaților și evită amenzile. Solicită un audit GDPR gratuit pentru departamentul HR',
    primaryCTA: 'Solicită Audit GDPR',
    secondaryCTA: 'Sună Acum',
    gradient: 'from-amber-500 to-yellow-500',
    trustIndicators: [
      { icon: 'check' as const, text: '100% Conformitate Garantată' },
      { icon: 'shield' as const, text: '0 Amenzi ANSPDCP' },
      { icon: 'award' as const, text: 'Experți DPO Certificați' }
    ]
  }
}
