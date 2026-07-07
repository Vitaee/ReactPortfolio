import { useState, useEffect, useCallback } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Stats } from '@/components/Stats';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Languages } from './components/Languages';
import { Recommendations } from './components/Recommendations';
import { Contact } from './components/Contact';
import { Terminal } from './components/Terminal';
import { ParticleField } from './components/ParticleField';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const handleCloseTerminal = useCallback(() => {
    setIsTerminalOpen(false);
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // Open terminal on backtick/tilde key, but not when typing in an input
      if (
        e.key === '`' &&
        !isTerminalOpen &&
        !(e.target instanceof HTMLInputElement) &&
        !(e.target instanceof HTMLTextAreaElement)
      ) {
        e.preventDefault();
        setIsTerminalOpen(true);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isTerminalOpen]);

  return (
    <TooltipProvider>
      <div className="min-h-screen text-white">
        {/* Full-page constellation background */}
        <ParticleField />

        <Navigation />
        <main id="main-content" className="relative z-10 container mx-auto px-4 py-8">
          <Hero />
          <Stats />
          <div className="section-divider" />
          <Experience />
          <div className="section-divider" />
          <Education />
          <div className="section-divider" />
          <Skills />
          <div className="section-divider" />
          <Projects />
          <div className="section-divider" />
          <Languages />
          <div className="section-divider" />
          <Recommendations />
          <div className="section-divider" />
          <Contact />
        </main>

        <Separator className="bg-white/5" />
        <footer className="relative z-10 bg-transparent py-6">
          <div className="container mx-auto px-4 text-center text-zinc-600">
            <p>© {new Date().getFullYear()} All rights reserved</p>
            <p
              className="mt-2 text-xs text-zinc-700"
              style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
            >
              Press ` to open terminal
            </p>
          </div>
        </footer>

        <Terminal isOpen={isTerminalOpen} onClose={handleCloseTerminal} />
      </div>
    </TooltipProvider>
  );
}

export default App;