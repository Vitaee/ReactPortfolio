import { Languages as LanguagesIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { useInView } from '@/hooks/useInView';
import { AnimatedSection } from '@/components/AnimatedSection';

interface Language {
  name: string;
  type: string;
  level?: string;
  skills?: Record<string, string>;
}

function LanguageCard({ lang, index }: { lang: Language; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="glass-card rounded-xl glow-green p-4 sm:p-6 transition-all"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateX(0)' : 'translateX(-30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-green-500/10 p-3 rounded-lg shrink-0">
          <LanguagesIcon className="w-6 h-6 text-green-400" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-50">{lang.name}</h3>
          <p className="text-zinc-300">{lang.type}</p>
        </div>
      </div>
      {lang.skills && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
          {Object.entries(lang.skills).map(([skill, level]) => (
            <div key={skill} className="text-center">
              <p className={cn('text-sm text-zinc-500 capitalize mb-2')}>
                {skill.replace(/([A-Z])/g, ' $1').trim()}
              </p>
              <Badge
                variant="outline"
                className="border-green-500/30 text-green-400 bg-green-500/10 px-4 py-2 text-sm font-bold"
              >
                {level}
              </Badge>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Languages() {
  const languages: Language[] = [
    {
      name: "Turkish",
      type: "Mother tongue",
      level: "Native",
    },
    {
      name: "English",
      type: "Professional Working Proficiency",
      skills: {
        listening: "C1",
        reading: "C1",
        speaking: "C1",
        interaction: "C1",
        writing: "C1",
      },
    },
  ];

  return (
    <AnimatedSection>
      <section className="py-20" id="languages">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="section-heading text-3xl sm:text-4xl font-bold">Languages</h2>
          </div>
          <div className="space-y-6">
            {languages.map((lang, index) => (
              <LanguageCard key={index} lang={lang} index={index} />
            ))}
          </div>
          <div className="mt-6 text-center text-sm text-zinc-500">
            Levels: A1 and A2: Basic user - B1 and B2: Independent user - C1 and C2: Proficient user
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}