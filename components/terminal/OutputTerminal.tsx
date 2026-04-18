'use client';

import { Copy, Terminal as TerminalIcon, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { ExecutionResult } from '@/lib/execution';
import { useState } from 'react';

interface OutputTerminalProps {
  result: ExecutionResult | null;
  isRunning: boolean;
}

export default function OutputTerminal({ result, isRunning }: OutputTerminalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!result) return;
    const text = result.stdout || result.stderr;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-[#0d1117] border-l border-t md:border-t-0 border-slate-800">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 h-10 border-b border-slate-800/80 bg-[#161b22]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <TerminalIcon size={12} /> Output
          </span>
        </div>

        {/* Status Indicators */}
        {result && !isRunning && (
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-1.5 text-slate-400">
              <Clock size={12} /> {result.executionTime}
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
              <span className="text-slate-400">Mem:</span>
              <span className="text-slate-300">{result.memoryUsed}</span>
            </div>
            {result.status === 'success' ? (
              <div className="flex items-center gap-1.5 text-green-400 bg-green-400/10 px-2 py-0.5 rounded border border-green-400/20">
                <CheckCircle2 size={12} /> Success
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-red-400 bg-red-400/10 px-2 py-0.5 rounded border border-red-400/20">
                <AlertCircle size={12} /> Error
              </div>
            )}
            <button
              onClick={handleCopy}
              className="ml-2 text-slate-400 hover:text-white transition-colors"
              title="Copy output"
            >
              {copied ? <CheckCircle2 size={14} className="text-green-400" /> : <Copy size={14} />}
            </button>
          </div>
        )}
      </div>

      {/* Terminal Content */}
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar font-mono text-sm leading-relaxed">
        {isRunning ? (
          <div className="flex items-center gap-3 text-slate-400 animate-pulse">
            <div className="w-2 h-4 bg-indigo-500 animate-ping rounded-sm" />
            Executing code in sandbox...
          </div>
        ) : result ? (
          <>
            {result.stdout && (
              <pre className="text-slate-300 whitespace-pre-wrap font-mono">
                {result.stdout}
              </pre>
            )}
            {result.stderr && (
              <pre className="text-red-400 mt-2 whitespace-pre-wrap font-mono relative pr-4">
                <div className="absolute left-[-16px] top-1 w-1 h-full bg-red-500/50 rounded-r-md" />
                {result.stderr}
              </pre>
            )}
            {(!result.stdout && !result.stderr) && (
              <div className="text-slate-500 italic">Program finished with no output.</div>
            )}
            
            <div className="mt-4 flex items-center text-green-500/70 text-xs">
              <span className="mr-2">❯</span> Program exited.
            </div>
          </>
        ) : (
          <div className="flex flex-col h-full items-center justify-center text-slate-600">
            <TerminalIcon size={48} className="mb-4 opacity-20" />
            <p>Run your code to see the output here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
