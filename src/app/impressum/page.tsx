"use client";

import BlurText from '../../components/BlurText';
import FadeContent from '../../components/FadeContent';
import { Building, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Impressum() {
  return (
    <div className="min-h-screen lg:ml-0 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeContent>
          <div className="text-center mb-12">
            <div className="w-16 h-16 gradient-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building size={32} className="text-white" />
            </div>
            <BlurText as="h1" text="Impressum" className="text-4xl md:text-5xl font-bold text-white mb-4" />
            <p className="text-xl text-gray-300">
              Rechtliche Angaben gemäß § 5 TMG
            </p>
          </div>
        </FadeContent>

        <FadeContent delay={0.2}>
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Angaben gemäß § 5 TMG</h2>
            <div className="space-y-6">
              <div className="glass-button p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Verantwortlich für den Inhalt</h3>
                <div className="text-gray-300 space-y-2">
                  <p className="text-lg font-medium text-white">Felix Ehrenhuber</p>
                  <p className="flex items-center"><MapPin size={16} className="mr-2 text-blue-400" /> Höhenweg 28</p>
                  <p className="flex items-center"><MapPin size={16} className="mr-2 text-blue-400" /> 82541 Ammerland-Münsing</p>
                  <p className="flex items-center"><Phone size={16} className="mr-2 text-blue-400" /> 0151 21348230</p>
                  <p className="flex items-center"><Mail size={16} className="mr-2 text-blue-400" /> felix.ehrenhuber@icloud.com</p>
                </div>
              </div>
            </div>
          </div>
        </FadeContent>

        <FadeContent delay={0.3}>
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Haftung für Inhalte</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
                der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>
          </div>
        </FadeContent>

        <FadeContent delay={0.4}>
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Haftung für Links</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              <p>
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche 
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht 
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>
          </div>
        </FadeContent>

        <FadeContent delay={0.5}>
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Urheberrecht</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem 
                deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
                außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors 
                bzw. Erstellers.
              </p>
              <p>
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. 
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem 
                auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei 
                Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </div>
        </FadeContent>

        <FadeContent delay={0.6}>
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Externe Tools und Dienste</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Unsere Website verweist auf externe KI-Tools und Dienste Dritter. Wir sind nicht verantwortlich für 
                die Inhalte, Verfügbarkeit oder Funktionsweise dieser externen Dienste. Die Nutzung erfolgt auf 
                eigene Verantwortung der Nutzer.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="glass-button p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2 flex items-center">
                    <ExternalLink size={16} className="mr-2 text-blue-400" />
                    KI-Tools
                  </h3>
                  <p className="text-sm">Verlinkungen zu externen KI-Diensten</p>
                </div>
                <div className="glass-button p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2 flex items-center">
                    <ExternalLink size={16} className="mr-2 text-blue-400" />
                    Dokumentation
                  </h3>
                  <p className="text-sm">Links zu offiziellen API-Dokumentationen</p>
                </div>
              </div>
            </div>
          </div>
        </FadeContent>

        <FadeContent delay={0.7}>
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Kontakt bei rechtlichen Fragen</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Bei rechtlichen Fragen oder Beanstandungen wenden Sie sich bitte an:
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

        <FadeContent delay={0.8}>
          <div className="card p-8">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">
                Stand: {new Date().toLocaleDateString('de-DE')}
              </p>
              <p className="text-gray-500 text-xs">
                Quelle: Erstellt für AI Stack - KI-Tool Plattform
              </p>
            </div>
          </div>
        </FadeContent>
      </div>
    </div>
  );
}