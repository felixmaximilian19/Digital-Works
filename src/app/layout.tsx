import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import CookieBanner from "../components/CookieBanner";

export const metadata: Metadata = {
  title: "AI Stack - Komplette KI-Landschaft 2024-2025 | 40+ Tools & Modelle",
  description: "Umfassende Übersicht der KI-Landschaft 2024-2025 mit über 40 führenden KI-Tools, Executive Summary, aktuellen Trends, KI-Modellen und Best Practices. Von GPT-4.5 bis Midjourney - alle Tools mit Preisen und direkten Links.",
  keywords: "KI Tools, Künstliche Intelligenz, AI Stack, GPT-4.5, Midjourney, ChatGPT, AI Modelle 2024, OpenAI, Google Gemini, KI-Suchmaschinen",
  authors: [{ name: "Felix Ehrenhuber" }],
  creator: "Felix Ehrenhuber",
  publisher: "Digital Works",
  robots: "index, follow",
  icons: {
    icon: '/favicon.svg',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-touch-icon-precomposed.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: '#000000',
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://ai-stack.vercel.app',
    siteName: 'AI Stack - KI-Landschaft 2024-2025',
    title: 'AI Stack - Komplette KI-Tools Datenbank 2024-2025',
    description: 'Über 40 führende KI-Tools in 9 Kategorien. Von GPT-4.5 bis Midjourney - alle Tools mit Preisen, Features und direkten Links.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Stack - KI-Tools Übersicht 2024-2025',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Stack - Komplette KI-Tools Datenbank 2024-2025',
    description: 'Über 40 führende KI-Tools in 9 Kategorien. Von GPT-4.5 bis Midjourney - alle Tools mit Preisen und direkten Links.',
    images: ['/og-image.jpg'],
    creator: '@ai_stack_de',
  },
  alternates: {
    canonical: 'https://ai-stack.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="AI Stack" />
      </head>
      <body className="antialiased"
      >
        <div className="mash-radiance-bg">
          <div className="mash-radiance-blob" style={{background: 'radial-gradient(circle at 30% 40%, #5856D6 0%, #000 80%)', width: '600px', height: '600px', top: '10%', left: '5%', animationDelay: '0s'}} />
          <div className="mash-radiance-blob" style={{background: 'radial-gradient(circle at 70% 60%, #FF2D55 0%, #000 80%)', width: '500px', height: '500px', top: '40%', left: '60%', animationDelay: '10s'}} />
          <div className="mash-radiance-blob" style={{background: 'radial-gradient(circle at 50% 80%, #34C759 0%, #000 80%)', width: '400px', height: '400px', top: '70%', left: '30%', animationDelay: '20s'}} />
          <div className="mash-radiance-blob" style={{background: 'radial-gradient(circle at 80% 20%, #007AFF 0%, #000 80%)', width: '350px', height: '350px', top: '20%', left: '75%', animationDelay: '15s'}} />
          <div className="mash-radiance-blob" style={{background: 'radial-gradient(circle at 20% 70%, #FF9500 0%, #000 80%)', width: '450px', height: '450px', top: '60%', left: '10%', animationDelay: '25s'}} />
        </div>
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <CookieBanner />
      </body>
    </html>
  );
}
