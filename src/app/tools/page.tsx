"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import BlurText from '../../components/BlurText';
import FadeContent from '../../components/FadeContent';
import { 
  Wrench, 
  Search, 
  Filter, 
  ExternalLink, 
  Star,
  Users,
  Brain,
  Paintbrush,
  Code,
  PenTool,
  Video,
  Music,
  Zap
} from "lucide-react";

// Sample AI Tools Data
const aiTools = [
  {
    id: 1,
    name: "ChatGPT",
    description: "Fortschrittlicher Konversations-KI-Assistent für vielseitige Aufgaben",
    category: "Text & Chat",
    rating: 4.8,
    users: "100M+",
    pricing: "Freemium",
    url: "https://chat.openai.com",
    icon: Brain,
    gradient: "gradient-blue",
    tags: ["KI-Chat", "Text", "Assistent"],
    featured: true
  },
  {
    id: 2,
    name: "Midjourney",
    description: "KI-gestützte Bildgenerierung für kreative Projekte",
    category: "Bild & Design",
    rating: 4.7,
    users: "20M+",
    pricing: "Kostenpflichtig",
    url: "https://midjourney.com",
    icon: Paintbrush,
    gradient: "gradient-purple",
    tags: ["Bildgenerierung", "Design", "Kunst"],
    featured: true
  },
  {
    id: 3,
    name: "GitHub Copilot",
    description: "KI-Programmierhilfe für schnellere Entwicklung",
    category: "Code & Development",
    rating: 4.6,
    users: "5M+",
    pricing: "Kostenpflichtig",
    url: "https://github.com/features/copilot",
    icon: Code,
    gradient: "gradient-orange",
    tags: ["Programmierung", "Code", "Development"],
    featured: false
  },
  {
    id: 4,
    name: "Copy.ai",
    description: "KI-Marketing-Texte und Content-Erstellung",
    category: "Text & Chat",
    rating: 4.5,
    users: "1M+",
    pricing: "Freemium",
    url: "https://copy.ai",
    icon: PenTool,
    gradient: "gradient-pink",
    tags: ["Marketing", "Copywriting", "Content"],
    featured: false
  },
  {
    id: 5,
    name: "Runway ML",
    description: "KI-Video-Editing und Content-Erstellung",
    category: "Video & Media",
    rating: 4.4,
    users: "500K+",
    pricing: "Freemium",
    url: "https://runwayml.com",
    icon: Video,
    gradient: "gradient-cyan",
    tags: ["Video", "Editing", "Content"],
    featured: false
  },
  {
    id: 6,
    name: "Mubert",
    description: "KI-Musik-Generation für verschiedene Anwendungen",
    category: "Audio & Music",
    rating: 4.3,
    users: "200K+",
    pricing: "Freemium",
    url: "https://mubert.com",
    icon: Music,
    gradient: "gradient-green",
    tags: ["Musik", "Audio", "Generation"],
    featured: false
  }
];

const categories = [
  "Alle",
  "Text & Chat",
  "Bild & Design", 
  "Code & Development",
  "Video & Media",
  "Audio & Music",
  "Produktivität"
];

const pricingFilters = [
  "Alle",
  "Kostenlos",
  "Freemium", 
  "Kostenpflichtig"
];

export default function Tools() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [selectedPricing, setSelectedPricing] = useState("Alle");
  const [showFeatured, setShowFeatured] = useState(false);

  const filteredTools = aiTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "Alle" || tool.category === selectedCategory;
    const matchesPricing = selectedPricing === "Alle" || tool.pricing === selectedPricing;
    const matchesFeatured = !showFeatured || tool.featured;

    return matchesSearch && matchesCategory && matchesPricing && matchesFeatured;
  });

  return (
    <div className="min-h-screen lg:ml-0 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeContent>
          <div className="text-center mb-12">
            <div className="w-16 h-16 gradient-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Wrench size={32} className="text-white" />
            </div>
            <BlurText as="h1" text="KI-Tools Sammlung" className="text-4xl md:text-5xl font-bold text-white mb-4" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Entdecke die besten KI-Tools für Design, Development, Content-Erstellung und mehr.
              Alle Tools sind handverlesen und getestet.
            </p>
          </div>
        </FadeContent>

        {/* Stats */}
        <FadeContent delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Tools", value: aiTools.length.toString(), icon: Wrench },
              { label: "Kategorien", value: (categories.length - 1).toString(), icon: Filter },
              { label: "Featured", value: aiTools.filter(t => t.featured).length.toString(), icon: Star },
              { label: "Gesamt Nutzer", value: "120M+", icon: Users }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass-panel p-4 rounded-xl text-center"
              >
                <stat.icon size={24} className="text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </FadeContent>

        {/* Filters */}
        <FadeContent delay={0.4}>
          <div className="card p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <Filter size={20} className="mr-2 text-blue-400" />
              Filter & Suche
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Tools suchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full glass-button pl-10 pr-4 py-3 rounded-xl text-sm text-white bg-transparent border-none outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="glass-button px-4 py-3 rounded-xl text-sm text-white bg-transparent border-none outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800">
                    {category}
                  </option>
                ))}
              </select>

              {/* Pricing Filter */}
              <select
                value={selectedPricing}
                onChange={(e) => setSelectedPricing(e.target.value)}
                className="glass-button px-4 py-3 rounded-xl text-sm text-white bg-transparent border-none outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                {pricingFilters.map(pricing => (
                  <option key={pricing} value={pricing} className="bg-gray-800">
                    {pricing}
                  </option>
                ))}
              </select>

              {/* Featured Toggle */}
              <label className="flex items-center glass-button px-4 py-3 rounded-xl cursor-pointer">
                <input
                  type="checkbox"
                  checked={showFeatured}
                  onChange={(e) => setShowFeatured(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-white">Nur Featured</span>
              </label>
            </div>
          </div>
        </FadeContent>

        {/* Results Count */}
        <FadeContent delay={0.5}>
          <div className="mb-6">
            <p className="text-gray-400">
              {filteredTools.length} von {aiTools.length} Tools gefunden
            </p>
          </div>
        </FadeContent>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => (
            <FadeContent key={tool.id} delay={0.6 + index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="card p-6 h-full group cursor-pointer relative"
              >
                {tool.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                    <Star size={12} className="mr-1" />
                    Featured
                  </div>
                )}

                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${tool.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                    <tool.icon size={20} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-blue-400 mb-2">{tool.category}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {tool.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <div className="flex items-center">
                      <Star size={12} className="text-yellow-400 mr-1" />
                      {tool.rating}
                    </div>
                    <div className="flex items-center">
                      <Users size={12} className="mr-1" />
                      {tool.users}
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    tool.pricing === 'Kostenlos' ? 'bg-green-500/20 text-green-300' :
                    tool.pricing === 'Freemium' ? 'bg-blue-500/20 text-blue-300' :
                    'bg-purple-500/20 text-purple-300'
                  }`}>
                    {tool.pricing}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {tool.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-4 py-2 glass-button text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-200 group-hover:bg-blue-500/20"
                >
                  <Zap size={16} className="mr-2" />
                  Tool öffnen
                  <ExternalLink size={14} className="ml-2" />
                </Link>
              </motion.div>
            </FadeContent>
          ))}
        </div>

        {/* No Results */}
        {filteredTools.length === 0 && (
          <FadeContent delay={0.6}>
            <div className="card p-12 text-center">
              <Wrench size={48} className="text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Keine Tools gefunden</h3>
              <p className="text-gray-400 mb-6">
                Versuche deine Suchkriterien anzupassen oder entferne einige Filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("Alle");
                  setSelectedPricing("Alle");
                  setShowFeatured(false);
                }}
                className="px-6 py-2 gradient-blue text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
              >
                Filter zurücksetzen
              </button>
            </div>
          </FadeContent>
        )}

        {/* CTA Section */}
        <FadeContent delay={0.8}>
          <div className="card p-8 mt-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Tool fehlt?</h2>
            <p className="text-gray-300 mb-6">
              Kennst du ein großartiges KI-Tool, das hier fehlt? Lass es uns wissen!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 gradient-blue text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
              >
                Tool vorschlagen
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 glass-button text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Newsletter abonnieren
              </motion.button>
            </div>
          </div>
        </FadeContent>
      </div>
    </div>
  );
}