import { useState } from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

type DomainLens = 'all' | 'distributed' | 'automotive' | 'data';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  domain: ('distributed' | 'automotive' | 'data')[];
  challenge: string;
  architecture: string[];
  keyStack: string[];
}

export function Experience() {
  const [activeLens, setActiveLens] = useState<DomainLens>('all');
  const [showAll, setShowAll] = useState(false);

  const experiences: ExperienceItem[] = [
    {
      title: 'Sr. Full Stack & Systems Engineer',
      company: 'ARQH',
      period: 'Mar 2026 – Present',
      location: 'Zurich, Switzerland',
      isCurrent: true,
      domain: ['distributed', 'data'],
      challenge:
        'Architecting a real-time logistics and transport management dashboard serving Swiss regional transportation networks under high dispatch concurrency.',
      architecture: [
        'Implemented CQRS architecture segregating high-throughput vehicle telemetry commands from analytical dispatch queries.',
        'Engineered Hexagonal (Ports & Adapters) architecture decoupling third-party routing engines and distance matrices from core domain logic.',
        'Orchestrated horizontal multi-pod backend microservices on Kubernetes with strict Dev, Staging, and Production environment parity.',
        'Designed region-partitioned MongoDB architecture, optimizing geo-spatial query latency across Swiss cantons.',
        'Integrated Redis Pub/Sub queue pipelines for sub-10ms event distribution to a React/TypeScript monorepo frontend.'
      ],
      keyStack: ['Kubernetes', 'FastAPI', 'CQRS', 'Redis Pub/Sub', 'MongoDB Geo', 'TypeScript']
    },
    {
      title: 'Full Stack Engineer',
      company: 'GenfoQuest Analytica',
      period: 'Sep 2025 – Mar 2026',
      location: 'İzmir, Türkiye',
      domain: ['distributed', 'data'],
      challenge:
        'Delivering production backends and cross-platform clients for sensitive patient-level genomics and single-cell analysis pipelines.',
      architecture: [
        'Architected three secure backend applications prioritizing strict asynchronous execution, type safety, and HIPAA/GDPR-aligned data isolation.',
        'Created and open-sourced fastapi-observer to standardize structured logging, latency profiling, and Prometheus metric scraping across internal services.',
        'Developed full-stack feature sets: a Kotlin mobile client for deep learning hair follicle analysis and a React SPA for single-cell genomics visualization.',
        'Built automated GitHub Actions CI/CD deployment pipelines with containerized Docker Compose stacks.'
      ],
      keyStack: ['FastAPI', 'Python', 'React', 'Kotlin', 'Docker', 'CI/CD Pipelines']
    },
    {
      title: 'Invoice Assurance & Software Specialist',
      company: 'Vodafone Northern Cyprus',
      period: 'Sep 2023 – Sep 2025',
      location: 'Nicosia, Cyprus',
      domain: ['data'],
      challenge:
        'Auditing and maintaining high-throughput telecom billing engines processing millions of invoice transactions monthly.',
      architecture: [
        'Refactored and tuned complex PL/SQL stored procedures and Oracle query execution plans to eliminate latency bottlenecks during monthly billing cycles.',
        'Designed automated compliance checks ensuring campaigns and dynamic tariffs operated with zero discrepancy against invoice assurance protocols.',
        'Maintained and engineered Value-Added Services (VAS) software integrations spanning Oracle, Java, and Python background tasks.'
      ],
      keyStack: ['Oracle PL/SQL', 'Java', 'Python', 'High-Concurrency DB', 'Linux Bash']
    },
    {
      title: 'Software Engineer (Promoted from Intern)',
      company: 'Günsel Electric Vehicles',
      period: 'May 2021 – Aug 2023',
      location: 'Cyprus',
      domain: ['automotive'],
      challenge:
        'Engineering hard-realtime, fail-safe Digital Instrument Cluster (DIC) and In-Vehicle Infotainment (IVI) software for electric vehicles.',
      architecture: [
        'Aligned software modules with AUTOSAR layered architecture and MISRA C++ guidelines to guarantee deterministic execution and passenger safety.',
        'Implemented responsive, hardware-accelerated instrument cluster UI in Qt/QML with C++ backend parsing vehicle CAN-bus signals.',
        'Conducted technical evaluations and code audits of Tier-1 embedded device suppliers for in-vehicle hardware integration.',
        'Led software task decomposition and agile sprint planning within the core vehicle electronics engineering team.'
      ],
      keyStack: ['Qt/QML', 'C++', 'AUTOSAR', 'MISRA Guidelines', 'CAN-Bus', 'Python']
    },
    {
      title: 'Independent Remote Software Contractor',
      company: 'Global Clients & Govt Projects',
      period: 'Mar 2022 – Aug 2024',
      location: 'Remote / Global',
      domain: ['distributed', 'data'],
      challenge:
        'Delivering mission-critical backend scaling, serverless migrations, and government cloud infrastructure across international contracts.',
      architecture: [
        'Bluedot (AWS / Serverless): Migrated legacy monolith to AWS Lambda using Bref CLI and Serverless Framework, reducing API latency and hosting overhead.',
        'ArabanaGelsin (Django REST): Scaled high-traffic automotive marketplace backend with Redis caching, Celery async task workers, and PostgreSQL.',
        'Ministry of Commerce (Govt): Modernized security and core framework from Django 2 to 3 for nationwide trade logistics portal.',
        'Budapest Univ. of Technology (ML/DevOps): Engineered Kubernetes container pipelines and RabbitMQ queues for solar forecasting models.'
      ],
      keyStack: ['AWS Lambda', 'Serverless', 'Django REST', 'Redis & Celery', 'Kubernetes', 'RabbitMQ']
    },
    {
      title: 'Early Career Engineering Contracts',
      company: 'High-Growth Tech Startups',
      period: 'Jan 2020 – Jan 2022',
      location: 'Istanbul & London',
      domain: ['distributed'],
      challenge:
        'Rapidly deploying web scrapers, authentication gateways, and API microservices across early-stage startup engineering teams.',
      architecture: [
        'Fikrimuhal (Istanbul): Built high-concurrency Node.js/TypeScript scraper APIs integrated with Docker CI/CD.',
        'MyChariti (London, UK): Engineered OAuth2 user authentication and permission layer using Django; deployed via Heroku CI/CD.',
        'YesilScience (Istanbul): Developed backend API communication layer for mobile health applications inside a 70-person engineering team.',
        'Apziva: Built enterprise REST API prototypes focusing on clean design patterns and containerized microservices.'
      ],
      keyStack: ['Node.js', 'TypeScript', 'Django', 'FastAPI', 'OAuth2', 'Docker']
    }
  ];

  const filteredExperiences = experiences.filter((exp) => {
    if (activeLens === 'all') return true;
    return exp.domain.includes(activeLens);
  });

  const visibleList = showAll ? filteredExperiences : filteredExperiences.slice(0, 4);

  return (
    <section className="py-20" id="experience">
      <AnimatedSection>
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  02 / Career Journey &amp; Engineering Decisions
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                Proven Track Record
              </h2>
              <p className="text-base text-zinc-400 font-normal">
                Key architectural decisions, scaling challenges, and technical responsibilities.
              </p>
            </div>

            {/* Interactive Domain Lens Switcher */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08] self-start sm:self-auto overflow-x-auto max-w-full">
              {[
                { id: 'all', label: 'All Roles' },
                { id: 'distributed', label: 'Distributed & K8s' },
                { id: 'automotive', label: 'Automotive & EV' },
                { id: 'data', label: 'High-Throughput' },
              ].map((lens) => (
                <button
                  key={lens.id}
                  type="button"
                  onClick={() => {
                    setActiveLens(lens.id as DomainLens);
                    setShowAll(true);
                  }}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer',
                    activeLens === lens.id
                      ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]'
                  )}
                >
                  {lens.label}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline / Cards */}
          <div className="space-y-6">
            {visibleList.map((exp, index) => (
              <div
                key={index}
                className="surface-card rounded-2xl p-6 sm:p-8 transition-all hover:border-white/[0.16]"
              >
                {/* Card Top Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {exp.title}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-green-400 mt-0.5">{exp.company}</p>
                  </div>
                  <div className="text-left sm:text-right font-mono text-xs text-zinc-400">
                    <div>{exp.period}</div>
                    <div className="text-zinc-400 text-[11px]">{exp.location}</div>
                  </div>
                </div>

                {/* Engineering Challenge */}
                <div className="mb-4 pb-4 border-b border-white/[0.06]">
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    <strong className="text-zinc-100 font-semibold">Problem &amp; Scale: </strong>
                    {exp.challenge}
                  </p>
                </div>

                {/* Architectural Solutions */}
                <div className="mb-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 font-semibold">
                    Architectural Decisions &amp; Delivery:
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                    {exp.architecture.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-500/80 font-mono mt-0.5">▪</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Curated Stack */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {exp.keyStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] text-zinc-400 border border-white/[0.07]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Show More Trigger if list is truncated */}
          {!showAll && filteredExperiences.length > 4 && (
            <div className="flex justify-center mt-8">
              <Button
                variant="outline"
                onClick={() => setShowAll(true)}
                className="border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 hover:text-white px-5 py-2 text-xs rounded-lg font-mono flex items-center gap-2 cursor-pointer"
              >
                <ChevronDown className="w-3.5 h-3.5" />
                <span>Show {filteredExperiences.length - 4} earlier roles</span>
              </Button>
            </div>
          )}

        </div>
      </AnimatedSection>
    </section>
  );
}
