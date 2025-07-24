"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    setShowBanner(false);
  };

  const handleAcceptSelected = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    setShowBanner(false);
  };

  const handleDeclineAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto lg:left-auto lg:right-4 lg:max-w-sm"
      >
        <div className="glass-panel p-6 rounded-2xl border border-white/20 shadow-2xl">
          <div className="flex items-start gap-3 mb-4">
            <Cookie className="text-blue-400 mt-1 flex-shrink-0" size={20} />
            <div>
              <h3 className="text-white font-semibold mb-2">
                Cookie-Einstellungen
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und anonyme Nutzungsstatistiken zu erstellen.
              </p>
            </div>
          </div>

          {showDetails && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4 space-y-3"
            >
              <div className="space-y-2">
                <label className="flex items-center justify-between p-3 glass-button rounded-lg">
                  <div>
                    <span className="text-white text-sm font-medium">
                      Notwendige Cookies
                    </span>
                    <p className="text-gray-400 text-xs">
                      Für grundlegende Funktionen erforderlich
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="ml-2 text-blue-500"
                  />
                </label>

                <label className="flex items-center justify-between p-3 glass-button rounded-lg cursor-pointer">
                  <div>
                    <span className="text-white text-sm font-medium">
                      Analyse-Cookies
                    </span>
                    <p className="text-gray-400 text-xs">
                      Helfen uns die Website zu verbessern
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences({ ...preferences, analytics: e.target.checked })
                    }
                    className="ml-2 text-blue-500"
                  />
                </label>

                <label className="flex items-center justify-between p-3 glass-button rounded-lg cursor-pointer">
                  <div>
                    <span className="text-white text-sm font-medium">
                      Marketing-Cookies
                    </span>
                    <p className="text-gray-400 text-xs">
                      Für personalisierte Inhalte
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) =>
                      setPreferences({ ...preferences, marketing: e.target.checked })
                    }
                    className="ml-2 text-blue-500"
                  />
                </label>
              </div>
            </motion.div>
          )}

          <div className="space-y-2">
            {!showDetails ? (
              <>
                <div className="flex gap-2">
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 px-4 py-2 gradient-blue text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                  >
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={() => setShowDetails(true)}
                    className="px-4 py-2 glass-button text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-200"
                  >
                    Anpassen
                  </button>
                </div>
                <button
                  onClick={handleDeclineAll}
                  className="w-full px-4 py-2 text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Alle ablehnen
                </button>
              </>
            ) : (
              <>
                <div className="flex gap-2">
                  <button
                    onClick={handleAcceptSelected}
                    className="flex-1 px-4 py-2 gradient-blue text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                  >
                    Speichern
                  </button>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="px-4 py-2 glass-button text-white rounded-lg hover:bg-white/10 transition-all duration-200"
                  >
                    <X size={16} />
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="mt-3 pt-3 border-t border-white/10">
            <p className="text-gray-400 text-xs">
              Mehr Informationen in unserer{" "}
              <Link href="/datenschutz" className="text-blue-400 hover:underline">
                Datenschutzerklärung
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}