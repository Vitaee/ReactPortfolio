import { useEffect, useState, useCallback } from 'react';
import { Command } from 'cmdk';
import {
  Terminal as TerminalIcon,
  Layers,
  Cpu,
  Boxes,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Copy,
  Check,
  Compass,
  FileText
} from 'lucide-react';

interface CommandMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onOpenTerminal: () => void;
}

export function CommandMenu({ open, setOpen, onOpenTerminal }: CommandMenuProps) {
  const [copied, setCopied] = useState(false);

  // Keyboard shortcut listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey))) {
        e.preventDefault();
        setOpen(!open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open, setOpen]);

  const handleSelect = useCallback((callback: () => void) => {
    setOpen(false);
    callback();
  }, [setOpen]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [snapshotCopied, setSnapshotCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('canilguu@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyRecruiterSnapshot = () => {
    const snapshot = `CAN İLGU — SENIOR FULL STACK & SYSTEMS ENGINEER
• Current: Sr. Full Stack Engineer @ ARQH (Zurich, Switzerland)
• Experience: 6+ Years (Distributed Backends, K8s Multi-Pod, Automotive Embedded)
• Core Stack: Python (FastAPI, Django), TypeScript (Next.js, React, Hono.js), Bun.sh, MongoDB (Compass), Redis, K8s, C++ (Qt/MISRA)
• Architecture: CQRS, Hexagonal (Ports & Adapters), TDD, Domain Architecture, Multi-Env (Dev/Stg/Prod)
• Open Source: Author of fastapi-observer (Published on PyPI)
• Education: MTech in Information Technology (CARLA Autonomous Driving DL Thesis), BSc Software Eng
• Location: Kyrenia, Cyprus (UTC+3) | Availability: Open to Remote Global & EU/UK Relocation
• Contact: canilguu@gmail.com | github.com/Vitaee | linkedin.com/in/can-ilgu-657730198`;

    navigator.clipboard.writeText(snapshot);
    setSnapshotCopied(true);
    setTimeout(() => setSnapshotCopied(false), 2500);
  };

  if (!open) return null;

  return (
    <>
      <div
        cmdk-overlay=""
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div cmdk-dialog="" role="dialog" aria-label="Command Palette">
        <Command label="Command Menu" loop>
          <Command.Input
            placeholder="Type a command or search systems, architecture, stack..."
            autoFocus
          />
          <Command.List>
            <Command.Empty>No matching commands found.</Command.Empty>

            <Command.Group heading="Navigation">
              <Command.Item onSelect={() => handleSelect(() => scrollTo('systems'))}>
                <Layers className="w-4 h-4 text-green-400" />
                <span>Flagship Systems & Architecture</span>
              </Command.Item>
              <Command.Item onSelect={() => handleSelect(() => scrollTo('experience'))}>
                <Boxes className="w-4 h-4 text-green-400" />
                <span>Career Journey & Engineering Decisions</span>
              </Command.Item>
              <Command.Item onSelect={() => handleSelect(() => scrollTo('skills'))}>
                <Cpu className="w-4 h-4 text-green-400" />
                <span>Technical Architecture & Capabilities</span>
              </Command.Item>
              <Command.Item onSelect={() => handleSelect(() => scrollTo('contact'))}>
                <Mail className="w-4 h-4 text-green-400" />
                <span>Contact & Communication</span>
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Architectural Case Studies">
              <Command.Item
                onSelect={() =>
                  handleSelect(() => window.open('https://github.com/Vitaee/fastapi-observer', '_blank'))
                }
              >
                <Github className="w-4 h-4 text-zinc-400" />
                <span>fastapi-observer — Open Source PyPI Monitoring Library</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 ml-auto" />
              </Command.Item>
              <Command.Item onSelect={() => handleSelect(() => scrollTo('systems'))}>
                <Compass className="w-4 h-4 text-zinc-400" />
                <span>ARQH — Swiss Regional Logistics (CQRS, K8s, Geo-Partitioning)</span>
              </Command.Item>
              <Command.Item onSelect={() => handleSelect(() => scrollTo('systems'))}>
                <Compass className="w-4 h-4 text-zinc-400" />
                <span>Günsel EV — Safety-Critical Instrument Cluster (AUTOSAR/MISRA)</span>
              </Command.Item>
              <Command.Item onSelect={() => handleSelect(() => scrollTo('systems'))}>
                <Compass className="w-4 h-4 text-zinc-400" />
                <span>CARLA — Deep Learning Autonomous Driving Simulator Thesis</span>
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Developer Tools & Actions">
              <Command.Item onSelect={copyRecruiterSnapshot}>
                {snapshotCopied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <FileText className="w-4 h-4 text-emerald-400" />
                )}
                <span>{snapshotCopied ? 'Copied Recruiter Snapshot to clipboard!' : 'Copy 1-Click Candidate Snapshot (for Recruiters & Hiring Managers)'}</span>
                <span className="ml-auto text-xs font-mono text-zinc-500">ATS Snapshot</span>
              </Command.Item>
              <Command.Item
                onSelect={() =>
                  handleSelect(() => {
                    onOpenTerminal();
                  })
                }
              >
                <TerminalIcon className="w-4 h-4 text-green-400" />
                <span>Launch Interactive Hacker Terminal</span>
                <span className="ml-auto text-xs font-mono text-zinc-500">` or cmd</span>
              </Command.Item>
              <Command.Item onSelect={copyEmail}>
                {copied ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-zinc-400" />
                )}
                <span>{copied ? 'Copied canilguu@gmail.com to clipboard!' : 'Copy Email Address'}</span>
                <span className="ml-auto text-xs font-mono text-zinc-500">canilguu@gmail.com</span>
              </Command.Item>
              <Command.Item
                onSelect={() =>
                  handleSelect(() => window.open('https://github.com/Vitaee', '_blank'))
                }
              >
                <Github className="w-4 h-4 text-zinc-400" />
                <span>GitHub Profile (@Vitaee)</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 ml-auto" />
              </Command.Item>
              <Command.Item
                onSelect={() =>
                  handleSelect(() =>
                    window.open('https://www.linkedin.com/in/can-ilgu-657730198/', '_blank')
                  )
                }
              >
                <Linkedin className="w-4 h-4 text-zinc-400" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 ml-auto" />
              </Command.Item>
            </Command.Group>
          </Command.List>

          <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-t border-white/5 text-[11px] text-zinc-500 font-mono select-none">
            <div className="flex items-center gap-3">
              <span>↑↓ Navigate</span>
              <span>↵ Select</span>
              <span>ESC Close</span>
            </div>
            <div className="flex items-center gap-1 text-zinc-400">
              <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">⌘K</span>
              <span>to trigger anywhere</span>
            </div>
          </div>
        </Command>
      </div>
    </>
  );
}
