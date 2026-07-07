import { Code2, Database, Server, Layout, Cloud, Wrench } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useInView } from '@/hooks/useInView';
import { AnimatedSection } from '@/components/AnimatedSection';

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="glass-card rounded-xl glow-green p-5 sm:p-6"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex items-center mb-5">
        <div className="transition-transform duration-200 hover:rotate-12">
          {category.icon}
        </div>
        <h3 className="text-lg sm:text-xl font-bold ml-3 text-zinc-50">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, idx) => (
          <Badge
            key={idx}
            variant="secondary"
            className="bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20 transition-all duration-200 cursor-default px-3 py-1.5 text-sm"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      icon: <Code2 className="w-8 h-8 text-green-400" />,
      title: "Frontend",
      skills: [
        "React", "Next.js", "TypeScript", "JavaScript",
        "Vue.js", "Qt/QML", "Tailwind CSS", "HTML/CSS",
      ],
    },
    {
      icon: <Server className="w-8 h-8 text-green-400" />,
      title: "Backend",
      skills: [
        "Python", "FastAPI", "Django", "Django REST Framework",
        "Node.js", "Express.js", "PHP", "Laravel",
      ],
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-400" />,
      title: "Cloud & DevOps",
      skills: [
        "AWS Lambda", "EC2", "Docker", "Docker Compose",
        "Kubernetes", "GitHub Actions", "CI/CD", "Nginx",
      ],
    },
    {
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: "Databases",
      skills: [
        "PostgreSQL", "MongoDB", "Redis", "MySQL",
        "Oracle", "Firebase", "MsSQL",
      ],
    },
    {
      icon: <Wrench className="w-8 h-8 text-green-400" />,
      title: "Tools & Practices",
      skills: [
        "Git", "Jira", "Confluence", "Agile/Scrum",
        "TDD", "REST APIs", "Celery", "RabbitMQ",
      ],
    },
    {
      icon: <Layout className="w-8 h-8 text-green-400" />,
      title: "Specialized",
      skills: [
        "AUTOSAR", "MISRA", "DIC/IVI Systems",
        "Serverless", "Bref CLI",
      ],
    },
  ];

  return (
    <AnimatedSection>
      <section className="py-20" id="skills">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="section-heading text-3xl sm:text-4xl font-bold">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard key={index} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}