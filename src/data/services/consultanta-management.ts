import {
  TrendingUp,
  Target,
  Users,
  BarChart3,
  Lightbulb,
  FileText,
  Clock,
  AlertCircle,
  DollarSign,
  MessageSquare,
  Settings,
  Rocket
} from 'lucide-react'

export const consultantaManagementData = {
  hero: {
    title: 'Consultanță în Management HR',
    subtitle: 'Optimizează Procesele HR și Crește Performanța',
    description: 'Consultanță strategică pentru optimizarea departamentului de resurse umane. Dezvoltăm sisteme eficiente de management al performanței și politici HR moderne.',
    gradient: 'from-yellow-500 to-green-500',
    icon: TrendingUp,
    stats: [
      { value: '40%', label: 'Creștere Eficiență' },
      { value: '15+', label: 'Ani Expertiză' },
      { value: '200+', label: 'Proiecte' }
    ],
    primaryCTA: 'Solicită Consultanță',
    secondaryCTA: 'Sună Acum'
  },

  problemSolution: {
    problems: [
      {
        icon: AlertCircle,
        title: 'Procese HR Ineficiente',
        description: 'Proceduri învechite, birocratice și consumatoare de timp care afectează productivitatea departamentului HR.'
      },
      {
        icon: Clock,
        title: 'Lipsă Strategie HR',
        description: 'Absența unei strategii clare de resurse umane aliniate cu obiectivele de business ale companiei.'
      },
      {
        icon: DollarSign,
        title: 'Costuri Operaționale Mari',
        description: 'Cheltuieli ridicate cu HR-ul fără rezultate măsurabile și fără ROI clar pentru investițiile în personal.'
      }
    ],
    solution: {
      title: 'Soluții de Consultanță Strategică',
      description: 'Analizăm în profunzime procesele HR și dezvoltăm soluții personalizate pentru optimizare. Implementăm best practices și sisteme moderne de management al performanței.',
      benefits: [
        'Creștere eficiență departament HR cu 40%',
        'Reducere costuri operaționale',
        'Sisteme de performanță măsurabile',
        'Politici și proceduri moderne',
        'Aliniere strategie HR cu business'
      ]
    }
  },

  features: {
    title: 'Servicii de Consultanță',
    subtitle: 'Soluții complete pentru optimizarea managementului HR',
    items: [
      {
        icon: BarChart3,
        title: 'Analiză Organizațională',
        description: 'Evaluare completă a structurii și proceselor HR',
        details: [
          'Audit procese HR existente',
          'Analiza organigramei',
          'Evaluare eficiență departament',
          'Identificare bottlenecks',
          'Benchmarking industrie',
          'Raport cu recomandări'
        ],
        gradient: 'from-yellow-500 to-green-500'
      },
      {
        icon: Target,
        title: 'Strategie HR',
        description: 'Dezvoltare strategie resurse umane aliniată cu business',
        details: [
          'Definire obiective HR',
          'Planificare workforce',
          'Strategie talent acquisition',
          'Plan dezvoltare angajați',
          'KPI-uri și metrici HR',
          'Roadmap implementare'
        ],
        gradient: 'from-green-500 to-teal-500'
      },
      {
        icon: FileText,
        title: 'Politici și Proceduri',
        description: 'Dezvoltare documentație HR modernă și conformă',
        details: [
          'Regulament intern organizare',
          'Politici HR actualizate',
          'Proceduri operaționale',
          'Job descriptions',
          'Manuale angajați',
          'Code of conduct'
        ],
        gradient: 'from-teal-500 to-cyan-500'
      },
      {
        icon: Lightbulb,
        title: 'Sisteme Performanță',
        description: 'Implementare sisteme moderne de evaluare și dezvoltare',
        details: [
          'Sistem evaluare performanță',
          'OKRs și KPIs',
          'Feedback 360 grade',
          'Plan dezvoltare individuală',
          'Succession planning',
          'Retention strategies'
        ],
        gradient: 'from-cyan-500 to-blue-500'
      }
    ]
  },

  howItWorks: {
    title: 'Procesul de Consultanță',
    subtitle: 'Abordare structurată pentru rezultate măsurabile',
    steps: [
      {
        number: '01',
        icon: MessageSquare,
        title: 'Discovery & Diagnostic',
        description: 'Înțelegem contextul organizațional și identificăm provocările HR',
        duration: '1-2 săptămâni',
        deliverables: [
          'Raport diagnostic',
          'Gap analysis',
          'Quick wins identificate'
        ]
      },
      {
        number: '02',
        icon: Settings,
        title: 'Strategie & Design',
        description: 'Dezvoltăm strategia HR și proiectăm soluțiile optime',
        duration: '2-3 săptămâni',
        deliverables: [
          'Strategie HR',
          'Design soluții',
          'Plan implementare'
        ]
      },
      {
        number: '03',
        icon: Users,
        title: 'Implementare & Training',
        description: 'Implementăm soluțiile și formăm echipa pentru adoptare',
        duration: '4-6 săptămâni',
        deliverables: [
          'Sisteme implementate',
          'Training echipă',
          'Documentație'
        ]
      },
      {
        number: '04',
        icon: Rocket,
        title: 'Monitorizare & Optimizare',
        description: 'Măsurăm rezultatele și optimizăm continuu procesele',
        duration: 'Ongoing',
        deliverables: [
          'Rapoarte progres',
          'Optimizări',
          'Suport continuu'
        ]
      }
    ]
  },

  faqs: {
    title: 'Întrebări Frecvente',
    subtitle: 'Tot ce trebuie să știi despre consultanța în management HR',
    items: [
      {
        question: 'Cât durează un proiect de consultanță HR?',
        answer: 'Depinde de complexitate: un audit și recomandări - 2-4 săptămâni, implementare strategie completă - 3-6 luni, transformare organizațională - 6-12 luni. Începem întotdeauna cu un diagnostic rapid (1-2 săptămâni) pentru a identifica prioritățile.'
      },
      {
        question: 'Cum se calculează tariful pentru consultanță?',
        answer: 'Oferim mai multe modele: (1) tarif pe zi de consultanță (day rate), (2) tarif fix pe proiect, (3) retainer lunar pentru suport continuu. Tariful depinde de seniori consultanților, complexitatea proiectului și durata angajamentului. Oferim o ofertă detaliată după diagnostic inițial.'
      },
      {
        question: 'Ce rezultate putem aștepta?',
        answer: 'Rezultate tipice: reducere timp procese HR cu 30-40%, creștere satisfacție angajați cu 20-30%, reducere turnover cu 15-25%, îmbunătățire time-to-hire cu 40%, creștere productivitate echipă HR. Stabilim KPI-uri clare la început și măsurăm progresul.'
      },
      {
        question: 'Lucrați și cu companii mici (sub 50 angajați)?',
        answer: 'Da, oferim pachete adaptate pentru companii mici și startup-uri. Pentru companii sub 50 angajați, recomandăm consultanță focusată pe: setup procese esențiale, politici de bază, sistem simplu de performanță și strategie de creștere. Tarife speciale pentru startup-uri.'
      },
      {
        question: 'Cum vă diferențiați de alți consultanți HR?',
        answer: 'Experiență practică (nu doar teoretică) în implementare, focus pe rezultate măsurabile (nu doar rapoarte), abordare hands-on (lucrăm împreună cu echipa ta), soluții pragmatice (nu doar best practices), suport post-implementare inclus. Mulți clienți devin parteneri pe termen lung.'
      }
    ]
  },

  cta: {
    title: 'Pregătit să Optimizezi Departamentul HR?',
    subtitle: 'Hai să discutăm despre provocările tale și cum putem ajuta la creșterea eficienței și performanței',
    primaryCTA: 'Solicită Consultanță',
    secondaryCTA: 'Sună Acum',
    gradient: 'from-yellow-500 to-green-500',
    trustIndicators: [
      { icon: 'check' as const, text: '40% Creștere Eficiență' },
      { icon: 'shield' as const, text: '200+ Proiecte' },
      { icon: 'award' as const, text: '15+ Ani Expertiză' }
    ]
  }
}
