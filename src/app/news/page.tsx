"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BlurText from '../../components/BlurText';
import FadeContent from '../../components/FadeContent';
import { 
  Newspaper, 
  Calendar, 
  Clock, 
  ArrowRight,
  TrendingUp,
  Bot,
  Sparkles,
  Zap
} from "lucide-react";

// Sample News Data
const newsArticles = [
  {
    id: 1,
    title: "GPT-4.5 Revolution: OpenAI kündigt größtes Update seit Jahren an",
    excerpt: "Das neue Modell soll 10x effizienter werden und erweiterte Reasoning-Fähigkeiten bieten. Beta-Zugang startet noch diesen Monat.",
    category: "Modelle",
    date: "2024-12-15",
    readTime: "5 min",
    image: "/globe.svg",
    featured: true,
    tags: ["OpenAI", "GPT-4.5", "Update"]
  },
  {
    id: 2,
    title: "Claude 3.5 Sonnet erhält massive Coding-Verbesserungen",
    excerpt: "Anthropic verbessert die Programmier-Fähigkeiten ihres Flaggschiff-Modells erheblich. Neue Benchmarks zeigen beeindruckende Ergebnisse.",
    category: "Updates",
    date: "2024-12-14",
    readTime: "3 min",
    image: "/file.svg",
    featured: false,
    tags: ["Anthropic", "Claude", "Coding"]
  },
  {
    id: 3,
    title: "KI-Tools für Designer: Die 10 besten Alternativen zu Midjourney",
    excerpt: "Von DALL-E 3 bis zu Stable Diffusion - wir stellen die besten Bildgenerierungs-Tools vor und vergleichen ihre Stärken.",
    category: "Tools",
    date: "2024-12-13",
    readTime: "8 min",
    image: "/window.svg",
    featured: true,
    tags: ["Design", "Bildgenerierung", "Tools"]
  },
  {
    id: 4,
    title: "Neue EU-KI-Verordnung: Was Unternehmen jetzt wissen müssen",
    excerpt: "Die finalen Bestimmungen der EU-KI-Verordnung sind veröffentlicht. Wir erklären die wichtigsten Änderungen für Businesses.",
    category: "Regulierung",
    date: "2024-12-12",
    readTime: "6 min",
    image: "/globe.svg",
    featured: false,
    tags: ["EU", "Regulierung", "Business"]
  },
  {
    id: 5,
    title: "Prompt Engineering 2025: Die wichtigsten Techniken im Überblick",
    excerpt: "Von Chain-of-Thought bis zu Tree-of-Thoughts - die neuesten Methoden für bessere KI-Interaktionen im Detail erklärt.",
    category: "Best Practices",
    date: "2024-12-11",
    readTime: "7 min",
    image: "/file.svg",
    featured: false,
    tags: ["Prompt Engineering", "Techniken", "Guide"]
  },
  {
    id: 6,
    title: "Google Gemini 2.0: Multimodale KI erreicht neuen Meilenstein",
    excerpt: "Googles neueste KI-Generation kann nahtlos zwischen Text, Bild, Audio und Video wechseln. Die Benchmark-Ergebnisse sind beeindruckend.",
    category: "Modelle",
    date: "2024-12-10",
    readTime: "4 min",
    image: "/window.svg",
    featured: true,
    tags: ["Google", "Gemini", "Multimodal"]
  }
];

const categories = [
  { name: "Alle", color: "text-blue-400", count: newsArticles.length },
  { name: "Modelle", color: "text-purple-400", count: newsArticles.filter(a => a.category === "Modelle").length },
  { name: "Tools", color: "text-orange-400", count: newsArticles.filter(a => a.category === "Tools").length },
  { name: "Updates", color: "text-green-400", count: newsArticles.filter(a => a.category === "Updates").length },
  { name: "Best Practices", color: "text-pink-400", count: newsArticles.filter(a => a.category === "Best Practices").length },
  { name: "Regulierung", color: "text-cyan-400", count: newsArticles.filter(a => a.category === "Regulierung").length }
];

export default function News() {
  const featuredArticles = newsArticles.filter(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen lg:ml-0 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeContent>
          <div className="text-center mb-12">
            <div className="w-16 h-16 gradient-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Newspaper size={32} className="text-white" />
            </div>
            <BlurText as="h1" text="KI-News & Updates" className="text-4xl md:text-5xl font-bold text-white mb-4" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bleibe auf dem Laufenden mit den neuesten Entwicklungen in der KI-Welt. 
              Von Model-Updates bis zu Industry-News.
            </p>
          </div>
        </FadeContent>

        {/* Stats */}
        <FadeContent delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Artikel", value: newsArticles.length.toString(), icon: Newspaper },
              { label: "Kategorien", value: (categories.length - 1).toString(), icon: TrendingUp },
              { label: "Featured", value: featuredArticles.length.toString(), icon: Sparkles },
              { label: "Diese Woche", value: "6", icon: Zap }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass-panel p-4 rounded-xl text-center"
              >
                <stat.icon size={20} className="text-blue-400 mx-auto mb-2" />
                <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </FadeContent>

        {/* Categories */}
        <FadeContent delay={0.4}>
          <div className="card p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Kategorien</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className="glass-button px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  <span className={`font-medium ${category.color}`}>{category.name}</span>
                  <span className="text-gray-400 text-sm ml-2">({category.count})</span>
                </motion.button>
              ))}
            </div>
          </div>
        </FadeContent>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <FadeContent delay={0.5}>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Sparkles size={24} className="mr-2 text-yellow-400" />
                Featured Stories
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {featuredArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="card p-6 group cursor-pointer relative overflow-hidden"
                  >
                    <div className="absolute top-4 right-4 bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                      <Sparkles size={12} className="mr-1" />
                      Featured
                    </div>

                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-16 h-16 glass-button rounded-xl flex items-center justify-center flex-shrink-0">
                        <Bot size={24} className="text-blue-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                            {article.category}
                          </span>
                          <span className="text-xs text-gray-400 flex items-center">
                            <Calendar size={12} className="mr-1" />
                            {new Date(article.date).toLocaleDateString('de-DE')}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-xs text-gray-400">
                        <Clock size={12} className="mr-1" />
                        {article.readTime}
                      </div>
                    </div>

                    <div className="flex items-center text-blue-400 mt-4 group-hover:text-blue-300 transition-colors">
                      <span className="text-sm font-medium">Weiterlesen</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeContent>
        )}

        {/* Regular Articles */}
        <FadeContent delay={0.7}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Alle Artikel</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="card p-6 group cursor-pointer"
                >
                  <div className="flex items-center space-x-2 mb-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      article.category === 'Modelle' ? 'bg-purple-500/20 text-purple-300' :
                      article.category === 'Tools' ? 'bg-orange-500/20 text-orange-300' :
                      article.category === 'Updates' ? 'bg-green-500/20 text-green-300' :
                      article.category === 'Best Practices' ? 'bg-pink-500/20 text-pink-300' :
                      'bg-cyan-500/20 text-cyan-300'
                    }`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {new Date(article.date).toLocaleDateString('de-DE')}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-xs text-gray-400">
                      <Clock size={12} className="mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">Artikel lesen</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeContent>

        {/* Newsletter CTA */}
        <FadeContent delay={0.9}>
          <div className="card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Verpasse keine KI-News</h2>
            <p className="text-gray-300 mb-6">
              Abonniere unseren Newsletter und erhalte die wichtigsten KI-Updates direkt in dein Postfach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Deine E-Mail-Adresse"
                className="flex-1 px-4 py-3 glass-button rounded-lg text-white bg-transparent border-none outline-none focus:ring-2 focus:ring-blue-500/50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 gradient-blue text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
              >
                Abonnieren
              </motion.button>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Jederzeit abbestellbar. Wir spammen nicht.
            </p>
          </div>
        </FadeContent>
      </div>
    </div>
  );
} 