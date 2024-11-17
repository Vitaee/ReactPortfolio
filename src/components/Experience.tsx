import React from 'react';
import { ExternalLink } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Software Development Specialist",
      company: "Vodafone - Northern Cyprus",
      period: "Sep 2023 - Present",
      location: "Nicosia, Cyprus",
      responsibilities: [
        "Revises existing SQLs and ensures systems operate at full performance",
        "Develops new products, services and campaigns",
        "Carries out design, analysis and checks for campaigns and tariffs",
        "Analyzes and resolves L3 complaint records",
        "Monitors and improves Value Added Services",
        "Develops and maintains billing system programs"
      ],
      stack: "PL/SQL, Oracle Tools, Java, JSP, jQuery, Ajax, Python"
    },
    {
      title: "Full-Stack Software Engineer",
      company: "Wallmer Promotion Ltd.",
      period: "Apr 2024 - Aug 2024",
      location: "Budapest, Hungary (Remote)",
      responsibilities: [
        "Developed complete web application using PHP, Laravel, and Statamic",
        "Implemented frontend using Tailwind CSS",
        "Managed MySQL databases and optimization",
        "Deployed project using Docker and Docker Compose",
        "Created detailed documentation and maintenance guides"
      ],
      stack: "Statamic CMS, Laravel, Tailwind CSS, MySQL, Docker, Docker Compose, Ubuntu Server"
    }
  ];

  return (
    <section className="py-20" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-800/70 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">{exp.title}</h3>
                  <p className="text-xl text-gray-300">{exp.company}</p>
                </div>
                <div className="text-right text-gray-400">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-400">Tech Stack:</p>
                <p className="text-blue-400">{exp.stack}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}