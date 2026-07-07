import { Mail, Linkedin, Github, Briefcase, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/useInView';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';

interface ContactMethod {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tooltipLabel: string;
  external?: boolean;
  hoverShadow: string;
}

function ContactCard({ method, index }: { method: ContactMethod; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={method.href}
            {...(method.external && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
          >
            <div
              className={cn(
                'glass-card rounded-xl glow-green transition-all cursor-pointer hover:scale-105 transform min-h-[140px] hover:shadow-lg',
                method.hoverShadow
              )}
            >
              <div className="flex flex-col items-center p-6">
                {method.icon}
                <h3 className="text-xl font-bold mb-2 text-zinc-50">{method.title}</h3>
                <p className="text-zinc-400 text-sm sm:text-base">{method.description}</p>
              </div>
            </div>
          </a>
        </TooltipTrigger>
        <TooltipContent>{method.tooltipLabel}</TooltipContent>
      </Tooltip>
    </div>
  );
}

export function Contact() {
  const contactMethods: ContactMethod[] = [
    {
      href: 'https://www.linkedin.com/in/can-ilgu-657730198/',
      icon: <Linkedin className="w-8 h-8 mb-4 text-blue-400" />,
      title: 'LinkedIn',
      description: 'Connect with me',
      tooltipLabel: 'Open LinkedIn profile',
      external: true,
      hoverShadow: 'hover:shadow-blue-500/20',
    },
    {
      href: 'https://github.com/Vitaee',
      icon: <Github className="w-8 h-8 mb-4 text-purple-400" />,
      title: 'GitHub',
      description: 'View my projects',
      tooltipLabel: 'Open GitHub profile',
      external: true,
      hoverShadow: 'hover:shadow-purple-500/20',
    },
    {
      href: 'https://www.upwork.com/freelancers/~0136472a1b8e5766da',
      icon: <Briefcase className="w-8 h-8 mb-4 text-teal-400" />,
      title: 'Upwork',
      description: 'Hire me on Upwork',
      tooltipLabel: 'Open Upwork profile',
      external: true,
      hoverShadow: 'hover:shadow-teal-500/20',
    },
  ];

  return (
    <AnimatedSection>
      <section className="py-20" id="contact">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="section-heading text-3xl sm:text-4xl font-bold">Let's Connect</h2>
          </div>

          {/* Primary CTA */}
          <p className="text-lg sm:text-xl text-zinc-400 mb-4 max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it.
          </p>
          <div className="flex justify-center mb-12">
            <Button
              asChild
              className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 text-lg transition-all hover:scale-105 transform gap-2"
            >
              <a href="mailto:canilguu@gmail.com">
                <Mail className="w-5 h-5" />
                canilguu@gmail.com
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Secondary links */}
          <p className="text-sm text-zinc-500 mb-6 uppercase tracking-wider">Or find me on</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {contactMethods.map((method, index) => (
              <ContactCard key={method.title} method={method} index={index} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}