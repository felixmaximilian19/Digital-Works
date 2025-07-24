"use client";

import BlurText from '../../components/BlurText';
import FadeContent from '../../components/FadeContent';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

export default function Datenschutz() {
  return (
    <div className="min-h-screen lg:ml-0 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeContent>
          <div className="text-center mb-12">
            <div className="w-16 h-16 gradient-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield size={32} className="text-white" />
            </div>
            <BlurText as="h1" text="Datenschutzerklärung" className="text-4xl md:text-5xl font-bold text-white mb-4" />
            <p className="text-xl text-gray-300">
              Transparenz und Schutz Ihrer Daten haben höchste Priorität
            </p>
          </div>
        </FadeContent>

        <FadeContent delay={0.2}>
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. Verantwortlicher</h2>
            <div className="text-gray-300 space-y-2">
              <p className="flex items-center"><Mail size={16} className="mr-2 text-blue-400" /> felix.ehrenhuber@icloud.com</p>
              <p className="flex items-center"><Phone size={16} className="mr-2 text-blue-400" /> 0151 21348230</p>
              <p className="flex items-center"><MapPin size={16} className="mr-2 text-blue-400" /> Höhenweg 28, 82541 Ammerland-Münsing</p>
            </div>
          </div>
        </FadeContent>

        <FadeContent delay={0.3}>
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Bei der Nutzung unserer Website erheben wir nur die technisch notwendigen Daten. 
                Dazu gehören:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP-Adresse des aufrufenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>Verwendeter Browser und ggf. das Betriebssystem</li>
              </ul>
            </div>
          </div>
        </FadeContent>

        <FadeContent delay={0.4}>
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. Cookies</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Unsere Website verwendet Cookies, um die Nutzererfahrung zu verbessern:
              </p>
              <div className="space-y-3">
                <div className="glass-button p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Notwendige Cookies</h3>
                  <p className="text-sm">Diese Cookies sind für die grundlegende Funktionalität der Website erforderlich.</p>
                </div>
                <div className="glass-button p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Analyse-Cookies</h3>
                  <p className="text-sm">Helfen uns zu verstehen, wie Besucher mit der Website interagieren (nur mit Ihrer Einwilligung).</p>
                </div>
                <div className="glass-button p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Marketing-Cookies</h3>
                  <p className="text-sm">Werden für personalisierte Werbung verwendet (nur mit Ihrer Einwilligung).</p>
                </div>
              </div>
            </div>
          </div>
        </FadeContent>

        <FadeContent delay={0.5}>
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. Rechtsgrundlage der Verarbeitung</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Die Verarbeitung erfolgt auf Grundlage von:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) für technisch notwendige Daten</li>
                <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) für optional erhobene Daten</li>
              </ul>
            </div>
          </div>
        </FadeContent>

        <FadeContent delay={0.6}>
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. Ihre Rechte</h2>
            <div className="text-gray-300 space-y-4">
              <p>Sie haben folgende Rechte:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
                <li>Recht auf Widerruf erteilter Einwilligungen</li>
              </ul>
            </div>
          </div>
        </FadeContent>

        <FadeContent delay={0.7}>
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">6. Datensicherheit</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen 
                zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder Zugriff unberechtigter 
                Personen zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen 
                Entwicklung fortlaufend verbessert.
              </p>
            </div>
          </div>
        </FadeContent>

        <FadeContent delay={0.8}>
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">7. Kontakt</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte wenden Sie sich bitte an:
              </p>
              <div className="glass-button p-4 rounded-lg">
                <p className="font-semibold text-white mb-2">Felix Ehrenhuber</p>
                <p className="flex items-center mb-1"><Mail size={16} className="mr-2 text-blue-400" /> felix.ehrenhuber@icloud.com</p>
                <p className="flex items-center mb-1"><Phone size={16} className="mr-2 text-blue-400" /> 0151 21348230</p>
                <p className="flex items-center"><MapPin size={16} className="mr-2 text-blue-400" /> Höhenweg 28, 82541 Ammerland-Münsing</p>
              </div>
            </div>
          </div>
        </FadeContent>

        <FadeContent delay={0.9}>
          <div className="card p-8">
            <p className="text-gray-400 text-sm">
              Stand: {new Date().toLocaleDateString('de-DE')}
            </p>
          </div>
        </FadeContent>
      </div>
    </div>
  );
}