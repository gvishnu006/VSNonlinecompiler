'use client';

import { useState } from 'react';
import { TUTORIALS, Tutorial } from '@/lib/constants/tutorials';
import { LANGUAGES, Language } from '@/lib/constants/languages';
import { PlayCircle, Clock, BookOpen, Code2, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

export default function LearnPage() {
  const [activeTutorial, setActiveTutorial] = useState<string | null>(null);

  return (
    <div className="flex-1 bg-slate-900 overflow-y-auto">
      
      {/* Header */}
      <div className="bg-slate-950 border-b border-slate-800 p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
        <h1 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-4">
          Guided Learning Hub
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Master new programming languages with curated video courses and interactive syntax notes. Pick a language to begin your journey.
        </p>
      </div>

      {/* Tutorials Grid */}
      <div className="max-w-6xl mx-auto p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {TUTORIALS.map((tutorial) => {
          const language = LANGUAGES.find(l => l.id === tutorial.languageId);
          if (!language) return null;
          
          const isActive = activeTutorial === tutorial.id;

          return (
            <div 
              key={tutorial.id}
              className={`bg-slate-950/50 border ${isActive ? 'border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.2)]' : 'border-slate-800'} rounded-3xl overflow-hidden transition-all duration-300`}
            >
              {/* Card Header & Video */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-2xl shadow-inner border border-slate-700">
                      {language.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white leading-tight">{language.name}</h2>
                      <div className="flex items-center gap-3 text-xs text-slate-400 mt-1 font-medium">
                        <span className={`px-2 py-0.5 rounded-md border ${
                          tutorial.level === 'Beginner' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                          tutorial.level === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                          'bg-red-500/10 text-red-400 border-red-500/20'
                        }`}>
                          {tutorial.level}
                        </span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {tutorial.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                  {tutorial.description}
                </p>

                {isActive ? (
                  <div className="w-full aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-800 mb-6 relative group">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src={`https://www.youtube.com/embed/${tutorial.youtubeId}`} 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                ) : (
                  <div 
                    onClick={() => setActiveTutorial(tutorial.id)}
                    className="w-full aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-800 mb-6 relative group cursor-pointer"
                  >
                    <img 
                      src={`https://img.youtube.com/vi/${tutorial.youtubeId}/maxresdefault.jpg`} 
                      alt={tutorial.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-cyan-500/90 text-white flex items-center justify-center scale-90 group-hover:scale-100 transition-transform shadow-[0_0_20px_rgba(6,182,212,0.5)] pl-1">
                        <PlayCircle size={32} />
                      </div>
                    </div>
                  </div>
                )}
                
                {isActive && (
                  <div className="space-y-6 animate-fade-in">
                    
                    {/* Basic Syntax Section */}
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                      <div className="px-4 py-3 bg-slate-800/50 border-b border-slate-800 flex items-center justify-between">
                        <span className="text-sm font-semibold flex items-center gap-2 text-slate-200">
                          <Code2 size={16} className="text-cyan-400" /> Basic Syntax Details
                        </span>
                        <Link 
                          href="/compiler" 
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg text-xs font-bold transition-colors"
                        >
                          Try it
                        </Link>
                      </div>
                      <div className="p-4 bg-[#0d1117] font-mono text-sm overflow-x-auto custom-scrollbar">
                        <pre className="text-slate-300">
                          <code dangerouslySetInnerHTML={{ 
                            __html: language.helloWorld.replace(/\n/g, '<br/>').replace(/ /g, '&nbsp;') 
                          }} />
                        </pre>
                      </div>
                    </div>

                    {/* Chapters */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                        <BookOpen size={16} className="text-emerald-400" /> Course Outline
                      </h4>
                      <div className="space-y-2">
                        {tutorial.chapters.map((chapter, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                            <span className="text-xs font-bold text-slate-500 block mb-1">CHAPTER {idx + 1}</span>
                            <span className="text-sm font-medium text-slate-200">{chapter.title}</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {chapter.topics.map((t, tid) => (
                                <span key={tid} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-400">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

                <button 
                  onClick={() => setActiveTutorial(isActive ? null : tutorial.id)}
                  className="w-full mt-4 flex items-center justify-center gap-2 py-3 border border-slate-800 hover:bg-slate-800 rounded-xl text-sm font-semibold text-slate-300 transition-colors"
                >
                  {isActive ? (
                    <><ChevronUp size={16} /> Hide Details</>
                  ) : (
                    <><ChevronDown size={16} /> Show Course & Syntax</>
                  )}
                </button>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
