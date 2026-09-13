import { Mail, Linkedin, Github, Briefcase, ArrowUpRight } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

export function Contact() {
  const contactLinks = [
    {
      title: 'Email Direct',
      subtitle: 'canilguu@gmail.com',
      href: 'mailto:canilguu@gmail.com',
      icon: <Mail className="w-5 h-5 text-emerald-400" />,
      actionText: 'Send Email'
    },
    {
      title: 'LinkedIn',
      subtitle: 'in/can-ilgu-657730198',
      href: 'https://www.linkedin.com/in/can-ilgu-657730198/',
      icon: <Linkedin className="w-5 h-5 text-emerald-400" />,
      actionText: 'Connect'
    },
    {
      title: 'GitHub',
      subtitle: '@Vitaee',
      href: 'https://github.com/Vitaee',
      icon: <Github className="w-5 h-5 text-emerald-400" />,
      actionText: 'View Code'
    },
    {
      title: 'Upwork',
      subtitle: 'Top Rated Contractor',
      href: 'https://www.upwork.com/freelancers/~0136472a1b8e5766da',
      icon: <Briefcase className="w-5 h-5 text-emerald-400" />,
      actionText: 'Hire'
    },
  ];

  return (
    <section className="py-24" id="contact">
      <AnimatedSection>
        <div className="max-w-4xl mx-auto px-4 text-center">
          
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              06 / Get In Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Let's Discuss Systems &amp; Architecture
          </h2>
          <p className="text-base text-zinc-400 max-w-xl mx-auto mb-10 font-normal leading-relaxed">
            Open to senior engineering roles, distributed architecture advisory, and technical consulting.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            {contactLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="surface-card rounded-2xl p-5 text-left flex items-center justify-between transition-all hover:border-white/[0.18] group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-zinc-300 group-hover:text-green-400 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white tracking-tight">{item.title}</div>
                    <div className="text-xs font-mono text-zinc-400">{item.subtitle}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  <span>{item.actionText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>

        </div>
      </AnimatedSection>
    </section>
  );
}
