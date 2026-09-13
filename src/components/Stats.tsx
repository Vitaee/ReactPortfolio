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
  const count = useCountUp(value, 1500, shouldStart);

  return (
    <div
      className="surface-card rounded-xl p-5 sm:p-6 flex flex-col items-center justify-center gap-1.5 text-center"
      style={{
        opacity: shouldStart ? 1 : 0,
        transform: shouldStart ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <span className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-white tabular-nums">
        {count}{suffix}
      </span>
      <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export function Stats() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const stats = [
    { value: 6, suffix: '+', label: 'Years Experience' },
    { value: 15, suffix: '+', label: 'Companies & Clients' },
    { value: 5, suffix: '', label: 'Global Regions' },
    { value: 20, suffix: '+', label: 'Systems Delivered' },
  ];

  return (
    <AnimatedSection>
      <section ref={ref} className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
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
