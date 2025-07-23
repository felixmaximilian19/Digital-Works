'use client';

import BlurText from '../../components/BlurText';
import FadeContent from '../../components/FadeContent';

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <BlurText 
          as="h1" 
          text="Datenschutzerklärung" 
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        />
        
        <FadeContent delay={500} className="text-center mb-12">
          <p className="text-xl text-gray-300">
            Ihre Privatsphäre ist uns wichtig. Diese Datenschutzerklärung erklärt, 
            wie wir Ihre Daten gemäß DSGVO verarbeiten.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE')}
          </p>
        </FadeContent>

        <div className="space-y-8">
          <FadeContent delay={700} className="card p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">1. Verantwortlicher</h2>
            <div className="text-gray-300 space-y-2">
              <p><strong>Name:</strong> Felix Ehrenhuber</p>
              <p><strong>E-Mail:</strong> felix.ehrenhuber@icloud.com</p>
              <p><strong>Telefon:</strong> 015121348230</p>
            </div>
          </FadeContent>

          <FadeContent delay={800} className="card p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <div className="text-gray-300 space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Beim Besuch der Website</h3>
                <p>Bei jedem Aufruf unserer Website werden folgende Daten automatisch erfasst:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>IP-Adresse (anonymisiert nach 24 Stunden)</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Aufgerufene Seite</li>
                  <li>Browser-Typ und Version</li>
                  <li>Betriebssystem</li>
                  <li>Referrer-URL</li>
                </ul>
              </div>
            </div>
          </FadeContent>

          <FadeContent delay={900} className="card p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">3. Cookies und Tracking</h2>
            <div className="text-gray-300 space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Notwendige Cookies</h3>
                <p>Diese Cookies sind für die Funktionalität der Website erforderlich:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Session-Cookies für die Navigation</li>
                  <li>Cookie-Einstellungen speichern</li>
                  <li>Sicherheits-Cookies</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Analytische Cookies (optional)</h3>
                <p>Mit Ihrer Zustimmung verwenden wir anonyme Analyse-Tools:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Vercel Analytics (anonymisiert)</li>
                  <li>Nutzungsstatistiken ohne Personenbezug</li>
                  <li>Performance-Monitoring</li>
                </ul>
              </div>
            </div>
          </FadeContent>

          <FadeContent delay={1000} className="card p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">4. Rechtsgrundlage</h2>
            <div className="text-gray-300 space-y-2">
              <p><strong>Art. 6 Abs. 1 lit. a DSGVO:</strong> Einwilligung für Analytics und Marketing-Cookies</p>
              <p><strong>Art. 6 Abs. 1 lit. f DSGVO:</strong> Berechtigtes Interesse für notwendige Cookies</p>
              <p><strong>Art. 6 Abs. 1 lit. b DSGVO:</strong> Vertragserfüllung bei Service-Nutzung</p>
            </div>
          </FadeContent>

          <FadeContent delay={1100} className="card p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">5. Hosting und Server</h2>
            <div className="text-gray-300 space-y-2">
              <p><strong>Hosting-Provider:</strong> Vercel Inc. (USA)</p>
              <p><strong>Server-Standort:</strong> EU-Rechenzentren (Frankfurt, Deutschland)</p>
              <p><strong>Datenübertragung:</strong> Alle Daten werden verschlüsselt übertragen (HTTPS)</p>
              <p><strong>Aufbewahrung:</strong> Log-Dateien werden nach 30 Tagen automatisch gelöscht</p>
            </div>
          </FadeContent>

          <FadeContent delay={1200} className="card p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">6. Ihre Rechte</h2>
            <div className="text-gray-300 space-y-2">
              <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Auskunftsrecht</strong> (Art. 15 DSGVO)</li>
                <li><strong>Berichtigungsrecht</strong> (Art. 16 DSGVO)</li>
                <li><strong>Löschungsrecht</strong> (Art. 17 DSGVO)</li>
                <li><strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
                <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
                <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO)</li>
                <li><strong>Widerruf der Einwilligung</strong> (Art. 7 Abs. 3 DSGVO)</li>
              </ul>
            </div>
          </FadeContent>

          <FadeContent delay={1300} className="card p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">7. Cookie-Einstellungen verwalten</h2>
            <div className="text-gray-300 space-y-4">
              <p>Sie können Ihre Cookie-Einstellungen jederzeit ändern:</p>
              <button 
                onClick={() => {
                  localStorage.removeItem('cookieConsent');
                  window.location.reload();
                }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
              >
                Cookie-Einstellungen öffnen
              </button>
            </div>
          </FadeContent>

          <FadeContent delay={1400} className="card p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">8. Kontakt und Beschwerden</h2>
            <div className="text-gray-300 space-y-2">
              <p>Bei Fragen zum Datenschutz kontaktieren Sie uns:</p>
              <p><strong>E-Mail:</strong> felix.ehrenhuber@icloud.com</p>
              <p><strong>Telefon:</strong> 015121348230</p>
              <p className="mt-4">
                <strong>Beschwerderecht:</strong> Sie haben das Recht, sich bei einer Aufsichtsbehörde 
                über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
              </p>
            </div>
          </FadeContent>

          <FadeContent delay={1500} className="card p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">9. Änderungen der Datenschutzerklärung</h2>
            <div className="text-gray-300">
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren, 
                um sie an geänderte Rechtslage oder Änderungen unserer Services anzupassen. 
                Die aktuelle Version finden Sie stets auf dieser Seite.
              </p>
            </div>
          </FadeContent>
        </div>
      </div>
    </div>
  );
}