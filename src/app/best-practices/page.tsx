'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import BlurText from '../../components/BlurText';

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

// Best Practices Data
type Practice = {
  title: string;
  description: string;
  tips?: string[];
};

const bestPracticesData = [
  {
    id: 1,
    title: "Prompt Engineering",
    icon: "🎯",
    gradient: "gradient-blue",
    practices: [
      {
        title: "Klare Ziele definieren",
        description: "Definiere genau, was du erreichen möchtest. Spezifische Anweisungen führen zu besseren Ergebnissen.",
        tips: [
          "Verwende präzise Sprache und vermeide Mehrdeutigkeiten",
          "Definiere das gewünschte Format und die Länge",
          "Gebe konkrete Beispiele für das gewünschte Ergebnis"
        ]
      },
      {
        title: "Strukturierte Prompts",
        description: "Verwende klare Abschnitte, Nummerierungen und Formatierungen für bessere Lesbarkeit.",
        tips: [
          "Teile komplexe Anfragen in logische Abschnitte",
          "Verwende Nummerierungen und Aufzählungszeichen",
          "Definiere Rollen und Kontext klar"
        ]
      },
      {
        title: "Iterative Verbesserung",
        description: "Verfeinere deine Prompts basierend auf den Ergebnissen. Experimentiere mit verschiedenen Ansätzen.",
        tips: [
          "Teste verschiedene Formulierungen",
          "Sammle Feedback und optimiere kontinuierlich",
          "Dokumentiere erfolgreiche Prompt-Patterns"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "KI-Governance",
    icon: "🛡️",
    gradient: "gradient-purple",
    practices: [
      {
        title: "Datenschutz & Sicherheit",
        description: "Implementiere robuste Datenschutzmaßnahmen und sichere KI-Systeme.",
        tips: [
          "Verschlüssele sensible Daten",
          "Implementiere Zugriffskontrollen",
          "Regelmäßige Sicherheitsaudits durchführen"
        ]
      },
      {
        title: "Transparenz & Accountability",
        description: "Stelle sicher, dass KI-Entscheidungen nachvollziehbar und verantwortbar sind.",
        tips: [
          "Dokumentiere Entscheidungsprozesse",
          "Implementiere Audit-Trails",
          "Regelmäßige Berichterstattung"
        ]
      },
      {
        title: "Bias-Prävention",
        description: "Identifiziere und minimiere Vorurteile in KI-Systemen.",
        tips: [
          "Diverse Trainingsdaten verwenden",
          "Regelmäßige Bias-Tests durchführen",
          "Vielfältige Teams für KI-Entwicklung"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "KI-Integration",
    icon: "🔗",
    gradient: "gradient-orange",
    practices: [
      {
        title: "Change Management",
        description: "Führe KI-Systeme schrittweise ein und schule Mitarbeiter entsprechend.",
        tips: [
          "Kommuniziere Vorteile klar",
          "Biete umfassende Schulungen",
          "Schaffe Support-Strukturen"
        ]
      },
      {
        title: "Mensch-KI-Kollaboration",
        description: "Optimiere die Zusammenarbeit zwischen Menschen und KI-Systemen.",
        tips: [
          "Definiere klare Rollen und Verantwortlichkeiten",
          "Implementiere Feedback-Schleifen",
          "Fördere kontinuierliches Lernen"
        ]
      },
      {
        title: "Skalierung & Performance",
        description: "Plane für Wachstum und optimiere die Performance deiner KI-Systeme.",
        tips: [
          "Modulare Architektur verwenden",
          "Monitoring und Alerting implementieren",
          "Regelmäßige Performance-Optimierungen"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Ethik & Compliance",
    icon: "⚖️",
    gradient: "gradient-pink",
    practices: [
      {
        title: "Ethische Richtlinien",
        description: "Entwickle und implementiere ethische Richtlinien für KI-Nutzung.",
        tips: [
          "Ethik-Board einrichten",
          "Regelmäßige ethische Bewertungen",
          "Stakeholder-Einbindung"
        ]
      },
      {
        title: "Regulatorische Compliance",
        description: "Stelle sicher, dass KI-Systeme alle relevanten Vorschriften einhalten.",
        tips: [
          "Regelmäßige Compliance-Audits",
          "Aktuelle Gesetzesänderungen verfolgen",
          "Rechtliche Beratung einholen"
        ]
      },
      {
        title: "Social Impact",
        description: "Bewerte und minimiere negative gesellschaftliche Auswirkungen.",
        tips: [
          "Impact-Assessments durchführen",
          "Stakeholder-Feedback einholen",
          "Korrekturmaßnahmen implementieren"
        ]
      }
    ]
  },
  {
    id: 100,
    title: "Prompt Engineering: Klarheit und Spezifität",
    icon: "🔑",
    gradient: "gradient-blue",
    practices: [
      {
        title: "Präzise Sprache verwenden",
        description: "Verwende präzise Sprache, um Mehrdeutigkeiten zu vermeiden. Gib genau an, was die KI tun oder generieren soll."
      },
      {
        title: "Kontext bereitstellen",
        description: "Gib Hintergrundinformationen, die für den Prompt relevant sind. Das hilft der KI, das Szenario besser zu verstehen."
      },
      {
        title: "Beispiele verwenden",
        description: "Stelle Beispiele für die gewünschte Ausgabe bereit, um der KI eine klare Erwartung zu geben."
      },
      {
        title: "Offene Fragen stellen",
        description: "Formuliere Prompts als offene Fragen, um detailliertere Antworten zu erhalten."
      },
      {
        title: "Umfang begrenzen",
        description: "Konzentriere dich auf ein Thema oder eine Aufgabe pro Prompt, um kohärente und relevante Antworten zu erhalten."
      },
      {
        title: "Iterieren und Verfeinern",
        description: "Verfeinere deinen Prompt basierend auf der Ausgabe und versuche es erneut, um präzisere Ergebnisse zu erzielen."
      },
      {
        title: "Schlüsselwörter strategisch einsetzen",
        description: "Integriere relevante Schlüsselwörter, die mit deinem gewünschten Ergebnis übereinstimmen."
      },
      {
        title: "Prägnanz",
        description: "Halte Prompts so kurz wie möglich, aber so detailliert wie nötig. Zu lange Prompts können die KI verwirren."
      },
      {
        title: "Natürliche Sprache verwenden",
        description: "Schreibe Prompts so, als würdest du mit einer Person sprechen, um verständlichere Ergebnisse zu erzielen."
      }
    ]
  }
];

const categories = ["Alle", "Prompt Engineering", "KI-Governance", "KI-Integration", "Ethik & Compliance"];

export default function BestPracticesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [expandedPractice, setExpandedPractice] = useState<number | null>(null);

  const filteredPractices = bestPracticesData.filter(practice => {
    return selectedCategory === "Alle" || practice.title === selectedCategory;
  });

  const headerRef = useScrollReveal('fade-in');
  const resourcesRef = useScrollReveal('slide-up');

  return (
    <div className="min-h-screen py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0 }}
          ref={headerRef}
          className="text-center mb-12"
        >
          <BlurText as="h1" text="Best Practices" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Umfassende Guidelines für erfolgreiche KI-Implementierung, Prompt Engineering und ethische Nutzung
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0, delay: 0.2 }}
          className="mb-12"
        >
          <div className="card p-8 gradient-blue">
            <BlurText as="h2" text="KI-Landscape 2024-2025: Executive Summary" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/90">
              <div>
                <BlurText as="h3" text="Marktentwicklung" />
                <ul className="space-y-2 text-sm">
                  <li>• Agentische KI: 13,81 Milliarden US-Dollar Marktvolumen 2025</li>
                  <li>• Private KI-Investitionen: 109,1 Milliarden US-Dollar 2024</li>
                  <li>• Generative KI: 33,9 Milliarden US-Dollar 2023 (+18,7%)</li>
                  <li>• KI-Governance: 3,4 Milliarden US-Dollar 2024</li>
                </ul>
              </div>
              <div>
                <BlurText as="h3" text="Technologische Trends" />
                <ul className="space-y-2 text-sm">
                  <li>• Erweiterte Kontextfenster (1M+ Tokens)</li>
                  <li>• Multimodale Integration</li>
                  <li>• Large Action Models (LAM)</li>
                  <li>• Reasoning-First-Ansätze</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'gradient-cyan text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Best Practices Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPractices.map((practice, index) => (
              <motion.div
                key={practice.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0, delay: 0.8 + index * 0.1 }}
                className={`card p-6 ${practice.gradient} hover-lift`}
              >
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{practice.icon}</div>
                  <BlurText as="h3" text={practice.title} />
                </div>
                
                <div className="space-y-4">
                  {practice.practices.map((item: Practice, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0, delay: 1.0 + index * 0.1 + itemIndex * 0.1 }}
                      className="bg-white/10 rounded-lg p-4"
                    >
                      <motion.button
                        onClick={() => setExpandedPractice(expandedPractice === itemIndex ? null : itemIndex)}
                        className="w-full text-left"
                      >
                        <div className="flex items-center justify-between">
                          <BlurText as="h4" text={item.title} />
                          <span className="text-white/80">
                            {expandedPractice === itemIndex ? '−' : '+'}
                          </span>
                        </div>
                        <p className="text-white/80 text-sm">{item.description}</p>
                      </motion.button>
                      
                      <AnimatePresence>
                        {expandedPractice === itemIndex && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-white/20"
                          >
                            <BlurText as="h5" text="Praktische Tipps:" />
                            <ul className="space-y-1">
                              {item.tips && item.tips.map((tip: string, tipIndex: number) => (
                                <li key={tipIndex} className="text-white/80 text-sm flex items-start">
                                  <span className="text-white/60 mr-2">•</span>
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Implementation Checklist */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0, delay: 1.0 }}
          className="mt-16"
        >
          <BlurText as="h2" text="KI-Implementierung Checklist" />
          <div className="card p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <BlurText as="h3" text="Phase 1: Vorbereitung" />
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">□</span>
                    Use Cases identifizieren
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">□</span>
                    Team aufbauen
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">□</span>
                    Budget planen
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">□</span>
                    Stakeholder einbinden
                  </li>
                </ul>
              </div>
              <div>
                <BlurText as="h3" text="Phase 2: Implementierung" />
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">□</span>
                    Pilot-Projekt starten
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">□</span>
                    Datenqualität sicherstellen
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">□</span>
                    Modelle trainieren
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">□</span>
                    Testing durchführen
                  </li>
                </ul>
              </div>
              <div>
                <BlurText as="h3" text="Phase 3: Skalierung" />
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="text-orange-400 mr-2">□</span>
                    Rollout planen
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-400 mr-2">□</span>
                    Monitoring einrichten
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-400 mr-2">□</span>
                    Feedback sammeln
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-400 mr-2">□</span>
                    Kontinuierlich optimieren
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Resources */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: [0.4,0,0.2,1], type: 'tween', bounce: 0, delay: 1.2 }}
          ref={resourcesRef}
          className="mt-16"
        >
          <BlurText as="h2" text="Weitere Ressourcen" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card p-6 text-center hover-lift"
            >
              <div className="text-3xl mb-4">📚</div>
              <BlurText as="h3" text="KI-News" />
              <p className="text-sm text-gray-400">Aktuelle Entwicklungen und Trends</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card p-6 text-center hover-lift"
            >
              <div className="text-3xl mb-4">🧠</div>
              <BlurText as="h3" text="KI-Modelle" />
              <p className="text-sm text-gray-400">Benchmarks und Vergleiche</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card p-6 text-center hover-lift"
            >
              <div className="text-3xl mb-4">🛠️</div>
              <BlurText as="h3" text="KI-Tools" />
              <p className="text-sm text-gray-400">Praktische Anwendungen</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card p-6 text-center hover-lift"
            >
              <div className="text-3xl mb-4">💡</div>
              <BlurText as="h3" text="KI-Prompts" />
              <p className="text-sm text-gray-400">Optimierte Vorlagen</p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 