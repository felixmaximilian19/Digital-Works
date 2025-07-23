'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BlurText from '../../components/BlurText';
import FadeContent from '../../components/FadeContent';

// Complete AI Tools Database
const aiToolsDatabase = [
  {
    id: 1,
    category: "Text & Schreibtools",
    icon: "✍️",
    gradient: "gradient-blue",
    tools: [
      {
        name: "Jasper AI",
        description: "Inhaltserstellung, SEO-optimiert mit über 50 Templates",
        price: "$49-69/Monat",
        website: "https://www.jasper.ai",
        features: ["SEO-Optimierung", "50+ Templates", "Plagiatsprüfung"],
        rating: 4.5,
        image: "/api/placeholder/300/200"
      },
      {
        name: "Notion AI",
        description: "Automatisierung, intelligente Vorschläge für Produktivität",
        price: "$20/Monat",
        website: "https://www.notion.so",
        features: ["Automatisierung", "Smart Suggestions", "Team Collaboration"],
        rating: 4.6,
        image: "/api/placeholder/300/200"
      },
      {
        name: "Grammarly",
        description: "KI-Schreibassistent, Plagiatserkennung, Grammatikprüfung",
        price: "Freemium",
        website: "https://www.grammarly.com",
        features: ["Rechtschreibung", "Grammatik", "Plagiatserkennung"],
        rating: 4.4,
        image: "/api/placeholder/300/200"
      }
    ]
  },
  {
    id: 2,
    category: "Bild & Design Tools",
    icon: "🎨",
    gradient: "gradient-purple",
    tools: [
      {
        name: "Midjourney",
        description: "Filmische Bilder, Zeichenkonsistenz, künstlerische Qualität",
        price: "$10/Monat",
        website: "https://www.midjourney.com",
        features: ["Filmische Qualität", "Konsistenz", "Künstlerisch"],
        rating: 4.8,
        image: "/api/placeholder/300/200"
      },
      {
        name: "DALL·E",
        description: "Genaue Textwiedergabe in Bildern, OpenAI Integration",
        price: "ChatGPT Plus $20/Monat",
        website: "https://openai.com/dall-e",
        features: ["Text zu Bild", "OpenAI Integration", "Hohe Präzision"],
        rating: 4.6,
        image: "/api/placeholder/300/200"
      },
      {
        name: "Stable Diffusion",
        description: "Open-Source, Prompt-Adhärenz, lokale Installation",
        price: "Kostenlos/Open-Source",
        website: "https://stability.ai",
        features: ["Open Source", "Lokal installierbar", "Anpassbar"],
        rating: 4.5,
        image: "/api/placeholder/300/200"
      },
      {
        name: "Adobe Firefly",
        description: "Adobe-Integration, SVG-Generierung, kommerzielle Nutzung",
        price: "$4.99/Monat",
        website: "https://www.adobe.com/products/firefly.html",
        features: ["Adobe Integration", "SVG Support", "Kommerziell"],
        rating: 4.3,
        image: "/api/placeholder/300/200"
      },
      {
        name: "Ideogram",
        description: "Beste Textwiedergabe in Bildern, präzise Typography",
        price: "$7/Monat",
        website: "https://ideogram.ai",
        features: ["Text Rendering", "Typography", "Präzision"],
        rating: 4.7,
        image: "/api/placeholder/300/200"
      }
    ]
  },
  {
    id: 3,
    category: "Video & Animation Tools",
    icon: "🎬",
    gradient: "gradient-orange",
    tools: [
      {
        name: "Synthesia",
        description: "KI-Avatare, 140+ Sprachen, professionelle Videos",
        price: "$29-89/Monat",
        website: "https://www.synthesia.io",
        features: ["KI Avatare", "140+ Sprachen", "Professionell"],
        rating: 4.5,
        image: "/api/placeholder/300/200"
      },
      {
        name: "Google Veo 2 & 3",
        description: "Filmische Videos mit Sound, Google DeepMind Technologie",
        price: "$19.99-249.99/Monat",
        website: "https://deepmind.google/technologies/veo/",
        features: ["Filmische Qualität", "Audio Generation", "Google AI"],
        rating: 4.6,
        image: "/api/placeholder/300/200"
      },
      {
        name: "OpenAI Sora",
        description: "ChatGPT-Integration, realistische Videoerstellung",
        price: "$20-200/Monat",
        website: "https://openai.com/sora",
        features: ["ChatGPT Integration", "Realistisch", "OpenAI"],
        rating: 4.4,
        image: "/api/placeholder/300/200"
      },
      {
        name: "Runway",
        description: "Erweiterte Videobearbeitung, KI-powered Editing",
        price: "$15-95/Monat",
        website: "https://runwayml.com",
        features: ["Video Editing", "KI Enhancement", "Kreativ"],
        rating: 4.3,
        image: "/api/placeholder/300/200"
      }
    ]
  },
  {
    id: 4,
    category: "Audio Tools",
    icon: "🎤",
    gradient: "gradient-pink",
    tools: [
      {
        name: "ElevenLabs",
        description: "Sprachsynthese, Voice Cloning, natürliche Stimmen",
        price: "$1-99/Monat",
        website: "https://elevenlabs.io",
        features: ["Voice Cloning", "Natürlich", "Mehrsprachig"],
        rating: 4.7,
        image: "/api/placeholder/300/200"
      },
      {
        name: "Descript",
        description: "Video/Podcast-Bearbeitung, transkriptbasiert",
        price: "$24-32/Monat",
        website: "https://www.descript.com",
        features: ["Transkription", "Video Editing", "Podcast"],
        rating: 4.4,
        image: "/api/placeholder/300/200"
      },
      {
        name: "Murf.ai",
        description: "Text-zu-Sprache, 20+ Sprachen, Studio-Qualität",
        price: "$19-199/Monat",
        website: "https://murf.ai",
        features: ["Text zu Sprache", "20+ Sprachen", "Studio Qualität"],
        rating: 4.3,
        image: "/api/placeholder/300/200"
      },
      {
        name: "LALAL.AI",
        description: "Audio-Trennung, Qualitätsverbesserung, Stem Separation",
        price: "$20-35",
        website: "https://www.lalal.ai",
        features: ["Audio Trennung", "Stem Separation", "Qualität"],
        rating: 4.2,
        image: "/api/placeholder/300/200"
      }
    ]
  },
  {
    id: 5,
    category: "Code & Entwicklung",
    icon: "💻",
    gradient: "gradient-cyan",
    tools: [
      {
        name: "GitHub Copilot",
        description: "Paar-Programmierung, IDE-Integration, Microsoft",
        price: "Microsoft Subscription",
        website: "https://github.com/features/copilot",
        features: ["IDE Integration", "Pair Programming", "Microsoft"],
        rating: 4.6,
        image: "/api/placeholder/300/200"
      },
      {
        name: "Amazon Q Developer",
        description: "AWS-optimiert, Multi-Datei-Änderungen, Cloud-Integration",
        price: "$19/Monat",
        website: "https://aws.amazon.com/q/developer/",
        features: ["AWS Integration", "Multi-File", "Cloud Native"],
        rating: 4.4,
        image: "/api/placeholder/300/200"
      },
      {
        name: "Google Gemini Code Assist",
        description: "Google Cloud-Integration, Code-Generation",
        price: "$19.99-249.99/Monat",
        website: "https://cloud.google.com/products/ai",
        features: ["Google Cloud", "Code Generation", "Enterprise"],
        rating: 4.3,
        image: "/api/placeholder/300/200"
      },
      {
        name: "Tabnine",
        description: "Datenschutz-fokussiert, 30+ Sprachen, lokal ausführbar",
        price: "$9-39/Monat",
        website: "https://www.tabnine.com",
        features: ["Datenschutz", "30+ Sprachen", "Lokal"],
        rating: 4.2,
        image: "/api/placeholder/300/200"
      }
    ]
  },
  {
    id: 6,
    category: "Business & Produktivität",
    icon: "📊",
    gradient: "gradient-green",
    tools: [
      {
        name: "Zapier",
        description: "Workflow-Automatisierung, 5000+ App-Integrationen",
        price: "$19.99-69/Monat",
        website: "https://zapier.com",
        features: ["Workflow Automation", "5000+ Apps", "No-Code"],
        rating: 4.5,
        image: "/api/placeholder/300/200"
      },
      {
        name: "Otter.ai",
        description: "Meeting-Transkription, KI-Zusammenfassungen",
        price: "$8.33-20/Monat",
        website: "https://otter.ai",
        features: ["Meeting Notes", "Transkription", "KI Summary"],
        rating: 4.3,
        image: "/api/placeholder/300/200"
      },
      {
        name: "Fireflies.ai",
        description: "Meeting-Aufzeichnung, KI-Zusammenfassungen, CRM-Integration",
        price: "$18-29/Monat",
        website: "https://fireflies.ai",
        features: ["Meeting Recording", "CRM Integration", "Analytics"],
        rating: 4.4,
        image: "/api/placeholder/300/200"
      }
    ]
  },
  {
    id: 7,
    category: "Datenanalyse Plattformen",
    icon: "📈",
    gradient: "gradient-indigo",
    tools: [
      {
        name: "Tableau AI Suite",
        description: "Intelligente Analyse, Datenvisualisierung",
        price: "$15-75/Monat",
        website: "https://www.tableau.com",
        features: ["Data Viz", "Intelligente Analyse", "Enterprise"],
        rating: 4.5,
        image: "/api/placeholder/300/200"
      },
      {
        name: "Microsoft Power BI AI",
        description: "KI-Visualisierungen, Azure-Integration",
        price: "$13.70-27.50/Monat",
        website: "https://powerbi.microsoft.com",
        features: ["KI Visualisierung", "Azure", "Microsoft"],
        rating: 4.3,
        image: "/api/placeholder/300/200"
      },
      {
        name: "Google Cloud AutoML",
        description: "Nutzungsbasiert, maschinelles Lernen ohne Code",
        price: "Nutzungsbasiert",
        website: "https://cloud.google.com/automl",
        features: ["No-Code ML", "Google Cloud", "AutoML"],
        rating: 4.4,
        image: "/api/placeholder/300/200"
      },
      {
        name: "IBM Watson Analytics",
        description: "NLP, Stimmungsanalyse, Enterprise-Lösung",
        price: "$500/Monat",
        website: "https://www.ibm.com/watson",
        features: ["NLP", "Sentiment Analysis", "Enterprise"],
        rating: 4.1,
        image: "/api/placeholder/300/200"
      }
    ]
  },
  {
    id: 8,
    category: "Bildungs-Tools",
    icon: "🎓",
    gradient: "gradient-yellow",
    tools: [
      {
        name: "Khanmigo",
        description: "AP-Level Tutoring, personalisiertes Lernen",
        price: "$4/Monat",
        website: "https://www.khanacademy.org/khan-labs",
        features: ["AP Level", "Tutoring", "Personalisiert"],
        rating: 4.6,
        image: "/api/placeholder/300/200"
      },
      {
        name: "ChatGPT",
        description: "Vielseitiges Lernwerkzeug, Erklärungen, Übungen",
        price: "Freemium - $20/Monat",
        website: "https://chat.openai.com",
        features: ["Vielseitig", "Erklärungen", "Übungen"],
        rating: 4.7,
        image: "/api/placeholder/300/200"
      },
      {
        name: "Perplexity AI",
        description: "Recherche mit Zitaten, akademische Quellen",
        price: "$20/Monat",
        website: "https://www.perplexity.ai",
        features: ["Zitationen", "Recherche", "Quellen"],
        rating: 4.5,
        image: "/api/placeholder/300/200"
      }
    ]
  },
  {
    id: 9,
    category: "KI-Suchmaschinen",
    icon: "🔍",
    gradient: "gradient-teal",
    tools: [
      {
        name: "ChatGPT Search",
        description: "3,8 Milliarden monatliche Besuche, konversationell",
        price: "ChatGPT Plus $20/Monat",
        website: "https://chat.openai.com",
        features: ["3.8B Visits", "Conversational", "Real-time"],
        rating: 4.7,
        image: "/api/placeholder/300/200"
      },
      {
        name: "DeepSeek",
        description: "Reasoning-First-Ansatz, komplexe Anfragen",
        price: "Freemium",
        website: "https://www.deepseek.com",
        features: ["Reasoning First", "Komplex", "Günstig"],
        rating: 4.4,
        image: "/api/placeholder/300/200"
      },
      {
        name: "Google Gemini",
        description: "Konversationelle Antworten, Google-Integration",
        price: "Freemium",
        website: "https://gemini.google.com",
        features: ["Google Integration", "Conversational", "Multimodal"],
        rating: 4.3,
        image: "/api/placeholder/300/200"
      },
      {
        name: "Perplexity AI",
        description: "Echtzeit-Zitationen, akademische Präzision",
        price: "$20/Monat",
        website: "https://www.perplexity.ai",
        features: ["Real-time Citations", "Academic", "Precise"],
        rating: 4.5,
        image: "/api/placeholder/300/200"
      },
      {
        name: "You.com",
        description: "Personalisierte Suche, Datenschutz-fokussiert",
        price: "$15-25/Monat",
        website: "https://you.com",
        features: ["Personalisiert", "Privatsphäre", "Customizable"],
        rating: 4.2,
        image: "/api/placeholder/300/200"
      }
    ]
  }
];

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', ...aiToolsDatabase.map(cat => cat.category)];

  const filteredTools = selectedCategory === 'all' 
    ? aiToolsDatabase 
    : aiToolsDatabase.filter(cat => cat.category === selectedCategory);

  const searchedTools = filteredTools.map(category => ({
    ...category,
    tools: category.tools.filter(tool => 
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.tools.length > 0);

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <BlurText as="h1" text="Komplette KI-Tools Datenbank" className="text-4xl md:text-6xl font-bold mb-6" />
          <FadeContent>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Über 40+ führende KI-Tools in 9 Kategorien. Mit Preisen, Features und direkten Links.
            </p>
          </FadeContent>
        </div>

        {/* Search and Filter */}
        <FadeContent delay={200}>
          <div className="card p-6 mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Tools durchsuchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category
                        ? 'gradient-blue text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {category === 'all' ? 'Alle' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </FadeContent>

        {/* Tools Grid */}
        <div className="space-y-16">
          {searchedTools.map((category, categoryIndex) => (
            <FadeContent key={category.id} delay={300 + categoryIndex * 100}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="card p-8"
              >
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 rounded-xl ${category.gradient} flex items-center justify-center text-2xl mr-4`}>
                    {category.icon}
                  </div>
                  <div>
                    <BlurText as="h2" text={category.category} className="text-3xl font-bold" />
                    <p className="text-gray-400">{category.tools.length} Tools verfügbar</p>
                  </div>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={`${category.id}-${toolIndex}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: toolIndex * 0.05 }}
                      className="glass-panel p-6 hover-lift group"
                    >
                      <img 
                        src={tool.image} 
                        alt={tool.name}
                        className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      <div className="flex items-center justify-between mb-3">
                        <BlurText as="h3" text={tool.name} className="text-xl font-bold" />
                        <div className="flex items-center">
                          <span className="text-yellow-400 mr-1">⭐</span>
                          <span className="text-sm text-gray-400">{tool.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{tool.description}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {tool.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-green-400 font-semibold text-sm">{tool.price}</span>
                      </div>
                      
                      <motion.a
                        href={tool.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="block text-center px-4 py-2 rounded-lg gradient-blue text-white font-semibold hover-glow text-sm"
                      >
                        Tool besuchen
                      </motion.a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </FadeContent>
          ))}
        </div>

        {/* Stats Section */}
        <FadeContent delay={600}>
          <div className="card p-8 mt-16 text-center">
            <BlurText as="h2" text="Umfassende KI-Tools Datenbank" className="text-3xl font-bold mb-6" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-400">40+</div>
                <div className="text-gray-400">KI-Tools</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">9</div>
                <div className="text-gray-400">Kategorien</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">100%</div>
                <div className="text-gray-400">Aktuelle Links</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400">2025</div>
                <div className="text-gray-400">Aktuell</div>
              </div>
            </div>
          </div>
        </FadeContent>
      </div>
    </div>
  );
}