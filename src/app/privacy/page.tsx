'use client';

import BlurText from '../../components/BlurText';
import FadeContent from '../../components/FadeContent';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <BlurText as="h1" text="Datenschutzerklärung" className="text-4xl md:text-5xl font-bold text-center mb-12" />
        
        <FadeContent>
          <div className="card p-8 space-y-8">
            <section>
              <BlurText as="h2" text="1. Verantwortlicher" className="text-2xl font-bold mb-4" />
              <div className="text-gray-300 space-y-2">
                <p><strong>Felix Ehrenhuber</strong></p>
                <p>Telefon: 015121348230</p>
                <p>E-Mail: felix.ehrenhuber@icloud.com</p>
              </div>
            </section>

            <section>
              <BlurText as="h2" text="2. Datenverarbeitung" className="text-2xl font-bold mb-4" />
              <div className="text-gray-300 space-y-4">
                <p>
                  Diese Website verarbeitet personenbezogene Daten nur im erforderlichen Umfang 
                  für den Betrieb einer funktionsfähigen Website sowie unserer angebotenen Leistungen.
                </p>
                <p>
                  Eine Verarbeitung personenbezogener Daten findet grundsätzlich nur nach 
                  Einwilligung statt. Eine Ausnahme gilt nur dann, wenn die Verarbeitung 
                  gesetzlich erlaubt ist.
                </p>
              </div>
            </section>

            <section>
              <BlurText as="h2" text="3. Hosting und Content Delivery Networks" className="text-2xl font-bold mb-4" />
              <div className="text-gray-300 space-y-4">
                <p>
                  <strong>Vercel/Netlify:</strong> Diese Website wird auf Servern von Vercel Inc. bzw. Netlify Inc. gehostet. 
                  Die Server befinden sich in der EU/Deutschland. Der Anbieter erhebt und speichert automatisch 
                  Informationen in Server-Log-Dateien, die Ihr Browser automatisch übermittelt.
                </p>
                <p>
                  <strong>CloudFlare:</strong> Wir nutzen den Service CloudFlare der CloudFlare Inc. zur Optimierung 
                  und Sicherung unserer Website. Dabei können Ihre IP-Adresse und weitere Informationen 
                  an CloudFlare übertragen werden.
                </p>
              </div>
            </section>

            <section>
              <BlurText as="h2" text="4. Cookies" className="text-2xl font-bold mb-4" />
              <div className="text-gray-300 space-y-4">
                <p>
                  Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem 
                  Endgerät gespeichert werden und die Ihr Browser speichert.
                </p>
                <p>
                  <strong>Notwendige Cookies:</strong> Diese sind für den Betrieb der Website erforderlich.
                </p>
                <p>
                  <strong>Analytics Cookies:</strong> Diese helfen uns, die Nutzung der Website zu verstehen (nur mit Ihrer Zustimmung).
                </p>
                <p>
                  <strong>Marketing Cookies:</strong> Diese ermöglichen personalisierte Werbung (nur mit Ihrer Zustimmung).
                </p>
              </div>
            </section>

            <section>
              <BlurText as="h2" text="5. Ihre Rechte" className="text-2xl font-bold mb-4" />
              <div className="text-gray-300 space-y-4">
                <p>Sie haben das Recht auf:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Auskunft über Ihre bei uns gespeicherten Daten</li>
                  <li>Berichtigung unrichtiger Daten</li>
                  <li>Löschung Ihrer Daten</li>
                  <li>Einschränkung der Datenverarbeitung</li>
                  <li>Datenübertragbarkeit</li>
                  <li>Widerspruch gegen die Verarbeitung</li>
                  <li>Beschwerde bei einer Aufsichtsbehörde</li>
                </ul>
              </div>
            </section>

            <section>
              <BlurText as="h2" text="6. SSL-Verschlüsselung" className="text-2xl font-bold mb-4" />
              <div className="text-gray-300 space-y-4">
                <p>
                  Diese Website nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung 
                  vertraulicher Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung 
                  erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" 
                  wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </div>
            </section>

            <section>
              <BlurText as="h2" text="7. Externe Links" className="text-2xl font-bold mb-4" />
              <div className="text-gray-300 space-y-4">
                <p>
                  Diese Website enthält Links zu externen Websites Dritter. Wir haben keinen Einfluss 
                  auf die Inhalte und Datenschutzpraktiken dieser Websites. Bitte informieren Sie sich 
                  über die Datenschutzerklärungen der jeweiligen Anbieter.
                </p>
              </div>
            </section>

            <section>
              <BlurText as="h2" text="8. Änderungen der Datenschutzerklärung" className="text-2xl font-bold mb-4" />
              <div className="text-gray-300 space-y-4">
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung zu ändern, um sie an geänderte 
                  Rechtslagen oder bei Änderungen des Dienstes sowie der Datenverarbeitung anzupassen. 
                  Dies gilt jedoch nur im Hinblick auf Erklärungen zur Datenverarbeitung.
                </p>
              </div>
            </section>

            <section>
              <BlurText as="h2" text="9. Kontakt" className="text-2xl font-bold mb-4" />
              <div className="text-gray-300 space-y-4">
                <p>
                  Bei Fragen zum Datenschutz wenden Sie sich bitte an:
                </p>
                <p>
                  Felix Ehrenhuber<br />
                  E-Mail: felix.ehrenhuber@icloud.com<br />
                  Telefon: 015121348230
                </p>
              </div>
            </section>

            <div className="text-center pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Stand: {new Date().toLocaleDateString('de-DE')}
              </p>
            </div>
          </div>
        </FadeContent>
      </div>
    </div>
  );
}