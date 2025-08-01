'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Copy, Check, Star, BookOpen, Target, TrendingUp, Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import '../models/liquid-glass.css';
import BlurText from '../../components/BlurText';

// Erweiterte KI-Prompts Data mit aktuellen Best Practices
const promptsData = [
  {
    id: 1,
    title: "Content Creator Prompt",
    category: "Content",
    subcategory: "Blog",
    description: "Erstelle hochwertige Blog-Artikel mit SEO-Optimierung",
    prompt: `Du bist ein erfahrener Content Creator und SEO-Experte. Erstelle einen detaillierten, informativen Blog-Artikel zum Thema "[THEMA]".

Anforderungen:
- Länge: 1500-2000 Wörter
- Struktur: Einleitung, Hauptteil mit 3-5 Abschnitten, Fazit
- SEO: Integriere natürlich die Keywords "[KEYWORDS]"
- Stil: Professionell, aber zugänglich
- Call-to-Action: Am Ende des Artikels

Format:
1. Einleitung (200-300 Wörter)
2. Hauptteil mit Unterabschnitten
3. Praktische Beispiele und Tipps
4. Fazit mit Call-to-Action

Zielgruppe: [ZIELGRUPPE]
Tonalität: [TONALITÄT]`,
    icon: "✍️",
    gradient: "gradient-blue",
    featured: true,
    difficulty: "Anfänger",
    tags: ["Content", "SEO", "Blog", "Marketing"],
    usage: "Content Marketing, Blog-Artikel, SEO-Optimierung",
    examples: ["Tech-Blog", "Marketing-Artikel", "How-to Guides"]
  },
  {
    id: 2,
    title: "Code Review Assistant",
    category: "Code",
    subcategory: "Review",
    description: "Professionelle Code-Reviews mit Verbesserungsvorschlägen",
    prompt: `Du bist ein Senior Software Engineer mit 10+ Jahren Erfahrung. Führe eine detaillierte Code-Review für folgenden Code durch:

[CODE_HIER_EINFÜGEN]

Bitte analysiere:
1. **Funktionalität**: Funktioniert der Code wie erwartet?
2. **Performance**: Gibt es Optimierungsmöglichkeiten?
3. **Sicherheit**: Sind Sicherheitslücken vorhanden?
4. **Wartbarkeit**: Ist der Code lesbar und wartbar?
5. **Best Practices**: Folgt der Code den Branchenstandards?

Für jeden Punkt:
- Beschreibe das Problem
- Erkläre warum es wichtig ist
- Gib konkrete Verbesserungsvorschläge
- Zeige Beispielcode wenn möglich

Format: Strukturierte Liste mit klaren Handlungsempfehlungen.`,
    icon: "💻",
    gradient: "gradient-purple",
    featured: false,
    difficulty: "Fortgeschritten",
    tags: ["Code", "Review", "Development", "Best Practices"],
    usage: "Code-Qualität, Debugging, Team-Entwicklung",
    examples: ["JavaScript Review", "Python Code", "React Components"]
  },
  {
    id: 3,
    title: "Market Research Analyst",
    category: "Business",
    subcategory: "Research",
    description: "Umfassende Marktanalyse für neue Produkte oder Services",
    prompt: `Du bist ein erfahrener Marktforscher. Führe eine detaillierte Marktanalyse für [PRODUKT/SERVICE] durch.

Analyse-Bereiche:

1. **Marktgröße & Wachstum**
   - Aktuelle Marktgröße
   - Wachstumsprognosen
   - Treiber und Hemmnisse

2. **Wettbewerbsanalyse**
   - Hauptwettbewerber
   - Marktanteile
   - Wettbewerbsvorteile

3. **Zielgruppe**
   - Demografische Daten
   - Verhaltensmuster
   - Pain Points

4. **Markteintrittsstrategie**
   - Empfohlene Positionierung
   - Pricing-Strategie
   - Marketing-Kanäle

5. **Risiken & Chancen**
   - SWOT-Analyse
   - Risikobewertung

Bitte gib konkrete Daten, Beispiele und Handlungsempfehlungen.`,
    icon: "📊",
    gradient: "gradient-orange",
    featured: false,
    difficulty: "Mittel",
    tags: ["Business", "Research", "Strategy", "Analysis"],
    usage: "Startup-Planung, Produktentwicklung, Investitionsentscheidungen",
    examples: ["SaaS-Markt", "E-Commerce", "Mobile Apps"]
  },
  {
    id: 4,
    title: "Creative Writing Coach",
    category: "Creative",
    subcategory: "Writing",
    description: "Verbessere deine kreative Schreibfähigkeiten",
    prompt: `Du bist ein erfahrener Creative Writing Coach. Hilf mir dabei, meine Schreibfähigkeiten zu verbessern.

Aktuelle Herausforderung: [BESCHREIBE_DEIN_PROBLEM]

Bitte gib mir:

1. **Technische Tipps**
   - Konkrete Übungen für mein Problem
   - Schreibtechniken
   - Strukturvorschläge

2. **Inspiration & Ideen**
   - Kreative Ansätze
   - Genre-spezifische Tipps
   - Beispiele aus der Literatur

3. **Feedback-System**
   - Wie ich meine Texte selbst bewerten kann
   - Checklisten für verschiedene Textarten
   - Verbesserungsstrategien

4. **Übungsaufgaben**
   - 3 konkrete Schreibübungen
   - Zeitvorgaben
   - Bewertungskriterien

Stil: Ermutigend, aber ehrlich. Gib praktische, umsetzbare Ratschläge.`,
    icon: "🖋️",
    gradient: "gradient-pink",
    featured: false,
    difficulty: "Anfänger",
    tags: ["Creative", "Writing", "Coaching", "Improvement"],
    usage: "Roman-Schreiben, Kurzgeschichten, Poetry, Scripts",
    examples: ["Fantasy-Roman", "Kurzgeschichte", "Drehbuch"]
  },
  {
    id: 5,
    title: "Data Analysis Expert",
    category: "Data",
    subcategory: "Analysis",
    description: "Professionelle Datenanalyse und Visualisierung",
    prompt: `Du bist ein Data Scientist mit Expertise in Datenanalyse und Visualisierung. Analysiere folgende Daten:

[DATEN_HIER_EINFÜGEN]

Bitte führe durch:

1. **Exploratory Data Analysis (EDA)**
   - Datenqualität prüfen
   - Deskriptive Statistiken
   - Verteilungen und Ausreißer

2. **Muster & Trends**
   - Korrelationen identifizieren
   - Zeitreihenanalyse (falls relevant)
   - Segmentierung

3. **Visualisierungsvorschläge**
   - Passende Chart-Typen
   - Color Schemes
   - Interaktive Elemente

4. **Insights & Empfehlungen**
   - Wichtigste Erkenntnisse
   - Business-Implications
   - Nächste Schritte

5. **Code-Vorschläge**
   - Python/R-Code für Analyse
   - Visualisierungscode
   - Best Practices

Format: Strukturiert mit klaren Handlungsempfehlungen.`,
    icon: "📈",
    gradient: "gradient-cyan",
    featured: false,
    difficulty: "Fortgeschritten",
    tags: ["Data", "Analysis", "Visualization", "Statistics"],
    usage: "Business Intelligence, Forschung, Reporting",
    examples: ["Sales-Daten", "User Analytics", "Financial Data"]
  },
  {
    id: 6,
    title: "Product Manager",
    category: "Product",
    subcategory: "Strategy",
    description: "Produktstrategie und Roadmap-Entwicklung",
    prompt: `Du bist ein erfahrener Product Manager. Entwickle eine umfassende Produktstrategie für [PRODUKT/IDEE].

Strategie-Bereiche:

1. **Produktvision & Mission**
   - Klare Vision
   - Zielgruppe definieren
   - Value Proposition

2. **Marktanalyse**
   - Wettbewerbslandschaft
   - Marktgröße
   - Trends & Technologien

3. **Produkt-Roadmap**
   - MVP-Features
   - Priorisierung
   - Timeline

4. **Go-to-Market**
   - Marketing-Strategie
   - Pricing-Modell
   - Launch-Plan

5. **Success Metrics**
   - KPIs definieren
   - Tracking-System
   - Iteration-Plan

Bitte gib konkrete, umsetzbare Empfehlungen.`,
    icon: "🎯",
    gradient: "gradient-green",
    featured: false,
    difficulty: "Mittel",
    tags: ["Product", "Strategy", "Management", "Planning"],
    usage: "Startup-Planung, Produktentwicklung, Business-Planung",
    examples: ["SaaS-Produkt", "Mobile App", "E-Commerce"]
  },
  {
    id: 7,
    title: "AI Prompt Engineer",
    category: "AI",
    subcategory: "Engineering",
    description: "Optimale Prompt-Engineering für KI-Modelle",
    prompt: `Du bist ein Expert für Prompt Engineering. Erstelle den optimalen Prompt für folgende Aufgabe:

Aufgabe: [BESCHREIBE_DEINE_AUFGABE]

Bitte entwickle:

1. **Context Setting**
   - Rolle und Expertise definieren
   - Ziel und Erwartungen klar machen
   - Format und Struktur vorgeben

2. **Input Specification**
   - Welche Informationen benötigt werden
   - Format der Eingabe
   - Beispiele für bessere Ergebnisse

3. **Output Requirements**
   - Gewünschtes Format
   - Länge und Detailgrad
   - Spezielle Anforderungen

4. **Constraints & Guidelines**
   - Was vermieden werden soll
   - Qualitätsstandards
   - Sicherheitsrichtlinien

5. **Iteration Plan**
   - Wie der Prompt verfeinert werden kann
   - A/B-Testing-Vorschläge
   - Feedback-Integration

Beispiel-Prompt mit allen Elementen.`,
    icon: "🤖",
    gradient: "gradient-indigo",
    featured: true,
    difficulty: "Fortgeschritten",
    tags: ["AI", "Engineering", "Optimization", "Best Practices"],
    usage: "KI-Integration, Automatisierung, Workflow-Optimierung",
    examples: ["ChatGPT Prompts", "Claude Prompts", "Custom AI Models"]
  },
  {
    id: 8,
    title: "Social Media Manager",
    category: "Marketing",
    subcategory: "Social",
    description: "Social Media Content und Strategie",
    prompt: `Du bist ein erfahrener Social Media Manager. Erstelle eine umfassende Social Media Strategie für [BRAND/UNTERNEHMEN].

Strategie-Bereiche:

1. **Platform Selection**
   - Welche Plattformen sind relevant?
   - Zielgruppe pro Plattform
   - Content-Typen pro Platform

2. **Content Calendar**
   - Wöchentliche Themen
   - Posting-Schedule
   - Content-Mix (70-20-10 Regel)

3. **Content Creation**
   - Caption-Templates
   - Hashtag-Strategie
   - Visual Guidelines

4. **Engagement Strategy**
   - Community Management
   - Influencer Collaboration
   - User-Generated Content

5. **Analytics & Optimization**
   - KPIs definieren
   - Performance-Tracking
   - A/B-Testing

Bitte gib konkrete Beispiele und Templates.`,
    icon: "📱",
    gradient: "gradient-yellow",
    featured: false,
    difficulty: "Mittel",
    tags: ["Marketing", "Social Media", "Content", "Strategy"],
    usage: "Brand Building, Community Management, Lead Generation",
    examples: ["Instagram Strategy", "LinkedIn Content", "TikTok Campaigns"]
  },
  {
    id: 9,
    title: "UX/UI Designer",
    category: "Design",
    subcategory: "UX",
    description: "User Experience und Interface Design",
    prompt: `Du bist ein Senior UX/UI Designer. Entwickle ein umfassendes Design-Konzept für [PRODUKT/APP].

Design-Process:

1. **User Research**
   - Personas erstellen
   - User Journey Mapping
   - Pain Points identifizieren

2. **Information Architecture**
   - Sitemap
   - Navigation-Struktur
   - Content-Hierarchie

3. **Wireframing & Prototyping**
   - Low-fidelity Wireframes
   - Interactive Prototypes
   - User Testing Plan

4. **Visual Design**
   - Design System
   - Color Palette
   - Typography

5. **Usability Testing**
   - Test-Szenarien
   - Feedback-Integration
   - Iteration-Plan

Bitte gib konkrete Design-Empfehlungen und Best Practices.`,
    icon: "🎨",
    gradient: "gradient-teal",
    featured: false,
    difficulty: "Fortgeschritten",
    tags: ["Design", "UX", "UI", "User Research"],
    usage: "App-Design, Website-Design, Product Design",
    examples: ["Mobile App", "E-Commerce Site", "Dashboard Design"]
  },
  {
    id: 10,
    title: "Financial Advisor",
    category: "Finance",
    subcategory: "Planning",
    description: "Finanzplanung und Investment-Strategien",
    prompt: `Du bist ein zertifizierter Financial Advisor. Erstelle einen umfassenden Finanzplan für [KUNDE/SITUATION].

Planungs-Bereiche:

1. **Financial Assessment**
   - Aktuelle Finanzsituation
   - Einnahmen & Ausgaben
   - Vermögensaufbau

2. **Goal Setting**
   - Kurz- und langfristige Ziele
   - Priorisierung
   - Timeline

3. **Investment Strategy**
   - Risikotoleranz
   - Asset Allocation
   - Diversifikation

4. **Risk Management**
   - Versicherungen
   - Emergency Fund
   - Estate Planning

5. **Tax Optimization**
   - Steuersparmöglichkeiten
   - Retirement Accounts
   - Tax-Efficient Investing

Bitte gib konkrete Empfehlungen und Zahlen.`,
    icon: "💰",
    gradient: "gradient-emerald",
    featured: false,
    difficulty: "Mittel",
    tags: ["Finance", "Planning", "Investment", "Tax"],
    usage: "Persönliche Finanzplanung, Investment-Beratung, Retirement Planning",
    examples: ["Young Professional", "Family Planning", "Retirement"]
  },
  {
    id: 100,
    title: "Midjourney: Fotorealistisches Katzenporträt",
    category: "Bild",
    subcategory: "Midjourney",
    description: "Fotorealistisches Porträt einer getigerten Katze mit grünen Augen auf einer Fensterbank im Sonnenlicht.",
    prompt: "a photorealistic portrait of a tabby cat with green eyes, sitting on a windowsill in the sunlight",
    icon: "🐱",
    gradient: "gradient-blue",
    featured: false,
    difficulty: "Anfänger",
    tags: ["Midjourney", "Bild", "Fotorealismus"],
    usage: "Bildgenerierung",
    examples: ["Tierporträt", "Fotorealismus"]
  },
  {
    id: 101,
    title: "DALL-E 3: Stadt-Skyline am Fluss",
    category: "Bild",
    subcategory: "DALL-E 3",
    description: "Hochauflösendes Foto einer Stadt-Skyline, die sich in einem ruhigen Fluss spiegelt.",
    prompt: "High-resolution photo of a city skyline reflected in a serene river, capturing the interplay of urban architecture and natural elements",
    icon: "🏙️",
    gradient: "gradient-cyan",
    featured: false,
    difficulty: "Anfänger",
    tags: ["DALL-E", "Bild", "Stadt"],
    usage: "Bildgenerierung",
    examples: ["Stadtlandschaft", "Reflexion"]
  },
  {
    id: 102,
    title: "Runway: Dynamische Kamerafahrt Pferd",
    category: "Video",
    subcategory: "Runway",
    description: "Dynamische Kamerafahrt: Eine Frau galoppiert auf einem schwarzen Pferd durch ein Feld roter Mohnblumen. Die Kamera folgt ihr, bis zum Close-up des Pferdekopfes.",
    prompt: "Dynamic motion: tracking a woman galloping on a black horse through a field of red poppies. The camera follows her, gradually narrowing the frame until a close-up of the horse's head.",
    icon: "🐎",
    gradient: "gradient-orange",
    featured: false,
    difficulty: "Fortgeschritten",
    tags: ["Runway", "Video", "Kamerafahrt"],
    usage: "Videogenerierung",
    examples: ["Kamerafahrt", "Dynamik"]
  },
  {
    id: 103,
    title: "ElevenLabs: Britischer Sportkommentator",
    category: "Audio",
    subcategory: "ElevenLabs",
    description: "Energiegeladene weibliche Sportkommentatorin mit britischem Akzent, die ein Fußballspiel schnell und leidenschaftlich kommentiert.",
    prompt: "A high-energy female sports commentator with a thick British accent, passionately delivering play-by-play coverage of a football match in a very quick pace.",
    icon: "🎙️",
    gradient: "gradient-green",
    featured: false,
    difficulty: "Fortgeschritten",
    tags: ["ElevenLabs", "Audio", "Sportkommentar"],
    usage: "Audiogenerierung",
    examples: ["Sport", "Kommentar"]
  },
  {
    id: 104,
    title: "Amazon Q Developer: Cloud-Architektur",
    category: "Code",
    subcategory: "Amazon Q Developer",
    description: "AWS-Architekturdiagramm und Services für eine skalierbare Node.js E-Commerce-App mit MongoDB und Auto-Scaling.",
    prompt: "I need to deploy a containerized Node.js e-commerce application that handles 50,000 daily users with peak loads during promotional events. Requirements: - High availability across multiple regions - MongoDB for persistence - Auto-scaling capabilities. Please provide: 1. AWS architecture diagram 2. List of required services with configurations 3. Security best practices 4. Operational monitoring recommendations.",
    icon: "☁️",
    gradient: "gradient-blue",
    featured: false,
    difficulty: "Profi",
    tags: ["Amazon Q", "Cloud", "Architektur"],
    usage: "Cloud-Architektur",
    examples: ["E-Commerce", "AWS"]
  },
  {
    id: 105,
    title: "Gemini Code Assist: Python GCP Instanzen",
    category: "Code",
    subcategory: "Gemini Code Assist",
    description: "Python-Code, um alle Compute Engine Instanzen auf Google Cloud aufzulisten.",
    prompt: "create Python code to list all Compute Engine instances. You are an expert software developer using Google Cloud.",
    icon: "🐍",
    gradient: "gradient-cyan",
    featured: false,
    difficulty: "Fortgeschritten",
    tags: ["Gemini", "Python", "Cloud"],
    usage: "Codegenerierung",
    examples: ["Cloud", "Python"]
  },
  {
    id: 106,
    title: "Power BI: Umsatz nach Region",
    category: "Analyse",
    subcategory: "Power BI",
    description: "Power BI Q&A: Zeige den Umsatz nach Region als Balkendiagramm.",
    prompt: "Show me sales breakdown by region.",
    icon: "📊",
    gradient: "gradient-purple",
    featured: false,
    difficulty: "Anfänger",
    tags: ["Power BI", "Analyse", "Umsatz"],
    usage: "Datenanalyse",
    examples: ["Umsatz", "Region"]
  },
  {
    id: 107,
    title: "Watson Discovery: Vertragsanalyse",
    category: "Analyse",
    subcategory: "Watson Discovery",
    description: "IBM Watson Discovery: Durchschnittlicher Preis aus Produktverträgen berechnen.",
    prompt: "average(product.price)",
    icon: "🔍",
    gradient: "gradient-indigo",
    featured: false,
    difficulty: "Fortgeschritten",
    tags: ["Watson", "Analyse", "Vertrag"],
    usage: "Vertragsanalyse",
    examples: ["Preisberechnung", "Vertragsdaten"]
  }
];

const categories = ["Alle", "Content", "Code", "Business", "Creative", "Data", "Product", "AI", "Marketing", "Design", "Finance"];
const difficulties = ["Alle", "Anfänger", "Mittel", "Fortgeschritten"];

function useScrollReveal(className = 'fade-in', threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          (node as HTMLElement).classList.add(className);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [className, threshold]);
  return ref;
}

export default function PromptsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Alle");
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [pulseId, setPulseId] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [favBounceId, setFavBounceId] = useState<number | null>(null);
  const [favParticles, setFavParticles] = useState<{id:number;left:number;}[]>([]);
  const router = useRouter();

  const filteredPrompts = promptsData.filter(prompt => {
    const matchesCategory = selectedCategory === "Alle" || prompt.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "Alle" || prompt.difficulty === selectedDifficulty;
    const matchesSearch = prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prompt.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prompt.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const featuredPrompt = promptsData.find(prompt => prompt.featured);

  const handleCopy = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setPulseId(id);
    setTimeout(() => setCopiedId(null), 1500);
    setTimeout(() => setPulseId(null), 400);
  };

  const handleFavorite = (id: number) => {
    setFavorites(favs => favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id]);
    setFavBounceId(id);
    // Partikel erzeugen
    setFavParticles(ps => [...ps, ...Array.from({length: 6}, (_,i) => ({id: Date.now()+i, left: Math.random()*80+10}))]);
    setTimeout(() => setFavBounceId(null), 500);
  };

  const headerRef = useScrollReveal('fade-in');
  const featuredRef = useScrollReveal('slide-up');

  return (
    <div className="min-h-screen py-8 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          ref={headerRef}
          className="text-center mb-12"
        >
          <BlurText as="h1" text="Prompts" className="text-4xl md:text-5xl font-bold mb-4" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professionelle Prompts für alle Bereiche - von Content Creation bis Code Review
          </p>
        </motion.div>

        {/* Featured Prompt */}
        {featuredPrompt && (
          <motion.section ref={featuredRef} className="mb-12">
            <BlurText as="h2" text="Prompt der Woche" className="text-2xl font-bold mb-6 text-center flex items-center justify-center" />
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`card p-8 ${featuredPrompt.gradient} hover-lift ring-2 ring-yellow-500/30`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{featuredPrompt.icon}</div>
                    <div>
                      <BlurText as="h3" text={featuredPrompt.title} className="text-2xl font-bold text-white" />
                      <p className="text-white/80">{featuredPrompt.category} • {featuredPrompt.subcategory}</p>
                    </div>
                  </div>
                  <p className="text-white/90 mb-4">{featuredPrompt.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPrompt.tags.map((tag, index) => (
                      <span key={index} className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-white/70">Schwierigkeit:</span>
                      <BlurText as="p" text={featuredPrompt.difficulty} className="text-white font-medium" />
                    </div>
                    <div>
                      <span className="text-white/70">Kategorie:</span>
                      <BlurText as="p" text={featuredPrompt.category} className="text-white font-medium" />
                    </div>
                  </div>
                </div>
                <div>
                  <BlurText as="h4" text="Verwendung" className="text-lg font-semibold text-white mb-4" />
                  <BlurText as="p" text={featuredPrompt.usage} className="text-white/90 mb-6" />
                  <BlurText as="h4" text="Beispiele" className="text-lg font-semibold text-white mb-4" />
                  <div className="space-y-2 mb-6">
                    {featuredPrompt.examples.map((example, index) => (
                      <div key={index} className="flex items-center">
                        <span className="text-white/80 mr-2">•</span>
                        <BlurText as="span" text={example} className="text-white" />
                      </div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCopy(featuredPrompt.prompt, featuredPrompt.id)}
                    className="w-full bg-white/20 text-white py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors flex items-center justify-center"
                  >
                    {copiedId === featuredPrompt.id ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Kopiert!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Prompt kopieren
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.section>
        )}

        {/* Apple-Style Filter-Tabs für Kategorien */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          {/* Apple-Style Filter-Tabs für Kategorien */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {['Alle', 'Content', 'Marketing', 'Programmierung', 'Design', 'KI-Strategie'].map(cat => (
              <button
                key={cat}
                className={`glass-button px-5 py-2 rounded-xl font-semibold text-base transition-all duration-200 button-bounce ${selectedCategory === cat ? 'bg-white/10 text-blue-400 ring-2 ring-blue-400/30 scale-105' : 'text-gray-200'}`}
                onClick={e => { e.stopPropagation(); setSelectedCategory(cat); }}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Apple-Style Filter-Tabs für Schwierigkeitsgrade */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {['Alle', 'Anfänger', 'Mittel', 'Fortgeschritten'].map(diff => (
              <button
                key={diff}
                className={`glass-button px-5 py-2 rounded-xl font-semibold text-base transition-all duration-200 button-bounce ${selectedDifficulty === diff ? 'bg-white/10 text-pink-400 ring-2 ring-pink-400/30 scale-105' : 'text-gray-200'}`}
                onClick={e => { e.stopPropagation(); setSelectedDifficulty(diff); }}
              >
                {diff}
              </button>
            ))}
          </div>
            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Suche nach Prompts, Tags oder Beschreibung..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors w-full max-w-md"
              />
            </div>
        </motion.div>

        {/* All Prompts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <BlurText as="h2" text="Alle KI-Prompts" className="text-2xl font-bold mb-6 text-center text-white" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {filteredPrompts.map((prompt, index) => (
                <motion.div
                  key={prompt.id}
                  initial={{ opacity: 0, y: 40, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.08, type: 'spring', bounce: 0.18 }}
                  className="relative group bg-white/5 rounded-3xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 border border-white/10"
                  onClick={() => router.push(`/prompts/${prompt.id}`)}
                  whileHover={{ scale: 1.025 }}
                >
                  {/* Parallax Bild oben */}
                  <div className="p-7 flex flex-col gap-3">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-2xl ${prompt.gradient}`}>{prompt.icon}</span>
                      <div>
                        <BlurText as="h3" text={prompt.title} className="text-xl font-bold text-white mb-1 leading-tight" />
                        <BlurText as="p" text={`${prompt.category} • ${prompt.subcategory}`} className="text-xs text-gray-400" />
                      </div>
                    </div>
                    <BlurText as="p" text={prompt.description} className="text-gray-200 text-base mb-2 min-h-[48px]" />
                    <div className="flex flex-wrap gap-2 mb-2">
                      {prompt.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-orange-500/10 text-orange-300 px-2 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <BlurText as="span" text={prompt.difficulty} className="text-sm text-gray-400" />
                      <BlurText as="span" text={prompt.category} className="text-xs text-gray-500" />
                    </div>
                    <div className="mb-2">
                      <BlurText as="span" text="Verwendung:" className="text-gray-400 text-xs" />
                      <BlurText as="span" text={prompt.usage} className="text-gray-200 text-sm ml-2" />
                    </div>
                    <div className="mb-2">
                      <BlurText as="span" text="Beispiele:" className="text-gray-400 text-xs" />
                      <BlurText as="span" text={prompt.examples.join(', ')} className="text-gray-200 text-sm ml-2" />
                    </div>
                    <div className="mb-2">
                      <BlurText as="span" text="Prompt:" className="text-gray-400 text-xs" />
                      <BlurText as="span" text={prompt.prompt.slice(0, 120) + (prompt.prompt.length > 120 ? '...' : '')} className="text-gray-200 text-sm ml-2 break-words" />
                    </div>
                    <div className="flex gap-2 mt-2 items-center">
                      <button
                        className={`glass-button button-bounce flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 relative ${pulseId === prompt.id ? 'animate-pulse' : ''}`}
                        onClick={e => { e.stopPropagation(); handleCopy(prompt.prompt, prompt.id); }}
                      >
                        {copiedId === prompt.id ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                        <span>{copiedId === prompt.id ? 'Copied!' : 'Kopieren'}</span>
                        {pulseId === prompt.id && (
                          <span className="absolute inset-0 rounded-lg bg-green-400/20 animate-pulse pointer-events-none" />
                        )}
                      </button>
                      <button
                        className={`ml-2 relative text-pink-400 transition-transform duration-200 ${favBounceId === prompt.id ? 'scale-125' : ''}`}
                        onClick={e => { e.stopPropagation(); handleFavorite(prompt.id); }}
                        aria-label="Favorit markieren"
                      >
                        {favorites.includes(prompt.id)
                          ? <Heart className="w-6 h-6 fill-pink-400 text-pink-400 drop-shadow" fill="currentColor" />
                          : <Heart className="w-6 h-6" />}
                        {/* Partikel-Animation */}
                        {favBounceId === prompt.id && favParticles.slice(-6).map((p, i) => (
                          <span key={p.id} style={{
                            position: 'absolute',
                            left: `${p.left}%`,
                            top: '-10px',
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: 'rgba(255,99,132,0.7)',
                            opacity: 0.7,
                            animation: `particleUp 0.7s ${i*0.05}s ease-out forwards`
                          }} />
                        ))}
                      </button>
                    </div>
                  </div>
                  {/* Apple-Style Glow Effekt */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{boxShadow:'0 0 60px 0 #fff, 0 0 120px 0 #f5f5f5'}} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Best Practices Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <BlurText as="h2" text="Prompt Engineering Best Practices" className="text-3xl font-bold mb-8 text-center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-400 mr-3" />
                <BlurText as="h3" text="Klare Ziele" className="text-xl font-bold" />
              </div>
              <BlurText as="p" text="Definiere genau, was du erreichen möchtest. Je spezifischer dein Prompt, desto besser das Ergebnis." className="text-gray-300" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-green-400 mr-3" />
                <BlurText as="h3" text="Kontext geben" className="text-xl font-bold" />
              </div>
              <BlurText as="p" text="Stelle die Rolle und den Kontext klar. Gib Beispiele und definiere das gewünschte Format." className="text-gray-300" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-purple-400 mr-3" />
                <BlurText as="h3" text="Iteration" className="text-xl font-bold" />
              </div>
              <BlurText as="p" text="Verfeinere deine Prompts basierend auf den Ergebnissen. Teste verschiedene Ansätze." className="text-gray-300" />
            </motion.div>
          </div>
        </motion.section>
      </div>
      {/* CSS für Partikel-Animation */}
      <style jsx global>{`
        @keyframes particleUp {
          0% { transform: translateY(0) scale(1); opacity: 0.7; }
          80% { transform: translateY(-24px) scale(1.2); opacity: 0.8; }
          100% { transform: translateY(-36px) scale(0.7); opacity: 0; }
        }
      `}</style>
    </div>
  );
} 