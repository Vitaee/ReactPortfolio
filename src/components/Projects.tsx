import { ExternalLink, Github, Sparkles, Globe, Car } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { useInView } from '@/hooks/useInView';

interface Project {
  name: string;
  description: string;
  url: string;
  tags: string[];
  icon: React.ReactNode;
  badge: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="glass-card rounded-xl glow-green w-full overflow-hidden transition-all hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1 transform"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div className="h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-t-xl" />
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-500/10 p-3 rounded-lg shrink-0">
              {project.icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-50 font-mono">{project.name}</h3>
          </div>
          <Badge className="bg-green-500/10 text-green-400 border-green-500/20 text-xs gap-1 shrink-0">
            <Sparkles className="w-3 h-3" />
            {project.badge}
          </Badge>
        </div>
        <p className="text-zinc-400 text-sm sm:text-base mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <Badge
              key={idx}
              variant="secondary"
              className="bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <Button asChild variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10 transition-all">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            View Project
          </a>
        </Button>
      </div>
    </div>
  );
}

export function Projects() {
  const projects: Project[] = [
    {
      name: "fastapi-observer",
      description:
        "Open-source Python library for streamlined FastAPI monitoring, structured logging, and backend metric collection. Published on PyPI and used in production systems.",
      url: "https://github.com/Vitaee/fastapi-observer",
      tags: ["Python", "FastAPI", "PyPI", "Open Source", "Monitoring"],
      icon: <Github className="w-6 h-6 text-green-400" />,
      badge: "Open Source",
    },
    {
      name: "canilgu.dev",
      description:
        "This portfolio — a modern React + TypeScript site with a terminal dark theme, particle animations, glassmorphism UI, and a hidden interactive terminal. Built with Vite & Tailwind CSS v4.",
      url: "https://canilgu.dev",
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
      icon: <Globe className="w-6 h-6 text-green-400" />,
      badge: "Portfolio",
    },
    {
      name: "Autonomous Driving — CARLA",
      description:
        "Master's thesis project: implemented and evaluated deep learning-based autonomous driving models in the CARLA Simulator. Explored end-to-end learning approaches for self-driving navigation.",
      url: "https://github.com/Vitaee",
      tags: ["Python", "Deep Learning", "CARLA", "Computer Vision", "Research"],
      icon: <Car className="w-6 h-6 text-green-400" />,
      badge: "Research",
    },
  ];

  return (
    <AnimatedSection>
      <section className="py-20" id="projects">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="section-heading text-3xl sm:text-4xl font-bold">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
