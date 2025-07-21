"use client";

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Copy, Check, ArrowLeft } from 'lucide-react';
import promptsDataRaw from '../page';
import Image from 'next/image';
import { useState } from 'react';
import '../../models/liquid-glass.css';

export default function PromptDetailPage() {
  const params = useParams();
  const router = useRouter();
  const promptId = parseInt(params.id as string);
  const promptsData: any[] = Array.isArray(promptsDataRaw) ? promptsDataRaw : (promptsDataRaw?.promptsData || []);
  // Fallback: Suche nach Prompt in promptsData
  const prompt = promptsData.find((p: any) => p.id === promptId) || null;
  const [copied, setCopied] = useState(false);

  if (!prompt) {
    return (
      <div className="min-h-screen py-8 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4 text-white">Prompt nicht gefunden</h1>
          <button onClick={() => router.back()} className="text-blue-400 hover:text-blue-300">Zurück</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück
          </button>
        </motion.div>

        {/* Prompt Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`bg-white/5 rounded-3xl shadow-xl overflow-hidden mb-8 border border-white/10`}
        >
          <div className="p-8 flex flex-col gap-4">
            <div className="flex items-center gap-4 mb-2">
              <span className={`w-12 h-12 rounded-xl flex items-center justify-center text-3xl ${prompt.gradient}`} aria-label="Icon" role="img">{prompt.icon}</span>
              <div>
                <h1 className="text-3xl font-bold text-white mb-1 leading-tight">{prompt.title}</h1>
                <p className="text-sm text-gray-400">{prompt.category} • {prompt.subcategory}</p>
              </div>
            </div>
            <p className="text-gray-200 text-lg mb-2">{prompt.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {prompt.tags && prompt.tags.map((tag: any, i: any) => (
                <span key={i} className="text-xs bg-orange-500/10 text-orange-300 px-2 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            <div className="flex items-center gap-6 mb-2">
              <span className="text-sm text-gray-400">Schwierigkeit: <span className="text-white font-medium">{prompt.difficulty}</span></span>
              <span className="text-sm text-gray-400">Kategorie: <span className="text-white font-medium">{prompt.category}</span></span>
            </div>
            <div className="mb-2">
              <span className="text-gray-400 text-xs">Verwendung:</span>
              <span className="text-gray-200 text-sm ml-2">{prompt.usage}</span>
            </div>
            <div className="mb-2">
              <span className="text-gray-400 text-xs">Beispiele:</span>
              <span className="text-gray-200 text-sm ml-2">{prompt.examples && prompt.examples.join(', ')}</span>
            </div>
            <div className="mb-2">
              <span className="text-gray-400 text-xs">Prompt:</span>
              <span className="text-gray-200 text-base ml-2 break-words whitespace-pre-line block bg-white/10 rounded-lg p-4 mt-2">{prompt.prompt}</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { navigator.clipboard.writeText(prompt.prompt); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
              className="w-full bg-white/10 text-orange-400 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center justify-center mt-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Kopiert!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  Prompt kopieren
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 