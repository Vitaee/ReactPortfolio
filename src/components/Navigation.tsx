import { useState, useEffect } from 'react';
import { Menu, Terminal as TerminalIcon, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

interface NavigationProps {
  onOpenCommandMenu: () => void;
  onOpenTerminal: () => void;
}

const navLinks = [
  { href: '#systems', label: 'Systems & Architecture' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Capabilities' },
  { href: '#recommendations', label: 'References' },
  { href: '#contact', label: 'Contact' },
];

export function Navigation({ onOpenCommandMenu, onOpenTerminal }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('systems');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-200',
        isScrolled
          ? 'bg-[#09090b]/85 backdrop-blur-md border-b border-white/[0.08] py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="flex items-center gap-2 text-base font-mono text-zinc-100 hover:text-green-400 transition-colors tracking-tight font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>can.ilgu</span>
            <span className="text-zinc-600 text-xs">/ sys</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <Button
                  key={link.href}
                  variant="ghost"
                  size="sm"
                  asChild
                  className={cn(
                    'text-zinc-400 hover:text-zinc-50 hover:bg-white/[0.05] text-xs font-medium tracking-tight px-3 transition-colors relative',
                    isActive && 'text-zinc-100 bg-white/[0.04]'
                  )}
                >
                  <a href={link.href}>{link.label}</a>
                </Button>
              );
            })}
          </nav>

          {/* Actions: Command Menu & Terminal Trigger */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenCommandMenu}
              className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-mono text-zinc-300 bg-white/[0.04] border border-white/[0.08] hover:border-green-500/40 hover:bg-white/[0.08] transition-all cursor-pointer shadow-sm active:scale-[0.98]"
              aria-label="Open Command Palette"
            >
              <Search className="w-3.5 h-3.5 text-zinc-400" />
              <span className="hidden sm:inline text-zinc-300">Command</span>
              <kbd className="px-1.5 py-0.5 rounded text-[10px] bg-white/[0.08] border border-white/[0.1] text-zinc-400">
                ⌘K
              </kbd>
            </button>

            <button
              type="button"
              onClick={onOpenTerminal}
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-zinc-400 hover:text-green-400 bg-white/[0.04] border border-white/[0.08] hover:border-green-500/30 transition-all cursor-pointer"
              aria-label="Open Interactive Terminal"
              title="Open Terminal (`)"
            >
              <TerminalIcon className="w-4 h-4" />
            </button>

            {/* Mobile Nav Toggle */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-zinc-400 hover:text-zinc-50 h-8 w-8"
                  aria-label="Open navigation drawer"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-[#121215] border-l border-white/[0.08] p-6">
                <SheetHeader className="mb-6">
                  <SheetTitle className="text-left text-sm font-mono text-green-400">
                    &lt;navigation /&gt;
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      onOpenCommandMenu();
                    }}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-zinc-300"
                  >
                    <span className="flex items-center gap-2">
                      <Search className="w-3.5 h-3.5 text-zinc-400" />
                      Command Palette
                    </span>
                    <span className="font-mono text-zinc-500 text-[10px]">⌘K</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      onOpenTerminal();
                    }}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-zinc-300"
                  >
                    <span className="flex items-center gap-2">
                      <TerminalIcon className="w-3.5 h-3.5 text-green-400" />
                      Hacker Terminal
                    </span>
                    <span className="font-mono text-zinc-500 text-[10px]">`</span>
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Reading Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-[2px] z-50 transition-[width] duration-100 ease-out bg-green-500"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page reading progress"
      />
    </header>
  );
}
