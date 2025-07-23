'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Copy, Check, Star, BookOpen, Target, TrendingUp, Heart, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import BlurText from '../../components/BlurText';

// Import prompt data
import promptsData from '../../data/prompts.json';

const categories = ["All", "Content", "Code", "Marketing", "Design", "Strategy", "Data"];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const router = useRouter();

  const filteredPrompts = promptsData.filter(prompt => {
    const matchesCategory = selectedCategory === "All" || prompt.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "All" || prompt.difficulty === selectedDifficulty;
    const matchesSearch = prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prompt.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prompt.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const featuredPrompts = promptsData.filter(prompt => prompt.featured);

  const handleCopy = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleFavorite = (id: number) => {
    setFavorites(favs => favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id]);
  };

  const headerRef = useScrollReveal('fade-in');

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
          <BlurText as="h1" text="AI Prompts Collection" className="text-4xl md:text-5xl font-bold mb-4" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional prompts for every use case - from content creation to code review and strategic planning
          </p>
        </motion.div>

        {/* Featured Prompts */}
        {featuredPrompts.length > 0 && (
          <motion.section className="mb-12">
            <BlurText as="h2" text="Featured Prompts" className="text-2xl font-bold mb-6 text-center flex items-center justify-center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPrompts.map((prompt) => (
                <motion.div
                  key={prompt.id}
                  whileHover={{ scale: 1.02 }}
                  className={`card p-6 ${prompt.gradient} hover-lift ring-2 ring-yellow-500/30`}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{prompt.icon}</div>
                    <div>
                      <BlurText as="h3" text={prompt.title} className="text-xl font-bold text-white" />
                      <p className="text-white/80 text-sm">{prompt.category} • {prompt.subcategory}</p>
                    </div>
                  </div>
                  <p className="text-white/90 mb-4">{prompt.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {prompt.tags.map((tag, index) => (
                      <span key={index} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCopy(prompt.prompt, prompt.id)}
                      className="flex-1 bg-white/20 text-white py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors flex items-center justify-center text-sm"
                    >
                      {copiedId === prompt.id ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </>
                      )}
                    </motion.button>
                    <button
                      onClick={() => handleFavorite(prompt.id)}
                      className="text-white/80 hover:text-pink-400 transition-colors p-2"
                    >
                      <Heart className={`w-5 h-5 ${favorites.includes(prompt.id) ? 'fill-pink-400 text-pink-400' : ''}`} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          {/* Search */}
          <div className="flex justify-center mb-8">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search prompts, tags, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {categories.map(category => (
              <button
                key={category}
                className={`glass-button px-5 py-2 rounded-xl font-semibold text-base transition-all duration-200 ${
                  selectedCategory === category 
                    ? 'bg-white/10 text-blue-400 ring-2 ring-blue-400/30 scale-105' 
                    : 'text-gray-200 hover:text-white'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Difficulty Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {difficulties.map(difficulty => (
              <button
                key={difficulty}
                className={`glass-button px-5 py-2 rounded-xl font-semibold text-base transition-all duration-200 ${
                  selectedDifficulty === difficulty 
                    ? 'bg-white/10 text-pink-400 ring-2 ring-pink-400/30 scale-105' 
                    : 'text-gray-200 hover:text-white'
                }`}
                onClick={() => setSelectedDifficulty(difficulty)}
              >
                {difficulty}
              </button>
            ))}
          </div>
        </motion.div>

        {/* All Prompts Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <BlurText as="h2" text={`${filteredPrompts.length} Prompts Found`} className="text-2xl font-bold mb-6 text-center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredPrompts.map((prompt, index) => (
                <motion.div
                  key={prompt.id}
                  initial={{ opacity: 0, y: 40, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="card p-6 hover-lift cursor-pointer"
                  onClick={() => router.push(`/prompts/${prompt.id}`)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <span className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${prompt.gradient}`}>
                      {prompt.icon}
                    </span>
                    <div className="flex-1">
                      <BlurText as="h3" text={prompt.title} className="text-lg font-bold text-white mb-1" />
                      <p className="text-xs text-gray-400">{prompt.category} • {prompt.subcategory}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{prompt.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {prompt.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                    {prompt.tags.length > 3 && (
                      <span className="text-xs text-gray-400">+{prompt.tags.length - 3} more</span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      prompt.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                      prompt.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-red-500/20 text-red-300'
                    }`}>
                      {prompt.difficulty}
                    </span>
                    {prompt.featured && (
                      <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full">
                        ⭐ Featured
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      className="flex-1 glass-button py-2 text-sm font-semibold text-white transition-all duration-200 flex items-center justify-center"
                      onClick={(e) => { e.stopPropagation(); handleCopy(prompt.prompt, prompt.id); }}
                    >
                      {copiedId === prompt.id ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </>
                      )}
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleFavorite(prompt.id); }}
                      className="text-gray-400 hover:text-pink-400 transition-colors p-2"
                    >
                      <Heart className={`w-5 h-5 ${favorites.includes(prompt.id) ? 'fill-pink-400 text-pink-400' : ''}`} />
                    </button>
                  </div>
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
                <BlurText as="h3" text="Clear Goals" className="text-xl font-bold" />
              </div>
              <p className="text-gray-300">Define exactly what you want to achieve. The more specific your prompt, the better the result.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-green-400 mr-3" />
                <BlurText as="h3" text="Provide Context" className="text-xl font-bold" />
              </div>
              <p className="text-gray-300">Set the role and context clearly. Give examples and define the desired format.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-purple-400 mr-3" />
                <BlurText as="h3" text="Iterate" className="text-xl font-bold" />
              </div>
              <p className="text-gray-300">Refine your prompts based on results. Test different approaches and improve over time.</p>
            </motion.div>
          </div>
        </motion.section>
      </div>

      <style jsx global>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}