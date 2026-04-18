'use client';

import { useState, useEffect } from 'react';
import LanguageSidebar from '@/components/sidebar/LanguageSidebar';
import CodeEditor from '@/components/editor/CodeEditor';
import EditorToolbar from '@/components/editor/EditorToolbar';
import OutputTerminal from '@/components/terminal/OutputTerminal';
import { getLanguageById, LANGUAGES } from '@/lib/constants/languages';
import { executeCode, ExecutionResult } from '@/lib/execution';
import { getEditorCodeForLanguage, saveEditorCode } from '@/lib/storage';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import dynamic from 'next/dynamic';

// Next.js SSR fix for Monaco
const ClientCodeEditor = dynamic(() => import('@/components/editor/CodeEditor'), { ssr: false });

export default function CompilerPage() {
  const [selectedLanguageId, setSelectedLanguageId] = useState<string>('javascript');
  const [code, setCode] = useState<string>('');
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState<ExecutionResult | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const language = getLanguageById(selectedLanguageId) || LANGUAGES[0];

  useEffect(() => {
    // Load saved code for this language or use default
    const saved = getEditorCodeForLanguage(selectedLanguageId);
    setCode(saved !== null ? saved : language.helloWorld);
    setResult(null); // Clear terminal when switching languages
  }, [selectedLanguageId, language.helloWorld]);

  const handleCodeChange = (newCode: string | undefined) => {
    const val = newCode || '';
    setCode(val);
    saveEditorCode(selectedLanguageId, val); // Auto-save to localStorage
  };

  const handleRun = async () => {
    setIsRunning(true);
    setResult(null);
    try {
      const execResult = await executeCode(code, language.id);
      setResult(execResult);
    } catch (e) {
      setResult({
        stdout: '',
        stderr: 'Network Error: Failed to execute code.',
        status: 'error',
        executionTime: '0.00s',
        memoryUsed: '0 MB'
      });
    } finally {
      setIsRunning(false);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
    setResult({
      stdout: '',
      stderr: 'Execution stopped by user.',
      status: 'error',
      executionTime: '0.00s',
      memoryUsed: '0 MB'
    });
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset to default Hello World? You will lose your current code.')) {
      setCode(language.helloWorld);
      saveEditorCode(selectedLanguageId, language.helloWorld);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `main${language.extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSave = () => {
    // Save to projects logic (in next phase)
    alert('Saving to your account will be available once authentication is hooked up!');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch (e) {
      console.error('Failed to copy', e);
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      const newCode = code + (code ? '\n' : '') + text;
      setCode(newCode);
      saveEditorCode(selectedLanguageId, newCode);
    } catch (e) {
      alert("Clipboard access denied. Please allow clipboard permissions or paste manually via Ctrl+V.");
    }
  };

  return (
    <div className="flex-1 flex overflow-hidden bg-slate-900 border-t border-slate-800 relative">
      
      {/* Mobile Sidebar Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden absolute top-3 z-50 left-4 bg-slate-800 p-2 rounded-md"
      >
        {isSidebarOpen ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
      </button>

      {/* Sidebar */}
      <div className={`
        absolute md:relative z-40 h-full transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0 md:w-0 md:hidden'}
      `}>
        <LanguageSidebar 
          selectedLanguage={selectedLanguageId} 
          onSelectLanguage={(id) => {
            setSelectedLanguageId(id);
            if (window.innerWidth < 768) setIsSidebarOpen(false); // Close on mobile after selection
          }} 
        />
      </div>

      {/* Main Workspace */}
      <div className="flex-1 flex flex-col md:flex-row min-w-0">
        
        {/* Editor Area */}
        <div className="flex-1 flex flex-col min-w-0 md:w-2/3 h-full border-r border-slate-800">
          <EditorToolbar 
            language={language}
            isRunning={isRunning}
            onRun={handleRun}
            onStop={handleStop}
            onReset={handleReset}
            onDownload={handleDownload}
            onSave={handleSave}
            onCopy={handleCopy}
            onPaste={handlePaste}
          />
          <div className="flex-1 relative">
            <ClientCodeEditor 
              code={code} 
              onChange={handleCodeChange} 
              language={language.monacoId} 
            />
          </div>
        </div>

        {/* Terminal Area */}
        <div className="h-64 md:h-full md:w-1/3 flex flex-col min-w-0 shadow-[-10px_0_20px_rgba(0,0,0,0.2)] z-10">
          <OutputTerminal 
            result={result} 
            isRunning={isRunning} 
          />
        </div>

      </div>
    </div>
  );
}
