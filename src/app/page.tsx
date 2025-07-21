'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Logo from '../components/Logo';
import { useEffect, useRef } from 'react';

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

// Executive Summary Data
const executiveSummary = {
  title: "Die KI-Landschaft 2024-2025",
  subtitle: "Ein umfassender Leitfaden zu Tools, Modellen und Best Practices",
  description: "Navigieren an der sich entwickelnden KI-Frontier - Dieser Bericht bietet eine umfassende Analyse der Landschaft der Künstlichen Intelligenz (KI) in den Jahren 2024-2025.",
  keyPoints: [
    "Agentische KI revolutioniert Arbeitsabläufe",
    "Multimodale Fähigkeiten erreichen neue Höhen",
    "Marktdynamik führt zu Demokratisierung der KI",
    "Verantwortungsvolle KI-Entwicklung wird kritisch"
  ]
};

// Trends Data
const trends = [
  {
    id: 1,
    title: "Agentische KI",
    description: "Autonome KI-Systeme für komplexe, mehrstufige Aufgaben",
    icon: "🤖",
    gradient: "gradient-blue",
    details: "Voraussichtlich 13,81 Milliarden US-Dollar Marktvolumen 2025"
  },
  {
    id: 2,
    title: "Multimodale KI",
    description: "Text, Bild und Audio in einem System",
    icon: "🎨",
    gradient: "gradient-purple",
    details: "Erweiterte Kontextfenster und verbesserte Denkfähigkeiten"
  },
  {
    id: 3,
    title: "Marktdynamik",
    description: "Neue Akteure und Investitionen",
    icon: "📈",
    gradient: "gradient-orange",
    details: "109,1 Milliarden US-Dollar private KI-Investitionen 2024"
  },
  {
    id: 4,
    title: "Responsible AI",
    description: "Ethische Entwicklung und Governance",
    icon: "🛡️",
    gradient: "gradient-pink",
    details: "Globale Rahmenwerke für KI-Governance"
  }
];

// Top Models
const topModels = [
  {
    id: 1,
    name: "GPT-4.5",
    provider: "OpenAI",
    description: "Unified AI System mit erweiterten Denkfähigkeiten",
    icon: "🧠",
    gradient: "gradient-blue",
    featured: true
  },
  {
    id: 2,
    name: "Grok 3",
    provider: "xAI",
    description: "1 Million Tokens Kontext, Super Grok Agents",
    icon: "🚀",
    gradient: "gradient-purple",
    featured: false
  },
  {
    id: 3,
    name: "Gemini 2.5 Pro",
    provider: "Google",
    description: "Large Action Models, multimodale Suite",
    icon: "🔍",
    gradient: "gradient-orange",
    featured: false
  }
];

// Quick Actions
const quickActions = [
  { name: 'KI-News', href: '/news', icon: '📰', gradient: 'gradient-blue' },
  { name: 'KI-Modelle', href: '/models', icon: '🤖', gradient: 'gradient-purple' },
  { name: 'KI-Tools', href: '/tools', icon: '🛠️', gradient: 'gradient-orange' },
  { name: 'Prompts', href: '/prompts', icon: '💡', gradient: 'gradient-pink' },
  { name: 'Best Practices', href: '/best-practices', icon: '📚', gradient: 'gradient-cyan' }
];

export default function Home() {
  // Scroll Reveal Refs
  const heroRef = useScrollReveal('fade-in');
  const keyPointsRef = useScrollReveal('slide-up');
  const trendsRef = useScrollReveal('slide-up');
  const modelsRef = useScrollReveal('slide-up');
  const ctaRef = useScrollReveal('scale-in');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <Logo size="xl" showText={true} />
            </motion.div>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {executiveSummary.description}
            </motion.p>
          </motion.div>

          {/* Key Points */}
          <motion.div
            ref={keyPointsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {executiveSummary.keyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="card p-6 text-center hover-lift"
              >
                <p className="text-gray-300 font-medium">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Schnellzugriff
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={action.href} className="block">
                  <div className={`card p-6 text-center ${action.gradient} hover-lift`}>
                    <div className="text-3xl mb-3">{action.icon}</div>
                    <h3 className="text-white font-semibold">{action.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trends Section */}
      <section ref={trendsRef} className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Globale KI-Trends 2024-2025
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trends.map((trend, index) => (
              <motion.div
                key={trend.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8 hover-lift"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 rounded-xl ${trend.gradient} flex items-center justify-center text-2xl`}>
                    {trend.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{trend.title}</h3>
                    <p className="text-gray-300 mb-3">{trend.description}</p>
                    <p className="text-sm text-gray-400">{trend.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Models Section */}
      <section ref={modelsRef} className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Führende KI-Modelle
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topModels.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card p-6 ${model.featured ? 'ring-2 ring-blue-500/30' : ''} hover-lift`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg ${model.gradient} flex items-center justify-center text-xl mr-3`}>
                    {model.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{model.name}</h3>
                    <p className="text-sm text-gray-400">{model.provider}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-3">{model.description}</p>
                {model.featured && (
                  <span className="inline-block bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full">
                    ⭐ Featured
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bereit für die KI-Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Entdecke die neuesten KI-Tools, Modelle und Best Practices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg gradient-blue text-white font-semibold hover-glow"
              >
                <Link href="/tools">KI-Tools entdecken</Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
              >
                <Link href="/best-practices">Best Practices lernen</Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
