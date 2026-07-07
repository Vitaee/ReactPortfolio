import { Github, Linkedin, Mail } from 'lucide-react';
import { TypeWriter } from './TypeWriter';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';

export function Hero() {
  const traits = [
    "Full Stack Engineer",
    "Systematic Thinking",
    "Open Source Author",
    "Python & TypeScript"
  ];

  return (
    <section className="relative py-20 flex flex-col items-center justify-center min-h-screen" id="home">
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        <div className="hero-enter hero-enter-1">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-zinc-50">
            Hi, I'm Can İlgu.
          </h1>
        </div>

        <div className="hero-enter hero-enter-2">
          <div className="text-xl sm:text-2xl md:text-3xl mb-6 text-zinc-400">
            <span className="text-zinc-500">I'm a </span>
            <span className="text-green-400">
              <TypeWriter
                words={traits}
                typingSpeed={100}
                deletingSpeed={50}
                pauseTime={2000}
              />
            </span>
          </div>
        </div>

        <div className="hero-enter hero-enter-3">
          <p className="text-lg sm:text-xl text-zinc-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            I build things that moved from vehicle infotainment systems to real-time logistics platforms serving Swiss
            transportation networks. 6 years turning complex systems into clean,
            scalable code across Python, TypeScript, and everything in between.
          </p>
        </div>

        <div className="hero-enter hero-enter-4">
          <div className="flex gap-6 justify-center mb-12">
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://github.com/Vitaee"
                  className="text-zinc-500 hover:text-green-400 transition-colors duration-200 transform hover:scale-110 inline-flex items-center justify-center min-w-[44px] min-h-[44px]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={24} />
                </a>
              </TooltipTrigger>
              <TooltipContent>GitHub</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://www.linkedin.com/in/can-ilgu-657730198/"
                  className="text-zinc-500 hover:text-green-400 transition-colors duration-200 transform hover:scale-110 inline-flex items-center justify-center min-w-[44px] min-h-[44px]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} />
                </a>
              </TooltipTrigger>
              <TooltipContent>LinkedIn</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="mailto:canilguu@gmail.com"
                  className="text-zinc-500 hover:text-green-400 transition-colors duration-200 transform hover:scale-110 inline-flex items-center justify-center min-w-[44px] min-h-[44px]"
                >
                  <Mail size={24} />
                </a>
              </TooltipTrigger>
              <TooltipContent>Email</TooltipContent>
            </Tooltip>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-3 text-base transition-all duration-200 hover:scale-105 transform">
              <a href="#projects">
                View Projects →
              </a>
            </Button>
            <Button variant="outline" asChild className="border-green-500/50 text-green-400 hover:bg-green-500/10 px-8 py-3 text-base font-medium transition-all duration-200 hover:scale-105 transform">
              <a href="mailto:canilguu@gmail.com">
                Contact Me
              </a>
            </Button>
          </div>
        </div>

        <div className="hero-enter hero-enter-5">
          <div className="flex items-center justify-center gap-2 mt-10 text-sm text-zinc-500">
            <span className="status-dot" />
          </div>
        </div>

      </div>
    </section>
  );
}