import { useState, useRef, useEffect, useCallback, type KeyboardEvent } from 'react';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TerminalLine {
  id: number;
  type: 'input' | 'output';
  content: string;
}

const WELCOME_MESSAGE =
  "Welcome to Can's terminal! Type 'help' to get started.";

function processCommand(cmd: string): string[] {
  const trimmed = cmd.trim().toLowerCase();

  switch (trimmed) {
    case 'help':
      return [
        '  Available commands:',
        '  ─────────────────────────────────',
        '  help         Show this help menu',
        '  about        Who am I?',
        '  skills       My top skills',
        '  experience   Work history',
        '  education    Degrees & certs',
        '  contact      How to reach me',
        '  projects     Featured projects',
        '  coffee       Brew a virtual coffee',
        '  hire-me      Let\'s work together',
        '  secret       👀',
        '  clear        Clear the terminal',
        '  exit         Close the terminal',
      ];

    case 'about':
      return [
        '  Can İlgu — Senior Full Stack & Systems Engineer',
        '  Currently architecting distributed logistics & K8s pipelines @ ARQH (Zurich).',
        '  Author of fastapi-observer (PyPI).',
        '  Background in safety-critical automotive instrument clusters & CARLA DL.',
      ];

    case 'skills':
      return [
        '  Architecture : CQRS, Hexagonal (Ports & Adapters), TDD, DDD, Microservices',
        '  Languages    : Python (FastAPI, Django), TypeScript (Next.js, Hono.js), Bun CLI, C++, SQL',
        '  Data & Queues: Kubernetes, Redis Pub/Sub, MongoDB (Mongo Compass), PostgreSQL',
        '  Standards    : AUTOSAR, MISRA Guidelines, Multi-Env (Dev/Stg/Prod), Docker',
      ];

    case 'experience':
      return [
        '  ┌──────────────────────────────────────────────────────────────────┐',
        '  │ ARQH (Zurich)       Sr. Full Stack & Systems Engineer  2026–now  │',
        '  │ GenfoQuest (Izmir)  Full Stack Engineer               2025–2026 │',
        '  │ Vodafone Cyprus     Invoice & Software Specialist      2023–2025 │',
        '  │ Günsel EV (Cyprus)  Software Engineer (DIC/AUTOSAR)    2021–2023 │',
        '  │ Global Contractor   Serverless, ML DevOps, Trade Govt  2022–2024 │',
        '  │ Early Career        Scraping, OAuth2, Mobile APIs      2020–2022 │',
        '  └──────────────────────────────────────────────────────────────────┘',
      ];

    case 'education':
      return [
        '  🎓 Eastern Mediterranean University — MTech Information Technology (Thesis: CARLA)',
        '  🎓 Near East University — BSc. Software Engineering',
      ];

    case 'contact':
      return [
        '  📧 Email    canilguu@gmail.com',
        '  🔗 LinkedIn linkedin.com/in/can-ilgu-657730198',
        '  🐙 GitHub   github.com/Vitaee',
      ];

    case 'projects':
      return [
        '  📦 fastapi-observer — Open-source PyPI monitoring library for FastAPI',
        '  🇨🇭 ARQH Logistics   — CQRS, Kubernetes multi-pod scaling, Redis pub/sub',
        '  🚗 Günsel EV DIC     — Safety-critical automotive cluster (AUTOSAR/MISRA)',
        '  🧠 CARLA Simulator  — MTech deep learning autonomous driving thesis',
      ];

    case 'secret':
      return ['  🎉 You found the secret! Here\'s a cookie: 🍪'];

    case 'coffee':
      return [
        '  Brewing... ☕ One moment...',
        '  Done! Here\'s your virtual coffee.',
      ];

    case 'hire-me':
      return [
        '  📧 Send me an email at canilguu@gmail.com',
        '  — let\'s build something great together!',
      ];

    case 'clear':
      return ['__CLEAR__'];

    case 'exit':
      return ['__EXIT__'];

    case '':
      return [];

    default:
      return [`  Command not found: ${trimmed}. Type 'help' for available commands.`];
  }
}

let lineId = 0;
function nextId(): number {
  return ++lineId;
}

export function Terminal({ isOpen, onClose }: TerminalProps) {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Reset & show welcome message on open
  useEffect(() => {
    if (isOpen) {
      setLines([{ id: nextId(), type: 'output', content: WELCOME_MESSAGE }]);
      setInput('');
      // Delay focus to allow the animation to start
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Auto-scroll to bottom when lines change
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [lines]);

  // Escape key to close
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: globalThis.KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = useCallback(() => {
    const cmd = input.trim();
    const newLines: TerminalLine[] = [
      { id: nextId(), type: 'input', content: `$ ${cmd}` },
    ];

    const result = processCommand(cmd);

    if (result.length === 1 && result[0] === '__CLEAR__') {
      setLines([]);
      setInput('');
      return;
    }

    if (result.length === 1 && result[0] === '__EXIT__') {
      onClose();
      return;
    }

    for (const line of result) {
      newLines.push({ id: nextId(), type: 'output', content: line });
    }

    setLines((prev) => [...prev, ...newLines]);
    setInput('');
  }, [input, onClose]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  // Focus trap: keep focus inside the terminal
  const handleOverlayKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      inputRef.current?.focus();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Interactive terminal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
      onClick={handleBackdropClick}
      onKeyDown={handleOverlayKeyDown}
    >
      <div
        className="terminal-window w-full rounded-xl border border-white/10 shadow-2xl flex flex-col"
        style={{
          maxWidth: '700px',
          maxHeight: '80vh',
          backgroundColor: '#111',
          fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
          animation: 'terminal-slide-in 0.3s ease-out',
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-2 px-4 py-3 rounded-t-xl border-b border-white/10"
          style={{ backgroundColor: '#0a0a0a' }}
        >
          <button
            type="button"
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"
            aria-label="Close terminal"
          />
          <span
            className="w-3 h-3 rounded-full bg-yellow-500"
            aria-hidden="true"
          />
          <span
            className="w-3 h-3 rounded-full bg-green-500"
            aria-hidden="true"
          />
          <span className="ml-3 text-xs text-zinc-500 select-none">
            can@portfolio:~$
          </span>
        </div>

        {/* Output area */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 space-y-1"
          style={{ minHeight: '300px' }}
        >
          {lines.map((line) => (
            <div
              key={line.id}
              className={
                line.type === 'input'
                  ? 'text-green-300 whitespace-pre-wrap text-sm'
                  : 'text-green-400/80 whitespace-pre-wrap text-sm'
              }
            >
              {line.content}
            </div>
          ))}
        </div>

        {/* Input line */}
        <div
          className="flex items-center gap-2 px-4 py-3 border-t border-white/10"
          style={{ backgroundColor: '#0a0a0a' }}
        >
          <span className="text-green-500 text-sm select-none">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-green-400 text-sm outline-none caret-green-500 placeholder:text-zinc-700"
            style={{ fontFamily: 'inherit' }}
            placeholder="type a command..."
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal command input"
          />
        </div>
      </div>

      {/* Inline styles for the entrance animation */}
      <style>{`
        @keyframes terminal-slide-in {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .terminal-window {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
