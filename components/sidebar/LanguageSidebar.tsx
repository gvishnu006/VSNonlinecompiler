'use client';

import { LANGUAGES, Language, LANGUAGE_CATEGORIES, getLanguagesByCategory } from '@/lib/constants/languages';
import { Search, History, ChevronRight } from 'lucide-react';
import { useState, useMemo } from 'react';
import { getRecentLanguages, addRecentLanguage } from '@/lib/storage';

interface LanguageSidebarProps {
  selectedLanguage: string;
  onSelectLanguage: (id: string) => void;
}

export default function LanguageSidebar({ selectedLanguage, onSelectLanguage }: LanguageSidebarProps) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  const recentIds = getRecentLanguages();
  const recentLangs = recentIds.map(id => LANGUAGES.find(l => l.id === id)).filter(Boolean) as Language[];

  const filteredLangs = useMemo(() => {
    let langs = getLanguagesByCategory(activeCategory);
    if (search) {
      langs = langs.filter(l => l.name.toLowerCase().includes(search.toLowerCase()));
    }
    return langs;
  }, [search, activeCategory]);

  const handleSelect = (id: string) => {
    addRecentLanguage(id);
    onSelectLanguage(id);
  };

  return (
    <div className="w-[280px] h-full bg-slate-900/40 border-r border-slate-800 flex flex-col flex-shrink-0 relative overflow-hidden backdrop-blur-xl z-10 transition-all duration-300">
      <div className="p-4 border-b border-slate-800">
        <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2">
          <TerminalIcon /> Languages
        </h2>
        
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
          <input 
            type="text" 
            placeholder="Search language..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-950/50 border border-slate-800 rounded-lg py-2 pl-9 pr-4 text-sm text-slate-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
          />
        </div>

        <div className="flex flex-wrap gap-1.5">
          {LANGUAGE_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shadow-glow-sm'
                  : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto w-full custom-scrollbar pb-6">
        {recentLangs.length > 0 && !search && activeCategory === 'All' && (
          <div className="px-3 py-4">
            <h3 className="text-xs font-semibold text-slate-500 mb-2 px-2 flex items-center gap-1.5 uppercase tracking-wider">
              <History size={12} /> Recent
            </h3>
            <div className="space-y-0.5">
              {recentLangs.map(lang => (
                <LanguageItem 
                  key={`recent-${lang.id}`} 
                  lang={lang} 
                  isSelected={selectedLanguage === lang.id} 
                  onClick={() => handleSelect(lang.id)} 
                />
              ))}
            </div>
          </div>
        )}

        <div className="px-3 py-4">
          <h3 className="text-xs font-semibold text-slate-500 mb-2 px-2 uppercase tracking-wider">
            {activeCategory === 'All' ? 'Available' : activeCategory}
          </h3>
          {filteredLangs.length > 0 ? (
            <div className="space-y-0.5">
              {filteredLangs.map(lang => (
                <LanguageItem 
                  key={lang.id} 
                  lang={lang} 
                  isSelected={selectedLanguage === lang.id} 
                  onClick={() => handleSelect(lang.id)} 
                />
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-sm text-slate-500">
              No languages found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function LanguageItem({ lang, isSelected, onClick }: { lang: Language, isSelected: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all group ${
        isSelected 
          ? 'bg-indigo-500/10 border border-indigo-500/20' 
          : 'border border-transparent hover:bg-slate-800/50'
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-lg w-6 flex justify-center" style={{ textShadow: isSelected ? '0 0 10px rgba(255,255,255,0.3)' : 'none' }}>
          {lang.icon}
        </span>
        <span className={`text-sm font-medium ${isSelected ? 'text-indigo-300' : 'text-slate-300 group-hover:text-slate-100'}`}>
          {lang.name}
        </span>
      </div>
      <ChevronRight 
        size={14} 
        className={`transition-all ${isSelected ? 'text-indigo-400 opacity-100 translate-x-0' : 'text-slate-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`} 
      />
    </button>
  );
}

function TerminalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  );
}
