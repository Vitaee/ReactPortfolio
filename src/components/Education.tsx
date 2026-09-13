import { GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatedSection } from '@/components/AnimatedSection';

export function Education() {
  const education = [
    {
      title: "MTech — Information Technology (Thesis)",
      institution: "Eastern Mediterranean University",
      period: "Sep 2023 – Jul 2025",
      location: "Famagusta, Cyprus",
      thesis: "Thesis: Implementing and Evaluating Autonomous Driving Model with Deep Learning in CARLA Simulator"
    },
    {
      title: "BSc. — Software Engineering",
      institution: "Near East University",
      period: "Sep 2019 – Jan 2023",
      location: "Nicosia, Cyprus"
    }
  ];

  return (
    <section className="py-20" id="education">
      <AnimatedSection>
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                04 / Academic Foundation
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">Education</h2>
            <p className="text-sm text-zinc-400 font-normal">Graduate research and software engineering degrees.</p>
          </div>
          
          <div className="surface-card rounded-2xl p-6 sm:p-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className={cn(
                  'flex items-start gap-4 pl-4 border-l-2 border-emerald-500/80',
                  index > 0 && 'mt-8 pt-8 border-t border-white/[0.06]'
                )}
              >
                <div className="bg-emerald-500/10 p-2.5 rounded-xl shrink-0 text-emerald-400 border border-emerald-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{edu.title}</h3>
                      <p className="text-sm text-zinc-300 font-medium">{edu.institution}</p>
                    </div>
                    <div className="sm:text-right font-mono text-xs text-zinc-400 shrink-0">
                      <p>{edu.period}</p>
                      <p className="text-zinc-500 text-[11px]">{edu.location}</p>
                    </div>
                  </div>
                  {edu.thesis && (
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <p className="text-xs text-zinc-300 font-mono leading-relaxed">{edu.thesis}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
