"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { 
  Menu, 
  X, 
  Search, 
  Home,
  Newspaper,
  Lightbulb,
  Wrench,
  BookOpen,
  Bot
} from "lucide-react";

const navItems = [
  { href: "/", label: "Dashboard", icon: Home },
  { href: "/news", label: "KI-News", icon: Newspaper },
  { href: "/models", label: "KI-Modelle", icon: Bot },
  { href: "/tools", label: "KI-Tools", icon: Wrench },
  { href: "/prompts", label: "Prompts", icon: Lightbulb },
  { href: "/best-practices", label: "Best Practices", icon: BookOpen },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex fixed top-0 left-0 h-full w-64 z-50 glass-panel border-r border-white/10 shadow-xl backdrop-blur-xl flex-col">
        <div className="p-6">
          <Link href="/" className="flex items-center mb-8">
            <Logo className="h-10 w-auto" showText={true} />
          </Link>
          
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Suchen..."
              className="w-full glass-button pl-10 pr-4 py-3 rounded-xl text-sm text-white bg-transparent border-none outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>

          {/* Navigation Items */}
          <div className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-200 group ${
                    isActive 
                      ? 'glass-button text-white shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:glass-button'
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 gradient-blue rounded-xl opacity-20" />
                  )}
                  <div className={`absolute inset-0 rounded-xl transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30' 
                      : 'group-hover:bg-gradient-to-r group-hover:from-blue-500/10 group-hover:to-purple-500/10 group-hover:border group-hover:border-blue-500/20'
                  }`} />
                  <Icon size={18} className="mr-3 relative z-10" />
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10 shadow-lg backdrop-blur-lg">
        <div className="px-4 flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo className="h-8 w-auto" showText={true} />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="px-4 pb-4">
            <div className="glass-panel rounded-xl shadow-lg border border-white/10 p-4">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Suchen..."
                  className="w-full glass-button pl-10 pr-4 py-3 rounded-xl text-sm text-white bg-transparent border-none outline-none"
                />
              </div>

              {/* Mobile Navigation Items */}
              <div className="space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                        isActive 
                          ? 'glass-button text-white' 
                          : 'text-gray-300 hover:text-white hover:glass-button'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon size={18} className="mr-3" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Content Offset for Desktop Sidebar */}
      <div className="hidden lg:block w-64" />
    </>
  );
}
