"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import BlurText from '../components/BlurText';
import FadeContent from '../components/FadeContent';
import { 
  Bot, 
  Sparkles, 
  Zap, 
  ArrowRight, 
  Star,
  Brain,
  Lightbulb,
  Wrench,
  BookOpen,
  Newspaper,
  TrendingUp
} from "lucide-react";

// DarkVeil Shader Component
function DarkVeilShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      time += 0.01;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create dark veil effect with moving particles
      const particles = 150;
      for (let i = 0; i < particles; i++) {
        const x = (Math.sin(time + i * 0.1) * 200) + (canvas.width / 2) + (Math.cos(i) * 400);
        const y = (Math.cos(time + i * 0.15) * 150) + (canvas.height / 2) + (Math.sin(i) * 300);
        const size = Math.sin(time + i * 0.05) * 2 + 1;
        const alpha = Math.sin(time + i * 0.1) * 0.5 + 0.1;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`;
        ctx.fill();
      }

      // Add subtle gradient overlay
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.03)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.1)");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-60"
    />
  );
}

// Customer Reviews Data
const reviews = [
  {
    id: 1,
    name: "Max Berger",
    rating: 5,
    text: "Die Tools sind unglaublich intuitiv, ich spare täglich Stunden Arbeit.",
    avatar: "MB"
  },
  {
    id: 2,
    name: "Anna Weigand", 
    rating: 5,
    text: "Apple-Feeling pur – UI wie aus einem Guss, perfekt animiert.",
    avatar: "AW"
  },
  {
    id: 3,
    name: "Daniel Köhler",
    rating: 4,
    text: "Sehr gut, nur das Onboarding könnte noch kürzer sein.",
    avatar: "DK"
  },
  {
    id: 4,
    name: "Sophia Leitner",
    rating: 5,
    text: "Beste KI-Übersicht, die ich bisher gesehen habe. Alles klickbar & sofort nutzbar.",
    avatar: "SL"
  },
  {
    id: 5,
    name: "Tim Urban",
    rating: 5,
    text: "Die Kombination aus BlurText & smooth Scroll macht die App einzigartig.",
    avatar: "TU"
  },
  {
    id: 6,
    name: "Lara Voigt",
    rating: 5,
    text: "Ein Dashboard, das man wirklich gerne nutzt – minimalistisch & schnell.",
    avatar: "LV"
  }
];

// Features Data
const features = [
  {
    icon: Bot,
    title: "KI-Modelle Übersicht",
    description: "Entdecke die neuesten und leistungsstärksten KI-Modelle von OpenAI, Google, Anthropic und mehr.",
    href: "/models",
    gradient: "gradient-blue"
  },
  {
    icon: Wrench,
    title: "KI-Tools Sammlung",
    description: "Kuratierte Liste der besten KI-Tools für Design, Development, Marketing und Produktivität.",
    href: "/tools", 
    gradient: "gradient-purple"
  },
  {
    icon: Lightbulb,
    title: "Prompt Bibliothek",
    description: "Bewährte Prompts für verschiedene Anwendungsfälle – sofort einsatzbereit und optimiert.",
    href: "/prompts",
    gradient: "gradient-orange"
  },
  {
    icon: BookOpen,
    title: "Best Practices",
    description: "Lerne von Experten die besten Methoden für KI-Integration und Prompt Engineering.",
    href: "/best-practices",
    gradient: "gradient-pink"
  }
];

// Quick Stats
const stats = [
  { label: "KI-Modelle", value: "50+", icon: Bot },
  { label: "Tools", value: "200+", icon: Wrench },
  { label: "Prompts", value: "100+", icon: Lightbulb },
  { label: "Nutzer", value: "10K+", icon: TrendingUp }
];

// Latest News/Updates
const latestUpdates = [
  {
    title: "GPT-4.5 Release angekündigt",
    description: "OpenAI kündigt die nächste Generation ihres Flaggschiff-Modells an",
    date: "vor 2 Tagen",
    category: "Modelle"
  },
  {
    title: "Neue Prompt Engineering Techniken", 
    description: "Entdecke die neuesten Methoden für bessere KI-Interaktionen",
    date: "vor 1 Woche", 
    category: "Best Practices"
  },
  {
    title: "Claude 3.5 Sonnet Update",
    description: "Anthropic verbessert Reasoning und Coding-Fähigkeiten",
    date: "vor 1 Woche",
    category: "Modelle"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen lg:ml-0">
      {/* Hero Section with DarkVeil */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <DarkVeilShader />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <FadeContent direction="up" delay={0.2}>
            <div className="mb-6 flex justify-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="w-20 h-20 gradient-blue rounded-2xl flex items-center justify-center mb-6"
              >
                <Bot size={40} className="text-white" />
              </motion.div>
            </div>
          </FadeContent>

          <BlurText 
            as="h1" 
            text="Willkommen bei AI Stack" 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          />
          
          <FadeContent direction="up" delay={0.4}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Deine zentrale Plattform für KI-Modelle, Tools und Best Practices. 
              Entdecke, lerne und implementiere die neueste KI-Technologie.
            </p>
          </FadeContent>

          <FadeContent direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/tools" className="px-8 py-4 gradient-blue text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-200 flex items-center">
                  <Sparkles size={20} className="mr-2" />
                  Tools entdecken
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/prompts" className="px-8 py-4 glass-button text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 flex items-center">
                  <Brain size={20} className="mr-2" />
                  Prompts erkunden
                </Link>
              </motion.div>
            </div>
          </FadeContent>

          {/* Quick Stats */}
          <FadeContent direction="up" delay={0.8}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="glass-panel p-4 rounded-xl text-center"
                >
                  <stat.icon size={24} className="text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </FadeContent>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeContent className="text-center mb-16">
            <BlurText as="h2" text="Entdecke die Zukunft der KI" className="text-4xl md:text-5xl font-bold text-white mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Von den neuesten Modellen bis zu bewährten Best Practices – alles was du für deine KI-Journey brauchst.
            </p>
          </FadeContent>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FadeContent key={feature.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="card p-8 h-full group cursor-pointer"
                >
                  <Link href={feature.href} className="block h-full">
                    <div className="flex items-start space-x-4 h-full">
                      <div className={`w-14 h-14 rounded-xl ${feature.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                        <feature.icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {feature.description}
                        </p>
                        <div className="flex items-center text-blue-400 mt-4 group-hover:text-blue-300 transition-colors">
                          <span className="text-sm font-medium">Entdecken</span>
                          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-blue-950/20">
        <div className="max-w-7xl mx-auto">
          <FadeContent className="text-center mb-16">
            <BlurText as="h2" text="Neueste Updates" className="text-4xl md:text-5xl font-bold text-white mb-6" />
            <p className="text-xl text-gray-300">
              Bleibe auf dem Laufenden mit den neuesten Entwicklungen in der KI-Welt
            </p>
          </FadeContent>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestUpdates.map((update, index) => (
              <FadeContent key={update.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card p-6 group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                      {update.category}
                    </span>
                    <span className="text-xs text-gray-400">{update.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {update.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {update.description}
                  </p>
                </motion.div>
              </FadeContent>
            ))}
          </div>

          <FadeContent className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/news" className="inline-flex items-center px-8 py-4 glass-button text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200">
                <Newspaper size={20} className="mr-2" />
                Alle News anzeigen
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          </FadeContent>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeContent className="text-center mb-16">
            <BlurText as="h2" text="Was unsere Nutzer sagen" className="text-4xl md:text-5xl font-bold text-white mb-6" />
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-300 text-lg ml-2">4.8 von 5 Sternen</span>
            </div>
            <p className="text-gray-400">Basierend auf 500+ Bewertungen</p>
          </FadeContent>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <FadeContent key={review.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card p-6"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 gradient-blue rounded-full flex items-center justify-center text-white font-bold">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{review.name}</h4>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={14} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">"{review.text}"</p>
                </motion.div>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeContent>
            <motion.div
              className="card p-12 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative z-10">
                <BlurText as="h2" text="Bereit für deine KI-Reise?" className="text-4xl md:text-5xl font-bold text-white mb-6" />
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Starte jetzt und entdecke die besten KI-Tools, Modelle und Strategien für dein Business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/tools" className="px-8 py-4 gradient-blue text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center">
                      <Zap size={20} className="mr-2" />
                      Jetzt starten
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/best-practices" className="px-8 py-4 glass-button text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 flex items-center justify-center">
                      <BookOpen size={20} className="mr-2" />
                      Best Practices lernen
                    </Link>
                  </motion.div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 gradient-blue rounded-full blur-3xl" />
                <div className="absolute bottom-4 left-4 w-24 h-24 gradient-purple rounded-full blur-2xl" />
              </div>
            </motion.div>
          </FadeContent>
        </div>
      </section>
    </div>
  );
}
