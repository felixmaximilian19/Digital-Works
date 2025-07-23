'use client';

import BlurText from '../../components/BlurText';
import FadeContent from '../../components/FadeContent';

export default function ImpressumPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <BlurText as="h1" text="Impressum" className="text-4xl md:text-5xl font-bold text-center mb-12" />
        
        <FadeContent>
          <div className="card p-8 space-y-8">
            <section>
              <BlurText as="h2" text="Angaben gemäß § 5 TMG" className="text-2xl font-bold mb-4" />
              <div className="text-gray-300 space-y-2">
                <p><strong>Felix Ehrenhuber</strong></p>
                <p>Digital Works - AI Stack</p>
                <p>Telefon: 015121348230</p>
                <p>E-Mail: felix.ehrenhuber@icloud.com</p>
              </div>
            </section>

            <section>
              <BlurText as="h2" text="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV" className="text-2xl font-bold mb-4" />
              <div className="text-gray-300 space-y-2">
                <p><strong>Felix Ehrenhuber</strong></p>
                <p>E-Mail: felix.ehrenhuber@icloud.com</p>
                <p>Telefon: 015121348230</p>
              </div>
            </section>

            <section>
              <BlurText as="h2" text="Haftung für Inhalte" className="text-2xl font-bold mb-4" />
              <div className="text-gray-300 space-y-4">
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                  Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                  fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                  rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                  allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist 
                  jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. 
                  Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte 
                  umgehend entfernen.
                </p>
              </div>
            </section>

            <section>
              <BlurText as="h2" text="Haftung für Links" className="text-2xl font-bold mb-4" />
              <div className="text-gray-300 space-y-4">
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir 
                  keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine 
                  Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige 
                  Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
                <p>
                  Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße 
                  überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. 
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
                  Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                </p>
              </div>
            </section>

            <section>
              <BlurText as="h2" text="Urheberrecht" className="text-2xl font-bold mb-4" />
              <div className="text-gray-300 space-y-4">
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
                  unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
                  Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
                  bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
                <p>
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen 
                  Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt 
                  wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte 
                  Dritter als solche gekennzeichnet.
                </p>
              </div>
            </section>

            <section>
              <BlurText as="h2" text="Datenschutz" className="text-2xl font-bold mb-4" />
              <div className="text-gray-300 space-y-4">
                <p>
                  Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten 
                  möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, 
                  Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, 
                  stets auf freiwilliger Basis.
                </p>
                <p>
                  Weitere Informationen finden Sie in unserer{' '}
                  <a href="/privacy" className="text-blue-400 underline">Datenschutzerklärung</a>.
                </p>
              </div>
            </section>

            <section>
              <BlurText as="h2" text="Hosting" className="text-2xl font-bold mb-4" />
              <div className="text-gray-300 space-y-4">
                <p>
                  <strong>Provider:</strong> Vercel/Netlify
                </p>
                <p>
                  <strong>Serverstandort:</strong> EU/Deutschland
                </p>
                <p>
                  <strong>CDN:</strong> CloudFlare (falls verwendet)
                </p>
              </div>
            </section>

            <section>
              <BlurText as="h2" text="Streitschlichtung" className="text-2xl font-bold mb-4" />
              <div className="text-gray-300 space-y-4">
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) 
                  bereit: <a href="https://ec.europa.eu/consumers/odr" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.
                </p>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
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