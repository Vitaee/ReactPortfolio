import { Github, Linkedin, Mail } from 'lucide-react';
import { TypeWriter } from './TypeWriter';

export function Hero() {
  const traits = [
    "Software Development Specialist",
    "Critical Thinker",
    "Problem Solver",
    "Team Player",
    "Tech Enthusiast",
    "Continuous Learner"
  ];

  return (
    <section className="py-20 flex flex-col items-center justify-center min-h-screen" id="home">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="animate-fade-in-down text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            I'm a{' '}
          </span>
          <TypeWriter 
            words={traits}
            typingSpeed={100}
            deletingSpeed={50}
            pauseTime={2000}
          />
        </h1>
        <p className="animate-fade-in-up text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Dedicated software engineer with a passion for crafting innovative solutions that enhance organizational
          efficiency and success. Specializing in developing reliable, user-friendly systems with clean, high-performance code.
        </p>
        <div className="animate-fade-in flex gap-6 justify-center mb-12">
          <a 
            href="https://github.com/Vitaee" 
            className="text-gray-300 hover:text-white transition-colors transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/can-ilgu-657730198/" 
            className="text-gray-300 hover:text-white transition-colors transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:canilguu@gmail.com" 
            className="text-gray-300 hover:text-white transition-colors transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>
        <div className="animate-fade-in-up flex gap-4 justify-center">
          <a 
            href="https://github.com/Vitaee?tab=repositories" 
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all hover:scale-105 transform"
          >
            View Projects
          </a>
          <a 
            href="mailto:canilguu@gmail.com" 
            className="px-8 py-3 border border-blue-600 rounded-lg font-medium hover:bg-blue-600/10 transition-all hover:scale-105 transform"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce">
        <a href="#experience" className="text-gray-400 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}