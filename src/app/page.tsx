"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "../components/Logo";
import { useEffect, useRef } from "react";
import Image from "next/image";
import BlurText from '../components/BlurText';

function useScrollReveal(className = "fade-in", threshold = 0.15) {
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
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [className, threshold]);
  return ref;
}

// Trends Data
const trends = [
  {
    id: 1,
    title: "Agentische KI",
    description: "Autonome KI-Systeme für komplexe, mehrstufige Aufgaben",
    icon: "🤖",
    gradient: "gradient-blue",
    details: "Voraussichtlich 13,81 Milliarden US-Dollar Marktvolumen 2025",
  },
  {
    id: 2,
    title: "Multimodale KI",
    description: "Text, Bild und Audio in einem System",
    icon: "🎨",
    gradient: "gradient-purple",
    details: "Erweiterte Kontextfenster und verbesserte Denkfähigkeiten",
  },
  {
    id: 3,
    title: "Marktdynamik",
    description: "Neue Akteure und Investitionen",
    icon: "📈",
    gradient: "gradient-orange",
    details: "109,1 Milliarden US-Dollar private KI-Investitionen 2024",
  },
  {
    id: 4,
    title: "Responsible AI",
    description: "Ethische Entwicklung und Governance",
    icon: "🛡️",
    gradient: "gradient-pink",
    details: "Globale Rahmenwerke für KI-Governance",
  },
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
    featured: true,
  },
  {
    id: 2,
    name: "Grok 3",
    provider: "xAI",
    description: "1 Million Tokens Kontext, Super Grok Agents",
    icon: "🚀",
    gradient: "gradient-purple",
    featured: false,
  },
  {
    id: 3,
    name: "Gemini 2.5 Pro",
    provider: "Google",
    description: "Large Action Models, multimodale Suite",
    icon: "🔍",
    gradient: "gradient-orange",
    featured: false,
  },
];

// Quick Actions
const quickActions = [
  { name: "KI-News", href: "/news", icon: "📰", gradient: "gradient-blue" },
  {
    name: "KI-Modelle",
    href: "/models",
    icon: "🤖",
    gradient: "gradient-purple",
  },
  { name: "KI-Tools", href: "/tools", icon: "🛠️", gradient: "gradient-orange" },
  { name: "Prompts", href: "/prompts", icon: "💡", gradient: "gradient-pink" },
  {
    name: "Best Practices",
    href: "/best-practices",
    icon: "📚",
    gradient: "gradient-cyan",
  },
];

// Skeleton Loader Komponente
function CardSkeleton() {
  return (
    <div className="card skeleton h-48 w-full mb-6" />
  );
}

export default function Home() {
  // Scroll Reveal Refs
  const heroRef = useScrollReveal("fade-in");
  const featuresRef = useScrollReveal("slide-up");

  // AI Stack Features
  const aiStackFeatures = [
    {
      icon: "🧠",
      title: "Intelligent Modelle",
      description:
        "Unsere KI-Modelle sind in der Lage, komplexe Aufgaben zu lösen und neue Erkenntnisse zu generieren.",
    },
    {
      icon: "🔗",
      title: "Modell Integration",
      description:
        "Einfache Integration unserer KI-Modelle in Ihre bestehenden Systeme.",
    },
    {
      icon: "🚀",
      title: "Schnelle Lieferung",
      description:
        "Unsere Modelle sind schnell und zuverlässig, um Ihre Anforderungen zu erfüllen.",
    },
    {
      icon: "🛡️",
      title: "Sicherheit & Vertrauen",
      description:
        "Wir legen großen Wert auf die Sicherheit und Vertraulichkeit Ihrer Daten.",
    },
  ];

  // Blog Posts
  const blogPosts = [
    {
      title: "KI-Trends 2025",
      excerpt:
        "Was erwartet uns im nächsten Jahr? Die wichtigsten Entwicklungen im Überblick.",
      link: "/news",
      image: "/globe.svg",
    },
    {
      title: "Best Practices für KI-Teams",
      excerpt:
        "So gelingt die Einführung von KI in Unternehmen – Tipps aus der Praxis.",
      link: "/best-practices",
      image: "/file.svg",
    },
    {
      title: "Prompt Engineering",
      excerpt:
        "Wie man mit den richtigen Prompts das Maximum aus KI-Modellen herausholt.",
      link: "/prompts",
      image: "/window.svg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section (Finvolv Style) */}
      <section
        ref={heroRef}
        className="relative py-28 px-6 bg-gradient-to-br from-blue-900/60 to-black/90"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0 }}
            className="mb-10"
          >
            <Logo size="xl" showText={true} className="mx-auto mb-6" />
            <BlurText as="h1" text="Revolutionize the Way You Manage Money" className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight" />
            <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Secure. Smart. Seamless. Manage, invest, and grow your money with
              confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#demo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg gradient-blue text-white font-semibold hover-glow shadow-lg text-lg"
              >
                Watch Demo
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors text-lg"
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section (AI Stack Style) */}
      <section
        ref={featuresRef}
        id="features"
        className="py-20 px-6 bg-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <BlurText as="h2" text="Warum AI Stack?" className="text-3xl md:text-4xl font-bold text-center mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiStackFeatures.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0, delay: idx * 0.1 }}
                className="card p-8 text-center hover-lift"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <BlurText as="h3" text={feature.title} className="text-xl font-bold mb-2 text-white" />
                <p className="text-gray-300 text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <BlurText as="h2" text="Schnellzugriff" className="text-3xl md:text-4xl font-bold text-center mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={action.href} className="block">
                  <div
                    className={`card p-6 text-center ${action.gradient} hover-lift`}
                  >
                    <div className="text-3xl mb-3">{action.icon}</div>
                    <BlurText as="h3" text={action.name} className="text-white font-semibold" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trends Section */}
      <section ref={useScrollReveal("slide-up")} className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <BlurText as="h2" text="Globale KI-Trends 2024-2025" className="text-3xl md:text-4xl font-bold text-center mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trends.map((trend, index) => (
              <motion.div
                key={trend.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0, delay: index * 0.1 }}
                className="card p-8 hover-lift"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-16 h-16 rounded-xl ${trend.gradient} flex items-center justify-center text-2xl`}
                  >
                    {trend.icon}
                  </div>
                  <div className="flex-1">
                    <BlurText as="h3" text={trend.title} className="text-xl font-bold mb-2" />
                    <p className="text-gray-300 mb-3">
                      {trend.description}
                    </p>
                    <p className="text-sm text-gray-400">
                      {trend.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Models Section */}
      <section ref={useScrollReveal("slide-up")} className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <BlurText as="h2" text="Führende KI-Modelle" className="text-3xl md:text-4xl font-bold text-center mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topModels.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0, delay: index * 0.1 }}
                className={`card p-6 ${model.featured ? "ring-2 ring-blue-500/30" : ""} hover-lift`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${model.gradient} flex items-center justify-center text-xl mr-3`}
                  >
                    {model.icon}
                  </div>
                  <div>
                    <BlurText as="h3" text={model.name} className="text-lg font-bold" />
                    <p className="text-sm text-gray-400">
                      {model.provider}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  {model.description}
                </p>
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
      <section ref={useScrollReveal("scale-in")} className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0 }}
            className="card p-12"
          >
            <BlurText as="h2" text="Bereit für die KI-Revolution?" className="text-3xl md:text-4xl font-bold mb-6" />
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

      {/* How it Works Section */}
      <section
        ref={useScrollReveal("slide-up")}
        className="py-20 px-6 bg-transparent"
      >
        <div className="max-w-5xl mx-auto">
          <BlurText as="h2" text="How it Works" className="text-3xl md:text-4xl font-bold text-center mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📝",
                title: "Sign Up Instantly",
                description:
                  "Create your account in seconds and get started right away.",
              },
              {
                icon: "🔗",
                title: "Connect & Explore",
                description:
                  "Link your accounts and discover powerful AI-driven features.",
              },
              {
                icon: "🚀",
                title: "Grow & Optimize",
                description:
                  "Let smart automation and insights help you reach your goals.",
              },
            ].map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0, delay: idx * 0.1 }}
                className="card p-8 text-center hover-lift"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <BlurText as="h3" text={step.title} className="text-xl font-bold mb-2 text-white" />
                <p className="text-gray-300 text-base">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section (AI Stack) */}
      <section
        ref={useScrollReveal("fade-in")}
        className="py-20 px-6 bg-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <BlurText as="h2" text="Aus dem Blog" className="text-3xl md:text-4xl font-bold text-center mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0, delay: idx * 0.1 }}
                className="card p-6 hover-lift flex flex-col"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={128}
                  className="w-full h-32 object-contain mb-4"
                />
                <BlurText as="h3" text={post.title} className="text-lg font-bold mb-2 text-white" />
                <p className="text-gray-300 text-base mb-4 flex-1">
                  {post.excerpt}
                </p>
                <Link
                  href={post.link}
                  className="text-blue-400 font-semibold hover:underline mt-auto"
                >
                  Mehr erfahren →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 px-6 bg-gradient-to-t from-blue-900/60 to-black/90 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo size="md" showText={true} className="mb-4 md:mb-0" />
          <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
            <Link href="/news">News</Link>
            <Link href="/models">Modelle</Link>
            <Link href="/tools">Tools</Link>
            <Link href="/prompts">Prompts</Link>
            <Link href="/best-practices">Best Practices</Link>
          </div>
          <div className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Digital Works. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
