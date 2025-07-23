'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, Calendar, Clock, User } from 'lucide-react';
import BlurText from '../../components/BlurText';

// Import blog posts data
import blogPostsData from '../../data/blog-posts.json';

const categories = ["All", "Trends", "Best Practices", "Tutorial", "Innovation", "Ethics"];

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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPostsData.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPostsData.slice(0, 3); // First 3 posts as featured

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
          <BlurText as="h1" text="AI News & Insights" className="text-4xl md:text-5xl font-bold mb-4" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest developments in AI technology, industry trends, and best practices
            for implementing artificial intelligence in your projects.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <motion.section className="mb-12">
          <BlurText as="h2" text="Featured Articles" className="text-2xl font-bold mb-6 text-center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <motion.article
                key={post.id}
                whileHover={{ scale: 1.02 }}
                className="card p-6 hover-lift"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-32 object-contain mb-4 rounded-lg bg-gray-800/50"
                />
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-xs text-gray-400">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <BlurText as="h3" text={post.title} className="text-lg font-bold text-white mb-2" />
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-400">
                    <User className="w-3 h-3 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center text-xs text-gray-400">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mt-3">
                  {post.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="text-xs bg-gray-500/20 text-gray-300 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

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
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
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
        </motion.div>

        {/* All Articles Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <BlurText as="h2" text={`${filteredPosts.length} Articles Found`} className="text-2xl font-bold mb-6 text-center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 40, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="card p-6 hover-lift cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-32 object-contain mb-4 rounded-lg bg-gray-800/50"
                  />
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-gray-400">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <BlurText as="h3" text={post.title} className="text-lg font-bold text-white mb-2" />
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-xs text-gray-400">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-xs text-gray-400">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-xs text-gray-400">+{post.tags.length - 3} more</span>
                    )}
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Newsletter Signup */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="card p-8 text-center">
            <BlurText as="h2" text="Stay Updated" className="text-3xl font-bold mb-4" />
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest AI news, insights, and best practices delivered to your inbox. 
              Join thousands of AI professionals staying ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg gradient-blue text-white font-semibold hover-glow"
              >
                Subscribe
              </motion.button>
            </div>
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