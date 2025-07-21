'use client';

import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Star, Users, Zap } from 'lucide-react';

// KI-Tools Data (same as in tools/page.tsx)
const toolsData = [
  {
    id: 1,
    name: "ChatGPT",
    description: "KI-Chatbot für Textgenerierung und Konversation",
    longDescription: "Der beliebteste KI-Suchmaschine mit 3,8 Milliarden monatlichen Besuchen. Bietet Funktionen wie Inhaltserstellung, Codeentwicklung, Bildgenerierung und tiefe Recherche.",
    category: "Text",
    subcategory: "Chatbot",
    icon: "🤖",
    gradient: "gradient-blue",
    featured: true,
    pricing: "Kostenlos + ChatGPT Plus ($20/Monat)",
    link: "https://chat.openai.com",
    features: ["Textgenerierung", "Code-Entwicklung", "Bildgenerierung", "Recherche"],
    useCases: ["Content Creation", "Programmierung", "Recherche", "Kreative Projekte"],
    pros: ["Einfach zu bedienen", "Sehr vielseitig", "Kostenlose Version verfügbar", "Ständige Updates"],
    cons: ["Manchmal ungenaue Antworten", "Begrenzte kostenlose Nutzung", "Datenschutz-Bedenken"],
    alternatives: ["Claude", "Bard", "Perplexity", "Poe"],
    tips: ["Verwende spezifische Prompts für bessere Ergebnisse", "Nutze die kostenlose Version zum Testen", "Achte auf Datenschutz bei sensiblen Daten"]
  },
  {
    id: 2,
    name: "Midjourney",
    description: "KI-Bildgenerierung mit filmischen Ergebnissen",
    longDescription: "Bekannt für die Generierung von wunderschönen, filmischen Bildern, die oft von realen Standbildern nicht zu unterscheiden sind. Bietet erweiterte Funktionen wie Zeichenkonsistenz, Stilreferenz und Bildreferenz.",
    category: "Bild",
    subcategory: "Generierung",
    icon: "🎨",
    gradient: "gradient-purple",
    featured: false,
    pricing: "Ab $10/Monat (200 Bilder)",
    link: "https://midjourney.com",
    features: ["Filmische Bilder", "Zeichenkonsistenz", "Stilreferenz", "Bildreferenz"],
    useCases: ["Kunst", "Design", "Marketing", "Kreative Projekte"],
    pros: ["Hochwertige Bildqualität", "Filmischer Stil", "Viele Anpassungsoptionen", "Aktive Community"],
    cons: ["Nur über Discord verfügbar", "Kostenpflichtig", "Lernkurve bei Prompts", "Begrenzte Kontrolle"],
    alternatives: ["DALL-E", "Stable Diffusion", "Adobe Firefly", "Canva AI"],
    tips: ["Lerne die Prompt-Syntax", "Nutze Referenzbilder", "Experimentiere mit verschiedenen Stilen", "Achte auf Copyright"]
  },
  {
    id: 3,
    name: "Jasper AI",
    description: "Inhaltserstellung für Unternehmen",
    longDescription: "Jasper AI ist ein Tool zur Inhaltserstellung, das Unternehmen beim Verfassen von Blogbeiträgen, Social-Media-Inhalten und Werbetexten unterstützt. Es kann hochwertige Inhalte generieren, die auf die Markenstimme und das Publikum zugeschnitten sind.",
    category: "Text",
    subcategory: "Content",
    icon: "✍️",
    gradient: "gradient-orange",
    featured: false,
    pricing: "Ab $49/Monat pro Benutzer",
    link: "https://jasper.ai",
    features: ["Markenstimme", "SEO-Optimierung", "Verschiedene Töne", "Team-Kollaboration"],
    useCases: ["Marketing", "Content Marketing", "Social Media", "Werbung"],
    pros: ["Markenspezifische Inhalte", "SEO-Optimierung", "Team-Features", "Viele Templates"],
    cons: ["Teuer", "Begrenzte Kreativität", "Abhängigkeit von Templates", "Manchmal generische Inhalte"],
    alternatives: ["Copy.ai", "Writesonic", "Rytr", "ContentBot"],
    tips: ["Definiere deine Markenstimme klar", "Nutze die SEO-Features", "Kombiniere mit menschlicher Kreativität", "Teste verschiedene Templates"]
  },
  {
    id: 4,
    name: "ElevenLabs",
    description: "KI-Audio-Generator und Sprachsynthese",
    longDescription: "Sprachsynthese von einzelnen Sätzen bis zu ganzen Büchern. VoiceLab ermöglicht das Klonen der eigenen Stimme. Bietet Text-to-Speech, Speech-to-Speech, Dubbing und Voice Changer.",
    category: "Audio",
    subcategory: "Synthese",
    icon: "🎤",
    gradient: "gradient-pink",
    featured: false,
    pricing: "Kostenlos + Pläne ab $1/Monat",
    link: "https://elevenlabs.io",
    features: ["Stimmklonung", "Text-to-Speech", "Dubbing", "Voice Changer"],
    useCases: ["Podcasts", "Audiobooks", "Videos", "Accessibility"],
    pros: ["Natürliche Stimmen", "Stimmklonung", "Viele Sprachen", "Kostenlose Version"],
    cons: ["Begrenzte kostenlose Nutzung", "Qualität variiert", "Ethische Bedenken bei Stimmklonung"],
    alternatives: ["Murf", "Play.ht", "Synthesia", "Descript"],
    tips: ["Teste verschiedene Stimmen", "Achte auf Aussprache", "Nutze Pausen für natürliche Rede", "Respektiere Urheberrechte"]
  },
  {
    id: 5,
    name: "Runway",
    description: "KI-Video-Editing und -Generierung",
    longDescription: "Bietet erweiterte Funktionen und stilisierte Videos. Umfasst eine Vielzahl von KI-Tools für Videobearbeitung und Bildgenerierung mit intuitiver Benutzeroberfläche.",
    category: "Video",
    subcategory: "Editing",
    icon: "🎬",
    gradient: "gradient-cyan",
    featured: false,
    pricing: "Kostenlos + Pläne ab $15/Monat",
    link: "https://runwayml.com",
    features: ["Video-Editing", "Bildgenerierung", "Stylized Videos", "Export in HD"],
    useCases: ["Filmproduktion", "Marketing", "Social Media", "Kreative Projekte"],
    pros: ["Professionelle Features", "Intuitive UI", "Viele KI-Tools", "Kostenlose Version"],
    cons: ["Teure Pläne", "Lernkurve", "Begrenzte kostenlose Nutzung", "Internetabhängig"],
    alternatives: ["Capcut", "DaVinci Resolve", "Adobe Premiere", "Pika Labs"],
    tips: ["Nutze die kostenlose Version zum Lernen", "Experimentiere mit verschiedenen Tools", "Achte auf Export-Qualität", "Backup deine Projekte"]
  },
  {
    id: 6,
    name: "GitHub Copilot",
    description: "KI-Paar-Programmierer für Entwickler",
    longDescription: "Der bekannteste KI-Paar-Programmierer, der kontextsensitive Codevorschläge direkt im Editor bereitstellt. Unterstützt zahlreiche Sprachen und integriert sich nahtlos in beliebte IDEs.",
    category: "Code",
    subcategory: "Assistenz",
    icon: "💻",
    gradient: "gradient-blue",
    featured: false,
    pricing: "Kostenpflichtig (Abonnement pro Benutzer)",
    link: "https://github.com/features/copilot",
    features: ["Code-Vorschläge", "Debugging", "Multi-Sprache", "IDE-Integration"],
    useCases: ["Software-Entwicklung", "Programmierung", "Code-Review", "Prototyping"],
    pros: ["Kontextsensitive Vorschläge", "IDE-Integration", "Viele Sprachen", "Zeitsparend"],
    cons: ["Kostenpflichtig", "Manchmal ungenaue Vorschläge", "Datenschutz-Bedenken", "Abhängigkeit"],
    alternatives: ["Amazon CodeWhisperer", "Tabnine", "Kite", "IntelliCode"],
    tips: ["Überprüfe immer den generierten Code", "Lerne die Shortcuts", "Nutze Kommentare für bessere Vorschläge", "Achte auf Sicherheit"]
  },
  {
    id: 7,
    name: "Notion AI",
    description: "KI-gestützte Produktivitätsplattform",
    longDescription: "Notion AI ist eine Funktion der Produktivitätsplattform Notion, die Aufgaben wie Notizen, Dokumentenerstellung, Aufgabenverwaltung, Zusammenfassungen und intelligente Vorschläge automatisiert.",
    category: "Produktivität",
    subcategory: "Organisation",
    icon: "📝",
    gradient: "gradient-purple",
    featured: false,
    pricing: "Business-Plan $20/Monat pro Benutzer",
    link: "https://notion.so",
    features: ["Dokumentenerstellung", "Aufgabenverwaltung", "Zusammenfassungen", "Intelligente Vorschläge"],
    useCases: ["Projektmanagement", "Wissensmanagement", "Team-Kollaboration", "Persönliche Organisation"],
    pros: ["All-in-One Plattform", "Flexible Struktur", "Team-Kollaboration", "Viele Templates"],
    cons: ["Lernkurve", "Teuer für Teams", "Begrenzte KI-Features", "Internetabhängig"],
    alternatives: ["Obsidian", "Roam Research", "Logseq", "Craft"],
    tips: ["Nutze Templates", "Strukturiere deine Datenbanken", "Lerne die Shortcuts", "Backup regelmäßig"]
  },
  {
    id: 8,
    name: "Synthesia",
    description: "KI-Avatare für professionelle Videos",
    longDescription: "Ideal für die Erstellung professioneller Videos mit KI-Avataren. Bietet über 230 KI-Avatare und unterstützt über 140 Sprachen und Akzente. Ermöglicht das Erstellen persönlicher Avatare und Stimmklonung.",
    category: "Video",
    subcategory: "Avatar",
    icon: "👤",
    gradient: "gradient-orange",
    featured: false,
    pricing: "Ab $29/Monat (10 Minuten Video)",
    link: "https://synthesia.io",
    features: ["230+ Avatare", "140+ Sprachen", "Persönliche Avatare", "Stimmklonung"],
    useCases: ["Schulungen", "Marketing", "E-Learning", "Präsentationen"],
    pros: ["Professionelle Avatare", "Viele Sprachen", "Einfach zu bedienen", "Schnelle Produktion"],
    cons: ["Teuer", "Begrenzte Anpassung", "Manchmal unnatürlich", "Ethische Bedenken"],
    alternatives: ["D-ID", "HeyGen", "Synthesys", "Lumen5"],
    tips: ["Wähle passende Avatare", "Schreibe natürliche Skripte", "Nutze Pausen", "Teste verschiedene Sprachen"]
  }
];

export default function ToolDetailPage() {
  const params = useParams();
  const router = useRouter();
  const toolId = parseInt(params.id as string);
  const tool = toolsData.find(t => t.id === toolId);

  if (!tool) {
    return (
      <div className="min-h-screen py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Tool nicht gefunden</h1>
          <Link href="/tools" className="text-blue-400 hover:text-blue-300">
            Zurück zu allen Tools
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück
          </button>
        </motion.div>

        {/* Tool Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`bg-white/5 rounded-3xl shadow-xl overflow-hidden border border-white/10 p-8 mb-8 ${tool.gradient}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-6">{tool.icon}</div>
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">{tool.name}</h1>
                  <p className="text-white/80 text-lg">{tool.category} • {tool.subcategory}</p>
                </div>
              </div>
              <p className="text-white/90 text-lg mb-6">{tool.longDescription}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {tool.features.map((feature, index) => (
                  <span key={index} className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                    {feature}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Tool besuchen
                </a>
                <div className="flex items-center text-white/80">
                  <Star className="w-4 h-4 mr-1" />
                  {tool.featured ? "Empfohlen" : "Standard"}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Preis</h3>
                <p className="text-white/90">{tool.pricing}</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Kategorie</h3>
                <p className="text-white/90">{tool.category} • {tool.subcategory}</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Anwendungsfälle</h3>
                <div className="space-y-1">
                  {tool.useCases.map((useCase, index) => (
                    <p key={index} className="text-white/80 text-sm">• {useCase}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Detailed Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pros & Cons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/5 rounded-3xl shadow-xl overflow-hidden border border-white/10 p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-green-400" />
                Vorteile
              </h2>
              <ul className="space-y-2">
                {tool.pros.map((pro, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-gray-300">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 rounded-3xl shadow-xl overflow-hidden border border-white/10 p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-red-400" />
                Nachteile
              </h2>
              <ul className="space-y-2">
                {tool.cons.map((con, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span className="text-gray-300">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Alternatives & Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/5 rounded-3xl shadow-xl overflow-hidden border border-white/10 p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-blue-400" />
                Alternativen
              </h2>
              <div className="flex flex-wrap gap-2">
                {tool.alternatives.map((alternative, index) => (
                  <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {alternative}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-3xl shadow-xl overflow-hidden border border-white/10 p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Star className="w-6 h-6 mr-2 text-yellow-400" />
                Tipps & Tricks
              </h2>
              <ul className="space-y-2">
                {tool.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-400 mr-2">💡</span>
                    <span className="text-gray-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Related Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold mb-6">Ähnliche Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolsData
              .filter(t => t.category === tool.category && t.id !== tool.id)
              .slice(0, 3)
              .map((relatedTool) => (
                <Link
                  key={relatedTool.id}
                  href={`/tools/${relatedTool.id}`}
                  className="bg-white/5 rounded-3xl shadow-xl overflow-hidden border border-white/10 p-6 hover:scale-105 transition-transform"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{relatedTool.icon}</div>
                    <div>
                      <h3 className="font-bold text-white">{relatedTool.name}</h3>
                      <p className="text-gray-400 text-sm">{relatedTool.category}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{relatedTool.description}</p>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 