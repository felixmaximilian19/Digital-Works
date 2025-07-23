"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "../components/Logo";
import { useEffect, useRef } from "react";
import Image from "next/image";
import BlurText from '../components/BlurText';
import FadeContent from '../components/FadeContent';

function useScrollReveal(className = "fade-in", threshold = 0.15) {
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
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [className, threshold]);
  return ref;
}

// Trends Data
const trends = [
  {
    id: 1,
    title: "Agentische KI",
    description: "Autonome KI-Systeme für komplexe, mehrstufige Aufgaben",
    icon: "🤖",
    gradient: "gradient-blue",
    details: "Voraussichtlich 13,81 Milliarden US-Dollar Marktvolumen 2025",
  },
  {
    id: 2,
    title: "Multimodale KI",
    description: "Text, Bild und Audio in einem System",
    icon: "🎨",
    gradient: "gradient-purple",
    details: "Erweiterte Kontextfenster und verbesserte Denkfähigkeiten",
  },
  {
    id: 3,
    title: "Marktdynamik",
    description: "Neue Akteure und Investitionen",
    icon: "📈",
    gradient: "gradient-orange",
    details: "109,1 Milliarden US-Dollar private KI-Investitionen 2024",
  },
  {
    id: 4,
    title: "Responsible AI",
    description: "Ethische Entwicklung und Governance",
    icon: "🛡️",
    gradient: "gradient-pink",
    details: "Globale Rahmenwerke für KI-Governance",
  },
];

// Leading AI Models 2024-2025
const leadingAIModels = [
  {
    id: 1,
    name: "GPT-4.5",
    provider: "OpenAI",
    description: "Vereinheitlichtes KI-System mit erweitertem Kontextfenster",
    icon: "🧠",
    gradient: "gradient-blue",
    featured: true,
    price: "Preis nach Verbrauch",
    website: "https://openai.com"
  },
  {
    id: 2,
    name: "Grok 3",
    provider: "xAI",
    description: "1 Million Tokens Kontext, Super Grok Agents, $40/Monat",
    icon: "🚀",
    gradient: "gradient-purple",
    featured: true,
    price: "$40/Monat",
    website: "https://x.ai"
  },
  {
    id: 3,
    name: "Gemini 2.5 Pro",
    provider: "Google",
    description: "Large Action Models, multimodale Suite",
    icon: "🔍",
    gradient: "gradient-orange",
    featured: true,
    price: "$19.99-249.99/Monat",
    website: "https://gemini.google.com"
  },
  {
    id: 4,
    name: "DeepSeek R1",
    provider: "DeepSeek AI",
    description: "Open-Source, Reasoning-First-Ansatz, 30x günstiger",
    icon: "🔬",
    gradient: "gradient-cyan",
    featured: false,
    price: "Open-Source",
    website: "https://www.deepseek.com"
  },
  {
    id: 5,
    name: "Claude 3 Opus",
    provider: "Anthropic",
    description: "Multimodale Fähigkeiten, $17-20/Monat",
    icon: "💎",
    gradient: "gradient-pink",
    featured: false,
    price: "$17-20/Monat",
    website: "https://claude.ai"
  },
];

// AI Tools by Category
const aiToolsCategories = [
  {
    id: 1,
    title: "KI-Text- und Schreibtools",
    icon: "✍️",
    gradient: "gradient-blue",
    tools: [
      {
        name: "Jasper AI",
        description: "Inhaltserstellung, SEO-optimiert",
        price: "$49-69/Monat",
        website: "https://www.jasper.ai",
        image: "/api/placeholder/200/120"
      },
      {
        name: "Notion AI",
        description: "Automatisierung, intelligente Vorschläge",
        price: "$20/Monat",
        website: "https://www.notion.so",
        image: "/api/placeholder/200/120"
      },
      {
        name: "Grammarly",
        description: "KI-Schreibassistent, Plagiatserkennung",
        price: "Freemium",
        website: "https://www.grammarly.com",
        image: "/api/placeholder/200/120"
      }
    ]
  },
  {
    id: 2,
    title: "KI-Bild- und Design-Tools",
    icon: "🎨",
    gradient: "gradient-purple",
    tools: [
      {
        name: "Midjourney",
        description: "Filmische Bilder, Zeichenkonsistenz",
        price: "$10/Monat",
        website: "https://www.midjourney.com",
        image: "/api/placeholder/200/120"
      },
      {
        name: "DALL·E",
        description: "Genaue Textwiedergabe",
        price: "ChatGPT Plus $20/Monat",
        website: "https://openai.com/dall-e",
        image: "/api/placeholder/200/120"
      },
      {
        name: "Stable Diffusion",
        description: "Open-Source, Prompt-Adhärenz",
        price: "Kostenlos/Open-Source",
        website: "https://stability.ai",
        image: "/api/placeholder/200/120"
      },
      {
        name: "Adobe Firefly",
        description: "Adobe-Integration, SVG-Generierung",
        price: "$4.99/Monat",
        website: "https://www.adobe.com/products/firefly.html",
        image: "/api/placeholder/200/120"
      },
      {
        name: "Ideogram",
        description: "Beste Textwiedergabe",
        price: "$7/Monat",
        website: "https://ideogram.ai",
        image: "/api/placeholder/200/120"
      }
    ]
  },
  {
    id: 3,
    title: "KI-Video- und Animations-Tools",
    icon: "🎬",
    gradient: "gradient-orange",
    tools: [
      {
        name: "Synthesia",
        description: "KI-Avatare, 140+ Sprachen",
        price: "$29-89/Monat",
        website: "https://www.synthesia.io",
        image: "/api/placeholder/200/120"
      },
      {
        name: "Google Veo 2 & 3",
        description: "Filmische Videos mit Sound",
        price: "$19.99-249.99/Monat",
        website: "https://deepmind.google/technologies/veo/",
        image: "/api/placeholder/200/120"
      },
      {
        name: "OpenAI Sora",
        description: "ChatGPT-Integration",
        price: "$20-200/Monat",
        website: "https://openai.com/sora",
        image: "/api/placeholder/200/120"
      },
      {
        name: "Runway",
        description: "Erweiterte Videobearbeitung",
        price: "$15-95/Monat",
        website: "https://runwayml.com",
        image: "/api/placeholder/200/120"
      }
    ]
  },
  {
    id: 4,
    title: "KI-Audio-Tools",
    icon: "🎤",
    gradient: "gradient-pink",
    tools: [
      {
        name: "ElevenLabs",
        description: "Sprachsynthese, Voice Cloning",
        price: "$1-99/Monat",
        website: "https://elevenlabs.io",
        image: "/api/placeholder/200/120"
      },
      {
        name: "Descript",
        description: "Video/Podcast-Bearbeitung",
        price: "$24-32/Monat",
        website: "https://www.descript.com",
        image: "/api/placeholder/200/120"
      },
      {
        name: "Murf.ai",
        description: "Text-zu-Sprache, 20+ Sprachen",
        price: "$19-199/Monat",
        website: "https://murf.ai",
        image: "/api/placeholder/200/120"
      },
      {
        name: "LALAL.AI",
        description: "Audio-Trennung, Qualitätsverbesserung",
        price: "$20-35",
        website: "https://www.lalal.ai",
        image: "/api/placeholder/200/120"
      }
    ]
  },
  {
    id: 5,
    title: "KI-Code- und Entwicklungs-Tools",
    icon: "💻",
    gradient: "gradient-cyan",
    tools: [
      {
        name: "GitHub Copilot",
        description: "Paar-Programmierung, IDE-Integration",
        price: "Microsoft",
        website: "https://github.com/features/copilot",
        image: "/api/placeholder/200/120"
      },
      {
        name: "Amazon Q Developer",
        description: "AWS-optimiert, Multi-Datei-Änderungen",
        price: "$19/Monat",
        website: "https://aws.amazon.com/q/developer/",
        image: "/api/placeholder/200/120"
      },
      {
        name: "Google Gemini Code Assist",
        description: "Google Cloud-Integration",
        price: "$19.99-249.99/Monat",
        website: "https://cloud.google.com/products/ai",
        image: "/api/placeholder/200/120"
      },
      {
        name: "Tabnine",
        description: "Datenschutz-fokussiert, 30+ Sprachen",
        price: "$9-39/Monat",
        website: "https://www.tabnine.com",
        image: "/api/placeholder/200/120"
      }
    ]
  }
];

// Customer Reviews (10 total)
const customerReviews = [
  {
    id: 1,
    name: "Sarah M.",
    company: "Tech Startup",
    rating: 5,
    review: "Die Übersicht über KI-Tools hat unserem Team geholfen, die richtigen Entscheidungen zu treffen. Besonders hilfreich war die Preisvergleich.",
    avatar: "SM"
  },
  {
    id: 2,
    name: "Marcus K.",
    company: "Marketing Agentur",
    rating: 5,
    review: "Endlich eine verständliche Zusammenfassung aller wichtigen KI-Modelle. Midjourney und DALL·E Vergleiche waren Gold wert.",
    avatar: "MK"
  },
  {
    id: 3,
    name: "Jennifer L.",
    company: "Content Creator",
    rating: 4,
    review: "Jasper AI und Notion AI Empfehlungen haben meine Produktivität verdoppelt. Sehr detaillierte Bewertungen.",
    avatar: "JL"
  },
  {
    id: 4,
    name: "David R.",
    company: "Software Engineer",
    rating: 5,
    review: "GitHub Copilot vs. Amazon Q Vergleich war genau das, was ich gesucht habe. Perfekte Zusammenfassung für Entwickler.",
    avatar: "DR"
  },
  {
    id: 5,
    name: "Anna T.",
    company: "E-Learning",
    rating: 4,
    review: "Die Kategorisierung der Tools ist sehr durchdacht. Hat mir bei der Auswahl für unser Bildungsprojekt sehr geholfen.",
    avatar: "AT"
  },
  {
    id: 6,
    name: "Thomas B.",
    company: "Consultant",
    rating: 5,
    review: "Comprehensive und aktuell. Die Preisinformationen sind besonders wertvoll für Budgetplanung von Kunden.",
    avatar: "TB"
  },
  {
    id: 7,
    name: "Lisa W.",
    company: "Design Studio",
    rating: 5,
    review: "Adobe Firefly und Ideogram haben unser Design-Workflow revolutioniert. Danke für die ehrlichen Tool-Reviews!",
    avatar: "LW"
  },
  {
    id: 8,
    name: "Robert S.",
    company: "Podcast Producer",
    rating: 4,
    review: "ElevenLabs und Descript waren Game-Changer für unsere Podcast-Produktion. Excellent tool recommendations.",
    avatar: "RS"
  },
  {
    id: 9,
    name: "Maria G.",
    company: "Data Analyst",
    rating: 5,
    review: "Tableau AI Suite Empfehlung war spot-on. Die Business Intelligence Tools Sektion ist fantastisch organisiert.",
    avatar: "MG"
  },
  {
    id: 10,
    name: "Alex C.",
    company: "Startup Founder",
    rating: 5,
    review: "Von Zapier bis Perplexity AI - alle Tools funktionieren wie beschrieben. Diese Plattform spart mir Stunden an Recherche.",
    avatar: "AC"
  }
];

// Quick Actions
const quickActions = [
  { name: "KI-News", href: "/news", icon: "📰", gradient: "gradient-blue" },
  {
    name: "KI-Modelle",
    href: "/models",
    icon: "🤖",
    gradient: "gradient-purple",
  },
  { name: "KI-Tools", href: "/tools", icon: "🛠️", gradient: "gradient-orange" },
  { name: "Prompts", href: "/prompts", icon: "💡", gradient: "gradient-pink" },
  {
    name: "Best Practices",
    href: "/best-practices",
    icon: "📚",
    gradient: "gradient-cyan",
  },
];

// Skeleton Loader Komponente
function CardSkeleton() {
  return (
    <div className="card skeleton h-48 w-full mb-6" />
  );
}

export default function Home() {
  // Scroll Reveal Refs
  const heroRef = useScrollReveal("fade-in");
  const featuresRef = useScrollReveal("slide-up");

  // AI Stack Features
  const aiStackFeatures = [
    {
      icon: "🧠",
      title: "Intelligent Modelle",
      description:
        "Unsere KI-Modelle sind in der Lage, komplexe Aufgaben zu lösen und neue Erkenntnisse zu generieren.",
    },
    {
      icon: "🔗",
      title: "Modell Integration",
      description:
        "Einfache Integration unserer KI-Modelle in Ihre bestehenden Systeme.",
    },
    {
      icon: "🚀",
      title: "Schnelle Lieferung",
      description:
        "Unsere Modelle sind schnell und zuverlässig, um Ihre Anforderungen zu erfüllen.",
    },
    {
      icon: "🛡️",
      title: "Sicherheit & Vertrauen",
      description:
        "Wir legen großen Wert auf die Sicherheit und Vertraulichkeit Ihrer Daten.",
    },
  ];

  // Blog Posts
  const blogPosts = [
    {
      title: "KI-Trends 2025",
      excerpt:
        "Was erwartet uns im nächsten Jahr? Die wichtigsten Entwicklungen im Überblick.",
      link: "/news",
      image: "/globe.svg",
    },
    {
      title: "Best Practices für KI-Teams",
      excerpt:
        "So gelingt die Einführung von KI in Unternehmen – Tipps aus der Praxis.",
      link: "/best-practices",
      image: "/file.svg",
    },
    {
      title: "Prompt Engineering",
      excerpt:
        "Wie man mit den richtigen Prompts das Maximum aus KI-Modellen herausholt.",
      link: "/prompts",
      image: "/window.svg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section (Finvolv Style) */}
      <section
        ref={heroRef}
        className="relative py-28 px-6 bg-gradient-to-br from-blue-900/60 to-black/90"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0 }}
            className="mb-10"
          >
            <Logo size="xl" showText={true} className="mx-auto mb-6" />
            <BlurText as="h1" text="KI-Landscape 2024-2025: Vollständige Übersicht" className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight" />
            <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Führende KI-Modelle, Tools und Best Practices für die Zukunft der künstlichen Intelligenz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#demo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg gradient-blue text-white font-semibold hover-glow shadow-lg text-lg"
              >
                Watch Demo
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors text-lg"
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section (AI Stack Style) */}
      <section
        ref={featuresRef}
        id="features"
        className="py-20 px-6 bg-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <BlurText as="h2" text="Warum AI Stack?" className="text-3xl md:text-4xl font-bold text-center mb-14" />
          <FadeContent delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiStackFeatures.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0, delay: idx * 0.1 }}
                  className="card p-8 text-center hover-lift"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <BlurText as="h3" text={feature.title} className="text-xl font-bold mb-2 text-white" />
                  <p className="text-gray-300 text-base">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </FadeContent>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <BlurText as="h2" text="Schnellzugriff" className="text-3xl md:text-4xl font-bold text-center mb-12" />
          <FadeContent delay={150}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={action.href} className="block">
                    <div
                      className={`card p-6 text-center ${action.gradient} hover-lift`}
                    >
                      <div className="text-3xl mb-3">{action.icon}</div>
                      <BlurText as="h3" text={action.name} className="text-white font-semibold" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </FadeContent>
        </div>
      </section>

      {/* Trends Section */}
      <section ref={useScrollReveal("slide-up")} className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <BlurText as="h2" text="Globale KI-Trends 2024-2025" className="text-3xl md:text-4xl font-bold text-center mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trends.map((trend, index) => (
              <motion.div
                key={trend.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0, delay: index * 0.1 }}
                className="card p-8 hover-lift"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-16 h-16 rounded-xl ${trend.gradient} flex items-center justify-center text-2xl`}
                  >
                    {trend.icon}
                  </div>
                  <div className="flex-1">
                    <BlurText as="h3" text={trend.title} className="text-xl font-bold mb-2" />
                    <p className="text-gray-300 mb-3">
                      {trend.description}
                    </p>
                    <p className="text-sm text-gray-400">
                      {trend.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leading AI Models Section */}
      <section ref={useScrollReveal("slide-up")} className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <BlurText as="h2" text="Führende KI-Modelle 2024-2025" className="text-3xl md:text-4xl font-bold text-center mb-12" />
          <FadeContent delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadingAIModels.map((model, index) => (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0, delay: index * 0.1 }}
                  className={`card p-6 ${model.featured ? "ring-2 ring-blue-500/30" : ""} hover-lift`}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg ${model.gradient} flex items-center justify-center text-xl mr-3`}
                    >
                      {model.icon}
                    </div>
                    <div>
                      <BlurText as="h3" text={model.name} className="text-lg font-bold" />
                      <p className="text-sm text-gray-400">
                        {model.provider}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    {model.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-400">{model.price}</span>
                    {model.featured && (
                      <span className="inline-block bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full">
                        ⭐ Featured
                      </span>
                    )}
                  </div>
                  <motion.a
                    href={model.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 block text-center px-4 py-2 rounded-lg gradient-blue text-white font-semibold hover-glow text-sm"
                  >
                    Website besuchen
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </FadeContent>
        </div>
      </section>

      {/* AI Tools Categories Section */}
      <section ref={useScrollReveal("slide-up")} className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <BlurText as="h2" text="Kategorisierte KI-Tools" className="text-3xl md:text-4xl font-bold text-center mb-12" />
          <FadeContent delay={300}>
            <div className="space-y-12">
              {aiToolsCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0, delay: categoryIndex * 0.2 }}
                  className="card p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-xl ${category.gradient} flex items-center justify-center text-2xl mr-4`}>
                      {category.icon}
                    </div>
                    <BlurText as="h3" text={category.title} className="text-2xl font-bold" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.tools.map((tool, toolIndex) => (
                      <motion.div
                        key={`${category.id}-${toolIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0, delay: (categoryIndex * 0.2) + (toolIndex * 0.1) }}
                        className="glass-panel p-4 hover-lift"
                      >
                        <img 
                          src={tool.image} 
                          alt={tool.name}
                          className="w-full h-24 object-cover rounded-lg mb-3"
                        />
                        <BlurText as="h4" text={tool.name} className="text-lg font-semibold mb-2" />
                        <p className="text-gray-300 text-sm mb-3">{tool.description}</p>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs text-green-400 font-medium">{tool.price}</span>
                        </div>
                        <motion.a
                          href={tool.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="block text-center px-3 py-2 rounded-lg gradient-blue text-white font-semibold hover-glow text-sm"
                        >
                          Tool besuchen
                        </motion.a>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeContent>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section ref={useScrollReveal("slide-up")} className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <BlurText as="h2" text="Was unsere Nutzer sagen" className="text-3xl md:text-4xl font-bold text-center mb-12" />
          <FadeContent delay={400}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {customerReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0, delay: index * 0.1 }}
                  className="card p-6 hover-lift"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full gradient-blue flex items-center justify-center text-white font-bold mr-3">
                      {review.avatar}
                    </div>
                    <div>
                      <BlurText as="h4" text={review.name} className="text-lg font-semibold" />
                      <p className="text-sm text-gray-400">{review.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm italic">"{review.review}"</p>
                </motion.div>
              ))}
            </div>
          </FadeContent>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={useScrollReveal("scale-in")} className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0 }}
            className="card p-12"
          >
            <BlurText as="h2" text="Bereit für die KI-Revolution?" className="text-3xl md:text-4xl font-bold mb-6" />
            <p className="text-xl text-gray-300 mb-8">
              Entdecke die neuesten KI-Tools, Modelle und Best Practices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg gradient-blue text-white font-semibold hover-glow"
              >
                <Link href="/tools">KI-Tools entdecken</Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
              >
                <Link href="/best-practices">Best Practices lernen</Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section
        ref={useScrollReveal("slide-up")}
        className="py-20 px-6 bg-transparent"
      >
        <div className="max-w-5xl mx-auto">
          <BlurText as="h2" text="How it Works" className="text-3xl md:text-4xl font-bold text-center mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📝",
                title: "Sign Up Instantly",
                description:
                  "Create your account in seconds and get started right away.",
              },
              {
                icon: "🔗",
                title: "Connect & Explore",
                description:
                  "Link your accounts and discover powerful AI-driven features.",
              },
              {
                icon: "🚀",
                title: "Grow & Optimize",
                description:
                  "Let smart automation and insights help you reach your goals.",
              },
            ].map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0, delay: idx * 0.1 }}
                className="card p-8 text-center hover-lift"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <BlurText as="h3" text={step.title} className="text-xl font-bold mb-2 text-white" />
                <p className="text-gray-300 text-base">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section (AI Stack) */}
      <section
        ref={useScrollReveal("fade-in")}
        className="py-20 px-6 bg-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <BlurText as="h2" text="Aus dem Blog" className="text-3xl md:text-4xl font-bold text-center mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0, delay: idx * 0.1 }}
                className="card p-6 hover-lift flex flex-col"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={128}
                  className="w-full h-32 object-contain mb-4"
                />
                <BlurText as="h3" text={post.title} className="text-lg font-bold mb-2 text-white" />
                <p className="text-gray-300 text-base mb-4 flex-1">
                  {post.excerpt}
                </p>
                <Link
                  href={post.link}
                  className="text-blue-400 font-semibold hover:underline mt-auto"
                >
                  Mehr erfahren →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 px-6 bg-gradient-to-t from-blue-900/60 to-black/90 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo size="md" showText={true} className="mb-4 md:mb-0" />
          <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
            <Link href="/news">News</Link>
            <Link href="/models">Modelle</Link>
            <Link href="/tools">Tools</Link>
            <Link href="/prompts">Prompts</Link>
            <Link href="/best-practices">Best Practices</Link>
            <Link href="/privacy">Datenschutz</Link>
            <Link href="/impressum">Impressum</Link>
          </div>
          <div className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Digital Works. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
