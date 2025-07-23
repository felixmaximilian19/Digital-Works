'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Search, Filter, Star, ExternalLink, Zap, Shield, Sparkles, Layers } from 'lucide-react';
import './tools-glass.css';
import BlurText from '../../components/BlurText';

// AI Tools Data - Strukturiert und kategorisiert
const aiToolsData = [
  {
    id: 1,
    name: "ChatGPT Plus",
    provider: "OpenAI",
    category: "Text Generation",
    subcategory: "Conversational AI",
    description: "Fortschrittlichstes conversational AI-System mit GPT-4 Turbo, erweiterten Fähigkeiten und Plugins.",
    pricing: "20€/Monat",
    features: ["GPT-4 Turbo", "Code Interpreter", "DALL-E 3", "Web Browsing", "Custom GPTs"],
    useCase: "Content Creation, Coding, Research, Creative Writing",
    url: "https://chat.openai.com",
    icon: "🤖",
    gradient: "gradient-blue",
    rating: 4.8,
    tags: ["Text", "Code", "Multimodal", "Popular"],
    featured: true,
    tier: "Premium"
  },
  {
    id: 2,
    name: "Claude Pro",
    provider: "Anthropic",
    category: "Text Generation",
    subcategory: "AI Assistant",
    description: "Anthropics Claude mit erweiterten Reasoning-Fähigkeiten, Computer-Nutzung und Websuche.",
    pricing: "20€/Monat",
    features: ["Claude 3.5 Sonnet", "Computer Use", "Web Search", "Document Analysis", "Code Generation"],
    useCase: "Research, Analysis, Coding, Document Processing",
    url: "https://claude.ai",
    icon: "🧠",
    gradient: "gradient-purple",
    rating: 4.7,
    tags: ["Text", "Research", "Code", "Analysis"],
    featured: true,
    tier: "Premium"
  },
  {
    id: 3,
    name: "Midjourney",
    provider: "Midjourney Inc.",
    category: "Image Generation",
    subcategory: "Art & Design",
    description: "Führendes AI-System für fotorealistische und künstlerische Bildgenerierung.",
    pricing: "10€/Monat",
    features: ["V6 Model", "Style References", "Character Consistency", "Vary Region", "Upscaling"],
    useCase: "Digital Art, Marketing Materials, Concept Art, Photography",
    url: "https://midjourney.com",
    icon: "🎨",
    gradient: "gradient-pink",
    rating: 4.9,
    tags: ["Image", "Art", "Design", "Creative"],
    featured: true,
    tier: "Premium"
  },
  {
    id: 4,
    name: "Cursor",
    provider: "Anysphere",
    category: "Code Generation",
    subcategory: "IDE",
    description: "AI-first Code Editor mit fortschrittlichen Code-Completion und pair programming Fähigkeiten.",
    pricing: "20€/Monat",
    features: ["AI Autocomplete", "Chat with Codebase", "AI Review", "Multi-file Editing", "Natural Language to Code"],
    useCase: "Software Development, Code Review, Refactoring, Learning",
    url: "https://cursor.sh",
    icon: "💻",
    gradient: "gradient-cyan",
    rating: 4.6,
    tags: ["Code", "Development", "Productivity", "Editor"],
    featured: false,
    tier: "Premium"
  },
  {
    id: 5,
    name: "Perplexity Pro",
    provider: "Perplexity AI",
    category: "Research",
    subcategory: "Search & Analysis",
    description: "AI-powered Research-Engine mit Echtzeitdaten, Quellenzitation und multimodalen Fähigkeiten.",
    pricing: "20€/Monat",
    features: ["Pro Search", "Source Citations", "Image Analysis", "Real-time Data", "Academic Mode"],
    useCase: "Research, Fact-checking, Data Analysis, Academic Writing",
    url: "https://perplexity.ai",
    icon: "🔍",
    gradient: "gradient-orange",
    rating: 4.5,
    tags: ["Research", "Search", "Analysis", "Academic"],
    featured: false,
    tier: "Premium"
  },
  {
    id: 6,
    name: "RunwayML",
    provider: "Runway AI",
    category: "Video Generation",
    subcategory: "Video & Motion",
    description: "Professionelle AI-Video-Generierung und Bearbeitung mit Gen-3 Alpha.",
    pricing: "15€/Monat",
    features: ["Gen-3 Alpha", "Text to Video", "Image to Video", "Motion Brush", "Green Screen"],
    useCase: "Video Production, Content Creation, Marketing, Film",
    url: "https://runwayml.com",
    icon: "🎬",
    gradient: "gradient-red",
    rating: 4.4,
    tags: ["Video", "Motion", "Creative", "Production"],
    featured: false,
    tier: "Premium"
  },
  {
    id: 7,
    name: "ElevenLabs",
    provider: "ElevenLabs",
    category: "Audio Generation",
    subcategory: "Voice & Music",
    description: "Realistische AI-Stimmengenerierung mit emotionaler Ausdruckskraft und Cloning-Fähigkeiten.",
    pricing: "5€/Monat",
    features: ["Voice Cloning", "Multilingual", "Emotion Control", "Real-time Voice", "Sound Effects"],
    useCase: "Podcasts, Audiobooks, Voiceovers, Accessibility",
    url: "https://elevenlabs.io",
    icon: "🎙️",
    gradient: "gradient-green",
    rating: 4.7,
    tags: ["Audio", "Voice", "Speech", "Accessibility"],
    featured: false,
    tier: "Standard"
  },
  {
    id: 8,
    name: "Notion AI",
    provider: "Notion",
    category: "Productivity",
    subcategory: "Knowledge Management",
    description: "Integrierte AI in Notion für automatisierte Dokumentation, Zusammenfassungen und Content-Erstellung.",
    pricing: "10€/Monat",
    features: ["Auto-summarization", "Writing Assistant", "Database AI", "Template Generation", "Translation"],
    useCase: "Documentation, Project Management, Note-taking, Knowledge Base",
    url: "https://notion.so",
    icon: "📋",
    gradient: "gradient-gray",
    rating: 4.3,
    tags: ["Productivity", "Writing", "Organization", "Collaboration"],
    featured: false,
    tier: "Standard"
  },
  {
    id: 9,
    name: "GitHub Copilot",
    provider: "GitHub/OpenAI",
    category: "Code Generation",
    subcategory: "Code Assistant",
    description: "AI Pair Programmer für alle populären Code-Editoren mit Kontext-aware Code-Generierung.",
    pricing: "10€/Monat",
    features: ["Code Completion", "Chat in IDE", "Code Explanation", "Test Generation", "Security Scanning"],
    useCase: "Software Development, Code Learning, Debugging, Testing",
    url: "https://github.com/features/copilot",
    icon: "🐙",
    gradient: "gradient-indigo",
    rating: 4.5,
    tags: ["Code", "Development", "GitHub", "Learning"],
    featured: false,
    tier: "Standard"
  },
  {
    id: 10,
    name: "Canva Magic Suite",
    provider: "Canva",
    category: "Design",
    subcategory: "Graphic Design",
    description: "AI-powered Design-Suite mit automatischer Layoutgenerierung, Bildbearbeitung und Brand Kit.",
    pricing: "15€/Monat",
    features: ["Magic Design", "Background Remover", "Magic Eraser", "Text to Image", "Brand Kit AI"],
    useCase: "Social Media, Marketing Materials, Presentations, Branding",
    url: "https://canva.com",
    icon: "✨",
    gradient: "gradient-yellow",
    rating: 4.4,
    tags: ["Design", "Marketing", "Social Media", "Templates"],
    featured: false,
    tier: "Standard"
  }
];

const categories = ["Alle", "Text Generation", "Image Generation", "Code Generation", "Video Generation", "Audio Generation", "Research", "Design", "Productivity"];
const tiers = ["Alle", "Free", "Standard", "Premium"];

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

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [selectedTier, setSelectedTier] = useState("Alle");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredTools = aiToolsData.filter(tool => {
    const matchesCategory = selectedCategory === "Alle" || tool.category === selectedCategory;
    const matchesTier = selectedTier === "Alle" || tool.tier === selectedTier;
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesTier && matchesSearch;
  });

  const featuredTools = filteredTools.filter(tool => tool.featured);

  const headerRef = useScrollReveal('fade-in');
  const featuredRef = useScrollReveal('slide-up');

  const getTierIcon = (tier: string) => {
    switch(tier) {
      case 'Premium': return <Sparkles className="w-4 h-4 text-yellow-400" />;
      case 'Standard': return <Zap className="w-4 h-4 text-blue-400" />;
      default: return <Shield className="w-4 h-4 text-green-400" />;
    }
  };

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
          <BlurText as="h1" text="KI-Tools" className="text-4xl md:text-5xl font-bold mb-4" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Entdecke die besten KI-Tools für deine Projekte - kuratiert und kategorisiert für maximale Produktivität
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Suche nach Tools, Kategorien oder Features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl glass-button text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-3 glass-button rounded-xl text-white hover:bg-white/10 transition-all"
            >
              <Filter className="w-5 h-5" />
              Filter
            </button>
          </div>

          {/* Filter Tabs */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-2">Kategorien</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`px-4 py-2 rounded-lg text-sm transition-all ${
                        selectedCategory === category 
                          ? 'bg-blue-500 text-white' 
                          : 'glass-button text-gray-300 hover:bg-white/10'
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-2">Preiskategorien</h3>
                <div className="flex flex-wrap gap-2">
                  {tiers.map(tier => (
                    <button
                      key={tier}
                      className={`px-4 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${
                        selectedTier === tier 
                          ? 'bg-purple-500 text-white' 
                          : 'glass-button text-gray-300 hover:bg-white/10'
                      }`}
                      onClick={() => setSelectedTier(tier)}
                    >
                      {tier !== "Alle" && getTierIcon(tier)}
                      {tier}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Featured Tools */}
        {featuredTools.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            ref={featuredRef}
            className="mb-16"
          >
            <BlurText as="h2" text="Empfohlene Tools" className="text-3xl font-bold mb-8 text-center" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredTools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`card p-6 ${tool.gradient} hover-lift ring-2 ring-yellow-500/20`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-3xl mr-3">{tool.icon}</span>
                      <div>
                        <BlurText as="h3" text={tool.name} className="text-xl font-bold text-white" />
                        <p className="text-white/80 text-sm">{tool.provider}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {getTierIcon(tool.tier)}
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white/80 text-sm">{tool.rating}</span>
                    </div>
                  </div>
                  <p className="text-white/90 mb-4">{tool.description}</p>
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-white/70 text-sm">Features:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {tool.features.slice(0, 3).map((feature, i) => (
                          <span key={i} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/90 font-semibold">{tool.pricing}</span>
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-white/80 hover:text-white text-sm"
                      >
                        Öffnen <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* All Tools */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <BlurText as="h2" text="Alle KI-Tools" className="text-3xl font-bold mb-8 text-center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredTools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 40, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="glass-panel rounded-xl p-6 hover:shadow-2xl transition-all duration-300 border border-white/10"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{tool.icon}</span>
                      <div>
                        <BlurText as="h3" text={tool.name} className="text-lg font-bold text-white" />
                        <p className="text-gray-400 text-sm">{tool.provider}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {getTierIcon(tool.tier)}
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-300 text-sm">{tool.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-3">{tool.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div>
                      <span className="text-gray-400 text-xs">Kategorie:</span>
                      <span className="text-gray-200 text-sm ml-2">{tool.category}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 text-xs">Einsatz:</span>
                      <span className="text-gray-200 text-sm ml-2">{tool.useCase}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {tool.tags.map((tag, i) => (
                      <span key={i} className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">{tool.pricing}</span>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors text-sm"
                    >
                      Testen <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">{aiToolsData.length}</div>
              <p className="text-gray-300">Tools verfügbar</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">{categories.length - 1}</div>
              <p className="text-gray-300">Kategorien</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">{aiToolsData.filter(t => t.featured).length}</div>
              <p className="text-gray-300">Empfohlene Tools</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">
                {(aiToolsData.reduce((sum, tool) => sum + tool.rating, 0) / aiToolsData.length).toFixed(1)}
              </div>
              <p className="text-gray-300">⭐ Durchschnitt</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}