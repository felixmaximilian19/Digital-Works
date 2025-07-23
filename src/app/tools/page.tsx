'use client';

import React from 'react';
import Link from 'next/link';

export default function ToolsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">AI Stack Tools Übersicht</h1>
      <p className="text-lg text-gray-400 mb-8">Hier findest du alle KI-Tools der Plattform.</p>
      <Link href="/" className="text-blue-400 hover:underline">Zurück zur Startseite</Link>
    </div>
  );
}