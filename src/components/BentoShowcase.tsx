import { useState } from 'react';
import { Copy, Check, Server, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

export function BentoShowcase() {
  const [copiedCode, setCopiedCode] = useState(false);

  const snippetCode = `# pip install fastapi-observer
from fastapi import FastAPI
from fastapi_observer import ObserverMiddleware

app = FastAPI(title="Logistics Gateway")

# Telemetry & Structured Prometheus Metrics
app.add_middleware(
    ObserverMiddleware,
    metrics=["latency_ms", "throughput", "geo_ip"],
    export_endpoint="/metrics"
)`;

  const copySnippet = () => {
    navigator.clipboard.writeText(snippetCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section className="py-20" id="systems">
      <AnimatedSection>
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Header */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                01 / Flagship Systems &amp; Architecture
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Engineered for Scale &amp; Reliability
            </h2>
            <p className="text-base text-zinc-400 max-w-2xl font-normal leading-relaxed">
              Production backends, distributed pipelines, safety-critical automotive systems,
              and open-source tooling built with rigorous domain architecture.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            
            {/* Card 1: fastapi-observer (5 Cols on LG) */}
            <div className="lg:col-span-5 surface-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                    Open Source Tooling
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://pypi.org/project/fastapi-observer/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-emerald-400 transition-colors"
                    >
                      <span>PyPI Package</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                    <span className="text-zinc-600 text-xs">•</span>
                    <a
                      href="https://github.com/Vitaee/fastapi-observer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-white transition-colors"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                  fastapi-observer
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-5 font-normal">
                  A lightweight observability and structured monitoring library for FastAPI. Published on PyPI
                  to streamline metrics collection, latency profiling, and distributed tracing across microservices.
                </p>

                {/* Code Snippet Window */}
                <div className="rounded-xl bg-[#09090b] border border-white/[0.08] overflow-hidden mb-5">
                  <div className="flex items-center justify-between px-3 py-2 bg-white/[0.02] border-b border-white/[0.06]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      <span className="ml-2 text-[11px] font-mono text-zinc-400">main.py</span>
                    </div>
                    <button
                      type="button"
                      onClick={copySnippet}
                      className="p-1 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
                      aria-label="Copy code snippet"
                    >
                      {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <pre className="p-3 text-[12px] font-mono text-zinc-300 overflow-x-auto leading-relaxed">
                    <code>{snippetCode}</code>
                  </pre>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                {['Python', 'FastAPI', 'PyPI', 'Prometheus', 'AsyncIO'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2: ARQH Swiss Logistics Platform (7 Cols on LG) */}
            <div className="lg:col-span-7 surface-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                    Production Architecture • Zurich
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    Mar 2026 – Present
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-green-500/10 text-green-400 border border-green-500/20">
                    <Server className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    ARQH Swiss Logistics Platform
                  </h3>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed mb-5 font-normal">
                  High-throughput transportation analytics and regional dispatch architecture powering Swiss regional logistics networks.
                </p>

                {/* Visual Architecture Topology Box */}
                <div className="rounded-xl bg-[#09090b] border border-white/[0.08] p-3.5 sm:p-4 mb-4 font-mono text-[11px] leading-relaxed overflow-x-auto text-zinc-300 select-none">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-2 font-semibold flex items-center justify-between">
                    <span>System Topology: Ingest, Bus &amp; Storage</span>
                    <span className="text-emerald-400">Kubernetes • Zurich</span>
                  </div>
                  <div className="min-w-[440px] space-y-1.5 text-zinc-400">
                    <div className="text-zinc-200">
                      <span className="text-zinc-500">[Vehicle Telemetry]</span> ──(Ingress)──&gt; <span className="text-emerald-300">[API Gateway]</span>
                    </div>
                    <div className="pl-6 border-l border-white/[0.1] my-1 ml-3 space-y-1">
                      <div className="text-zinc-300">
                        ↓ <span className="text-zinc-100 font-semibold">[Kubernetes Pod Cluster]</span> <span className="text-zinc-500">(FastAPI Multi-Pod)</span>
                      </div>
                      <div className="pl-3 text-zinc-400 space-y-0.5 text-[10px]">
                        <div>├── <span className="text-amber-300 font-semibold">CQRS Command:</span> Telemetry ingest ──&gt; <span className="text-green-400">[Redis Pub/Sub]</span> ──(&lt;10ms)──&gt; <span className="text-zinc-200">[Operator UI]</span></div>
                        <div>├── <span className="text-blue-300 font-semibold">Hexagonal Ports:</span> Decoupled routing &amp; distance matrix providers</div>
                        <div>└── <span className="text-purple-300 font-semibold">Geo-Partitioned Shards:</span> <span className="text-emerald-400">[MongoDB by Swiss Cantons]</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Architectural Trade-Off Note for CTOs */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-5">
                  <div className="text-xs font-mono text-zinc-200 font-medium mb-1">
                    <span className="text-emerald-400 font-semibold">Trade-Off Rationale: </span> Why CQRS + Redis Pub/Sub?
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Vehicle telemetry write volume outpaced dispatch read queries 40:1. Segregating ingest command writes from analytical read models eliminated database lock contention during regional peak dispatch hours while guaranteeing sub-10ms UI streaming.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                {['Kubernetes', 'FastAPI', 'CQRS', 'Redis Pub/Sub', 'MongoDB Geo', 'React Monorepo', 'Multi-Env'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 3: Günsel Electric Vehicles (6 Cols on LG) */}
            <div className="lg:col-span-6 surface-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                    Automotive Safety-Critical • Günsel EV
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    May 2021 – Aug 2023
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-green-500/10 text-green-400 border border-green-500/20">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Digital Instrument Cluster (DIC)
                  </h3>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed mb-4 font-normal">
                  Hard-realtime embedded in-vehicle cluster software for electric production vehicles. Built with strict standards compliance for passenger safety.
                </p>

                {/* Automotive Trade-Off Note for CTOs */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-5">
                  <div className="text-xs font-mono text-zinc-200 font-medium mb-1">
                    <span className="text-emerald-400 font-semibold">Standards Rationale: </span> Why AUTOSAR &amp; MISRA C++?
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Vehicle safety regulations mandate deterministic execution within sub-16ms frame budgets. MISRA C++ eliminated dynamic memory leaks and race conditions, while AUTOSAR isolated critical CAN-bus telemetry from high-refresh Qt/QML UI layers.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                {['Qt', 'QML', 'C++', 'AUTOSAR', 'MISRA', 'CAN-Bus', 'Python', 'PyQt'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 4: CARLA Simulator Autonomous Driving (6 Cols on LG) */}
            <div className="lg:col-span-6 surface-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                    MTech Thesis Research • Deep Learning
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    EMU Graduate School
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-green-500/10 text-green-400 border border-green-500/20">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Autonomous Driving in CARLA
                  </h3>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed mb-4 font-normal">
                  Master's thesis research evaluating end-to-end deep learning models for urban autonomous navigation in simulated CARLA environments.
                </p>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-5">
                  <div className="text-xs font-mono text-zinc-200 font-medium mb-1">
                    <span className="text-emerald-400 font-semibold">Research Rationale: </span> End-to-End Perception
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Benchmarked sensor fusion models combining camera streams and simulated LiDAR to predict steering and throttle directly, proving resilience against dynamic weather degradation and complex pedestrian intersections.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                {['Python', 'Deep Learning', 'CARLA Simulator', 'Computer Vision', 'PyTorch'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </AnimatedSection>
    </section>
  );
}
