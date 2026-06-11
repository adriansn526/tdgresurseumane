import {
  Target,
  Search,
  Users,
  CheckCircle2,
  Brain,
  FileCheck,
  Clock,
  AlertCircle,
  DollarSign,
  MessageSquare,
  Settings,
  Rocket
} from 'lucide-react'

export const recrutareData = {
  // Hero Section
  hero: {
    title: 'Selecție & Recrutare Personal & Head Hunting',
    subtitle: 'Găsim Candidații Potriviți pentru Compania Ta',
    description: 'Servicii complete de recrutare, selecție și head hunting. Identificăm și atragem cei mai buni profesioniști pentru rolurile cheie din organizația ta.',
    gradient: 'from-indigo-500 to-purple-500',
    icon: Target,
    stats: [
      { value: '2000+', label: 'Candidați Plasați' },
      { value: '21', label: 'Zile Timp Mediu' },
      { value: '92%', label: 'Success Rate' }
    ],
    primaryCTA: 'Solicită Recrutare',
    secondaryCTA: 'Sună Acum'
  },

  // Problem/Solution Section
  problemSolution: {
    problems: [
      {
        icon: AlertCircle,
        title: 'Candidați Nepotriviți',
        description: 'Pierdere de timp cu interviuri și candidați care nu se potrivesc culturii companiei sau cerințelor postului.'
      },
      {
        icon: Clock,
        title: 'Proces Lung de Recrutare',
        description: 'Luni întregi pentru a găsi candidatul potrivit, în timp ce productivitatea echipei scade și proiectele întârzie.'
      },
      {
        icon: DollarSign,
        title: 'Costuri Mari de Recrutare',
        description: 'Investiții mari în platforme de recrutare, agenții și timp intern fără rezultate garantate.'
      }
    ],
    solution: {
      title: 'Procesul Nostru de Recrutare Profesională',
      description: 'Folosim metode dovedite de head hunting și selecție pentru a identifica rapid candidații ideali. Echipa noastră de specialiști HR asigură potrivirea perfectă între candidat și companie.',
      benefits: [
        'Candidați pre-selectați și verificați',
        'Timp de recrutare redus cu 60%',
        'Garanție de înlocuire 3 luni',
        'Acces la talente pasive din piață',
        'Evaluare psihologică și tehnică completă'
      ]
    }
  },

  // Features Section
  features: {
    title: 'Servicii Complete de Recrutare',
    subtitle: 'De la head hunting la onboarding, ne ocupăm de tot procesul',
    items: [
      {
        icon: Search,
        title: 'Head Hunting',
        description: 'Identificăm și atragem top talente pentru poziții executive și middle management',
        details: [
          'Mapping piață și identificare talente',
          'Approach discret și profesional',
          'Negociere ofertă și beneficii',
          'Suport în procesul de decizie',
          'Confidențialitate garantată',
          'Acces la talente pasive'
        ],
        gradient: 'from-indigo-500 to-purple-500'
      },
      {
        icon: Users,
        title: 'Recrutare Masivă',
        description: 'Soluții pentru recrutarea rapidă a unui număr mare de angajați',
        details: [
          'Campanii de recrutare țintite',
          'Screening automat candidați',
          'Assessment center organizat',
          'Interviuri structurate',
          'Onboarding coordonat',
          'Raportare transparentă'
        ],
        gradient: 'from-purple-500 to-pink-500'
      },
      {
        icon: CheckCircle2,
        title: 'Selecție Candidați',
        description: 'Proces riguros de evaluare și selecție a candidaților',
        details: [
          'Analiza CV-urilor și screening',
          'Interviuri telefonice preliminare',
          'Teste de personalitate',
          'Evaluare competențe tehnice',
          'Verificare referințe',
          'Raport detaliat candidat'
        ],
        gradient: 'from-pink-500 to-rose-500'
      },
      {
        icon: Brain,
        title: 'Evaluare Psihologică',
        description: 'Testare psihologică și evaluare competențe comportamentale',
        details: [
          'Teste de personalitate validate',
          'Evaluare inteligență emoțională',
          'Assessment motivație și valori',
          'Compatibilitate echipă',
          'Potențial de dezvoltare',
          'Raport psihologic detaliat'
        ],
        gradient: 'from-rose-500 to-orange-500'
      }
    ]
  },

  // How It Works Section
  howItWorks: {
    title: 'Procesul Nostru de Recrutare',
    subtitle: 'Metodologie dovedită în 4 pași pentru rezultate garantate',
    steps: [
      {
        number: '01',
        icon: MessageSquare,
        title: 'Briefing Detaliat',
        description: 'Înțelegem nevoile companiei, cultura organizațională și profilul candidatului ideal',
        duration: '1-2 zile',
        deliverables: [
          'Job description complet',
          'Profil candidat ideal',
          'Strategie de recrutare'
        ]
      },
      {
        number: '02',
        icon: Search,
        title: 'Sourcing & Headhunting',
        description: 'Identificăm și contactăm candidații potriviți din baza noastră și din piață',
        duration: '1-2 săptămâni',
        deliverables: [
          'Lista candidați identificați',
          'CV-uri pre-selectate',
          'Raport piață'
        ]
      },
      {
        number: '03',
        icon: Settings,
        title: 'Screening & Evaluare',
        description: 'Evaluăm candidații prin interviuri, teste și verificări de referințe',
        duration: '1-2 săptămâni',
        deliverables: [
          'Shortlist 3-5 candidați',
          'Rapoarte evaluare',
          'Recomandări'
        ]
      },
      {
        number: '04',
        icon: Rocket,
        title: 'Prezentare & Suport',
        description: 'Prezentăm candidații, facilităm interviurile și suportăm procesul până la angajare',
        duration: '1-2 săptămâni',
        deliverables: [
          'Prezentare candidați',
          'Coordonare interviuri',
          'Negociere ofertă'
        ]
      }
    ]
  },

  // FAQ Section
  faqs: {
    title: 'Întrebări Frecvente',
    subtitle: 'Tot ce trebuie să știi despre serviciile noastre de recrutare',
    items: [
      {
        question: 'Cât durează procesul de recrutare?',
        answer: 'În medie, procesul durează 3-4 săptămâni de la briefing până la prezentarea candidaților finali. Pentru poziții senior sau foarte specializate, poate dura 6-8 săptămâni. Oferim și servicii express pentru urgențe (2 săptămâni).'
      },
      {
        question: 'Cum se calculează tariful pentru recrutare?',
        answer: 'Tariful se calculează ca procent din salariul brut anual al candidatului angajat (de obicei 15-25% în funcție de complexitatea poziției). Pentru recrutări masive, oferim tarife speciale pe volum. Nu percepem costuri în avans.'
      },
      {
        question: 'Ce garanții oferiți?',
        answer: 'Oferim garanție de înlocuire gratuită de 3 luni. Dacă candidatul pleacă sau nu se integrează în primele 3 luni, înlocuim candidatul fără costuri suplimentare. Pentru poziții executive, garanția este de 6 luni.'
      },
      {
        question: 'Cum identificați candidații pasivi?',
        answer: 'Folosim tehnici de head hunting profesionale: networking în industrie, LinkedIn Recruiter, baza noastră de date cu peste 50.000 candidați, referințe și approach direct. Contactăm discret candidații și prezentăm oportunitatea.'
      },
      {
        question: 'Ce teste folosiți pentru evaluare?',
        answer: 'Folosim teste validate internațional: DISC pentru personalitate, teste de inteligență emoțională, teste tehnice specifice domeniului, case studies și interviuri comportamentale structurate (STAR method).'
      },
      {
        question: 'Puteți recruta și în afara României?',
        answer: 'Da, avem experiență în recrutare internațională, mai ales în țările UE. Oferim și servicii de relocare și asistență pentru obținerea permiselor de muncă pentru candidați străini.'
      },
      {
        question: 'Ce informații aveți nevoie pentru a începe?',
        answer: 'Avem nevoie de job description detaliat, informații despre companie și cultură organizațională, buget salarial, timeline și persoana de contact pentru interviuri. Organizăm un briefing detaliat la început.'
      },
      {
        question: 'Oferiți și servicii de employer branding?',
        answer: 'Da, oferim consultanță pentru employer branding, optimizare job ads, strategie de atragere talente și prezență pe platformele de recrutare. Acestea pot fi incluse în pachetul de recrutare.'
      }
    ]
  },

  // Final CTA Section
  cta: {
    title: 'Pregătit să Găsești Candidații Perfecți?',
    subtitle: 'Hai să discutăm despre nevoile tale de recrutare și cum te putem ajuta să construiești echipa ideală',
    primaryCTA: 'Solicită Recrutare',
    secondaryCTA: 'Sună Acum',
    gradient: 'from-indigo-500 to-purple-500',
    trustIndicators: [
      { icon: 'check' as const, text: '2000+ Candidați Plasați' },
      { icon: 'shield' as const, text: 'Garanție 3 Luni' },
      { icon: 'award' as const, text: '92% Success Rate' }
    ]
  }
}
