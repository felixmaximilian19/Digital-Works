'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './liquid-glass.css';

// Executive Summary & Modelle (2024-2025)
const executiveSummary = `Die Welt der Künstlichen Intelligenz entwickelt sich rasant weiter, mit neuen Modellen und Tools, die ständig die Grenzen des Möglichen verschieben. Dieser Leitfaden bietet einen tiefen Einblick in die führenden KI-Modelle und eine kuratierte Auswahl der besten KI-Tools in verschiedenen Anwendungsbereichen, einschliesslich ihrer Funktionen, Preismodelle und praktischen Nutzungshinweise.`;

const modelDetails = [
  {
    name: 'GPT-4.5 (OpenAI)',
    description: 'Vereinheitlichtes KI-System mit erweitertem Kontextfenster, nahtloser Integration wichtiger Funktionen. GPT-5 folgt Ende 2025.',
    prices: 'Noch nicht veröffentlicht',
    highlights: 'Erweitertes Kontextfenster, native Integration, Fortschritte aus spezialisierten Modellen.'
  },
  {
    name: 'Grok 3 (xAI)',
    description: 'Signifikanter Sprung in Denkfähigkeit, 1M Token Kontext, Super Grok Agents für proaktive Aufgaben.',
    prices: 'X Premium+ ($40/Monat), SuperGrok ($30/Monat oder $300/Jahr)',
    highlights: 'Mathematik, Wissenschaft, Code, Weltwissen, DeepSearch.'
  },
  {
    name: 'Gemini 2.0/2.5 Pro (Google DeepMind)',
    description: 'Large Action Models, multimodale Suite, native Tool-Nutzung, Bild- und Audioausgabe.',
    prices: 'Experimentell/Kostenlos, Pro: $19.99/Monat, Ultra: $249.99/Monat',
    highlights: 'LAM, Gemini Live, Project Astra, Veo 3, Imagen 4.'
  },
  {
    name: 'DeepSeek R1 (DeepSeek AI)',
    description: 'Reasoning-First-Ansatz, komplexe Aufgaben in STEM, Open-Source, sehr kosteneffizient.',
    prices: 'DeepSeek Chat: $0.07/Mio Input-Tokens, $1.10/Mio Output-Tokens',
    highlights: 'Mehrstufige Konversation, Chains of Thought.'
  },
  {
    name: 'Claude 3 Opus (Anthropic)',
    description: 'Multimodale Fähigkeiten, Bild-, Tabellen-, Graph- und Diagramm-Generierung.',
    prices: 'API, Token-basiert, Claude Pro: $17-$20/Monat',
    highlights: 'Websuche, Computer-Nutzung, kostenloser Plan.'
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

  const filteredModels = modelDetails.filter(model => {
    const matchesCategory = selectedCategory === "Alle" || model.description.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesProvider = selectedProvider === "Alle" || model.name.toLowerCase().includes(selectedProvider.toLowerCase());
    const matchesSearch = model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         model.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesProvider && matchesSearch;
  });

  const featuredModel = modelDetails.find(model => model.name.includes("Gemini")); // Assuming Gemini is the most featured

  const headerRef = useScrollReveal('fade-in');
  const featuredRef = useScrollReveal('slide-up');
  const cardsRef = useScrollReveal('slide-up');
  const router = useRouter();

  return (
    <div className="min-h-screen py-8 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Executive Summary */}
        <section className="mb-10 p-6 rounded-2xl bg-white/10 border border-white/10 shadow-lg">
          <h1 className="text-3xl font-bold mb-2 text-white">KI-Modelle 2024-2025: Executive Summary</h1>
          <p className="text-gray-200 text-lg mb-2">{executiveSummary}</p>
        </section>
        {/* Modelle Übersicht */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Führende KI-Modelle & Preise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modelDetails.map((model, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10 shadow">
                <h3 className="text-xl font-semibold text-white mb-1">{model.name}</h3>
                <p className="text-gray-200 mb-2">{model.description}</p>
                <div className="text-sm text-gray-400 mb-1"><b>Preise:</b> {model.prices}</div>
                <div className="text-sm text-gray-400"><b>Highlights:</b> {model.highlights}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
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
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Alle KI-Modelle</h2>
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {filteredModels.map((model, index) => (
                <motion.div
                  key={model.name}
                  initial={{ opacity: 0, y: 40, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.08, type: 'spring', bounce: 0.18 }}
                  className={`relative group glass-panel animated-gradient shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 border border-white/10 ${model.name.includes('Gemini') ? 'ring-2 ring-blue-500/30' : model.name.includes('Claude') ? 'ring-2 ring-purple-500/30' : ''}`}
                  onClick={() => model.name.includes('Gemini') ? window.open('https://ai.google.com/models/gemini', '_blank') : router.push(`/models/${modelDetails.findIndex(m => m.name === model.name) + 1}`)}
                  whileHover={{ scale: 1.025 }}
                >
                  <div className="p-7 flex flex-col gap-3">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-2xl ${model.name.includes('Gemini') ? 'gradient-cyan' : model.name.includes('Claude') ? 'gradient-purple' : 'gradient-blue'}`} aria-label="Icon" role="img">{model.name.includes('Gemini') ? '🔮' : model.name.includes('Claude') ? '🦉' : '🤖'}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 leading-tight font-sans">{model.name}</h3>
                        <p className="text-xs text-gray-400">{model.name.includes('Gemini') ? 'Google DeepMind' : model.name.includes('Claude') ? 'Anthropic' : 'OpenAI'}</p>
                      </div>
                    </div>
                    <p className="text-gray-200 text-base mb-2 min-h-[48px] font-sans">{model.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {model.highlights.split(',').map((highlight, i) => (
                        <span key={i} className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded-full">{highlight.trim()}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Preise: {model.prices}</span>
                      <span className="text-xs text-gray-500">Kategorie: {model.description.includes('Reasoning-First') ? 'Text' : model.description.includes('Large Action Model') ? 'Multimodal' : 'Text'}</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-gray-400 text-xs">Besonderheiten:</span>
                      <span className="text-gray-200 text-sm ml-2">{model.highlights}</span>
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