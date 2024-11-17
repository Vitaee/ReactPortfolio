import { Mail, Linkedin, Github } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
        <p className="text-xl text-gray-300 mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href="mailto:canilguu@gmail.com"
            className="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors"
          >
            <Mail className="w-8 h-8 mb-4 text-blue-400" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-300">canilguu@gmail.com</p>
          </a>
          <a
            href="https://www.linkedin.com/in/can-ilgu-657730198/"
            className="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors"
          >
            <Linkedin className="w-8 h-8 mb-4 text-blue-400" />
            <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
            <p className="text-gray-300">Connect with me</p>
          </a>
          <a
            href="https://github.com/Vitaee"
            className="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors"
          >
            <Github className="w-8 h-8 mb-4 text-blue-400" />
            <h3 className="text-xl font-bold mb-2">GitHub</h3>
            <p className="text-gray-300">View my projects</p>
          </a>
        </div>
      </div>
    </section>
  );
}