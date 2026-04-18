'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { getTheme, saveTheme, getUser, getToken, saveUser, saveToken, clearAuth, UserData } from '@/lib/storage';

interface AppContextType {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  user: UserData | null;
  token: string | null;
  login: (user: UserData, token: string) => void;
  logout: () => void;
  isAuthModalOpen: boolean;
  authModalTab: 'login' | 'signup';
  openAuthModal: (tab?: 'login' | 'signup') => void;
  closeAuthModal: () => void;
  notification: Notification | null;
  showNotification: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

interface Notification {
  message: string;
  type: 'success' | 'error' | 'info';
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [user, setUser] = useState<UserData | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<'login' | 'signup'>('login');
  const [notification, setNotification] = useState<Notification | null>(null);

  useEffect(() => {
    const savedTheme = getTheme();
    setTheme(savedTheme);
    applyTheme(savedTheme);

    const savedUser = getUser();
    const savedToken = getToken();
    if (savedUser && savedToken) {
      setUser(savedUser);
      setToken(savedToken);
    }
  }, []);

  const applyTheme = (t: 'dark' | 'light') => {
    if (typeof document === 'undefined') return;
    document.documentElement.classList.toggle('dark', t === 'dark');
    document.documentElement.classList.toggle('light', t === 'light');
    document.body.classList.toggle('dark', t === 'dark');
  };

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    saveTheme(next);
    applyTheme(next);
  }, [theme]);

  const login = useCallback((userData: UserData, authToken: string) => {
    setUser(userData);
    setToken(authToken);
    saveUser(userData);
    saveToken(authToken);
    setIsAuthModalOpen(false);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    clearAuth();
  }, []);

  const openAuthModal = useCallback((tab: 'login' | 'signup' = 'login') => {
    setAuthModalTab(tab);
    setIsAuthModalOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const showNotification = useCallback((message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3500);
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        user,
        token,
        login,
        logout,
        isAuthModalOpen,
        authModalTab,
        openAuthModal,
        closeAuthModal,
        notification,
        showNotification,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
