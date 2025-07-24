import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import CookieConsent from "../components/CookieConsent";
import MeshGradientBackground from "../components/MeshGradientBackground";

export const metadata: Metadata = {
  title: "AI Stack - Deine KI-Tool Plattform",
  description: "Entdecke die neuesten KI-Modelle, Tools und Best Practices für dein Business. AI Stack bietet dir eine kuratierte Sammlung der besten KI-Ressourcen.",
  keywords: ["KI", "AI", "Tools", "Machine Learning", "Prompts", "Best Practices"],
  authors: [{ name: "Felix Ehrenhuber" }],
  openGraph: {
    title: "AI Stack - Deine KI-Tool Plattform",
    description: "Entdecke die neuesten KI-Modelle, Tools und Best Practices",
    type: "website",
    locale: "de_DE",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="font-sans antialiased">
        <MeshGradientBackground />
        <div className="relative z-10">
          <Navigation />
          <main className="pt-20">
            {children}
          </main>
        </div>
        <CookieConsent />
      </body>
    </html>
  );
}
