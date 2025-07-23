'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import BlurText from '../../components/BlurText';

// Import models data
import modelsData from '../../data/models.json';

const categories = ["All", "Language Model", "Multimodal Model", "Open Source Model", "Image Generation", "Reasoning Model"];
const providers = ["All", "OpenAI", "Google", "xAI", "Anthropic", "Meta", "Mistral AI", "DeepSeek"];

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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProvider, setSelectedProvider] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const filteredModels = modelsData.filter(model => {
    const matchesCategory = selectedCategory === "All" || model.category === selectedCategory;
    const matchesProvider = selectedProvider === "All" || model.provider === selectedProvider;
    const matchesSearch = model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         model.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         model.capabilities.some(cap => cap.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesProvider && matchesSearch;
  });

  const featuredModels = modelsData.filter(model => model.featured);

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
          <BlurText as="h1" text="AI Models 2024-2025" className="text-4xl md:text-5xl font-bold mb-4" />
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            The most advanced AI models shaping the future. From language models to multimodal systems, 
            discover the cutting-edge technology powering the AI revolution.
          </p>
        </motion.div>

        {/* Featured Models */}
        {featuredModels.length > 0 && (
          <motion.section className="mb-12">
            <BlurText as="h2" text="Featured Models" className="text-2xl font-bold mb-6 text-center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredModels.map((model) => (
                <motion.div
                  key={model.id}
                  whileHover={{ scale: 1.02 }}
                  className={`card p-6 ${model.gradient} hover-lift ring-2 ring-yellow-500/30`}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{model.icon}</div>
                    <div>
                      <BlurText as="h3" text={model.name} className="text-xl font-bold text-white" />
                      <p className="text-white/80 text-sm">{model.provider}</p>
                    </div>
                  </div>
                  <p className="text-white/90 mb-4">{model.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {model.capabilities.slice(0, 3).map((capability, index) => (
                      <span key={index} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                        {capability}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-white/70">Context:</span>
                      <p className="text-white font-medium">{model.contextWindow}</p>
                    </div>
                    <div>
                      <span className="text-white/70">Pricing:</span>
                      <p className="text-white font-medium">{model.pricing}</p>
                    </div>
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
                placeholder="Search models, capabilities, or providers..."
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

          {/* Provider Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {providers.map(provider => (
              <button
                key={provider}
                className={`glass-button px-5 py-2 rounded-xl font-semibold text-base transition-all duration-200 ${
                  selectedProvider === provider 
                    ? 'bg-white/10 text-pink-400 ring-2 ring-pink-400/30 scale-105' 
                    : 'text-gray-200 hover:text-white'
                }`}
                onClick={() => setSelectedProvider(provider)}
              >
                {provider}
              </button>
            ))}
          </div>
        </motion.div>

        {/* All Models Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <BlurText as="h2" text={`${filteredModels.length} Models Found`} className="text-2xl font-bold mb-6 text-center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredModels.map((model, index) => (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 40, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="card p-6 hover-lift cursor-pointer"
                  onClick={() => router.push(`/models/${model.id}`)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <span className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${model.gradient}`}>
                      {model.icon}
                    </span>
                    <div className="flex-1">
                      <BlurText as="h3" text={model.name} className="text-lg font-bold text-white mb-1" />
                      <p className="text-xs text-gray-400">{model.provider} • {model.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{model.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {model.capabilities.slice(0, 3).map((capability, i) => (
                      <span key={i} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">
                        {capability}
                      </span>
                    ))}
                    {model.capabilities.length > 3 && (
                      <span className="text-xs text-gray-400">+{model.capabilities.length - 3} more</span>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-400">Context:</span>
                      <p className="text-white font-medium">{model.contextWindow}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Pricing:</span>
                      <p className="text-white font-medium">{model.pricing}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Released: {model.releaseDate}</span>
                    {model.featured && (
                      <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full">
                        ⭐ Featured
                      </span>
                    )}
                  </div>
                  
                  <div className="mt-4">
                    <span className="text-gray-400 text-xs">Use Cases:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {model.useCases.slice(0, 2).map((useCase, i) => (
                        <span key={i} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                      {model.useCases.length > 2 && (
                        <span className="text-xs text-gray-400">+{model.useCases.length - 2}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Market Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <BlurText as="h2" text="AI Model Market Overview" className="text-3xl font-bold mb-8 text-center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card p-6"
            >
              <div className="text-3xl mb-4">🚀</div>
              <BlurText as="h3" text="Market Growth" className="text-xl font-bold mb-2" />
              <p className="text-gray-300">The AI model market is expected to reach $109.1 billion in private investments by 2024.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card p-6"
            >
              <div className="text-3xl mb-4">🧠</div>
              <BlurText as="h3" text="Advanced Reasoning" className="text-xl font-bold mb-2" />
              <p className="text-gray-300">New models feature enhanced reasoning capabilities and longer context windows.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card p-6"
            >
              <div className="text-3xl mb-4">🔗</div>
              <BlurText as="h3" text="Multimodal Future" className="text-xl font-bold mb-2" />
              <p className="text-gray-300">Text, image, audio, and video processing in unified systems is becoming standard.</p>
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