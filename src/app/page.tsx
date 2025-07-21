"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "../components/Logo";
import { useEffect, useRef } from "react";
import Image from "next/image";

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

// Executive Summary Data
const executiveSummary = {
  title: "Die KI-Landschaft 2024-2025",
  subtitle: "Ein umfassender Leitfaden zu Tools, Modellen und Best Practices",
  description:
    "Navigieren an der sich entwickelnden KI-Frontier - Dieser Bericht bietet eine umfassende Analyse der Landschaft der Künstlichen Intelligenz (KI) in den Jahren 2024-2025.",
  keyPoints: [
    "Agentische KI revolutioniert Arbeitsabläufe",
    "Multimodale Fähigkeiten erreichen neue Höhen",
    "Marktdynamik führt zu Demokratisierung der KI",
    "Verantwortungsvolle KI-Entwicklung wird kritisch",
  ],
};

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

// Apple Loader Komponente
function AppleLoader() {
  return <div className="loader-apple" aria-label="Lädt..." />;
}
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

  // Finvolv Features
  const finvolvFeatures = [
    {
      icon: "🔒",
      title: "Secure Payments & Transfers",
      description:
        "Send and receive money instantly with bank-grade encryption.",
    },
    {
      icon: "🤖",
      title: "AI-Powered Insights",
      description:
        "Get personalized financial advice and automated budgeting tips.",
    },
    {
      icon: "📊",
      title: "All-in-One Dashboard",
      description:
        "Track your spending, savings, investments, and goals in real time.",
    },
    {
      icon: "🌍",
      title: "Global Access",
      description:
        "Access your finances anytime, anywhere—from mobile to desktop.",
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
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <Logo size="xl" showText={true} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
              Revolutionize the Way You Manage Money
            </h1>
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

      {/* Features Section (Finvolv Style) */}
      <section
        ref={featuresRef}
        id="features"
        className="py-20 px-6 bg-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-14"
          >
            Why Choose Finvolv
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {finvolvFeatures.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="card p-8 text-center hover-lift"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
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
                  <div
                    className={`card p-6 text-center ${action.gradient} hover-lift`}
                  >
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
      <section ref={useScrollReveal("slide-up")} className="py-16 px-6">
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
                  <div
                    className={`w-16 h-16 rounded-xl ${trend.gradient} flex items-center justify-center text-2xl`}
                  >
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
      <section ref={useScrollReveal("slide-up")} className="py-16 px-6">
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
                className={`card p-6 ${model.featured ? "ring-2 ring-blue-500/30" : ""} hover-lift`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${model.gradient} flex items-center justify-center text-xl mr-3`}
                  >
                    {model.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{model.name}</h3>
                    <p className="text-sm text-gray-400">{model.provider}</p>
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

      {/* How it Works Section */}
      <section
        ref={useScrollReveal("slide-up")}
        className="py-20 px-6 bg-transparent"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-14"
          >
            How it Works
          </motion.h2>
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
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="card p-8 text-center hover-lift"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-base">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={useScrollReveal("fade-in")}
        className="py-20 px-6 bg-transparent"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-14"
          >
            Was unsere Nutzer sagen
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Anna M.",
                quote:
                  "Die Plattform hat meine Finanzplanung komplett verändert. Die KI-Insights sind Gold wert!",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                role: "Startup-Gründerin",
              },
              {
                name: "Jonas K.",
                quote:
                  "Schnell, sicher und super intuitiv. Die beste All-in-One-Lösung für moderne Finanzen.",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                role: "Product Manager",
              },
              {
                name: "Lea S.",
                quote:
                  "Die Automatisierung spart mir jeden Monat Stunden. Absolute Empfehlung!",
                avatar: "https://randomuser.me/api/portraits/women/65.jpg",
                role: "Freelancerin",
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="card p-8 text-center hover-lift"
              >
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-white/20"
                />
                <p className="text-gray-200 italic mb-4">
                  “{testimonial.quote}”
                </p>
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        ref={useScrollReveal("slide-up")}
        className="py-20 px-6 bg-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-14"
          >
            Preise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Free",
                price: "0€",
                features: [
                  "Alle Basisfunktionen",
                  "Sichere Verwaltung",
                  "Community Support",
                ],
                highlight: false,
              },
              {
                name: "Pro",
                price: "12€",
                features: [
                  "Alle Free-Features",
                  "Erweiterte KI-Analysen",
                  "Priorisierter Support",
                ],
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Kontakt",
                features: [
                  "Individuelle Lösungen",
                  "Onboarding & Training",
                  "Premium Support",
                ],
                highlight: false,
              },
            ].map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`card p-8 text-center hover-lift ${plan.highlight ? "ring-2 ring-blue-500/30" : ""}`}
              >
                <h3 className="text-xl font-bold mb-2 text-white">
                  {plan.name}
                </h3>
                <div className="text-3xl font-extrabold mb-4 text-gradient-blue">
                  {plan.price}
                </div>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="text-gray-300">
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="px-6 py-2 rounded-lg gradient-blue text-white font-semibold hover-glow shadow-lg text-base">
                  {plan.name === "Enterprise"
                    ? "Kontakt aufnehmen"
                    : "Jetzt starten"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section
        ref={useScrollReveal("fade-in")}
        className="py-20 px-6 bg-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-14"
          >
            Aus dem Blog
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((post, idx) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="card p-6 hover-lift flex flex-col"
              >
                <Image
                  src={post.image.replace('/public', '/')}
                  alt={post.title}
                  width={400}
                  height={128}
                  className="w-full h-32 object-contain mb-4"
                />
                <h3 className="text-lg font-bold mb-2 text-white">
                  {post.title}
                </h3>
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
