import { useState } from 'react';
import { Github, Linkedin, Mail, Check, ArrowDown, Terminal, FileText, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';

interface HeroProps {
  onOpenCommandMenu: () => void;
  onOpenTerminal: () => void;
}

export function Hero({ onOpenCommandMenu, onOpenTerminal }: HeroProps) {
  const [emailCopied, setEmailCopied] = useState(false);
  const [snapshotCopied, setSnapshotCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('canilguu@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
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

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col items-center justify-center" id="home">
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        
        {/* Real-time Status & Availability Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-400">Current:</span>
            <span className="text-zinc-200 font-medium">Distributed Logistics &amp; K8s @ ARQH, Zurich</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-zinc-400">
            <MapPin className="w-3 h-3 text-emerald-400" />
            <span>Cyprus (UTC+3) • Open to Remote &amp; Relocation</span>
          </div>
        </div>

        {/* Primary Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4">
          Can İlgu
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-zinc-400 font-normal tracking-tight mb-6">
          Senior Full Stack &amp; Systems Engineer
        </p>

        {/* Impact Bio */}
        <p className="text-base sm:text-lg text-zinc-400 mb-10 leading-relaxed max-w-2xl mx-auto font-normal">
          6+ years building resilient software — from safety-critical electric vehicle instrument clusters
          under MISRA/AUTOSAR to geo-partitioned distributed logistics platforms serving Swiss transportation networks.
          Specialized in CQRS, Hexagonal architectures, Kubernetes multi-pod scaling, and open-source tooling.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <Button
            onClick={onOpenCommandMenu}
            className="bg-white text-zinc-950 hover:bg-zinc-200 font-medium px-5 py-2.5 text-sm rounded-lg active:scale-[0.98] transition-all shadow-sm cursor-pointer"
          >
            <span>Command Menu</span>
            <kbd className="ml-2 px-1.5 py-0.5 rounded text-[10px] bg-zinc-200 text-zinc-800 font-mono">⌘K</kbd>
          </Button>

          <Button
            variant="outline"
            onClick={copyRecruiterSnapshot}
            className="border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 px-4 py-2.5 text-sm rounded-lg transition-all active:scale-[0.98] cursor-pointer"
            title="Copy ATS-friendly candidate summary for recruiters & hiring managers"
          >
            {snapshotCopied ? (
              <Check className="w-4 h-4 mr-2 text-emerald-400" />
            ) : (
              <FileText className="w-4 h-4 mr-2 text-emerald-400" />
            )}
            <span>{snapshotCopied ? 'Snapshot Copied!' : '1-Click Recruiter Snapshot'}</span>
          </Button>

          <Button
            variant="outline"
            asChild
            className="border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.08] text-zinc-200 hover:text-white px-5 py-2.5 text-sm rounded-lg transition-all active:scale-[0.98] cursor-pointer"
          >
            <a href="#systems" className="inline-flex items-center gap-2">
              <span>View Architecture &amp; Code</span>
              <ArrowDown className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </Button>

          <Button
            variant="outline"
            onClick={onOpenTerminal}
            className="border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 hover:text-green-400 px-3.5 py-2.5 text-sm rounded-lg transition-all active:scale-[0.98] cursor-pointer"
            title="Open Interactive Terminal (`)"
          >
            <Terminal className="w-4 h-4" />
          </Button>
        </div>

        {/* Social & Contact Bar */}
        <div className="flex items-center justify-center gap-4 text-zinc-400">
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://github.com/Vitaee"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:text-white hover:bg-white/[0.05] transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </TooltipTrigger>
            <TooltipContent>GitHub: @Vitaee</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://www.linkedin.com/in/can-ilgu-657730198/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:text-white hover:bg-white/[0.05] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </TooltipTrigger>
            <TooltipContent>LinkedIn: Can İlgu</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 p-2 rounded-lg hover:text-white hover:bg-white/[0.05] transition-colors cursor-pointer text-xs font-mono"
                aria-label="Copy email address"
              >
                {emailCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4" />}
                <span className="hidden sm:inline">{emailCopied ? 'Copied' : 'canilguu@gmail.com'}</span>
              </button>
            </TooltipTrigger>
            <TooltipContent>{emailCopied ? 'Email Copied!' : 'Click to copy email'}</TooltipContent>
          </Tooltip>
        </div>

      </div>
    </section>
  );
}
