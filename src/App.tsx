import { useState, useEffect, useCallback } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { BentoShowcase } from './components/BentoShowcase';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Recommendations } from './components/Recommendations';
import { Contact } from './components/Contact';
import { Terminal } from './components/Terminal';
import { CommandMenu } from './components/CommandMenu';
import { ParticleField } from './components/ParticleField';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';

function App() {
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);
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
      <div className="min-h-screen text-white bg-[#09090b]">
        {/* Ambient Subtle Particle Constellation */}
        <ParticleField />

        {/* Global Navigation with Command Menu Trigger */}
        <Navigation
          onOpenCommandMenu={() => setIsCommandMenuOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        <main id="main-content" className="relative z-10 container mx-auto px-4 max-w-6xl">
          <Hero
            onOpenCommandMenu={() => setIsCommandMenuOpen(true)}
            onOpenTerminal={() => setIsTerminalOpen(true)}
          />
          <Stats />
          <div className="section-divider my-10" />
          <BentoShowcase />
          <div className="section-divider my-10" />
          <Experience />
          <div className="section-divider my-10" />
          <Skills />
          <div className="section-divider my-10" />
          <Education />
          <div className="section-divider my-10" />
          <Recommendations />
          <div className="section-divider my-10" />
          <Contact />
        </main>

        <Separator className="bg-white/5" />
        <footer className="relative z-10 bg-transparent py-8">
          <div className="container mx-auto px-4 text-center text-zinc-500 max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs font-mono">
              © {new Date().getFullYear()} Can İlgu. Built with React &amp; TypeScript.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
              <button
                type="button"
                onClick={() => setIsCommandMenuOpen(true)}
                className="hover:text-green-400 transition-colors cursor-pointer"
              >
                Press <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[10px]">⌘K</kbd> for menu
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => setIsTerminalOpen(true)}
                className="hover:text-green-400 transition-colors cursor-pointer"
              >
                Press <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[10px]">`</kbd> for terminal
              </button>
            </div>
          </div>
        </footer>

        {/* Global Command Palette */}
        <CommandMenu
          open={isCommandMenuOpen}
          setOpen={setIsCommandMenuOpen}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        {/* Interactive Hacker Terminal */}
        <Terminal isOpen={isTerminalOpen} onClose={handleCloseTerminal} />
      </div>
    </TooltipProvider>
  );
}

export default App;
