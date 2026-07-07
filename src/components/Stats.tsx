import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';
import { AnimatedSection } from '@/components/AnimatedSection';

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  shouldStart: boolean;
  index: number;
}

function StatItem({ value, suffix = '', label, shouldStart, index }: StatItemProps) {
  const count = useCountUp(value, 2000, shouldStart);

  return (
    <div
      className="glass-card rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center gap-2 text-center"
      style={{
        opacity: shouldStart ? 1 : 0,
        transform: shouldStart ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <span className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-green-400">
        {count}{suffix}
      </span>
      <span className="text-xs sm:text-sm text-zinc-500 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export function Stats() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const stats = [
    { value: 6, suffix: '+', label: 'Years Experience' },
    { value: 15, suffix: '+', label: 'Clients & Companies' },
    { value: 5, suffix: '', label: 'Countries' },
    { value: 20, suffix: '+', label: 'Projects Delivered' },
  ];

  return (
    <AnimatedSection>
      <section ref={ref} className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                shouldStart={isInView}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
