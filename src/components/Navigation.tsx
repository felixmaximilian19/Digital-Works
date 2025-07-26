"use client";

import Link from "next/link";
import Logo from "./Logo";
import { Home, Newspaper, Lightbulb, Wrench, Book, Bot } from "lucide-react";

const navItems = [
  { href: "/prompts", label: "Prompts", icon: Lightbulb },
  { href: "/models", label: "KI-Modelle", icon: Bot },
  { href: "/news", label: "News", icon: Newspaper },
  { href: "/best-practices", label: "Leitfäden", icon: Book },
  { href: "/tools", label: "Tools", icon: Wrench },
];

export default function Navigation() {
  return (
    <aside className="fixed top-0 left-0 h-full w-52 glass-panel border-r border-white/10 flex flex-col p-4">
      <div className="mb-8">
        <Link href="/">
          <Logo showText={true} />
        </Link>
      </div>
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors duration-200"
          >
            <item.icon className="w-6 h-6" />
            <span className="font-semibold">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
