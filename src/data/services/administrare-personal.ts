import {
  Users,
  Calculator,
  FileText,
  FolderOpen,
  Shield,
  Clock,
  AlertCircle,
  FileWarning,
  MessageSquare,
  FileCheck,
  Settings,
  Rocket,
  Scale,
  Briefcase,
  TrendingDown,
  Award
} from 'lucide-react'

export const administrarePersonalData = {
  // Hero Section
  hero: {
    title: 'Administrare Personal & Salarizare',
    subtitle: 'Externalizează Administrarea Personalului',
    description: 'Servicii complete de salarizare, REVISAL și administrare personal pentru companii de orice dimensiune. Concentrează-te pe business, noi ne ocupăm de HR.',
    gradient: 'from-cyan-500 to-blue-500',
    icon: Users,
    stats: [
      { value: '500+', label: 'Companii' },
      { value: '15+', label: 'Ani Expertiză' },
      { value: '24h', label: 'Timp Răspuns' }
    ],
    primaryCTA: 'Solicită Ofertă Gratuită',
    secondaryCTA: 'Sună Acum'
  },

  // Problem/Solution Section
  problemSolution: {
    problems: [
      {
        icon: AlertCircle,
        title: 'Legislație Complexă',
        description: 'Modificări frecvente ale legilor muncii și fiscale care necesită actualizare constantă și expertiză specializată.'
      },
      {
        icon: Clock,
        title: 'Timp Consumat',
        description: 'Ore întregi petrecute lunar cu salarizare, raportări și administrare personal în loc să te concentrezi pe dezvoltarea afacerii.'
      },
      {
        icon: FileWarning,
        title: 'Risc de Erori',
        description: 'Greșeli în calcule sau raportări pot costa scump - amenzi, penalități și probleme cu autoritățile.'
      }
    ],
    solution: {
      title: 'Soluția Noastră Completă',
      description: 'Preluăm integral administrarea personalului, astfel încât tu să te concentrezi pe dezvoltarea afacerii. Echipa noastră de experți asigură conformitate 100% cu legislația.',
      benefits: [
        'Conformitate 100% cu legislația în vigoare',
        'Zero erori în salarizare și raportări',
        'Economisești timp și resurse valoroase',
        'Acces 24/7 la date și rapoarte',
        'Suport dedicat și consultanță gratuită'
      ]
    }
  },

  // Features Section
  features: {
    title: 'Ce Include Serviciul',
    subtitle: 'Pachet complet de administrare personal și salarizare',
    items: [
      {
        icon: Calculator,
        title: 'Salarizare Completă',
        description: 'Calcul salarii, sporuri, concedii, bonusuri și toate elementele de salarizare',
        details: [
          'Calcul automat salarii brute și nete',
          'Sporuri, adaosuri și prime',
          'Concedii de odihnă și medicale',
          'Bonusuri și premii de performanță',
          'Deduceri și rețineri legale',
          'State de plată lunare'
        ],
        gradient: 'from-cyan-500 to-blue-500'
      },
      {
        icon: FileText,
        title: 'Raportări REVISAL',
        description: 'Toate raportările către ANOFM la timp și fără erori',
        details: [
          'Înregistrare angajați în REVISAL',
          'Modificări contracte de muncă',
          'Încetări contracte și șomaj tehnic',
          'Raportări lunare obligatorii',
          'Suspendări și reactivări',
          'Asistență în relația cu ANOFM'
        ],
        gradient: 'from-blue-500 to-indigo-500'
      },
      {
        icon: FolderOpen,
        title: 'Dosare Personal',
        description: 'Gestionare completă dosare angajați și documente HR',
        details: [
          'Contracte de muncă și acte adiționale',
          'Fișe de post actualizate',
          'Regulament intern de organizare',
          'Registru general de evidență',
          'Arhivare electronică securizată',
          'Acces rapid la documente'
        ],
        gradient: 'from-indigo-500 to-purple-500'
      },
      {
        icon: Shield,
        title: 'Conformitate GDPR',
        description: 'Protecția datelor personale conform legislației',
        details: [
          'Consimțăminte GDPR pentru angajați',
          'Registre de evidență prelucrări',
          'Politici interne de confidențialitate',
          'Audit GDPR periodic',
          'Notificări către ANSPDCP',
          'Training GDPR pentru echipă'
        ],
        gradient: 'from-purple-500 to-pink-500'
      },
      {
        icon: Scale,
        title: 'Consultanță Legislativă',
        description: 'Expertiză în legislația muncii și interpretare juridică',
        details: [
          'Consultanță clauze contracte individuale de muncă',
          'Proceduri de concediere conform legislației',
          'Sporuri obligatorii și beneficii salariale',
          'Pontaj și evidență salariați la lucru',
          'Concedii de toate tipurile (odihnă, medical, creștere copil)',
          'Centre de cost și productivitate muncii',
          'Promovare pe post și proceduri de retrogradare',
          'Interpretare Codul Muncii și Codul Fiscal'
        ],
        gradient: 'from-pink-500 to-rose-500'
      },
      {
        icon: Briefcase,
        title: 'Servicii Speciale',
        description: 'Dosare complexe și proceduri administrative specializate',
        details: [
          'Dosare de pensionare complete',
          'Adeverințe recalculare pensii pe grupe de muncă',
          'Dosare creștere copil și indemnizații',
          'Dosare șomaj și șomaj tehnic',
          'Întocmire și depunere formular D112',
          'Proceduri de cercetare disciplinară',
          'Audit dosare de personal și REVISAL',
          'Restaurare și gestionare arhivă REVISAL'
        ],
        gradient: 'from-rose-500 to-orange-500'
      },
      {
        icon: Award,
        title: 'Reprezentare & Relații Instituționale',
        description: 'Reprezentare la autorități și gestionare relații ITM',
        details: [
          'Reprezentare la Inspectoratul Teritorial de Munca (ITM)',
          'Asistență în timpul controalelor ITM',
          'Relații cu ANOFM și Casa de Pensii',
          'Relații cu Casa de Asigurări de Sănătate',
          'Întocmire răspunsuri la solicitări oficiale',
          'Implementare recomandări post-control',
          'Pregătire documentație pentru inspecții',
          'Consultanță preventivă pentru evitarea amenzilor'
        ],
        gradient: 'from-orange-500 to-amber-500'
      }
    ]
  },

  // Cost Savings Section (NEW)
  costSavings: {
    title: 'De Ce Externalizare?',
    subtitle: 'Economisește timp, bani și resurse valoroase',
    comparison: {
      internal: {
        title: 'Departament Intern',
        costs: [
          { item: 'Salarii HR (2-3 persoane)', amount: '8.000 - 15.000 RON/lună' },
          { item: 'Software salarizare & HR', amount: '500 - 2.000 RON/lună' },
          { item: 'Spațiu birou & echipamente', amount: '1.000 - 2.000 RON/lună' },
          { item: 'Training & actualizare legislație', amount: '500 - 1.000 RON/lună' },
          { item: 'Risc erori & amenzi', amount: 'Variabil (5.000+ RON)' }
        ],
        total: '10.000 - 20.000 RON/lună',
        risks: [
          'Fluctuație personal HR',
          'Erori de interpretare legislație',
          'Costuri ascunse (concedii, boli)',
          'Dependență de o singură persoană'
        ]
      },
      external: {
        title: 'Externalizare TDG',
        costs: [
          { item: 'Pachet complet (1-50 angajați)', amount: '500 - 3.000 RON/lună' },
          { item: 'Software inclus', amount: 'Inclus' },
          { item: 'Echipă de experți', amount: 'Inclus' },
          { item: 'Actualizări legislative', amount: 'Inclus' },
          { item: 'Audit gratuit', amount: 'Inclus' }
        ],
        total: '500 - 3.000 RON/lună',
        benefits: [
          'Echipă de experți dedicați',
          'Zero risc de erori',
          'Costuri fixe și previzibile',
          'Suport 24/7 garantat'
        ]
      }
    },
    savings: {
      percentage: '60-70%',
      description: 'Economie medie față de departament intern',
      additionalBenefits: [
        'Concentrare pe activitatea de bază',
        'Acces la expertiză de top',
        'Scalabilitate instant',
        'Zero investiții inițiale'
      ]
    }
  },

  // How It Works Section
  howItWorks: {
    title: 'Cum Funcționează',
    subtitle: 'Proces simplu în 4 pași pentru externalizarea HR',
    steps: [
      {
        number: '01',
        icon: MessageSquare,
        title: 'Consultație Gratuită',
        description: 'Discutăm despre nevoile companiei tale și stabilim detaliile colaborării',
        duration: '30 min',
        deliverables: [
          'Analiză nevoi HR',
          'Ofertă personalizată',
          'Plan de implementare'
        ]
      },
      {
        number: '02',
        icon: FileCheck,
        title: 'Semnare Contract',
        description: 'Semnăm contractul de prestări servicii și preluăm datele necesare',
        duration: '1 zi',
        deliverables: [
          'Contract semnat',
          'Transfer date angajați',
          'Acces platformă online'
        ]
      },
      {
        number: '03',
        icon: Settings,
        title: 'Setup & Configurare',
        description: 'Configurăm sistemul și importăm datele existente ale companiei',
        duration: '2-3 zile',
        deliverables: [
          'Import date complete',
          'Configurare sistem',
          'Training echipă'
        ]
      },
      {
        number: '04',
        icon: Rocket,
        title: 'Go Live & Suport',
        description: 'Începem administrarea și îți oferim suport continuu dedicat',
        duration: 'Ongoing',
        deliverables: [
          'Salarizare lunară',
          'Raportări REVISAL',
          'Suport 24/7'
        ]
      }
    ]
  },

  // FAQ Section
  faqs: {
    title: 'Întrebări Frecvente',
    subtitle: 'Tot ce trebuie să știi despre serviciul de administrare personal',
    items: [
      {
        question: 'Cât timp durează implementarea serviciului?',
        answer: 'Procesul de implementare durează în medie 2-3 zile lucrătoare. În această perioadă importăm datele existente, configurăm sistemul și oferim training echipei tale. Pentru companii cu peste 50 de angajați, perioada poate fi de 5-7 zile.'
      },
      {
        question: 'Ce date aveți nevoie de la noi pentru a începe?',
        answer: 'Avem nevoie de lista angajaților cu datele personale, contractele de muncă existente, ultimele state de plată și datele de acces la REVISAL (dacă există). Toate datele sunt tratate confidențial conform GDPR.'
      },
      {
        question: 'Cum se calculează prețul serviciului?',
        answer: 'Prețul se calculează în funcție de numărul de angajați și complexitatea serviciilor necesare. Oferim pachete flexibile: Starter (1-10 angajați) de la 500 RON/lună, Business (11-50 angajați) de la 1.500 RON/lună, și Enterprise (50+ angajați) cu ofertă personalizată.'
      },
      {
        question: 'Putem rezilia contractul oricând?',
        answer: 'Da, contractul poate fi reziliat cu un preaviz de 30 de zile calendaristice. Nu există penalități sau costuri ascunse. La încetarea colaborării, îți returnăm toate datele într-un format utilizabil.'
      },
      {
        question: 'Ce se întâmplă cu datele noastre?',
        answer: 'Toate datele sunt stocate securizat în România, conform GDPR. Avem certificare ISO 27001 pentru securitatea informațiilor. La încetarea colaborării, îți returnăm toate datele și le ștergem din sistemele noastre conform procedurii GDPR.'
      },
      {
        question: 'Oferiți suport în afara programului?',
        answer: 'Da, oferim suport telefonic și email în program de lucru (9:00-18:00). Pentru clienții cu pachetul Enterprise, oferim suport extins și acces la un account manager dedicat disponibil și în afara programului.'
      },
      {
        question: 'Ce se întâmplă dacă apar modificări legislative?',
        answer: 'Echipa noastră monitorizează constant modificările legislative și actualizează automat toate calculele și raportările. Vei fi informat proactiv despre orice schimbare care te afectează, fără costuri suplimentare.'
      },
      {
        question: 'Putem păstra un control intern al HR-ului?',
        answer: 'Absolut! Poți alege să externalizezi doar anumite procese (ex: doar salarizare) și să păstrezi restul intern. Oferim pachete modulare adaptate nevoilor tale. Ai acces permanent la platformă pentru vizualizarea datelor în timp real.'
      },
      {
        question: 'Puteți întocmi dosare de pensionare și adeverințe pentru recalculare pensii?',
        answer: 'Da, oferim servicii complete pentru dosare de pensionare, inclusiv adeverințe de grupă de muncă din arhivele societăților comerciale și adeverințe pentru recalculare pensii pe grupe de muncă și sporuri salariale. Echipa noastră are experiență vastă în întocmirea acestor documente complexe.'
      },
      {
        question: 'Oferiți reprezentare la Inspectoratul Teritorial de Muncă (ITM)?',
        answer: 'Da, oferim reprezentare completă la ITM, inclusiv asistență în timpul controalelor, pregătire documentație pentru inspecții, întocmire răspunsuri la solicitări oficiale și implementare recomandări post-control. Consultanța noastră preventivă te ajută să eviți amenzile.'
      },
      {
        question: 'Ce alte dosare speciale puteți întocmi?',
        answer: 'Întocmim dosare de creștere copil, dosare de șomaj, formulare D112, proceduri de cercetare disciplinară, și oferim audit complet pentru dosare de personal și REVISAL. De asemenea, putem restaura și gestiona arhive REVISAL pentru companii care au probleme cu evidența anterioară.'
      },
      {
        question: 'Oferiți consultanță pentru concedieri și proceduri disciplinare?',
        answer: 'Da, oferim consultanță completă pentru proceduri de concediere conform legislației, astfel încât să eviți procesele în instanță. De asemenea, gestionăm proceduri de cercetare disciplinară, promovare pe post și retrogradare, toate conform Codului Muncii.'
      },
      {
        question: 'Cum mă ajutați să economisesc costuri față de un departament intern?',
        answer: 'Externalizarea poate economisi 60-70% din costurile unui departament HR intern. Elimini cheltuielile cu salarii (8.000-15.000 RON/lună pentru 2-3 persoane), software (500-2.000 RON/lună), spații birou și training. Cu noi, ai costuri fixe previzibile de la 500 RON/lună, fără investiții inițiale.'
      }
    ]
  },

  // Final CTA Section
  cta: {
    title: 'Pregătit să Simplifici Administrarea Personalului?',
    subtitle: 'Solicită o consultație gratuită și descoperă cum putem ajuta compania ta să economisească timp și resurse',
    primaryCTA: 'Solicită Ofertă Gratuită',
    secondaryCTA: 'Sună Acum',
    gradient: 'from-cyan-500 to-blue-500',
    trustIndicators: [
      { icon: 'check' as const, text: 'Răspuns în 24h Garantat' },
      { icon: 'shield' as const, text: 'Date Protejate GDPR' },
      { icon: 'award' as const, text: '15+ Ani Expertiză' }
    ]
  }
}
