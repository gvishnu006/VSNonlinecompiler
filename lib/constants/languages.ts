export interface Language {
  id: string;
  name: string;
  monacoId: string;
  judge0Id: number;
  extension: string;
  icon: string;
  color: string;
  category: string;
  helloWorld: string;
}

export const LANGUAGES: Language[] = [
  {
    id: 'c',
    name: 'C',
    monacoId: 'c',
    judge0Id: 50,
    extension: '.c',
    icon: '🔷',
    color: '#A8B9CC',
    category: 'Systems',
    helloWorld: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
  },
  {
    id: 'cpp',
    name: 'C++',
    monacoId: 'cpp',
    judge0Id: 54,
    extension: '.cpp',
    icon: '🔵',
    color: '#00599C',
    category: 'Systems',
    helloWorld: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
  },
  {
    id: 'java',
    name: 'Java',
    monacoId: 'java',
    judge0Id: 62,
    extension: '.java',
    icon: '☕',
    color: '#ED8B00',
    category: 'Enterprise',
    helloWorld: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
  },
  {
    id: 'python',
    name: 'Python',
    monacoId: 'python',
    judge0Id: 70,
    extension: '.py',
    icon: '🐍',
    color: '#3776AB',
    category: 'Scripting',
    helloWorld: `# Python Hello World
print("Hello, World!")`,
  },
  {
    id: 'python3',
    name: 'Python 3',
    monacoId: 'python',
    judge0Id: 71,
    extension: '.py',
    icon: '🐍',
    color: '#306998',
    category: 'Scripting',
    helloWorld: `# Python 3 Hello World
name = "World"
print(f"Hello, {name}!")`,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    monacoId: 'javascript',
    judge0Id: 63,
    extension: '.js',
    icon: '🟨',
    color: '#F7DF1E',
    category: 'Web',
    helloWorld: `// JavaScript Hello World
console.log("Hello, World!");

// Arrow function example
const greet = (name) => \`Hello, \${name}!\`;
console.log(greet("VSNProgramiz"));`,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    monacoId: 'typescript',
    judge0Id: 74,
    extension: '.ts',
    icon: '🔷',
    color: '#3178C6',
    category: 'Web',
    helloWorld: `// TypeScript Hello World
const greet = (name: string): string => {
    return \`Hello, \${name}!\`;
};

console.log(greet("World"));`,
  },
  {
    id: 'csharp',
    name: 'C#',
    monacoId: 'csharp',
    judge0Id: 51,
    extension: '.cs',
    icon: '💜',
    color: '#512BD4',
    category: 'Enterprise',
    helloWorld: `using System;

class Program {
    static void Main(string[] args) {
        Console.WriteLine("Hello, World!");
    }
}`,
  },
  {
    id: 'go',
    name: 'Go',
    monacoId: 'go',
    judge0Id: 60,
    extension: '.go',
    icon: '🐹',
    color: '#00ACD7',
    category: 'Systems',
    helloWorld: `package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    monacoId: 'kotlin',
    judge0Id: 78,
    extension: '.kt',
    icon: '🎯',
    color: '#7F52FF',
    category: 'Mobile',
    helloWorld: `fun main() {
    println("Hello, World!")
}`,
  },
  {
    id: 'swift',
    name: 'Swift',
    monacoId: 'swift',
    judge0Id: 83,
    extension: '.swift',
    icon: '🦅',
    color: '#FA7343',
    category: 'Mobile',
    helloWorld: `import Swift

print("Hello, World!")`,
  },
  {
    id: 'rust',
    name: 'Rust',
    monacoId: 'rust',
    judge0Id: 73,
    extension: '.rs',
    icon: '🦀',
    color: '#CE422B',
    category: 'Systems',
    helloWorld: `fn main() {
    println!("Hello, World!");
}`,
  },
  {
    id: 'ruby',
    name: 'Ruby',
    monacoId: 'ruby',
    judge0Id: 72,
    extension: '.rb',
    icon: '💎',
    color: '#CC342D',
    category: 'Scripting',
    helloWorld: `# Ruby Hello World
puts "Hello, World!"

# With interpolation
name = "VSNProgramiz"
puts "Welcome to #{name}!"`,
  },
  {
    id: 'php',
    name: 'PHP',
    monacoId: 'php',
    judge0Id: 68,
    extension: '.php',
    icon: '🐘',
    color: '#777BB4',
    category: 'Web',
    helloWorld: `<?php
echo "Hello, World!\\n";

$name = "VSNProgramiz";
echo "Welcome to $name!\\n";
?>`,
  },
  {
    id: 'dart',
    name: 'Dart',
    monacoId: 'dart',
    judge0Id: 90,
    extension: '.dart',
    icon: '🎯',
    color: '#0175C2',
    category: 'Mobile',
    helloWorld: `void main() {
  print('Hello, World!');
}`,
  },
  {
    id: 'scala',
    name: 'Scala',
    monacoId: 'scala',
    judge0Id: 81,
    extension: '.scala',
    icon: '🔴',
    color: '#DC322F',
    category: 'Functional',
    helloWorld: `object Main extends App {
  println("Hello, World!")
}`,
  },
  {
    id: 'elixir',
    name: 'Elixir',
    monacoId: 'elixir',
    judge0Id: 57,
    extension: '.ex',
    icon: '💜',
    color: '#4B275F',
    category: 'Functional',
    helloWorld: `IO.puts("Hello, World!")`,
  },
  {
    id: 'erlang',
    name: 'Erlang',
    monacoId: 'erlang',
    judge0Id: 58,
    extension: '.erl',
    icon: '📡',
    color: '#A90533',
    category: 'Functional',
    helloWorld: `-module(main).
-export([main/0]).

main() ->
    io:format("Hello, World!~n").`,
  },
  {
    id: 'racket',
    name: 'Racket',
    monacoId: 'scheme',
    judge0Id: 88,
    extension: '.rkt',
    icon: '🔵',
    color: '#3E5BA9',
    category: 'Functional',
    helloWorld: `#lang racket
(display "Hello, World!")
(newline)`,
  },
];

export const LANGUAGE_CATEGORIES = [
  'All',
  'Web',
  'Systems',
  'Enterprise',
  'Mobile',
  'Scripting',
  'Functional',
];

export const getLanguageById = (id: string): Language | undefined =>
  LANGUAGES.find((l) => l.id === id);

export const getLanguagesByCategory = (category: string): Language[] =>
  category === 'All' ? LANGUAGES : LANGUAGES.filter((l) => l.category === category);
