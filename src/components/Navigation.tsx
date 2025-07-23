"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Menu, X, Search } from "lucide-react";

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/models", label: "KI-Modelle" },
  { href: "/tools", label: "KI-Tools" },
  { href: "/prompts", label: "Prompts" },
  { href: "/news", label: "News" },
  { href: "/best-practices", label: "Best Practices" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10 shadow-lg backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo className="h-12 w-auto" showText={true} />
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 flex-1 justify-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-6 py-2 rounded-xl font-semibold text-lg text-gray-200 transition-all duration-200 glass-button mx-1 hover:text-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <span className="z-10 relative">{item.label}</span>
              {/* Active Tab Indicator (optional, kann mit Router-Check ergänzt werden) */}
              {/* <span className="absolute left-1/2 -bottom-1 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition" /> */}
            </Link>
          ))}
        </div>
        {/* Searchbar (Platzhalter, noch keine Live-Suche) */}
        <div className="hidden md:flex items-center ml-4">
          <div className={`relative transition-all duration-300 ${searchActive ? 'w-64' : 'w-10'}`}>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-400 focus:outline-none"
              onClick={() => setSearchActive((v) => !v)}
            >
              <Search size={20} />
            </button>
            <input
              type="text"
              placeholder="Suchen..."
              className={`glass-button pl-10 pr-4 py-2 w-full rounded-xl text-base text-white bg-transparent border-none outline-none transition-all duration-300 ${searchActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              onBlur={() => setSearchActive(false)}
              onFocus={() => setSearchActive(true)}
            />
          </div>
        </div>
        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-2 px-4 pb-4">
          <div className="glass-panel rounded-xl shadow-lg border border-white/10 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-lg text-gray-200 rounded-xl glass-button hover:text-white hover:shadow-xl transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="relative mt-2">
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-400 focus:outline-none"
                onClick={() => setSearchActive((v) => !v)}
              >
                <Search size={20} />
              </button>
              <input
                type="text"
                placeholder="Suchen..."
                className={`glass-button pl-10 pr-4 py-2 w-full rounded-xl text-base text-white bg-transparent border-none outline-none transition-all duration-300 ${searchActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onBlur={() => setSearchActive(false)}
                onFocus={() => setSearchActive(true)}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
