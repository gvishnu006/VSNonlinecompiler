'use client';

import { Play, Square, Download, Save, RefreshCw, Copy, ClipboardPaste } from 'lucide-react';
import { Language } from '@/lib/constants/languages';

interface EditorToolbarProps {
  language: Language;
  isRunning: boolean;
  onRun: () => void;
  onStop: () => void;
  onReset: () => void;
  onDownload: () => void;
  onSave: () => void;
  onCopy?: () => void;
  onPaste?: () => void;
}

export default function EditorToolbar({
  language,
  isRunning,
  onRun,
  onStop,
  onReset,
  onDownload,
  onSave,
  onCopy,
  onPaste,
}: EditorToolbarProps) {
  return (
    <div className="flex items-center justify-between px-4 h-12 bg-slate-900/80 border-b border-slate-800 backdrop-blur-md z-20">
      
      {/* File Tabs info */}
      <div className="flex items-center h-full">
        <div className="flex items-center gap-2 px-4 h-full bg-slate-800/80 border-t-2 border-indigo-500 text-sm font-medium text-slate-200 min-w-[120px] shadow-glow-sm">
          <span className="text-lg">{language.icon}</span>
          <span>main{language.extension}</span>
        </div>
      </div>

      {/* Constraints Buttons */}
      <div className="flex items-center gap-2">
        <div className="flex items-center bg-slate-950/50 rounded-lg p-1 border border-slate-800">
          <button
            title="Reset to Hello World"
            onClick={onReset}
            className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-md transition-colors"
          >
            <RefreshCw size={16} />
          </button>
          <div className="w-px h-4 bg-slate-800 mx-1" />
          <button
            title="Download Code"
            onClick={onDownload}
            className="p-1.5 text-slate-400 hover:text-indigo-300 hover:bg-indigo-500/10 rounded-md transition-colors"
          >
            <Download size={16} />
          </button>
          <button
            title="Copy Code"
            onClick={onCopy}
            className="p-1.5 text-slate-400 hover:text-indigo-300 hover:bg-indigo-500/10 rounded-md transition-colors"
          >
            <Copy size={16} />
          </button>
          <button
            title="Paste Code"
            onClick={onPaste}
            className="p-1.5 text-slate-400 hover:text-indigo-300 hover:bg-indigo-500/10 rounded-md transition-colors"
          >
            <ClipboardPaste size={16} />
          </button>
          <button
            title="Save Project"
            onClick={onSave}
            className="p-1.5 text-slate-400 hover:text-fuchsia-300 hover:bg-fuchsia-500/10 rounded-md transition-colors"
          >
            <Save size={16} />
          </button>
        </div>

        <div className="flex bg-slate-950/50 rounded-lg p-1 border border-slate-800 ml-2">
          {isRunning ? (
            <button
              onClick={onStop}
              className="flex items-center gap-2 px-4 py-1.5 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-md text-sm font-bold transition-colors border border-red-500/30 shadow-[0_0_10px_rgba(239,68,68,0.2)] animate-pulse-slow"
            >
              <Square size={14} className="fill-current" /> Stop
            </button>
          ) : (
            <button
              onClick={onRun}
              className="flex items-center gap-2 px-4 py-1.5 bg-green-500/20 text-green-400 hover:bg-green-500/30 hover:text-green-300 rounded-md text-sm font-bold transition-all border border-green-500/30 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] shadow-[0_0_10px_rgba(34,197,94,0.2)]"
            >
              <Play size={14} className="fill-current" /> Run Code
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
