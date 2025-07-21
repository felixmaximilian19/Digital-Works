'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './liquid-glass.css';

// KI-Modelle Data aus dem Executive Summary
const modelsData = [
  {
    id: 1,
    name: "GPT-4.5",
    provider: "OpenAI",
    description: "Unified AI System mit erweitertem Kontextfenster und Denkfähigkeiten",
    longDescription: "GPT-4.5 integriert die Stärken der GPT-Serie mit erweiterten Denkfähigkeiten, großem Kontextfenster und nativer Integration wichtiger Funktionalitäten. Ideal für komplexe Aufgaben und lange Interaktionen.",
    category: "Text",
    icon: "🤖",
    gradient: "gradient-blue",
    featured: true,
    benchmarks: {
      overall: 83.3,
      math: 91.6,
      reasoning: 87.8,
      coding: 87.8
    },
    pricing: "ChatGPT Plus $20/Monat, API",
    contextWindow: "Erweitert",
    releaseDate: "2024 (erwartet)",
    features: ["Unified AI System", "Erweitertes Kontextfenster", "Multimodal", "API"],
    link: "https://platform.openai.com/docs/guides/gpt-4"
  },
  {
    id: 2,
    name: "Grok 3",
    provider: "xAI",
    description: "KI-Modell mit 1 Mio. Token Kontextfenster und Super Grok Agents",
    longDescription: "Grok 3 bietet überlegene Denkfähigkeit, großes Kontextfenster (1 Mio. Tokens), Super Grok Agents für proaktive Aufgaben und starke Leistung bei logischen Aufgaben.",
    category: "Text",
    icon: "🦾",
    gradient: "gradient-orange",
    featured: false,
    benchmarks: {
      overall: 84.6,
      math: 93.3,
      reasoning: 89.2,
      coding: 87.8
    },
    pricing: "xAI Platform",
    contextWindow: "1 Mio. Tokens",
    releaseDate: "2024",
    features: ["Super Grok Agents", "Großes Kontextfenster", "Multimodal"],
    link: "https://platform.xai.com/docs/guides/grok"
  },
  {
    id: 3,
    name: "Gemini 2.5 Pro",
    provider: "Google DeepMind",
    description: "Multimodales Large Action Model mit nativer Tool-Nutzung und Bild-/Audioausgabe",
    longDescription: "Gemini 2.5 Pro interagiert mit dem digitalen Ökosystem, bietet multimodale Suite, native Tool-Nutzung, Bild- und Audioausgabe. Führend bei Benchmarks und in Google-Produkten integriert.",
    category: "Multimodal",
    icon: "🔮",
    gradient: "gradient-cyan",
    featured: true,
    benchmarks: {
      overall: 86.4,
      math: 92.0,
      reasoning: 89.2,
      coding: 87.8
    },
    pricing: "Google AI Studio, Pro ab $19,99/Monat",
    contextWindow: "Sehr groß",
    releaseDate: "2025",
    features: ["Large Action Model", "Multimodal", "Tool-Nutzung", "Bild-/Audioausgabe"],
    link: "https://ai.google.com/models/gemini"
  },
  {
    id: 4,
    name: "DeepSeek R1",
    provider: "DeepSeek AI",
    description: "Reasoning-First-Modell, Open Source, sehr kosteneffizient",
    longDescription: "DeepSeek R1 priorisiert logische Schlussfolgerungen, ist Open Source, unterstützt mehrstufige Konversationen und ist bis zu 30x günstiger als vergleichbare Modelle.",
    category: "Text",
    icon: "🧠",
    gradient: "gradient-green",
    featured: false,
    benchmarks: {
      overall: 81.4,
      math: null,
      reasoning: null,
      coding: null
    },
    pricing: "$0,07/Mio. Input-Tokens (mit Cache-Hit)",
    contextWindow: "Groß",
    releaseDate: "2025",
    features: ["Reasoning-First", "Open Source", "Kosteneffizient"],
    link: "https://github.com/DeepSeek/DeepSeek-R1"
  },
  {
    id: 5,
    name: "Claude 3 Opus",
    provider: "Anthropic",
    description: "Multimodales Modell mit Bild-, Tabellen-, Graph- und Diagramm-Generierung",
    longDescription: "Claude 3 Opus bietet multimodale Fähigkeiten, generiert Bilder, Tabellen, Graphen und Diagramme. Teil der Anthropic-API, abgerechnet nach Token-Nutzung.",
    category: "Multimodal",
    icon: "🦉",
    gradient: "gradient-purple",
    featured: false,
    benchmarks: {
      overall: null,
      math: null,
      reasoning: null,
      coding: null
    },
    pricing: "Claude Pro $20/Monat, API",
    contextWindow: "Sehr groß",
    releaseDate: "2024",
    features: ["Multimodal", "Tabellen & Graphen", "API"],
    link: "https://platform.anthropic.com/docs/api/reference"
  }
];

const categories = ["Alle", "Text", "Multimodal", "Code", "Vision"];
const providers = ["Alle", "OpenAI", "xAI", "Google", "DeepSeek", "Anthropic"];

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

export default function ModelsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [selectedProvider, setSelectedProvider] = useState("Alle");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredModels = modelsData.filter(model => {
    const matchesCategory = selectedCategory === "Alle" || model.category === selectedCategory;
    const matchesProvider = selectedProvider === "Alle" || model.provider === selectedProvider;
    const matchesSearch = model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         model.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesProvider && matchesSearch;
  });

  const featuredModel = modelsData.find(model => model.featured);

  const headerRef = useScrollReveal('fade-in');
  const featuredRef = useScrollReveal('slide-up');
  const cardsRef = useScrollReveal('slide-up');
  const router = useRouter();

  return (
    <div className="min-h-screen py-8 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-purple">KI-Modelle</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Führende KI-Modelle 2024-2025 mit Benchmarks, Preisen und detaillierten Analysen
          </p>
        </motion.div>

        {/* Featured Model */}
        {featuredModel && (
          <motion.section ref={featuredRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Featured Model</h2>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`card p-8 ${featuredModel.gradient} hover-lift`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{featuredModel.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{featuredModel.name}</h3>
                      <p className="text-white/80">{featuredModel.provider}</p>
                    </div>
                  </div>
                  <p className="text-white/90 mb-4">{featuredModel.longDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredModel.features.map((feature, index) => (
                      <span key={index} className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-white/70">Preis:</span>
                      <p className="text-white font-medium">{featuredModel.pricing}</p>
                    </div>
                    <div>
                      <span className="text-white/70">Kontext:</span>
                      <p className="text-white font-medium">{featuredModel.contextWindow}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Benchmarks</h4>
                  <div className="space-y-3">
                    {Object.entries(featuredModel.benchmarks).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <span className="text-white/80 capitalize">{key}:</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-white/20 rounded-full h-2">
                            <div 
                              className="bg-white h-2 rounded-full transition-all duration-300"
                              style={{ width: `${value}%` }}
                            ></div>
                          </div>
                          <span className="text-white font-medium">{value}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href={`/models/${featuredModel.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 w-full bg-white/20 text-white py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
                    >
                      📖 Detaillierte Analyse
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.section>
        )}

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'gradient-purple text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {providers.map((provider) => (
                <motion.button
                  key={provider}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedProvider(provider)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedProvider === provider
                      ? 'gradient-orange text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {provider}
                </motion.button>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <input
              type="text"
              placeholder="Suche nach Modell oder Beschreibung..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors w-full max-w-md"
            />
          </div>
        </motion.div>

        {/* All Models */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Alle KI-Modelle</h2>
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {filteredModels.map((model, index) => (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 40, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.08, type: 'spring', bounce: 0.18 }}
                  className={`relative group bg-white/5 rounded-3xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 border border-white/10 ${model.featured ? 'ring-2 ring-blue-500/30' : ''}`}
                  onClick={() => model.link ? window.open(model.link, '_blank') : router.push(`/models/${model.id}`)}
                  whileHover={{ scale: 1.025 }}
                >
                  {/* Parallax Bild oben */}
                  <div className="p-7 flex flex-col gap-3">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-2xl ${model.gradient}`} aria-label="Icon" role="img">{model.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 leading-tight">{model.name}</h3>
                        <p className="text-xs text-gray-400">{model.provider}</p>
                      </div>
                    </div>
                    <p className="text-gray-200 text-base mb-2 min-h-[48px]">{model.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {model.features && model.features.map((feature, i) => (
                        <span key={i} className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded-full">{feature}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">{model.releaseDate}</span>
                      <span className="text-xs text-gray-500">{model.category}</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-gray-400 text-xs">Preis:</span>
                      <span className="text-gray-200 text-sm ml-2">{model.pricing}</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-gray-400 text-xs">Benchmarks:</span>
                      <span className="text-gray-200 text-sm ml-2">{model.benchmarks && model.benchmarks.overall ? `${model.benchmarks.overall}%` : 'n/a'}</span>
                    </div>
                  </div>
                  {/* Apple-Style Glow Effekt */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{boxShadow:'0 0 60px 0 #fff, 0 0 120px 0 #f5f5f5'}} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 