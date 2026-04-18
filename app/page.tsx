import Link from 'next/link';
import { Terminal, Code2, BookOpen, Layers, Zap, Globe, Shield, Cpu } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-slate-400/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

      <main className="w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          VSNProgramiz v1.0 is live
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
          Code and Learn <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-slate-200">
            in the Browser
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          The ultimate platform for developers. Support for 19+ programming languages. 
          Real-time execution and interactive tutorials all in one place.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Link href="/compiler" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-900 rounded-2xl font-bold text-lg shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all flex items-center gap-2">
            <Terminal size={20} /> Start Coding
          </Link>
          <Link href="/learn" className="px-8 py-4 border border-slate-700 hover:border-amber-500/50 bg-slate-800/50 hover:bg-slate-800 text-slate-200 rounded-2xl font-bold text-lg transition-all flex items-center gap-2">
            <BookOpen size={20} /> Start Learning
          </Link>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 w-full animate-fade-in" style={{ animationDelay: '0.3s' }}>
          
          <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 transition-colors group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform relative z-10">
              <Zap size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-left relative z-10">Lightning Fast Engine</h3>
            <p className="text-slate-400 text-left relative z-10">Run code instantly in our secure, sandboxed execution environment backed by powerful servers.</p>
          </div>

          <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 transition-colors group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-14 h-14 rounded-2xl bg-slate-400/10 flex items-center justify-center text-slate-300 mb-6 group-hover:scale-110 transition-transform relative z-10">
              <Globe size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-left relative z-10">19+ Languages</h3>
            <p className="text-slate-400 text-left relative z-10">From Python and JavaScript to Rust and Go. We support all modern programming languages.</p>
          </div>

          <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 transition-colors group relative overflow-hidden hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-6 group-hover:scale-110 transition-transform relative z-10">
              <BookOpen size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-left relative z-10">Guided Learning</h3>
            <p className="text-slate-400 text-left relative z-10">Watch curated YouTube tutorials while testing the syntax directly in our live embedded compiler.</p>
          </div>

        </div>
      </main>
    </div>
  );
}
