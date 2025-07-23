'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BlurText from '../../components/BlurText';
import FadeContent from '../../components/FadeContent';

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

// Comprehensive AI Tools Database
const aiToolsDatabase = {
  "Text & Writing Tools": [
    {
      name: "Jasper AI",
      description: "KI-basierte Inhaltserstellung, SEO-optimiert, über 50 Templates",
      pricing: "$49-69/Monat",
      website: "https://jasper.ai",
      features: ["SEO-Optimierung", "50+ Templates", "Plagiatsprüfung", "Brand Voice"],
      icon: "✍️"
    },
    {
      name: "Notion AI",
      description: "Intelligente Notizen und Automatisierung in Notion",
      pricing: "$20/Monat",
      website: "https://notion.so/product/ai",
      features: ["Automatisierung", "Intelligente Vorschläge", "Zusammenfassungen", "Übersetzung"],
      icon: "📝"
    },
    {
      name: "Grammarly",
      description: "KI-Schreibassistent mit Grammatikprüfung und Stil-Verbesserungen",
      pricing: "Kostenlos - $30/Monat",
      website: "https://grammarly.com",
      features: ["Grammatikprüfung", "Stil-Verbesserungen", "Plagiatserkennung", "Tonanalyse"],
      icon: "📖"
    }
  ],
  "Image & Design Tools": [
    {
      name: "Midjourney",
      description: "Filmische Bilder mit Zeichenkonsistenz und hoher Qualität",
      pricing: "$10/Monat",
      website: "https://midjourney.com",
      features: ["Filmische Qualität", "Zeichenkonsistenz", "Style Transfer", "High-Res Output"],
      icon: "🎨"
    },
    {
      name: "DALL·E",
      description: "OpenAI's Bildgenerator mit präziser Textwiedergabe",
      pricing: "$20/Monat (ChatGPT Plus)",
      website: "https://openai.com/dall-e-3",
      features: ["Genaue Textwiedergabe", "ChatGPT Integration", "Verschiedene Stile", "Hohe Auflösung"],
      icon: "🖼️"
    },
    {
      name: "Stable Diffusion",
      description: "Open-Source Bildgenerator mit exzellenter Prompt-Adhärenz",
      pricing: "Kostenlos/Open-Source",
      website: "https://stability.ai",
      features: ["Open Source", "Prompt-Adhärenz", "Community Models", "Local Installation"],
      icon: "🎯"
    },
    {
      name: "Adobe Firefly",
      description: "Adobe's KI-Suite mit nahtloser Creative Cloud Integration",
      pricing: "$4.99/Monat",
      website: "https://firefly.adobe.com",
      features: ["Adobe Integration", "SVG-Generierung", "Commercial Safe", "Text Effects"],
      icon: "🔥"
    },
    {
      name: "Ideogram",
      description: "Beste Textwiedergabe in generierten Bildern",
      pricing: "$7/Monat",
      website: "https://ideogram.ai",
      features: ["Beste Textwiedergabe", "Magic Prompt", "Verschiedene Formate", "Batch Generation"],
      icon: "💡"
    }
  ],
  "Video & Animation Tools": [
    {
      name: "Synthesia",
      description: "KI-Avatare sprechen in 140+ Sprachen für Unternehmen",
      pricing: "$29-89/Monat",
      website: "https://synthesia.io",
      features: ["140+ Sprachen", "KI-Avatare", "Enterprise Features", "Custom Avatare"],
      icon: "🎬"
    },
    {
      name: "Google Veo 2 & 3",
      description: "Filmische Videos mit Sound, längere Clips und bessere Qualität",
      pricing: "$19.99-249.99/Monat",
      website: "https://deepmind.google/technologies/veo",
      features: ["Filmische Qualität", "Sound Integration", "Längere Clips", "4K Output"],
      icon: "📹"
    },
    {
      name: "OpenAI Sora",
      description: "Video-Generator mit ChatGPT Integration",
      pricing: "$20-200/Monat",
      website: "https://openai.com/sora",
      features: ["ChatGPT Integration", "Realistische Videos", "Verschiedene Längen", "High Quality"],
      icon: "🌟"
    },
    {
      name: "Runway",
      description: "Erweiterte Videobearbeitung und Generierung",
      pricing: "$15-95/Monat",
      website: "https://runwayml.com",
      features: ["Video Editing", "Motion Brush", "Green Screen", "Style Transfer"],
      icon: "🛤️"
    }
  ],
  "Audio Tools": [
    {
      name: "ElevenLabs",
      description: "Realistische Sprachsynthese und Voice Cloning",
      pricing: "$1-99/Monat",
      website: "https://elevenlabs.io",
      features: ["Voice Cloning", "29 Sprachen", "Emotionale Nuancen", "API Integration"],
      icon: "🎙️"
    },
    {
      name: "Descript",
      description: "Video/Podcast-Bearbeitung durch Text-Editing",
      pricing: "$24-32/Monat",
      website: "https://descript.com",
      features: ["Text-Based Editing", "Overdub", "Transkription", "Collaboration"],
      icon: "🎧"
    },
    {
      name: "Murf.ai",
      description: "Text-zu-Sprache in 20+ Sprachen für Profis",
      pricing: "$19-199/Monat",
      website: "https://murf.ai",
      features: ["20+ Sprachen", "Studio-Qualität", "Voice Customization", "Commercial Use"],
      icon: "🗣️"
    },
    {
      name: "LALAL.AI",
      description: "Audio-Trennung und Qualitätsverbesserung",
      pricing: "$20-35/Monat",
      website: "https://lalal.ai",
      features: ["Audio Separation", "Stem Extraction", "Noise Removal", "High Quality"],
      icon: "🎵"
    }
  ],
  "Code & Development Tools": [
    {
      name: "GitHub Copilot",
      description: "KI Pair-Programming mit IDE-Integration",
      pricing: "$10-39/Monat",
      website: "https://github.com/features/copilot",
      features: ["IDE Integration", "Multi-Language", "Code Completion", "Documentation"],
      icon: "💻"
    },
    {
      name: "Amazon Q Developer",
      description: "AWS-optimierter Code-Assistent mit Multi-File-Änderungen",
      pricing: "$19/Monat",
      website: "https://aws.amazon.com/q/developer",
      features: ["AWS Integration", "Multi-File Changes", "Security Scans", "Code Reviews"],
      icon: "☁️"
    },
    {
      name: "Google Gemini Code Assist",
      description: "Google Cloud-integrierter Entwicklungsassistent",
      pricing: "$19.99-249.99/Monat",
      website: "https://cloud.google.com/gemini/docs/codeassist",
      features: ["Google Cloud Integration", "Code Generation", "Debugging", "Documentation"],
      icon: "🔧"
    },
    {
      name: "Tabnine",
      description: "Datenschutz-fokussierter KI-Assistent für 30+ Sprachen",
      pricing: "$9-39/Monat",
      website: "https://tabnine.com",
      features: ["30+ Languages", "Privacy First", "Team Learning", "Custom Models"],
      icon: "🛡️"
    }
  ],
  "Business & Productivity Tools": [
    {
      name: "Zapier",
      description: "Workflow-Automatisierung zwischen 6000+ Apps",
      pricing: "$19.99-69/Monat",
      website: "https://zapier.com",
      features: ["6000+ Apps", "Workflow Automation", "AI Actions", "Multi-Step Zaps"],
      icon: "⚡"
    },
    {
      name: "Otter.ai",
      description: "Meeting-Transkription und KI-Notizen",
      pricing: "$8.33-20/Monat",
      website: "https://otter.ai",
      features: ["Live Transcription", "Meeting Notes", "Speaker ID", "Integration"],
      icon: "🦦"
    },
    {
      name: "Fireflies.ai",
      description: "Meeting-Aufzeichnung mit KI-Zusammenfassungen",
      pricing: "$18-29/Monat",
      website: "https://fireflies.ai",
      features: ["Meeting Recording", "AI Summaries", "CRM Integration", "Action Items"],
      icon: "🔥"
    }
  ],
  "Data Analysis Platforms": [
    {
      name: "Tableau AI Suite",
      description: "Intelligente Datenanalyse und Visualisierung",
      pricing: "$15-75/Monat",
      website: "https://tableau.com",
      features: ["Einstein AI", "Ask Data", "Auto Insights", "Predictive Analytics"],
      icon: "📊"
    },
    {
      name: "Microsoft Power BI AI",
      description: "KI-gestützte Business Intelligence",
      pricing: "$13.70-27.50/Monat",
      website: "https://powerbi.microsoft.com",
      features: ["AI Visuals", "Q&A", "Auto Machine Learning", "Cognitive Services"],
      icon: "📈"
    },
    {
      name: "Google Cloud AutoML",
      description: "Automatisiertes Machine Learning ohne Code",
      pricing: "Nutzungsbasiert",
      website: "https://cloud.google.com/automl",
      features: ["No-Code ML", "Custom Models", "AutoML Vision", "AutoML Natural Language"],
      icon: "🤖"
    },
    {
      name: "IBM Watson Analytics",
      description: "Enterprise KI für NLP und Stimmungsanalyse",
      pricing: "$500/Monat",
      website: "https://ibm.com/watson",
      features: ["NLP", "Sentiment Analysis", "Enterprise Grade", "Custom Models"],
      icon: "🧠"
    }
  ],
  "Education Tools": [
    {
      name: "Khanmigo",
      description: "KI-Tutor für AP-Level Kurse von Khan Academy",
      pricing: "$4/Monat",
      website: "https://khanacademy.org/khan-labs",
      features: ["AP-Level Tutoring", "Personalized Learning", "Progress Tracking", "Safe for Students"],
      icon: "🎓"
    },
    {
      name: "ChatGPT",
      description: "Vielseitiges KI-Lernwerkzeug für alle Themen",
      pricing: "Kostenlos - $20/Monat",
      website: "https://chat.openai.com",
      features: ["Alle Themen", "Code Help", "Math Solving", "Essay Writing"],
      icon: "💬"
    },
    {
      name: "Perplexity AI",
      description: "KI-Suchmaschine mit Quellenangaben für Recherche",
      pricing: "$20/Monat",
      website: "https://perplexity.ai",
      features: ["Source Citations", "Real-time Info", "Research Mode", "Academic Sources"],
      icon: "🔍"
    }
  ],
  "Search Engines": [
    {
      name: "ChatGPT Search",
      description: "3,8 Milliarden monatliche Besuche, integrierte Websuche",
      pricing: "$20/Monat",
      website: "https://chatgpt.com",
      features: ["Web Search", "Real-time Data", "Conversational", "Follow-up Questions"],
      icon: "🔎"
    },
    {
      name: "DeepSeek",
      description: "Reasoning-First-Ansatz für komplexe Anfragen",
      pricing: "Kostenlos - $20/Monat",
      website: "https://deepseek.com",
      features: ["Reasoning First", "Complex Queries", "STEM Focus", "Open Source"],
      icon: "🧭"
    },
    {
      name: "Google Gemini",
      description: "Konversationelle Antworten mit Google's KI",
      pricing: "Kostenlos - $20/Monat",
      website: "https://gemini.google.com",
      features: ["Google Integration", "Multimodal", "Real-time Info", "YouTube Integration"],
      icon: "💎"
    },
    {
      name: "Perplexity Pro",
      description: "Echtzeit-Zitationen und Quellenverifikation",
      pricing: "$20/Monat",
      website: "https://perplexity.ai",
      features: ["Real-time Citations", "Source Verification", "Academic Mode", "Follow-up"],
      icon: "🎯"
    },
    {
      name: "You.com",
      description: "Personalisierte KI-Suche mit App-Integration",
      pricing: "$15-25/Monat",
      website: "https://you.com",
      features: ["Personalized Search", "App Integration", "Privacy Focus", "Custom AI Models"],
      icon: "🌐"
    }
  ]
};

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [searchTerm, setSearchTerm] = useState("");
  const heroRef = useScrollReveal('fade-in');
  const toolsRef = useScrollReveal('slide-up');

  const categories = ["Alle", ...Object.keys(aiToolsDatabase)];

  const getFilteredTools = () => {
    if (selectedCategory === "Alle") {
      const allTools = Object.entries(aiToolsDatabase).flatMap(([category, tools]) =>
        tools.map(tool => ({ ...tool, category }))
      );
      return allTools.filter(tool =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      return aiToolsDatabase[selectedCategory as keyof typeof aiToolsDatabase].filter(tool =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  };

  const filteredTools = getFilteredTools();

  return (
    <div className="min-h-screen py-8 px-6 bg-black">
      {/* Hero Section */}
      <section ref={heroRef} className="max-w-6xl mx-auto text-center mb-16">
        <BlurText 
          as="h1" 
          text="KI-Tools Datenbank 2024-2025" 
          className="text-4xl md:text-6xl font-bold mb-6"
        />
        <FadeContent delay={500} className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
          Entdecke die umfassendste Sammlung von KI-Tools in 9 Kategorien. Von Text-Generierung bis zu Code-Entwicklung - finde das perfekte Tool für deinen Anwendungsfall.
        </FadeContent>

        {/* Search and Filter */}
        <FadeContent delay={800} className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Suche nach Tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeContent>
      </section>

      {/* Tools Grid */}
      <section ref={toolsRef} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => (
            <motion.div
              key={`${tool.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-6 hover-lift group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">{tool.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{tool.name}</h3>
                  <p className="text-sm text-blue-400 font-medium">{tool.pricing}</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {tool.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {tool.features.slice(0, 3).map((feature, i) => (
                  <span key={i} className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
              
              <motion.a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all"
              >
                Tool besuchen
                <span className="text-xs">↗</span>
              </motion.a>
            </motion.div>
          ))}
        </div>
        
        {filteredTools.length === 0 && (
          <FadeContent className="text-center py-12">
            <p className="text-gray-400 text-lg">Keine Tools gefunden. Versuche einen anderen Suchbegriff.</p>
          </FadeContent>
        )}
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto mt-16 text-center">
        <FadeContent className="card p-8">
          <BlurText 
            as="h2" 
            text="Umfassende KI-Tool-Übersicht" 
            className="text-2xl font-bold mb-4"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-1">
                {Object.values(aiToolsDatabase).reduce((acc, tools) => acc + tools.length, 0)}
              </div>
              <div className="text-sm text-gray-400">Total Tools</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-1">
                {Object.keys(aiToolsDatabase).length}
              </div>
              <div className="text-sm text-gray-400">Kategorien</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-1">24/7</div>
              <div className="text-sm text-gray-400">Verfügbar</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-1">2024</div>
              <div className="text-sm text-gray-400">Aktuell</div>
            </div>
          </div>
        </FadeContent>
      </section>
    </div>
  );
}