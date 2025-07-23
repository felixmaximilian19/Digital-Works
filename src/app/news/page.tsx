'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import '../models/liquid-glass.css';
import BlurText from '../../components/BlurText';

// News Data mit Live-Update-Simulation
const initialNewsData = [
  {
    id: 1,
    title: "Agentische KI erreicht 13,81 Milliarden US-Dollar Marktvolumen",
    category: "Marktanalyse",
    summary: "Der Markt für agentische KI-Tools wird voraussichtlich im Jahr 2025 ein Volumen von 13,81 Milliarden US-Dollar erreichen.",
    content: "Führende Technologieunternehmen stehen an der Spitze der Entwicklung agentischer KI. Microsoft bietet Frameworks wie AutoGen für den Aufbau konversationsfähiger Multi-Agenten-Systeme an, die Code in sicheren Umgebungen generieren, ausführen und debuggen können.",
    date: "2024-12-20",
    readTime: "3 min",
    featured: true,
    gradient: "gradient-blue"
  },
  {
    id: 2,
    title: "OpenAI veröffentlicht GPT-4.5 mit Unified AI System",
    category: "Modell-Updates",
    summary: "OpenAI führt ein Unified AI System ein, das die Stärken der GPT-Serie mit erweiterten Denkfähigkeiten integriert.",
    content: "GPT-4.5 wird ein erweitertes Kontextfenster bieten, das es ermöglicht, eine größere Menge an Informationen für komplexe Aufgaben und längere Interaktionen zu verarbeiten und zu behalten, zusammen mit einer nativen Integration wichtiger Funktionalitäten.",
    date: "2024-12-19",
    readTime: "4 min",
    featured: false,
    gradient: "gradient-purple"
  },
  {
    id: 3,
    title: "Grok 3 von xAI demonstriert überlegene Denkfähigkeiten",
    category: "Forschung",
    summary: "Grok 3 zeigt einen signifikanten Sprung in überlegener Denkfähigkeit mit 1 Million Tokens Kontextfenster.",
    content: "xAI beansprucht erweiterte Fähigkeiten in einer Vielzahl von Domänen, einschließlich Mathematik, Wissenschaft, Codierung und Weltwissen. Ein Schlüsselmerkmal ist die Einführung von Super Grok Agents.",
    date: "2024-12-18",
    readTime: "5 min",
    featured: false,
    gradient: "gradient-orange"
  },
  {
    id: 4,
    title: "Google DeepMind stellt Gemini 2.5 Pro vor",
    category: "Modell-Updates",
    summary: "Gemini 2.5 Pro zeigt signifikante Verbesserungen im multimodalen Verständnis und Large Action Models.",
    content: "Gemini 2.5 Pro führt das Feld in der Gesamtleistung mit 86,4% an, während es auch bei High School Math (AIME 2025) mit 92% sehr gut abschneidet. Es treibt Googles KI-Modus in der Suche, Gemini Live, Project Astra, Veo 3 und Imagen 4 an.",
    date: "2024-12-17",
    readTime: "4 min",
    featured: false,
    gradient: "gradient-pink"
  },
  {
    id: 5,
    title: "DeepSeek R1 revolutioniert Kosteneffizienz",
    category: "Marktanalyse",
    summary: "DeepSeek R1 ist bis zu 30-mal günstiger als vergleichbare Modelle und Open-Source verfügbar.",
    content: "Das Modell basiert auf einem Reasoning-First-Ansatz und unterstützt mehrstufige Konversationen und generiert mehrere Gedankenketten. Die Preisgestaltung basiert auf der Token-Nutzung mit attraktiven Preisen.",
    date: "2024-12-16",
    readTime: "3 min",
    featured: false,
    gradient: "gradient-cyan"
  },
  {
    id: 6,
    title: "KI-Investitionen erreichen 109,1 Milliarden US-Dollar",
    category: "Finanzen",
    summary: "Private KI-Investitionen in den USA erreichten 2024 109,1 Milliarden US-Dollar.",
    content: "Insbesondere generative KI hat eine starke Dynamik gezeigt und 2023 weltweit 33,9 Milliarden US-Dollar an privaten Investitionen angezogen, was einem Anstieg von 18,7% gegenüber dem Vorjahr entspricht.",
    date: "2024-12-15",
    readTime: "2 min",
    featured: false,
    gradient: "gradient-blue"
  }
];

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

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [newsData, setNewsData] = useState(initialNewsData);
  const [isUpdating, setIsUpdating] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredNews = selectedCategory === "Alle" 
    ? newsData 
    : newsData.filter(news => news.category === selectedCategory);

  const handleLiveUpdate = async () => {
    setIsUpdating(true);
    
    // Simuliere API-Call mit Animation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Füge neue News hinzu (Simulation)
    const newNews = {
      id: Date.now(),
      title: "Neue KI-Entwicklung: Multimodale Fähigkeiten erreichen neue Höhen",
      category: "Forschung",
      summary: "Die neuesten Modelle zeigen erweiterte Kontextfenster und die Fähigkeit, Informationen über Text, Bild und Audio hinweg zu verarbeiten.",
      content: "Diese Entwicklung bringt KI-Systeme näher an eine allgemeinere Intelligenz heran, die in der Lage ist, komplexe, reale Probleme zu lösen, die ein nuanciertes Verständnis vielfältiger Informationen erfordern.",
      date: new Date().toISOString().split('T')[0],
      readTime: "3 min",
      featured: true,
      gradient: "gradient-purple"
    };
    
    setNewsData([newNews, ...newsData]);
    setIsUpdating(false);
  };

  const handleCopy = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const headerRef = useScrollReveal('fade-in');
  const liveUpdateRef = useScrollReveal('slide-up');
  const newsCardsRef = useScrollReveal('slide-up');

  // Live-News-API/Feed (Platzhalter für echte Integration)
  const liveNews = [
    {
      id: 'live1',
      title: 'OpenAI veröffentlicht GPT-5 Beta',
      summary: 'OpenAI hat die Beta-Version von GPT-5 mit noch größerem Kontextfenster und neuen Features vorgestellt.',
      url: 'https://openai.com/blog/gpt-5-beta',
      image: '/globe.svg',
      date: '2025-06-20',
      source: 'OpenAI Blog'
    },
    {
      id: 'live2',
      title: 'Google Gemini 2.5 Pro jetzt für Unternehmen verfügbar',
      summary: 'Google DeepMind launcht Gemini 2.5 Pro mit nativer Tool-Nutzung und Multimodalität für Enterprise-Kunden.',
      url: 'https://ai.google.com/news/gemini-2-5-pro',
      image: '/window.svg',
      date: '2025-06-19',
      source: 'Google AI News'
    },
    {
      id: 'live3',
      title: 'Anthropic Claude 3 Opus schlägt Benchmarks',
      summary: 'Claude 3 Opus von Anthropic erzielt neue Bestwerte bei Multimodalität und logischem Denken.',
      url: 'https://www.anthropic.com/news/claude-3-opus',
      image: '/vercel.svg',
      date: '2025-06-18',
      source: 'Anthropic News'
    }
  ];

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
          <BlurText as="h1" text="KI-News" className="text-4xl md:text-5xl font-bold mb-4" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aktuelle Entwicklungen und Trends aus der Welt der Künstlichen Intelligenz
          </p>
        </motion.div>

        {/* Live Update Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          ref={liveUpdateRef}
          className="flex justify-center mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLiveUpdate}
            disabled={isUpdating}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              isUpdating 
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                : 'gradient-blue text-white hover-glow'
            }`}
          >
            {isUpdating ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Aktualisiere...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <span>🔄</span>
                <span>Live Update</span>
              </div>
            )}
          </motion.button>
        </motion.div>

        {/* Apple-Style Filter-Tabs für News-Kategorien */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {['Alle', 'Marktanalyse', 'Modell-Updates', 'Forschung', 'Governance', 'Business-Trends'].map(cat => (
            <button
              key={cat}
              className={`glass-button px-5 py-2 rounded-xl font-semibold text-base transition-all duration-200 button-bounce ${selectedCategory === cat ? 'bg-white/10 text-blue-400 ring-2 ring-blue-400/30 scale-105' : 'text-gray-200'}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Live News Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <BlurText as="h2" text="Live KI-News" className="text-2xl font-bold mb-6 text-center text-white" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {liveNews.map((news, index) => (
              <motion.a
                key={news.id}
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.08, type: 'spring', bounce: 0.18 }}
                className="relative group glass-panel animated-gradient shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 border border-white/10"
                whileHover={{ scale: 1.025 }}
              >
                <div className="p-7 flex flex-col gap-3">
                  <BlurText as="h3" text={news.title} className="text-xl font-bold text-white mb-1 leading-tight font-sans" />
                  <p className="text-gray-200 text-base mb-2 min-h-[48px] font-sans">{news.summary}</p>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-white/70">{news.date}</span>
                  </div>
                </div>
                {/* Apple-Style Glow Effekt */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{boxShadow:'0 0 60px 0 #fff, 0 0 120px 0 #f5f5f5'}} />
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Featured News */}
        {filteredNews.filter(news => news.featured).length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <BlurText as="h2" text="Featured News" className="text-2xl font-bold mb-6 text-center" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredNews.filter(news => news.featured).map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className={`card p-8 ${news.gradient} hover-lift`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold bg-white/20 text-white px-3 py-1 rounded-full">
                      {news.category}
                    </span>
                    <span className="text-sm text-white/80">{news.readTime}</span>
                  </div>
                  <BlurText as="h3" text={news.title} className="text-xl font-bold text-white mb-3" />
                  <p className="text-white/90 mb-4">{news.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/70">{news.date}</span>
                    <div className="flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCopy(news.title, news.id)}
                        className="text-white/80 hover:text-white text-sm"
                      >
                        {copiedId === news.id ? '✓ Kopiert' : '📋 Kopieren'}
                      </motion.button>
                      <Link href={`/news/${news.id}`}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-white/80 hover:text-white text-sm"
                        >
                          📖 Lesen
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* All News */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          ref={newsCardsRef}
        >
          <BlurText as="h2" text="Aktuelle KI-News" className="text-2xl font-bold mb-6 text-center text-white" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {filteredNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 40, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.08, type: 'spring', bounce: 0.18 }}
                  className="relative group glass-panel animated-gradient shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 border border-white/10"
                  whileHover={{ scale: 1.025 }}
                >
                  <div className="p-7 flex flex-col gap-3">
                    <BlurText as="h3" text={news.title} className="text-xl font-bold text-white mb-1 leading-tight font-sans" />
                    <p className="text-gray-200 mb-2 font-sans">{news.summary}</p>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold bg-white/20 text-white px-3 py-1 rounded-full">{news.category}</span>
                      <span className="text-sm text-white/80">{news.readTime}</span>
                    </div>
                    <span className="text-xs text-gray-400">{news.date}</span>
                  </div>
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