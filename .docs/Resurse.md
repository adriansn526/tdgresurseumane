📚 Strategie Legislație - Codul Muncii
🎯 Arhitectură Recomandată
Opțiunea 1: CPT Separat "Legislație" (RECOMANDAT)
CPT: legislation
├── Taxonomie: legislation_type
│   ├── Codul Muncii
│   ├── Legi HR
│   ├── OUG-uri
│   └── Hotărâri Guvern
│
└── Taxonomie: legislation_category
    ├── Contracte Muncă
    ├── Salarizare
    ├── Concedii
    ├── Protecția Muncii
    └── Disciplină
Beneficii:

✅ Separare clară între articole generale și legislație
✅ Filtrare ușoară după tip legislație
✅ SEO dedicat pentru fiecare capitol
✅ Structură ierarhică (părinte-copil)
🏗️ Structură Codul Muncii
Ierarhie Propusă:
Codul Muncii (părinte)
├── Titlul I - Dispoziții generale (părinte)
│   ├── Capitolul I - Dispoziții generale (copil)
│   │   ├── Art. 1 - Obiectul de reglementare
│   │   ├── Art. 2 - Domeniul de aplicare
│   │   └── Art. 3 - Definiții
│   └── Capitolul II - Principii fundamentale
│
├── Titlul II - Contractul individual de muncă (părinte)
│   ├── Capitolul I - Încheierea contractului
│   ├── Capitolul II - Durata contractului
│   └── Capitolul III - Modificarea contractului
│
└── Titlul III - Timpul de muncă și timpul de odihnă
🎨 ACF Fields pentru Legislație
Group 1: Informații Legislație
php
- legislation_number (text) - "Legea 53/2003"
- legislation_date (date) - Data publicării
- legislation_status (select)
  - Activ
  - Modificat
  - Abrogat
- official_source (url) - Link Monitorul Oficial
- last_modified_date (date) - Ultima modificare
Group 2: Structură Document
php
- parent_legislation (relationship) - Legea părinte
- chapter_number (text) - "Capitolul I"
- article_number (text) - "Art. 1"
- section_number (text) - "Secțiunea 1"
- paragraph_number (text) - "(1), (2), (3)"
Group 3: Content Simplificat
php
- original_text (wysiwyg) - Textul original al legii
- simplified_text (wysiwyg) - Explicație simplificată pentru antreprenori
- practical_examples (repeater)
  - example_title
  - example_description
  - example_scenario
- key_points (repeater) - Puncte cheie
- common_mistakes (repeater) - Greșeli frecvente
Group 4: Relații și Referințe
php
- related_articles (relationship) - Articole legate
- related_legislation (relationship) - Alte legi conexe
- affected_by (repeater) - Modificări aduse de alte legi
  - modification_law
  - modification_date
  - modification_description
Group 5: SEO și Metadata
php
- target_audience (checkbox)
  - Antreprenori
  - HR Manageri
  - Angajați
  - Consultanți
- difficulty_level (select)
  - Beginner
  - Intermediate
  - Advanced
- reading_time (number) - minute
- keywords (text) - pentru SEO
📄 Template Articol Legislație
Layout Propus:
┌─────────────────────────────────────────┐
│ BREADCRUMB                              │
│ Legislație > Codul Muncii > Titlul II  │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ HERO SECTION                            │
│ - Număr legislație (Legea 53/2003)     │
│ - Titlu capitol                         │
│ - Status (Activ/Modificat)              │
│ - Data publicării                       │
└─────────────────────────────────────────┘

┌──────────────┬──────────────────────────┐
│ SIDEBAR      │ MAIN CONTENT             │
│              │                          │
│ Cuprins      │ ┌──────────────────────┐ │
│ - Titlul I   │ │ TEXTUL ORIGINAL      │ │
│ - Titlul II  │ │ (acordeon/tab)       │ │
│ - Titlul III │ └──────────────────────┘ │
│              │                          │
│ Navigare     │ ┌──────────────────────┐ │
│ - Anterior   │ │ EXPLICAȚIE SIMPLĂ    │ │
│ - Următor    │ │ Pentru antreprenori  │ │
│              │ └──────────────────────┘ │
│ Acțiuni      │                          │
│ - Print      │ ┌──────────────────────┐ │
│ - PDF        │ │ EXEMPLE PRACTICE     │ │
│ - Share      │ │ Scenarii reale       │ │
│              │ └──────────────────────┘ │
│ Related      │                          │
│ - Art. 1     │ ┌──────────────────────┐ │
│ - Art. 2     │ │ PUNCTE CHEIE         │ │
│              │ │ Bullet points        │ │
│              │ └──────────────────────┘ │
│              │                          │
│              │ ┌──────────────────────┐ │
│              │ │ GREȘELI FRECVENTE    │ │
│              │ │ Ce să eviți          │ │
│              │ └──────────────────────┘ │
└──────────────┴──────────────────────────┘

┌─────────────────────────────────────────┐
│ MODIFICĂRI LEGISLATIVE                  │
│ - OUG 123/2024 (modifică art. 5)       │
│ - Legea 45/2023 (abrogă alin. 2)       │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ ARTICOLE CONEXE                         │
│ - Ghid: Cum să aplici acest articol    │
│ - Template: Contract de muncă          │
└─────────────────────────────────────────┘
🔗 URL Structure (SEO)
Opțiunea A: Flat Structure
/legislatie/codul-muncii-art-1-obiectul-reglementare
/legislatie/codul-muncii-art-2-domeniul-aplicare
/legislatie/codul-muncii-art-39-contractul-individual
Opțiunea B: Hierarchical (RECOMANDAT)
/legislatie/codul-muncii
/legislatie/codul-muncii/titlul-i-dispozitii-generale
/legislatie/codul-muncii/titlul-i-dispozitii-generale/art-1
/legislatie/codul-muncii/titlul-ii-contractul-individual
/legislatie/codul-muncii/titlul-ii-contractul-individual/art-39
Beneficii SEO:

✅ Breadcrumbs naturale
✅ Internal linking logic
✅ User-friendly URLs
✅ Hierarchy în Google
🎯 Filtrare în Pagina Resurse
Sidebar Filters:
typescript
// Tip Resursă
☐ Articole Generale
☐ Legislație
☐ Ghiduri Practice
☐ Template-uri

// Tip Legislație (când Legislație e selectat)
☐ Codul Muncii
☐ Legi HR
☐ OUG-uri
☐ Hotărâri

// Categorie Legislație
☐ Contracte Muncă
☐ Salarizare
☐ Concedii
☐ Disciplină

// Nivel Dificultate
☐ Beginner
☐ Intermediate
☐ Advanced

// Public Țintă
☐ Antreprenori?
☐ HR Manageri
☐ Angajați

💡 Features Speciale pentru Legislație
1. Comparator Versiuni
Versiune Originală (2003) | Versiune Actuală (2024)
─────────────────────────────────────────────────
Art. 1 text original      | Art. 1 text modificat
                          | [Modificat prin OUG...]
2. Timeline Modificări
2024 ─── OUG 123/2024 modifică art. 5
  │
2023 ─── Legea 45/2023 abrogă alin. 2
  │
2022 ─── Legea 12/2022 introduce art. 5^1
  │
2003 ─── Versiunea originală

3. Calculator Impact
"Acest articol te afectează dacă:"
☑ Ai angajați
☑ Lucrezi în construcții
☐ Ai angajați străini

4. Checklist Conformitate
Pentru a fi conform cu acest articol:
☐ Verifică contractele de muncă
☐ Actualizează regulamentul intern
☐ Instruiește angajații
☐ Documentează procedurile