'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(newPreferences);
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences));
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setPreferences(newPreferences);
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences));
    setShowBanner(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'necessary') return; // Necessary cookies cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="glass-panel p-6 rounded-t-2xl">
            {!showPreferences ? (
              <>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      🍪 Cookies & Datenschutz
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und unsere Website zu analysieren. 
                      Durch die Nutzung unserer Website stimmen Sie unserer{' '}
                      <a href="/privacy" className="text-blue-400 underline">Datenschutzerklärung</a> zu.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setShowPreferences(true)}
                      className="px-4 py-2 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors text-sm"
                    >
                      Einstellungen
                    </button>
                    <button
                      onClick={acceptNecessary}
                      className="px-4 py-2 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors text-sm"
                    >
                      Nur Notwendige
                    </button>
                    <button
                      onClick={acceptAll}
                      className="px-4 py-2 gradient-blue text-white rounded-lg hover-glow text-sm"
                    >
                      Alle akzeptieren
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Cookie-Einstellungen
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Wählen Sie, welche Cookies Sie zulassen möchten:
                  </p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <div>
                      <h4 className="text-white font-medium">Notwendige Cookies</h4>
                      <p className="text-gray-400 text-sm">Erforderlich für grundlegende Website-Funktionen</p>
                    </div>
                    <div className="w-12 h-6 bg-blue-500 rounded-full flex items-center px-1">
                      <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <div>
                      <h4 className="text-white font-medium">Analytics Cookies</h4>
                      <p className="text-gray-400 text-sm">Helfen uns, die Website-Nutzung zu verstehen</p>
                    </div>
                    <button
                      onClick={() => togglePreference('analytics')}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.analytics ? 'bg-blue-500' : 'bg-gray-600'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        preferences.analytics ? 'ml-auto' : 'mr-auto'
                      }`}></div>
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <div>
                      <h4 className="text-white font-medium">Marketing Cookies</h4>
                      <p className="text-gray-400 text-sm">Für personalisierte Werbung und Inhalte</p>
                    </div>
                    <button
                      onClick={() => togglePreference('marketing')}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.marketing ? 'bg-blue-500' : 'bg-gray-600'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        preferences.marketing ? 'ml-auto' : 'mr-auto'
                      }`}></div>
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <div>
                      <h4 className="text-white font-medium">Funktionale Cookies</h4>
                      <p className="text-gray-400 text-sm">Verbessern die Website-Funktionalität</p>
                    </div>
                    <button
                      onClick={() => togglePreference('functional')}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.functional ? 'bg-blue-500' : 'bg-gray-600'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        preferences.functional ? 'ml-auto' : 'mr-auto'
                      }`}></div>
                    </button>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="px-4 py-2 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors text-sm"
                  >
                    Zurück
                  </button>
                  <button
                    onClick={savePreferences}
                    className="px-4 py-2 gradient-blue text-white rounded-lg hover-glow text-sm"
                  >
                    Einstellungen speichern
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;