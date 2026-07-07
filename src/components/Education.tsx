import { GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatedSection } from '@/components/AnimatedSection';

export function Education() {

  const education = [
    {
      title: "MTech — Information Technology with Thesis",
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
    <AnimatedSection>
      <section className="py-20" id="education">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="section-heading text-3xl sm:text-4xl font-bold">Education</h2>
          </div>
          <div className="glass-card rounded-xl p-4 sm:p-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className={cn(
                  'flex items-start gap-4 border-l-2 border-green-500 pl-4',
                  index > 0 && 'mt-8'
                )}
              >
                <div className="bg-green-500/10 p-3 rounded-lg shrink-0">
                  <GraduationCap className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-zinc-50">{edu.title}</h3>
                      <p className="text-lg sm:text-xl text-zinc-300">{edu.institution}</p>
                    </div>
                    <div className="sm:text-right text-zinc-500 text-sm sm:text-base shrink-0">
                      <p>{edu.period}</p>
                      <p>{edu.location}</p>
                    </div>
                  </div>
                  {edu.thesis && (
                    <div className="border-l-2 border-green-500/50 pl-4 bg-green-500/5 rounded-r-lg py-2">
                      <p className="text-sm sm:text-base text-zinc-400 italic">{edu.thesis}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}