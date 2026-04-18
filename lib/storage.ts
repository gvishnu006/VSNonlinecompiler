'use client';

export interface SavedProject {
  id: string;
  name: string;
  languageId: string;
  code: string;
  createdAt: string;
  updatedAt: string;
  description?: string;
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: string;
}

const STORAGE_KEYS = {
  USER: 'vsnprogramizz_user',
  TOKEN: 'vsnprogramizz_token',
  PROJECTS: 'vsnprogramizz_projects',
  RECENT_LANGS: 'vsnprogramizz_recent_langs',
  EDITOR_CODE: 'vsnprogramizz_editor_code',
  THEME: 'vsnprogramizz_theme',
} as const;

// User
export const saveUser = (user: UserData): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
};

export const getUser = (): UserData | null => {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem(STORAGE_KEYS.USER);
  return raw ? JSON.parse(raw) : null;
};

export const saveToken = (token: string): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.TOKEN, token);
};

export const getToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(STORAGE_KEYS.TOKEN);
};

export const clearAuth = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEYS.USER);
  localStorage.removeItem(STORAGE_KEYS.TOKEN);
};

// Projects
export const getProjects = (): SavedProject[] => {
  if (typeof window === 'undefined') return [];
  const raw = localStorage.getItem(STORAGE_KEYS.PROJECTS);
  return raw ? JSON.parse(raw) : [];
};

export const saveProject = (project: SavedProject): void => {
  if (typeof window === 'undefined') return;
  const projects = getProjects();
  const idx = projects.findIndex((p) => p.id === project.id);
  if (idx >= 0) {
    projects[idx] = { ...project, updatedAt: new Date().toISOString() };
  } else {
    projects.unshift(project);
  }
  localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
};

export const deleteProject = (id: string): void => {
  if (typeof window === 'undefined') return;
  const projects = getProjects().filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
};

export const createProject = (
  name: string,
  languageId: string,
  code: string,
  description?: string
): SavedProject => {
  const project: SavedProject = {
    id: `proj_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    name,
    languageId,
    code,
    description,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  saveProject(project);
  return project;
};

// Recent Languages
export const getRecentLanguages = (): string[] => {
  if (typeof window === 'undefined') return [];
  const raw = localStorage.getItem(STORAGE_KEYS.RECENT_LANGS);
  return raw ? JSON.parse(raw) : [];
};

export const addRecentLanguage = (languageId: string): void => {
  if (typeof window === 'undefined') return;
  const recent = getRecentLanguages().filter((id) => id !== languageId);
  recent.unshift(languageId);
  localStorage.setItem(STORAGE_KEYS.RECENT_LANGS, JSON.stringify(recent.slice(0, 5)));
};

// Editor auto-save
export const saveEditorCode = (languageId: string, code: string): void => {
  if (typeof window === 'undefined') return;
  const all = getEditorCode();
  all[languageId] = code;
  localStorage.setItem(STORAGE_KEYS.EDITOR_CODE, JSON.stringify(all));
};

export const getEditorCode = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};
  const raw = localStorage.getItem(STORAGE_KEYS.EDITOR_CODE);
  return raw ? JSON.parse(raw) : {};
};

export const getEditorCodeForLanguage = (languageId: string): string | null => {
  return getEditorCode()[languageId] || null;
};

// Theme
export const saveTheme = (theme: 'dark' | 'light'): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.THEME, theme);
};

export const getTheme = (): 'dark' | 'light' => {
  if (typeof window === 'undefined') return 'dark';
  return (localStorage.getItem(STORAGE_KEYS.THEME) as 'dark' | 'light') || 'dark';
};
