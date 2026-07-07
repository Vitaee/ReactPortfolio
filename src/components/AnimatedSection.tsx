import { Children, type CSSProperties } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/useInView';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  stagger?: boolean;
  staggerDelay?: number;
}

const directionTranslate: Record<string, string> = {
  up: 'translateY(30px)',
  down: 'translateY(-30px)',
  left: 'translateX(30px)',
  right: 'translateX(-30px)',
};

const translateClass: Record<string, string> = {
  up: 'translate-y-8',
  down: '-translate-y-8',
  left: 'translate-x-8',
  right: '-translate-x-8',
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up',
  stagger = false,
  staggerDelay = 100,
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  if (stagger) {
    const childArray = Children.toArray(children);

    return (
      <div ref={ref} className={className}>
        {childArray.map((child, index) => {
          const style: CSSProperties = {
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translate(0, 0)' : directionTranslate[direction],
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            transitionDelay: isInView ? `${index * staggerDelay}ms` : '0ms',
          };

          return (
            <div key={index} style={style}>
              {child}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isInView ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${translateClass[direction]}`,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
