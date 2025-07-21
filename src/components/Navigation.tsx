"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo"; // Added import for Logo component

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/news", label: "News" },
    { href: "/models", label: "Models" },
    { href: "/tools", label: "Tools" },
    { href: "/prompts", label: "Prompts" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 shadow-lg backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo className="h-12 w-auto" showText={true} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-5 py-2 rounded-lg text-lg font-semibold text-gray-200 hover:text-white hover:bg-white/10 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/tools"
              className="ml-4 px-6 py-2 rounded-lg gradient-blue text-white font-bold shadow-lg hover-glow text-lg transition-all"
            >
              Jetzt starten
            </Link>
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
          <div className="md:hidden mt-2">
            <div className="px-2 pt-2 pb-3 space-y-2 glass rounded-xl shadow-lg border border-white/10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-lg text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/tools"
                className="block mt-2 px-6 py-3 rounded-lg gradient-blue text-white font-bold shadow-lg hover-glow text-lg text-center"
                onClick={() => setIsOpen(false)}
              >
                Jetzt starten
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
