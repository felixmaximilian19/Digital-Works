import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "AI Stack - KI-Landscape 2024-2025",
  description: "Umfassende Übersicht der KI-Landschaft 2024-2025 mit Executive Summary, aktuellen Trends, KI-Modellen, Tools und Best Practices.",
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
      <body
        className="antialiased font-sans"
      >
        <div className="mash-radiance-bg">
          <div className="mash-radiance-blob" style={{background: 'radial-gradient(circle at 30% 40%, #5856D6 0%, #000 80%)', width: '600px', height: '600px', top: '10%', left: '5%', animationDelay: '0s'}} />
          <div className="mash-radiance-blob" style={{background: 'radial-gradient(circle at 70% 60%, #FF2D55 0%, #000 80%)', width: '500px', height: '500px', top: '40%', left: '60%', animationDelay: '10s'}} />
          <div className="mash-radiance-blob" style={{background: 'radial-gradient(circle at 50% 80%, #34C759 0%, #000 80%)', width: '400px', height: '400px', top: '70%', left: '30%', animationDelay: '20s'}} />
        </div>
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
