import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/lib/context/AppContext';
import Navbar from '@/components/navbar/Navbar';

export const metadata: Metadata = {
  title: 'VSNProgramiz - Online Compiler & Learning Platform',
  description: 'A multi-language code compiler, learning platform, and practice system.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col pt-[70px]">
        <AppProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
