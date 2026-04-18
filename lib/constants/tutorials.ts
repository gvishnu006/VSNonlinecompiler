export interface Tutorial {
  id: string;
  languageId: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  youtubeId: string;
  chapters: Chapter[];
  tags: string[];
}

export interface Chapter {
  title: string;
  topics: string[];
}

export const TUTORIALS: Tutorial[] = [
  {
    id: 'python-basics',
    languageId: 'python3',
    title: 'Python for Beginners - Complete Course',
    description: 'Learn Python from scratch. Master variables, loops, functions, and OOP.',
    level: 'Beginner',
    duration: '4h 20m',
    youtubeId: 'rfscVS0vtbw',
    chapters: [
      { title: 'Getting Started', topics: ['Installation', 'Variables', 'Data Types', 'Print'] },
      { title: 'Control Flow', topics: ['If/Else', 'Loops', 'While', 'Break/Continue'] },
      { title: 'Functions', topics: ['Defining Functions', 'Parameters', 'Return Values', 'Lambda'] },
      { title: 'Data Structures', topics: ['Lists', 'Tuples', 'Dictionaries', 'Sets'] },
      { title: 'OOP Basics', topics: ['Classes', 'Objects', 'Inheritance', 'Encapsulation'] },
    ],
    tags: ['python', 'beginner', 'programming'],
  },
  {
    id: 'javascript-basics',
    languageId: 'javascript',
    title: 'JavaScript Full Course - Learn JS',
    description: 'Complete JavaScript tutorial from zero. DOM, ES6+, async/await and more.',
    level: 'Beginner',
    duration: '8h 15m',
    youtubeId: 'PkZNo7MFNFg',
    chapters: [
      { title: 'JS Fundamentals', topics: ['Variables', 'Data Types', 'Operators', 'Strings'] },
      { title: 'Control Flow', topics: ['Conditionals', 'Loops', 'Switch', 'Ternary'] },
      { title: 'Functions & Scope', topics: ['Functions', 'Arrow Functions', 'Closures', 'Scope'] },
      { title: 'Arrays & Objects', topics: ['Array Methods', 'Object Methods', 'Destructuring', 'Spread'] },
      { title: 'Async JS', topics: ['Callbacks', 'Promises', 'Async/Await', 'Fetch API'] },
    ],
    tags: ['javascript', 'web', 'beginner'],
  },
  {
    id: 'java-basics',
    languageId: 'java',
    title: 'Java Programming for Beginners',
    description: 'Master Java from basics to OOP. Build real projects with Java.',
    level: 'Beginner',
    duration: '9h 40m',
    youtubeId: 'eIrMbAQSU34',
    chapters: [
      { title: 'Java Basics', topics: ['Setup', 'Variables', 'Data Types', 'Operators'] },
      { title: 'OOP in Java', topics: ['Classes', 'Objects', 'Inheritance', 'Polymorphism'] },
      { title: 'Collections', topics: ['ArrayList', 'HashMap', 'LinkedList', 'Iterators'] },
      { title: 'Exception Handling', topics: ['Try/Catch', 'Throws', 'Custom Exceptions'] },
    ],
    tags: ['java', 'oop', 'enterprise'],
  },
  {
    id: 'cpp-basics',
    languageId: 'cpp',
    title: 'C++ Programming Complete Course',
    description: 'Learn modern C++. Pointers, memory management, STL, and more.',
    level: 'Intermediate',
    duration: '6h 00m',
    youtubeId: 'vLnPwxZdW4Y',
    chapters: [
      { title: 'C++ Basics', topics: ['Syntax', 'Variables', 'I/O', 'Operators'] },
      { title: 'Pointers & Memory', topics: ['Pointers', 'References', 'Dynamic Memory', 'Smart Pointers'] },
      { title: 'OOP in C++', topics: ['Classes', 'Constructors', 'Inheritance', 'Virtual Functions'] },
      { title: 'STL', topics: ['Vectors', 'Maps', 'Algorithms', 'Iterators'] },
    ],
    tags: ['cpp', 'systems', 'intermediate'],
  },
  {
    id: 'c-basics',
    languageId: 'c',
    title: 'C Programming Language Course',
    description: 'Learn C from fundamentals. Understand memory, pointers, and system programming.',
    level: 'Beginner',
    duration: '3h 46m',
    youtubeId: 'KJgsSFOSQv0',
    chapters: [
      { title: 'C Basics', topics: ['Compilation', 'Variables', 'Data Types', 'printf/scanf'] },
      { title: 'Control Flow', topics: ['If/else', 'Loops', 'Switch', 'Goto'] },
      { title: 'Functions & Arrays', topics: ['Functions', 'Arrays', 'Strings', 'Pointers'] },
      { title: 'Structures', topics: ['Structs', 'Unions', 'File I/O', 'Dynamic Memory'] },
    ],
    tags: ['c', 'systems', 'beginner'],
  },
  {
    id: 'typescript-basics',
    languageId: 'typescript',
    title: 'TypeScript Full Course for Beginners',
    description: 'Learn TypeScript from scratch. Types, interfaces, generics, decorators.',
    level: 'Intermediate',
    duration: '1h 38m',
    youtubeId: 'SpwzRDXQ3po',
    chapters: [
      { title: 'TS Setup', topics: ['Installation', 'tsconfig', 'Basic Types', 'Type Inference'] },
      { title: 'Advanced Types', topics: ['Interfaces', 'Enums', 'Generics', 'Union Types'] },
      { title: 'OOP in TS', topics: ['Classes', 'Access Modifiers', 'Abstract Classes', 'Decorators'] },
    ],
    tags: ['typescript', 'web', 'intermediate'],
  },
  {
    id: 'rust-basics',
    languageId: 'rust',
    title: 'Rust Programming Language Tutorial',
    description: 'Learn Rust — the systems language focused on safety and performance.',
    level: 'Advanced',
    duration: '5h 37m',
    youtubeId: 'ygL_xcavzQ4',
    chapters: [
      { title: 'Rust Basics', topics: ['Ownership', 'Borrowing', 'Lifetimes', 'Variables'] },
      { title: 'Structs & Enums', topics: ['Structs', 'Enums', 'Pattern Matching', 'Option/Result'] },
      { title: 'Concurrency', topics: ['Threads', 'Channels', 'Arc/Mutex', 'Async'] },
    ],
    tags: ['rust', 'systems', 'advanced'],
  },
  {
    id: 'go-basics',
    languageId: 'go',
    title: 'Go Programming Language Course',
    description: 'Learn Go - build fast, reliable, and efficient software.',
    level: 'Intermediate',
    duration: '3h 24m',
    youtubeId: 'YS4e4q9oBaU',
    chapters: [
      { title: 'Go Basics', topics: ['Setup', 'Variables', 'Types', 'fmt'] },
      { title: 'Concurrency', topics: ['Goroutines', 'Channels', 'Select', 'WaitGroups'] },
      { title: 'Packages', topics: ['Modules', 'Imports', 'Standard Library', 'HTTP'] },
    ],
    tags: ['go', 'backend', 'intermediate'],
  },
  {
    id: 'kotlin-basics',
    languageId: 'kotlin',
    title: 'Kotlin for Android Development',
    description: 'Master Kotlin for Android. From basics to Coroutines and Jetpack.',
    level: 'Intermediate',
    duration: '2h 10m',
    youtubeId: 'F9UC9DY-vIU',
    chapters: [
      { title: 'Kotlin Basics', topics: ['Variables', 'Null Safety', 'Functions', 'Lambdas'] },
      { title: 'OOP Kotlin', topics: ['Data Classes', 'Sealed Classes', 'Interfaces', 'Extensions'] },
      { title: 'Coroutines', topics: ['Suspend Functions', 'CoroutineScope', 'Flow', 'StateFlow'] },
    ],
    tags: ['kotlin', 'android', 'intermediate'],
  },
  {
    id: 'ruby-basics',
    languageId: 'ruby',
    title: 'Ruby Programming Tutorial',
    description: 'Learn Ruby — the elegant scripting language. Build with Rails.',
    level: 'Beginner',
    duration: '4h 02m',
    youtubeId: 't_ispmWmdjY',
    chapters: [
      { title: 'Ruby Basics', topics: ['Variables', 'Strings', 'Arrays', 'Hashes'] },
      { title: 'OOP Ruby', topics: ['Classes', 'Modules', 'Mixins', 'Blocks'] },
      { title: 'Rails Intro', topics: ['MVC', 'Routes', 'Models', 'Views'] },
    ],
    tags: ['ruby', 'rails', 'scripting'],
  },
];

export const getTutorialsByLanguage = (languageId: string): Tutorial[] =>
  TUTORIALS.filter((t) => t.languageId === languageId);

export const getTutorialById = (id: string): Tutorial | undefined =>
  TUTORIALS.find((t) => t.id === id);
