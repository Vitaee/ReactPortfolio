import React from 'react';
import { Code2, Database, Server, Layout } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-400" />,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5/CSS3", "jQuery"]
    },
    {
      icon: <Server className="w-8 h-8 text-purple-400" />,
      title: "Backend Development",
      skills: ["Java", "PHP", "Laravel", "Python", "Node.js", "REST APIs"]
    },
    {
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: "Database & DevOps",
      skills: ["Oracle", "MySQL", "PL/SQL", "Docker", "Git", "Linux/Ubuntu"]
    },
    {
      icon: <Layout className="w-8 h-8 text-yellow-400" />,
      title: "Tools & Frameworks",
      skills: ["Statamic CMS", "Docker Compose", "VSCode", "Postman", "Jira", "Agile"]
    }
  ];

  return (
    <section className="py-20" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 rounded-xl p-6 transition-all transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="transform transition-transform hover:rotate-12">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold ml-3">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li 
                    key={idx} 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    style={{ animationDelay: `${(index * 150) + (idx * 50)}ms` }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}