# AI Stack - KI-Tool Plattform

![AI Stack](https://img.shields.io/badge/AI%20Stack-Next.js%2015-blue?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Eine moderne, Apple-inspirierte Plattform für KI-Tools, Modelle und Best Practices mit Next.js 15, TypeScript und Framer Motion.

## 🚀 Features

### ✨ Design & UX
- **Apple-inspirierte UI/UX** mit Liquid Glass und Glassmorphism
- **DarkVeil Shader** im Hero-Bereich mit animierten Partikeln
- **Mesh Gradients** als subtile Hintergrund-Animationen
- **BlurText Animationen** für alle Überschriften
- **FadeContent Komponenten** mit GPU-beschleunigten Animationen
- **Responsive Design** für alle Devices (Mobile, Tablet, Desktop, 4K)

### 🛠️ Funktionalität
- **KI-Tools Sammlung** mit Filter und Suche
- **KI-Modelle Übersicht** der neuesten Entwicklungen
- **Prompts Bibliothek** für verschiedene Anwendungsfälle
- **Best Practices Guides** für KI-Integration
- **News & Updates** aus der KI-Welt
- **Linksseitige Navigation** mit Gradient-Border Buttons

### 🔒 DSGVO & Compliance
- **Cookie-Consent Banner** mit granularen Einstellungen
- **DSGVO-konforme Datenschutzerklärung**
- **Impressum** nach deutschem Recht
- **Opt-in Analytics** und Marketing-Cookies

### ⚡ Performance
- **Next.js 15** mit App Router
- **GPU-beschleunigte Animationen** mit `will-change` Optimierungen
- **Lazy Loading** für Bilder und Komponenten
- **Optimierte Scroll-Animationen** mit IntersectionObserver
- **Mobile-optimiert** mit Touch-Gesten und reduzierten Animationen

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.2
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12.23.6
- **Icons**: Lucide React 0.525.0
- **Performance**: React 19.1.0

## 📦 Installation

### Voraussetzungen
- Node.js 18+ 
- npm oder yarn

### Setup
```bash
# Repository klonen
git clone [your-repo-url] ai-stack
cd ai-stack

# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

Die App ist unter `http://localhost:3000` verfügbar.

## 🚀 Deployment

### Vercel (Empfohlen)
```bash
# Vercel CLI installieren
npm i -g vercel

# Deployment
vercel

# Production deployment
vercel --prod
```

### Netlify
```bash
# Build erstellen
npm run build

# Netlify CLI
npm i -g netlify-cli
netlify deploy --prod --dir=.next
```

### Docker
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

## 🎨 Komponenten

### Core Komponenten
- **BlurText**: Animierte Text-Einblendungen mit GPU-Acceleration
- **FadeContent**: Scroll-basierte Reveal-Animationen
- **MeshGradientBackground**: Canvas-basierte Mesh-Gradients
- **CookieConsent**: DSGVO-konforme Cookie-Verwaltung
- **Navigation**: Responsive Sidebar mit Apple-Style Design

### Animation System
```typescript
// Beispiel BlurText Usage
<BlurText 
  as="h1" 
  text="AI Stack" 
  className="text-5xl font-bold"
  animateBy="words"
  direction="top" 
/>

// Beispiel FadeContent Usage  
<FadeContent 
  direction="up" 
  delay={0.2}
  duration={0.6}
>
  <div>Content...</div>
</FadeContent>
```

## 🎯 Konfiguration

### Environment Variablen
```env
# .env.local
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Tailwind CSS Konfiguration
Die App nutzt CSS Custom Properties für konsistente Theming:

```css
:root {
  --gradient-blue: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  --glass-bg: rgba(255,255,255,0.08);
  --font-sans: 'Inter', 'SF Pro Display', sans-serif;
}
```

## 📱 Browser Support

- **Chrome** 90+
- **Firefox** 88+  
- **Safari** 14+
- **Edge** 90+

### Mobile Optimierungen
- Touch-optimierte Interaktionen
- Reduzierte Animationen auf schwächeren Devices
- iOS Safari backdrop-filter Support
- Android Chrome Hardware-Beschleunigung

## 📊 Performance Metriken

### Lighthouse Scores (Ziel)
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 100
- **SEO**: 100

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms  
- **CLS**: < 0.1

## 🔧 Entwicklung

### Scripts
```bash
npm run dev      # Development Server
npm run build    # Production Build
npm run start    # Production Server
npm run lint     # ESLint Check
npm run export   # Static Export
```

### Code Style
- **ESLint** mit Next.js Config
- **TypeScript** Strict Mode
- **Prettier** für Code Formatting

### Git Workflow
```bash
# Feature Branch erstellen
git checkout -b feature/new-feature

# Changes committen
git add .
git commit -m "feat: add new feature"

# Push und PR erstellen
git push origin feature/new-feature
```

## 📄 Content Management

### KI-Tools hinzufügen
```typescript
// src/data/tools.ts
export const aiTools = [
  {
    id: 1,
    name: "Tool Name",
    description: "Tool Description",
    category: "Category",
    rating: 4.8,
    pricing: "Freemium",
    url: "https://tool-url.com",
    icon: IconComponent,
    gradient: "gradient-blue",
    tags: ["tag1", "tag2"],
    featured: true
  }
];
```

### News-Artikel hinzufügen
```typescript
// src/data/news.ts
export const newsArticles = [
  {
    id: 1,
    title: "Article Title",
    excerpt: "Article excerpt...",
    category: "Category",
    date: "2024-12-15",
    readTime: "5 min",
    tags: ["AI", "News"],
    featured: true
  }
];
```

## 🛡️ Sicherheit

### DSGVO Compliance
- Cookie-Consent vor Tracking
- Anonymisierte Analytics
- Datenminimierung
- Nutzerrechte (Auskunft, Löschung, etc.)

### Security Headers
```javascript
// next.config.js
const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options', 
    value: 'nosniff'
  },
  // weitere Headers...
];
```

## 🧪 Testing

### Unit Tests
```bash
# Jest Setup (optional)
npm install --save-dev jest @testing-library/react
npm run test
```

### E2E Tests  
```bash
# Playwright Setup (optional)
npm install --save-dev @playwright/test
npx playwright test
```

## 📱 PWA Support (Optional)

### Service Worker
```javascript
// public/sw.js
self.addEventListener('install', event => {
  // Cache resources
});
```

### Manifest
```json
// public/manifest.json
{
  "name": "AI Stack",
  "short_name": "AI Stack", 
  "theme_color": "#000000",
  "background_color": "#000000",
  "display": "standalone",
  "start_url": "/"
}
```

## 🤝 Contributing

1. Fork das Repository
2. Feature Branch erstellen (`git checkout -b feature/AmazingFeature`)
3. Changes committen (`git commit -m 'Add some AmazingFeature'`)
4. Branch pushen (`git push origin feature/AmazingFeature`)
5. Pull Request öffnen

## 📞 Kontakt & Support

**Felix Ehrenhuber**
- 📧 Email: felix.ehrenhuber@icloud.com
- 📱 Phone: 0151 21348230
- 📍 Address: Höhenweg 28, 82541 Ammerland-Münsing

## 📄 Lizenz

Copyright © 2024 Felix Ehrenhuber. Alle Rechte vorbehalten.

---

## 🚀 Quick Start Befehle

```bash
# 1. Installation
git clone [repo] && cd ai-stack && npm install

# 2. Development
npm run dev

# 3. Production Build  
npm run build && npm start

# 4. Deployment (Vercel)
vercel --prod
```

**Happy Coding! 🚀**
