'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './tools-glass.css';

// KI-Tools Data aus dem Executive Summary
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
    useCases: ["Content Creation", "Programmierung", "Recherche", "Kreative Projekte"]
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
    useCases: ["Kunst", "Design", "Marketing", "Kreative Projekte"]
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
    useCases: ["Marketing", "Content Marketing", "Social Media", "Werbung"]
  },
  {
    id: 4,
    name: "ElevenLabs",
    description: "KI-Audio-Generator und Sprachsynthese",
    longDescription: "Sprachsynthese von einzelnen Sätzen bis zu ganzen Büchern. VoiceLab ermöglicht das Klonen der eigenen Stimme. Bietet Text-to-Speech, Speech-to-Text, Dubbing und Voice Changer.",
    category: "Audio",
    subcategory: "Synthese",
    icon: "🎤",
    gradient: "gradient-pink",
    featured: false,
    pricing: "Kostenlos + Pläne ab $1/Monat",
    link: "https://elevenlabs.io",
    features: ["Stimmklonung", "Text-to-Speech", "Dubbing", "Voice Changer"],
    useCases: ["Podcasts", "Audiobooks", "Videos", "Accessibility"]
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
    useCases: ["Filmproduktion", "Marketing", "Social Media", "Kreative Projekte"]
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
    useCases: ["Software-Entwicklung", "Programmierung", "Code-Review", "Prototyping"]
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
    useCases: ["Projektmanagement", "Wissensmanagement", "Team-Kollaboration", "Persönliche Organisation"]
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
    useCases: ["Schulungen", "Marketing", "E-Learning", "Präsentationen"]
  },
  // Neue Tools (Beispiele)
  {
    id: 3,
    name: "Google Gemini",
    description: "Multimodales KI-Modell von Google für Text, Bild, Code und mehr",
    longDescription: "Gemini ist Googles neuestes KI-Modell mit multimodalen Fähigkeiten für Text, Bild, Audio und Code. Es integriert sich in viele Google-Produkte und ist als API verfügbar.",
    category: "Multimodal",
    subcategory: "Foundation Model",
    icon: "🔮",
    gradient: "gradient-cyan",
    featured: false,
    pricing: "Kostenlos & API (Preise variieren)",
    link: "https://ai.google.dev/gemini",
    features: ["Text & Bild", "Code", "API", "Google-Integration"],
    useCases: ["Recherche", "Content Creation", "Entwicklung", "Produktivität"]
  },
  {
    id: 4,
    name: "Anthropic Claude 3",
    description: "Fortschrittlicher KI-Chatbot mit Fokus auf Sicherheit und Transparenz",
    longDescription: "Claude 3 ist das neueste Modell von Anthropic mit großem Kontextfenster, hoher Zuverlässigkeit und Fokus auf verantwortungsvolle KI.",
    category: "Text",
    subcategory: "Chatbot",
    icon: "🦉",
    gradient: "gradient-green",
    featured: false,
    pricing: "Kostenlos & Pro ($20/Monat)",
    link: "https://claude.ai",
    features: ["Großes Kontextfenster", "Sichere Antworten", "Schnell"],
    useCases: ["Chat", "Recherche", "Textgenerierung"]
  },
  {
    id: 5,
    name: "Perplexity AI",
    description: "KI-Suchmaschine mit aktuellen Web-Ergebnissen und Quellenangaben",
    longDescription: "Perplexity kombiniert KI-Chat mit Websuche und liefert aktuelle, zitierte Antworten. Ideal für Recherche und Faktenchecks.",
    category: "Text",
    subcategory: "Suche",
    icon: "🔎",
    gradient: "gradient-indigo",
    featured: false,
    pricing: "Kostenlos & Pro ($20/Monat)",
    link: "https://www.perplexity.ai",
    features: ["Websuche", "Quellenangaben", "KI-Chat"],
    useCases: ["Recherche", "Faktencheck", "Wissensarbeit"]
  },
  {
    id: 6,
    name: "Microsoft Copilot",
    description: "KI-Assistent für Microsoft 365, Windows und Web",
    longDescription: "Copilot integriert KI in Office, Windows und Edge. Unterstützt Text, Code, Präsentationen und mehr.",
    category: "Produktivität",
    subcategory: "Assistent",
    icon: "💼",
    gradient: "gradient-blue",
    featured: false,
    pricing: "In Microsoft 365 enthalten",
    link: "https://copilot.microsoft.com",
    features: ["Office-Integration", "Text & Code", "Präsentationen"],
    useCases: ["Arbeit", "Organisation", "Entwicklung"]
  },
  {
    id: 7,
    name: "Meta Llama 3",
    description: "Open-Source-Sprachmodell von Meta für Text und Code",
    longDescription: "Llama 3 ist Metas neuestes Open-Source-Sprachmodell mit hoher Leistungsfähigkeit für Text- und Code-Aufgaben.",
    category: "Text",
    subcategory: "Foundation Model",
    icon: "🦙",
    gradient: "gradient-orange",
    featured: false,
    pricing: "Open Source",
    link: "https://llama.meta.com",
    features: ["Open Source", "Text & Code", "API"],
    useCases: ["Entwicklung", "Forschung", "Chatbots"]
  },
  {
    id: 8,
    name: "Mistral AI",
    description: "Schnelles, effizientes Open-Source-Sprachmodell aus Europa",
    longDescription: "Mistral bietet leistungsstarke, kompakte Sprachmodelle mit Fokus auf Effizienz und Open Source.",
    category: "Text",
    subcategory: "Foundation Model",
    icon: "🌬️",
    gradient: "gradient-teal",
    featured: false,
    pricing: "Open Source & API",
    link: "https://mistral.ai",
    features: ["Effizient", "Open Source", "API"],
    useCases: ["Entwicklung", "Chatbots", "Forschung"]
  },
  {
    id: 9,
    name: "Stable Diffusion XL",
    description: "Open-Source-Bildgenerierung mit hoher Qualität",
    longDescription: "Stable Diffusion XL ist ein fortschrittliches Text-zu-Bild-Modell für kreative Bildgenerierung, Open Source und vielseitig einsetzbar.",
    category: "Bild",
    subcategory: "Generierung",
    icon: "🖼️",
    gradient: "gradient-pink",
    featured: false,
    pricing: "Open Source & API",
    link: "https://stability.ai",
    features: ["Text-zu-Bild", "Open Source", "Hohe Qualität"],
    useCases: ["Design", "Kunst", "Marketing"]
  },
  {
    id: 10,
    name: "DALL-E 3",
    description: "Bildgenerierung von OpenAI mit natürlicher Sprache",
    longDescription: "DALL-E 3 erzeugt hochwertige Bilder aus Textbeschreibungen und ist in ChatGPT Plus integriert.",
    category: "Bild",
    subcategory: "Generierung",
    icon: "🎨",
    gradient: "gradient-purple",
    featured: false,
    pricing: "In ChatGPT Plus enthalten",
    link: "https://openai.com/dall-e-3",
    features: ["Text-zu-Bild", "ChatGPT-Integration", "Hohe Qualität"],
    useCases: ["Kunst", "Content Creation", "Marketing"]
  },
  {
    id: 11,
    name: "Runway Gen-2",
    description: "KI-Video- und Bildgenerierung für Kreative",
    longDescription: "Runway Gen-2 ermöglicht die Erstellung von Videos und Bildern aus Text oder Bildvorlagen, ideal für Content Creator.",
    category: "Video",
    subcategory: "Generierung",
    icon: "🎬",
    gradient: "gradient-yellow",
    featured: false,
    pricing: "Ab $12/Monat",
    link: "https://runwayml.com",
    features: ["Text-zu-Video", "Bild-zu-Video", "Effekte"],
    useCases: ["Video Creation", "Design", "Marketing"]
  },
  {
    id: 12,
    name: "ElevenLabs",
    description: "KI-Stimmen- und Audio-Generierung auf höchstem Niveau",
    longDescription: "ElevenLabs bietet realistische KI-Stimmen für Text-to-Speech, Synchronisation und Audio-Content.",
    category: "Audio",
    subcategory: "Text-to-Speech",
    icon: "🔊",
    gradient: "gradient-blue",
    featured: false,
    pricing: "Ab $5/Monat",
    link: "https://elevenlabs.io",
    features: ["Realistische Stimmen", "Mehrsprachig", "API"],
    useCases: ["Podcasts", "Videos", "Barrierefreiheit"]
  },
  {
    id: 13,
    name: "GitHub Copilot",
    description: "KI-Coding-Assistent für Entwickler",
    longDescription: "GitHub Copilot unterstützt Entwickler beim Schreiben von Code, schlägt Funktionen vor und beschleunigt die Entwicklung.",
    category: "Code",
    subcategory: "Assistent",
    icon: "👨‍💻",
    gradient: "gradient-green",
    featured: false,
    pricing: "Ab $10/Monat",
    link: "https://github.com/features/copilot",
    features: ["Code-Vervollständigung", "Mehrsprachig", "IDE-Integration"],
    useCases: ["Programmierung", "Lernen", "Produktivität"]
  },
  {
    id: 14,
    name: "Notion AI",
    description: "KI-Features für Notion: Schreiben, Zusammenfassen, Brainstorming",
    longDescription: "Notion AI erweitert Notion um KI-gestützte Textgenerierung, Zusammenfassungen und mehr.",
    category: "Produktivität",
    subcategory: "Assistent",
    icon: "📝",
    gradient: "gradient-indigo",
    featured: false,
    pricing: "Ab $8/Monat",
    link: "https://www.notion.so/product/ai",
    features: ["Textgenerierung", "Zusammenfassen", "Brainstorming"],
    useCases: ["Notizen", "Organisation", "Content Creation"]
  },
  {
    id: 15,
    name: "Midjourney V6",
    description: "KI-Bildgenerierung mit künstlerischem Fokus",
    longDescription: "Midjourney erzeugt künstlerische, fotorealistische Bilder aus Text und ist besonders bei Kreativen beliebt.",
    category: "Bild",
    subcategory: "Generierung",
    icon: "🖌️",
    gradient: "gradient-pink",
    featured: false,
    pricing: "Ab $10/Monat",
    link: "https://midjourney.com",
    features: ["Künstlerische Bilder", "Stilreferenz", "Community"],
    useCases: ["Kunst", "Design", "Inspiration"]
  },
  {
    id: 16,
    name: "Jasper AI",
    description: "KI-Textgenerator für Unternehmen, Blog, Social Media und Werbung",
    longDescription: "Jasper AI unterstützt Unternehmen beim Verfassen von Blogbeiträgen, Social-Media-Inhalten und Werbetexten. Es kann hochwertige Inhalte in verschiedenen Stilen und für verschiedene Zielgruppen generieren und SEO-Keywords berücksichtigen.",
    category: "Text",
    subcategory: "Content Creation",
    icon: "✍️",
    gradient: "gradient-orange",
    featured: false,
    pricing: "Ab $49/Monat (Creator)",
    link: "https://www.jasper.ai",
    features: ["Blog & Social Media", "SEO-Optimierung", "Markenstimme", "Verschiedene Stile"],
    useCases: ["Content Marketing", "Werbung", "SEO"]
  },
  {
    id: 17,
    name: "Grammarly",
    description: "KI-Schreibassistent für Grammatik, Stil und Plagiatserkennung",
    longDescription: "Grammarly prüft Grammatik, Rechtschreibung, Stil, Ton und bietet Plagiatserkennung. Integriert sich in Browser, Google Docs und Microsoft Office.",
    category: "Text",
    subcategory: "Schreibassistent",
    icon: "📝",
    gradient: "gradient-green",
    featured: false,
    pricing: "Freemium",
    link: "https://www.grammarly.com",
    features: ["Grammatikprüfung", "Stil & Ton", "Plagiatserkennung"],
    useCases: ["Schreiben", "Korrektur", "Lernen"]
  },
  {
    id: 18,
    name: "Adobe Firefly",
    description: "KI-Bildgenerator und SVG-Generator, integriert in Adobe-Tools",
    longDescription: "Adobe Firefly erstellt skalierbare Vektorgrafiken (SVG) aus Text-Prompts und bietet generative Füllwerkzeuge zum Entfernen oder Hinzufügen von Objekten. Integriert in Photoshop und Express.",
    category: "Bild",
    subcategory: "Generierung",
    icon: "🔥",
    gradient: "gradient-yellow",
    featured: false,
    pricing: "Ab $4,99/Monat (Premium)",
    link: "https://firefly.adobe.com",
    features: ["SVG-Generierung", "Photoshop-Integration", "Generative Füllung"],
    useCases: ["Design", "Bildbearbeitung", "Kunst"]
  },
  {
    id: 19,
    name: "Synthesia",
    description: "KI-Videoerstellung mit Avataren in 140+ Sprachen",
    longDescription: "Synthesia ermöglicht die Erstellung professioneller Videos mit KI-Avataren, Stimmklonung und Text-zu-Video. Unterstützt 140+ Sprachen und persönliche Avatare.",
    category: "Video",
    subcategory: "Text-to-Video",
    icon: "🎥",
    gradient: "gradient-blue",
    featured: false,
    pricing: "Ab $29/Monat (Starter)",
    link: "https://www.synthesia.io",
    features: ["KI-Avatare", "Text-zu-Video", "Stimmklonung"],
    useCases: ["E-Learning", "Marketing", "Präsentationen"]
  },
  {
    id: 20,
    name: "Zapier",
    description: "Automatisierung von Workflows und KI-Integration ohne Code",
    longDescription: "Zapier verbindet verschiedene Anwendungen, um automatisierte Workflows zu erstellen. Bietet KI-Builder und KI-Agents für intelligente Automatisierung.",
    category: "Produktivität",
    subcategory: "Automatisierung",
    icon: "⚡",
    gradient: "gradient-orange",
    featured: false,
    pricing: "Freemium, Pro ab $19,99/Monat",
    link: "https://zapier.com",
    features: ["Workflow-Automatisierung", "KI-Builder", "App-Integration"],
    useCases: ["Marketing", "Datenverarbeitung", "Produktivität"]
  },
  {
    id: 21,
    name: "Otter.ai",
    description: "Meeting-Transkription und Zusammenfassungen mit KI",
    longDescription: "Otter.ai transkribiert Meetings, erstellt Zusammenfassungen und extrahiert Aktionspunkte. Bietet Live-Transkription und Meeting-Notizen.",
    category: "Audio",
    subcategory: "Transkription",
    icon: "🦦",
    gradient: "gradient-cyan",
    featured: false,
    pricing: "Freemium, Pro ab $8,33/Monat",
    link: "https://otter.ai",
    features: ["Meeting-Transkription", "Zusammenfassungen", "Live-Notizen"],
    useCases: ["Meetings", "Dokumentation", "Produktivität"]
  },
  {
    id: 22,
    name: "Tableau AI Suite",
    description: "KI-gestützte Datenanalyse und Visualisierung",
    longDescription: "Tableau AI Suite bietet intelligente Analyse, automatisierte Datenbereinigung, prädiktive Analysen und Visualisierungen. Integriert maschinelles Lernen für Trends und Muster.",
    category: "Analyse",
    subcategory: "Business Intelligence",
    icon: "📊",
    gradient: "gradient-purple",
    featured: false,
    pricing: "Ab $15/Monat (Viewer)",
    link: "https://www.tableau.com",
    features: ["Datenvisualisierung", "Prädiktive Analyse", "Automatisierte Insights"],
    useCases: ["Business Intelligence", "Reporting", "Datenanalyse"]
  },
  {
    id: 23,
    name: "Microsoft Power BI AI",
    description: "KI-gestützte Datenanalyse und Visualisierung von Microsoft",
    longDescription: "Power BI AI integriert KI-Funktionen für Datenaufbereitung, natürliche Sprachabfragen und automatisierte Erkenntnisse. Bietet KI-Visualisierungen wie Key Influencers und Decomposition Tree.",
    category: "Analyse",
    subcategory: "Business Intelligence",
    icon: "📈",
    gradient: "gradient-blue",
    featured: false,
    pricing: "Freemium, Pro ab $13,70/Monat",
    link: "https://powerbi.microsoft.com",
    features: ["KI-Visualisierungen", "Natürliche Sprache", "Automatisierte Insights"],
    useCases: ["Reporting", "Business Intelligence", "Datenanalyse"]
  },
  {
    id: 24,
    name: "Google Cloud AutoML",
    description: "No-Code-KI-Modelltraining und prädiktive Modellierung",
    longDescription: "Google Cloud AutoML ermöglicht das Trainieren von KI-Modellen für Text, Bild oder Tabellendaten ohne Programmierkenntnisse. Bietet vorgefertigte APIs für Vision, Natural Language und Translation.",
    category: "Analyse",
    subcategory: "Modelltraining",
    icon: "☁️",
    gradient: "gradient-teal",
    featured: false,
    pricing: "Nutzungsbasiert",
    link: "https://cloud.google.com/automl",
    features: ["No-Code-Training", "APIs", "Prädiktive Modellierung"],
    useCases: ["Datenanalyse", "ML-Prototyping", "Business Intelligence"]
  },
  {
    id: 25,
    name: "IBM Watson Discovery",
    description: "KI-gestützte Analyseplattform für Dokumente und Insights",
    longDescription: "IBM Watson Discovery bietet Stimmungsanalyse, Sprachinteraktion, mehrsprachige Unterstützung und nutzt LLMs zur Extraktion von Informationen aus Dokumenten.",
    category: "Analyse",
    subcategory: "Dokumenten-Insights",
    icon: "🔍",
    gradient: "gradient-indigo",
    featured: false,
    pricing: "Ab $500/Monat",
    link: "https://www.ibm.com/cloud/watson-discovery",
    features: ["Stimmungsanalyse", "NLP", "Dokumenten-Insights"],
    useCases: ["Vertragsanalyse", "Business Intelligence", "Recherche"]
  },
  {
    id: 26,
    name: "Khanmigo",
    description: "KI-Tutor für personalisiertes Lernen und AP-Niveau-Unterstützung",
    longDescription: "Khanmigo bietet personalisiertes Tutoring, Schreiben, Debattieren und Programmierunterstützung mit sofortigem Feedback.",
    category: "Bildung",
    subcategory: "Tutor",
    icon: "🎓",
    gradient: "gradient-green",
    featured: false,
    pricing: "Ab $4/Monat",
    link: "https://www.khanacademy.org/khan-labs",
    features: ["Personalisiertes Tutoring", "Schreiben & Debattieren", "Programmieren"],
    useCases: ["Lernen", "Schule", "Studium"]
  },
  {
    id: 27,
    name: "You.com",
    description: "KI-gestützte Suchmaschine mit Datenschutz und Personalisierung",
    longDescription: "You.com bietet ein personalisiertes, KI-verbessertes Sucherlebnis mit Fokus auf Datenschutz. Unterstützt Echtzeit-Antworten und Integration verschiedener KI-Modelle.",
    category: "Suche",
    subcategory: "KI-Suchmaschine",
    icon: "🔎",
    gradient: "gradient-cyan",
    featured: false,
    pricing: "Freemium, Pro ab $15/Monat",
    link: "https://you.com",
    features: ["KI-Suche", "Datenschutz", "Personalisierung"],
    useCases: ["Recherche", "Faktencheck", "Wissensarbeit"]
  },
  {
    id: 28,
    name: "Fireflies.ai",
    description: "Automatische Meeting-Aufzeichnung, Transkription und Zusammenfassung",
    longDescription: "Fireflies.ai zeichnet Meetings auf, transkribiert sie und erstellt KI-Super-Zusammenfassungen mit Aktionspunkten, Fragen und Themen.",
    category: "Audio",
    subcategory: "Transkription",
    icon: "🔥",
    gradient: "gradient-orange",
    featured: false,
    pricing: "Freemium, Pro ab $18/Monat",
    link: "https://fireflies.ai",
    features: ["Meeting-Aufzeichnung", "Transkription", "Zusammenfassungen"],
    useCases: ["Meetings", "Produktivität", "Dokumentation"]
  },
  {
    id: 29,
    name: "Descript",
    description: "All-in-One-Plattform für Video- und Podcast-Bearbeitung mit KI",
    longDescription: "Descript ermöglicht die Bearbeitung von Videos wie Dokumenten, bietet Transkription, Clip-Erstellung, KI-gestützte Bearbeitung und Kollaborationstools.",
    category: "Video",
    subcategory: "Bearbeitung",
    icon: "🎬",
    gradient: "gradient-blue",
    featured: false,
    pricing: "Freemium, Pro ab $32/Monat",
    link: "https://www.descript.com",
    features: ["Transkription", "Video-Editing", "Kollaboration"],
    useCases: ["Podcasts", "Video", "Content Creation"]
  },
  {
    id: 30,
    name: "Murf.ai",
    description: "KI-Voiceover, Text-to-Speech und Transkription in 20+ Sprachen",
    longDescription: "Murf.ai bietet realistische KI-Voiceovers, Text-zu-Sprache, Transkription und Stimmwechslerfunktion für professionelle Audioinhalte.",
    category: "Audio",
    subcategory: "Text-to-Speech",
    icon: "🎤",
    gradient: "gradient-purple",
    featured: false,
    pricing: "Ab $19/Monat (Creator)",
    link: "https://murf.ai",
    features: ["Voiceover", "Text-to-Speech", "Transkription"],
    useCases: ["Podcasts", "Videos", "E-Learning"]
  },
  {
    id: 31,
    name: "LALAL.AI",
    description: "KI-gestützte Stem-Trennung und Audioverbesserung",
    longDescription: "LALAL.AI trennt Gesang und Instrumente, entfernt Hintergrundgeräusche und verbessert die Audioqualität. Unterstützt Batch-Upload und Stem-Download.",
    category: "Audio",
    subcategory: "Audioverbesserung",
    icon: "🎶",
    gradient: "gradient-teal",
    featured: false,
    pricing: "Ab $20 (Lite Pack)",
    link: "https://www.lalal.ai",
    features: ["Stem-Trennung", "Audioverbesserung", "Batch-Upload"],
    useCases: ["Musikproduktion", "Podcasts", "Audioanalyse"]
  },
  {
    id: 32,
    name: "Tabnine",
    description: "KI-Code-Vervollständigung mit Fokus auf Datenschutz und Personalisierung",
    longDescription: "Tabnine bietet Code-Vervollständigung, Chat, Code-Erklärungen, Testgenerierung und Dokumentation. Unterstützt 30+ Programmiersprachen und alle wichtigen IDEs.",
    category: "Code",
    subcategory: "Assistent",
    icon: "💻",
    gradient: "gradient-indigo",
    featured: false,
    pricing: "Ab $9/Monat (Dev)",
    link: "https://www.tabnine.com",
    features: ["Code-Vervollständigung", "Chat", "Testgenerierung"],
    useCases: ["Programmierung", "Lernen", "Produktivität"]
  },
  {
    id: 33,
    name: "Amazon Q Developer",
    description: "KI-gestützter Coding-Assistent für AWS und Cloud-Entwicklung",
    longDescription: "Amazon Q Developer bietet sichere Codevorschläge, Multi-Datei-Änderungen, Dokumentation und automatisierte Code-Reviews. Integriert in JetBrains IDEs und VS Code.",
    category: "Code",
    subcategory: "Assistent",
    icon: "☁️",
    gradient: "gradient-blue",
    featured: false,
    pricing: "Freemium, Pro ab $19/Monat",
    link: "https://aws.amazon.com/q/developer/",
    features: ["Code-Vorschläge", "Multi-Datei-Änderungen", "AWS-Integration"],
    useCases: ["Cloud-Entwicklung", "Programmierung", "DevOps"]
  },
  {
    id: 34,
    name: "Google Gemini Code Assist",
    description: "KI-Code-Assistenz mit Google Gemini LLM, Chat und Vervollständigung",
    longDescription: "Gemini Code Assist bietet Code-Vervollständigung, Chat, Code-Generierung und Zitate für vorgeschlagenen Code. Integriert in Google Cloud-Tools und IDEs.",
    category: "Code",
    subcategory: "Assistent",
    icon: "🔮",
    gradient: "gradient-cyan",
    featured: false,
    pricing: "Freemium, Pro ab $19,99/Monat",
    link: "https://cloud.google.com/ai/gemini/code-assist",
    features: ["Code-Vervollständigung", "Chat", "Cloud-Integration"],
    useCases: ["Programmierung", "Cloud", "Produktivität"]
  },
  {
    id: 35,
    name: "Microsoft AutoGen",
    description: "Framework für Multi-Agenten-KI-Systeme und Codegenerierung",
    longDescription: "Microsoft AutoGen ist ein Framework für den Aufbau konversationsfähiger Multi-Agenten-Systeme, die Code generieren, ausführen und debuggen können. Open Source und für Unternehmen geeignet.",
    category: "Code",
    subcategory: "Framework",
    icon: "🤖",
    gradient: "gradient-green",
    featured: false,
    pricing: "Open Source",
    link: "https://microsoft.github.io/autogen/",
    features: ["Multi-Agenten-Systeme", "Codegenerierung", "Fehlerbehandlung"],
    useCases: ["KI-Agenten", "Unternehmenslösungen", "Forschung"]
  }
];

const categories = ["Alle", "Text", "Bild", "Video", "Audio", "Code", "Produktivität"];
const subcategories = ["Alle", "Chatbot", "Content", "Generierung", "Editing", "Synthese", "Assistenz", "Organisation", "Avatar"];

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

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [selectedSubcategory, setSelectedSubcategory] = useState("Alle");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTools = toolsData.filter(tool => {
    const matchesCategory = selectedCategory === "Alle" || tool.category === selectedCategory;
    const matchesSubcategory = selectedSubcategory === "Alle" || tool.subcategory === selectedSubcategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  const spotlightTool = toolsData.find(tool => tool.featured);

  const headerRef = useScrollReveal('fade-in');
  const spotlightRef = useScrollReveal('slide-up');

  return (
    <div className="min-h-screen py-8 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div ref={headerRef} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-orange">KI-Tools</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Umfassende Übersicht der besten KI-Tools mit Preisen, Features und Anwendungsfällen
          </p>
        </motion.div>

        {/* Spotlight Tool */}
        {spotlightTool && (
          <motion.section ref={spotlightRef} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Tool der Woche</h2>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`card p-8 ${spotlightTool.gradient} hover-lift ring-2 ring-orange-500/30`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{spotlightTool.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{spotlightTool.name}</h3>
                      <p className="text-white/80">{spotlightTool.category} • {spotlightTool.subcategory}</p>
                    </div>
                  </div>
                  <p className="text-white/90 mb-4">{spotlightTool.longDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {spotlightTool.features.map((feature, index) => (
                      <span key={index} className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-white/70">Preis:</span>
                      <p className="text-white font-medium">{spotlightTool.pricing}</p>
                    </div>
                    <div>
                      <span className="text-white/70">Kategorie:</span>
                      <p className="text-white font-medium">{spotlightTool.category}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Anwendungsfälle</h4>
                  <div className="space-y-2 mb-6">
                    {spotlightTool.useCases.map((useCase, index) => (
                      <div key={index} className="flex items-center">
                        <span className="text-white/80 mr-2">•</span>
                        <span className="text-white">{useCase}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={spotlightTool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white/20 text-white py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors text-center"
                    >
                      🌐 Zum Tool
                    </a>
                    <Link href={`/tools/${spotlightTool.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-white/20 text-white py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
                      >
                        📖 Details
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>
        )}

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'gradient-orange text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {subcategories.map((subcategory) => (
                <motion.button
                  key={subcategory}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSubcategory(subcategory)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedSubcategory === subcategory
                      ? 'gradient-pink text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {subcategory}
                </motion.button>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <input
              type="text"
              placeholder="Suche nach Tool oder Beschreibung..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors w-full max-w-md"
            />
          </div>
        </motion.div>

        {/* All Tools */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Alle KI-Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {filteredTools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.15, delay: index * 0.01, type: 'spring', bounce: 0.18 }}
                  className={`relative group bg-[#18181b] rounded-2xl shadow-lg overflow-hidden cursor-pointer border border-white/10 hover:border-orange-400/40 hover:shadow-orange-500/20 transition-all duration-200 ${tool.featured ? 'ring-2 ring-orange-500/30' : ''}`}
                  onClick={() => window.open(tool.link, '_blank')}
                  whileHover={{ scale: 1.06 }}
                >
                  <div className="p-8 flex flex-col gap-4">
                    <div className="flex items-center gap-4 mb-2">
                      <span
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl ${tool.gradient}`}
                        aria-label="Icon"
                        role="img"
                        style={{ fontSize: '2.5rem', lineHeight: '2.5rem', fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}
                      >
                        {tool.icon || '🔧'}
                      </span>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 leading-tight">{tool.name}</h3>
                        <p className="text-xs text-gray-400">{tool.category} • {tool.subcategory}</p>
                      </div>
                    </div>
                    <p className="text-gray-200 text-base mb-2 min-h-[48px]">{tool.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {tool.features && tool.features.map((feature, i) => (
                        <span key={i} className="text-xs bg-orange-500/10 text-orange-300 px-2 py-1 rounded-full">{feature}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-orange-400 font-semibold">{tool.pricing}</span>
                      <span className="text-xs text-gray-500">{tool.category}</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-gray-400 text-xs">Anwendungsfälle:</span>
                      <span className="text-gray-200 text-sm ml-2">{tool.useCases && tool.useCases.join(', ')}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 