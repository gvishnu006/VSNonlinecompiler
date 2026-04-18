// Mock code execution engine
// Simulates real sandboxed output for all supported languages

export interface ExecutionResult {
  stdout: string;
  stderr: string;
  status: 'success' | 'error' | 'timeout' | 'running';
  executionTime: string;
  memoryUsed: string;
}

const HELLO_WORLD_OUTPUTS: Record<string, string> = {
  c: 'Hello, World!',
  cpp: 'Hello, World!\n',
  java: 'Hello, World!\n',
  python: 'Hello, World!\n',
  python3: 'Hello, World!\n',
  javascript: 'Hello, World!\nHello, VSNProgramiz!',
  typescript: 'Hello, World!',
  csharp: 'Hello, World!\n',
  go: 'Hello, World!\n',
  kotlin: 'Hello, World!\n',
  swift: 'Hello, World!\n',
  rust: 'Hello, World!\n',
  ruby: 'Hello, World!\nWelcome to VSNProgramiz!\n',
  php: 'Hello, World!\nWelcome to VSNProgramiz!\n',
  dart: 'Hello, World!\n',
  scala: 'Hello, World!\n',
  elixir: 'Hello, World!\n',
  erlang: 'Hello, World!\n',
  racket: 'Hello, World!\n',
};

function detectHelloWorld(code: string): boolean {
  const patterns = [
    /print.*[Hh]ello/i,
    /println.*[Hh]ello/i,
    /console\.log.*[Hh]ello/i,
    /printf.*[Hh]ello/i,
    /puts.*[Hh]ello/i,
    /echo.*[Hh]ello/i,
    /io:format.*[Hh]ello/i,
    /display.*[Hh]ello/i,
    /IO\.puts.*[Hh]ello/i,
    /fmt\.Println.*[Hh]ello/i,
    /println!.*[Hh]ello/i,
    /Console\.WriteLine.*[Hh]ello/i,
  ];
  return patterns.some((p) => p.test(code));
}

function simulatePythonOutput(code: string): ExecutionResult {
  try {
    const printResults: string[] = [];

    // Basic print simulation
    const printMatches = code.matchAll(/print\s*\(([^)]+)\)/g);
    for (const match of Array.from(printMatches)) {
      let content = match[1].trim();
      // Handle f-strings
      content = content.replace(/f["'](.+?)["']/g, (_, inner) => {
        return inner.replace(/\{([^}]+)\}/g, '$1');
      });
      // Remove quotes
      content = content.replace(/^["'](.*)["']$/, '$1');
      if (content.includes('+')) {
        content = content.split('+').map(s => s.trim().replace(/^["'](.*)["']$/, '$1')).join('');
      }
      printResults.push(content);
    }

    if (printResults.length > 0) {
      return {
        stdout: printResults.join('\n') + '\n',
        stderr: '',
        status: 'success',
        executionTime: `${(Math.random() * 0.3 + 0.08).toFixed(3)}s`,
        memoryUsed: `${Math.floor(Math.random() * 5 + 8)} MB`,
      };
    }
  } catch {}

  return {
    stdout: '',
    stderr: 'NameError: name is not defined\n  File "<stdin>", line 1',
    status: 'error',
    executionTime: '0.050s',
    memoryUsed: '6 MB',
  };
}

function simulateJavaScriptOutput(code: string): ExecutionResult {
  const logs: string[] = [];
  const logMatches = code.matchAll(/console\.log\s*\(([^)]+)\)/g);
  for (const match of Array.from(logMatches)) {
    let content = match[1].trim();
    content = content.replace(/`(.+?)`/g, (_, inner) => inner.replace(/\$\{[^}]+\}/g, '<value>'));
    content = content.replace(/^["'`](.*)["'`]$/, '$1');
    logs.push(content);
  }

  if (logs.length > 0) {
    return {
      stdout: logs.join('\n') + '\n',
      stderr: '',
      status: 'success',
      executionTime: `${(Math.random() * 0.1 + 0.02).toFixed(3)}s`,
      memoryUsed: `${Math.floor(Math.random() * 10 + 20)} MB`,
    };
  }

  return {
    stdout: 'undefined\n',
    stderr: '',
    status: 'success',
    executionTime: '0.020s',
    memoryUsed: '22 MB',
  };
}

function getCompileError(languageId: string): ExecutionResult {
  const errors: Record<string, string> = {
    c: 'gcc: error: compilation failed\nerror: expected \';\' before \'}\' token',
    cpp: 'g++: error: compilation failed\nerror: expected \';\' before \'}\' token',
    java: 'error: \';\' expected\n    System.out.println("Hello")\n                                ^\n1 error',
    python3: 'SyntaxError: invalid syntax\n  File "<stdin>", line 1\nIndentationError: expected an indented block',
    javascript: 'SyntaxError: Unexpected token\n    at new Script (vm.js:79:7)',
    rust: 'error[E0425]: cannot find value in this scope\n --> src/main.rs:2:5\n  |2 |     undefined_fn();\n  |     ^^^^^^^^^^^^ not found in this scope',
    go: './main.go:5:2: undefined: undefinedFunc',
    default: 'CompilationError: Syntax error in your code.\nPlease check your code for missing brackets or semicolons.',
  };

  return {
    stdout: '',
    stderr: errors[languageId] || errors.default,
    status: 'error',
    executionTime: '0.000s',
    memoryUsed: '0 MB',
  };
}

function getSpecificError(code: string, languageId: string): ExecutionResult | null {
  const lines = code.split('\n');
  
  if (['c', 'cpp', 'java'].includes(languageId)) {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      // Heuristic for missing semicolon
      if (line && !line.endsWith(';') && !line.endsWith('{') && !line.endsWith('}') && !line.startsWith('//') && !line.startsWith('#') && !line.includes('include') && !line.includes('import')) {
        return {
          stdout: '',
          stderr: `error on line ${i + 1}: expected ';'\n\n  ${i + 1} | ${lines[i]}\n    | ${' '.repeat(lines[i].length)}^`,
          status: 'error',
          executionTime: '0.010s',
          memoryUsed: '8 MB'
        };
      }
    }
  }

  if (['javascript', 'typescript'].includes(languageId)) {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if ((line.match(/^(const|let|var)\s+[a-zA-Z0-9_]+\s*$/) || line.includes('=+'))) {
        return {
          stdout: '',
          stderr: `SyntaxError on line ${i + 1}: Unexpected token\n\n  ${i + 1} | ${lines[i]}\n    | ${' '.repeat(lines[i].length)}^`,
          status: 'error',
          executionTime: '0.010s',
          memoryUsed: '22 MB'
        };
      }
    }
  }

  if (['python', 'python3'].includes(languageId)) {
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.match(/^(if|for|while|def|class)\s+.*[^:]$/)) {
          return {
            stdout: '',
            stderr: `SyntaxError on line ${i + 1}: expected ':'\n\n  File "<stdin>", line ${i + 1}\n    ${lines[i]}\n    ${' '.repeat(lines[i].length)}^`,
            status: 'error',
            executionTime: '0.010s',
            memoryUsed: '6 MB'
          };
        }
    }
  }

  return null;
}

export async function executeCode(
  code: string,
  languageId: string,
  stdin: string = ''
): Promise<ExecutionResult> {
  // Simulate network/execution delay
  await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 1200));

  // Check for obviously broken code (very short or clearly invalid)
  if (code.trim().length < 3) {
    return getCompileError(languageId);
  }

  // Check for specific line errors via parsing heuristics
  const specificError = getSpecificError(code, languageId);
  if (specificError) {
    return specificError;
  }

  // Hello World detection - return perfect output
  if (detectHelloWorld(code)) {
    const output = HELLO_WORLD_OUTPUTS[languageId] || 'Hello, World!\n';
    return {
      stdout: output,
      stderr: '',
      status: 'success',
      executionTime: `${(Math.random() * 0.5 + 0.1).toFixed(3)}s`,
      memoryUsed: `${Math.floor(Math.random() * 20 + 10)} MB`,
    };
  }

  // Language-specific simulation
  if (languageId === 'python3' || languageId === 'python') {
    return simulatePythonOutput(code);
  }

  if (languageId === 'javascript' || languageId === 'typescript') {
    return simulateJavaScriptOutput(code);
  }

  // If no known syntax patterns are matched, be strict and reject the code as invalid syntax.
  return getCompileError(languageId);
}
