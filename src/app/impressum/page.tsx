'use client';

import BlurText from '../../components/BlurText';
import FadeContent from '../../components/FadeContent';

export default function ImpressumPage() {
  return (
    <div className="min-h-screen py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <BlurText 
          as="h1" 
          text="Impressum" 
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        />
        
        <FadeContent delay={500} className="text-center mb-12">
          <p className="text-xl text-gray-300">
            Angaben gemäß § 5 TMG und verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </p>
        </FadeContent>

        <div className="space-y-8">
          <FadeContent delay={700} className="card p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Kontaktdaten</h2>
            <div className="text-gray-300 space-y-2">
              <p><strong>Name:</strong> Felix Ehrenhuber</p>
              <p><strong>E-Mail:</strong> felix.ehrenhuber@icloud.com</p>
              <p><strong>Telefon:</strong> 015121348230</p>
            </div>
          </FadeContent>

          <FadeContent delay={800} className="card p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Hosting</h2>
            <div className="text-gray-300 space-y-2">
              <p><strong>Provider:</strong> Vercel Inc.</p>
              <p><strong>Adresse:</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
              <p><strong>Server-Standort:</strong> EU-Rechenzentren (Frankfurt, Deutschland)</p>
              <p><strong>Website:</strong> <a href="https://vercel.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">vercel.com</a></p>
            </div>
          </FadeContent>

          <FadeContent delay={900} className="card p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Haftungsausschluss</h2>
            <div className="text-gray-300 space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Haftung für Inhalte</h3>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                  Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                  fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                  rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Haftung für Links</h3>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir 
                  keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine 
                  Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige 
                  Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>
            </div>
          </FadeContent>

          <FadeContent delay={1000} className="card p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Urheberrecht</h2>
            <div className="text-gray-300">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </FadeContent>

          <FadeContent delay={1100} className="card p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Streitschlichtung</h2>
            <div className="text-gray-300">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-400 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-2">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </FadeContent>

          <FadeContent delay={1200} className="card p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Technische Realisierung</h2>
            <div className="text-gray-300 space-y-2">
              <p><strong>Framework:</strong> Next.js 15</p>
              <p><strong>Styling:</strong> Tailwind CSS</p>
              <p><strong>Animationen:</strong> Framer Motion</p>
              <p><strong>Deployment:</strong> Vercel</p>
              <p><strong>CDN:</strong> Vercel Edge Network</p>
            </div>
          </FadeContent>
        </div>
      </div>
    </div>
  );
}