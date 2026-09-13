import { AnimatedSection } from '@/components/AnimatedSection';
import { Layers, Terminal, Database, ShieldCheck } from 'lucide-react';

interface SkillGroup {
  icon: React.ReactNode;
  category: string;
  description: string;
  skills: string[];
}

export function Skills() {
  const skillGroups: SkillGroup[] = [
    {
      icon: <Layers className="w-5 h-5 text-green-400" />,
      category: "Software Architecture & Patterns",
      description: "Proven paradigms for maintainable, decoupled, and highly testable distributed systems.",
      skills: [
        "CQRS Pattern",
        "Hexagonal (Ports & Adapters)",
        "Domain-Driven Design (DDD)",
        "Test-Driven Development (TDD)",
        "Microservices Architecture",
        "Event-Driven Architecture",
        "Asynchronous Pipeline Design"
      ]
    },
    {
      icon: <Terminal className="w-5 h-5 text-green-400" />,
      category: "Languages & Runtimes",
      description: "Strictly-typed backends, high-performance embedded code, and modern frontends.",
      skills: [
        "Python (FastAPI, Django, AsyncIO)",
        "TypeScript (React, Next.js, Hono.js)",
        "Runtimes: Bun.sh CLI & Node.js",
        "MongoDB & Mongo Compass",
        "C++ (Qt, QML, Embedded Systems)",
        "SQL (PL/SQL, PostgreSQL, Query Optimization)",
        "PHP (Laravel, Modern Serverless Bref)"
      ]
    },
    {
      icon: <Database className="w-5 h-5 text-green-400" />,
      category: "Data & Event Infrastructure",
      description: "High-throughput messaging, spatial partitioning, and caching layers.",
      skills: [
        "Kubernetes Multi-Pod Scaling",
        "Redis Pub/Sub & Real-Time Queues",
        "MongoDB & Mongo Compass (Geo-Spatial Sharding)",
        "PostgreSQL & Concurrency Tuning",
        "RabbitMQ & Celery Async Workers"
      ]
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-green-400" />,
      category: "Cloud, DevOps & Standards",
      description: "Environment isolation, automotive safety compliance, and automated deployment.",
      skills: [
        "Multi-Env Pipelines (Dev / Staging / Prod)",
        "AUTOSAR Automotive Framework",
        "MISRA C++ Safety Guidelines",
        "Docker & Container Orchestration",
        "AWS (Lambda, Serverless, EC2)",
        "GitHub Actions CI/CD Automation"
      ]
    }
  ];

  return (
    <section className="py-20" id="skills">
      <AnimatedSection>
        <div className="max-w-5xl mx-auto px-4">
          
          {/* Section Header */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                03 / Capabilities &amp; Architecture
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Engineering Disciplines
            </h2>
            <p className="text-base text-zinc-400 max-w-2xl font-normal leading-relaxed">
              Curated capabilities spanning distributed systems, automotive functional safety,
              and horizontal container scaling.
            </p>
          </div>

          {/* 4-Quadrant Capability Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {skillGroups.map((group, idx) => (
              <div
                key={idx}
                className="surface-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all hover:border-white/[0.16]"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-green-500/10 text-green-400 border border-green-500/20">
                      {group.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {group.category}
                    </h3>
                  </div>

                  <p className="text-xs text-zinc-400 font-normal leading-relaxed mb-5">
                    {group.description}
                  </p>

                  <div className="space-y-2 mb-2">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.05] text-xs font-mono text-zinc-200"
                      >
                        <span>{skill}</span>
                        <span className="text-green-500/70 text-[10px]">●</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </AnimatedSection>
    </section>
  );
}
