'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '@/lib/context/AppContext';
import { Code2, BookOpen, Terminal, FolderOpen, Sun, Moon, User, LogOut } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme, user, logout } = useApp();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = [
    { href: '/compiler', label: 'Compiler', icon: Terminal },
    { href: '/learn', label: 'Learn', icon: BookOpen },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-[70px] bg-slate-900/80 backdrop-blur-md border-b border-indigo-500/20 z-50 px-6 flex items-center justify-between text-slate-200">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white shadow-glow group-hover:scale-105 transition-transform">
          <Code2 size={24} />
        </div>
        <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-fuchsia-400 hidden sm:block">
          VSNProgramiz
        </span>
      </Link>

      <div className="hidden md:flex flex-1 justify-center">
        <ul className="flex items-center gap-2 bg-slate-800/50 p-1.5 rounded-2xl border border-slate-700/50">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            const Icon = link.icon;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-indigo-500/20 text-indigo-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
                  }`}
                >
                  <Icon size={16} />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {user ? (
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 bg-slate-800 p-1 pr-3 rounded-full border border-slate-700 hover:border-indigo-500/50 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm font-medium hidden sm:block">{user.name}</span>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-xl shadow-xl overflow-hidden py-1">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <User size={16} /> Dashboard
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setIsDropdownOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-slate-700 hover:text-red-300 text-left"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            href="/compiler"
            className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-fuchsia-600 hover:from-indigo-500 hover:to-fuchsia-500 text-white rounded-xl text-sm font-semibold transition-all shadow-glow-sm hover:shadow-glow"
          >
            Start Coding
          </Link>
        )}
      </div>
    </nav>
  );
}
