'use client';

import Editor from '@monaco-editor/react';
import { useApp } from '@/lib/context/AppContext';

interface CodeEditorProps {
  code: string;
  onChange: (value: string | undefined) => void;
  language: string; // monacoId
}

export default function CodeEditor({ code, onChange, language }: CodeEditorProps) {
  const { theme } = useApp();

  return (
    <div className="flex-1 w-full h-full relative">
      <Editor
        height="100%"
        width="100%"
        language={language}
        value={code}
        onChange={onChange}
        theme={theme === 'dark' ? 'vs-dark' : 'light'}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          lineHeight: 24,
          padding: { top: 16, bottom: 16 },
          scrollBeyondLastLine: false,
          smoothScrolling: true,
          cursorBlinking: 'smooth',
          cursorSmoothCaretAnimation: 'on',
          formatOnPaste: true,
          renderLineHighlight: 'all',
          renderWhitespace: 'none',
          wordWrap: 'on',
        }}
        loading={
          <div className="w-full h-full flex items-center justify-center bg-[#1e1e1e] text-slate-400">
            <div className="flex flex-col items-center gap-4">
              <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
              <span>Loading Monaco Editor...</span>
            </div>
          </div>
        }
      />
    </div>
  );
}
