import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#languages', label: 'Languages' },
  { href: '#recommendations', label: 'Recommendations' },
  { href: '#contact', label: 'Contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress percentage
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver
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
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled
          ? 'backdrop-blur-xl bg-black/60 border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-mono text-green-500 tracking-tight hover:text-green-400 transition-colors">
            &lt;can.dev /&gt;
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <Button
                  key={link.href}
                  variant="ghost"
                  asChild
                  className={cn(
                    'text-zinc-400 hover:text-zinc-50 hover:bg-white/5 transition-colors relative',
                    isActive &&
                      'text-green-400 after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-green-400 after:rounded-full'
                  )}
                >
                  <a href={link.href}>{link.label}</a>
                </Button>
              );
            })}
          </div>

          {/* Mobile nav */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-zinc-400 hover:text-zinc-50 hover:bg-white/5"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-zinc-950 border-white/5">
              <SheetHeader>
                <SheetTitle className="text-zinc-50 font-mono text-green-500">
                  &lt;nav /&gt;
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 mt-6">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <Button
                      key={link.href}
                      variant="ghost"
                      asChild
                      className={cn(
                        'w-full justify-start text-zinc-400 hover:text-zinc-50 hover:bg-white/5',
                        isActive && 'text-green-400 bg-green-500/5'
                      )}
                      onClick={() => setOpen(false)}
                    >
                      <a href={link.href}>{link.label}</a>
                    </Button>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Scroll progress indicator */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[60] transition-[width] duration-150 ease-out"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #22c55e, #4ade80)',
          boxShadow: scrollProgress > 0 ? '0 0 8px rgba(34, 197, 94, 0.5)' : 'none',
        }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />
    </nav>
  );
}