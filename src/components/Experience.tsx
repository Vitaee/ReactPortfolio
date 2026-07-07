import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { cn } from '@/lib/utils';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  stack: string;
}

const VISIBLE_COUNT = 4;

export function Experience() {
  const [showAll, setShowAll] = useState(false);

  const experiences: Experience[] = [
    {
      title: "Sr. Full Stack Engineer",
      company: "ARQH",
      period: "Mar 2026 – Present",
      location: "Zurich, Switzerland",
      responsibilities: [
        "Architecting and developing a logistics transportation management and analytics dashboard serving Swiss regional transportation networks.",
        "Building and maintaining multiple FastAPI backend microservices with advanced async patterns, strict type-safety, and Redis pub/sub queue integration for real-time event processing.",
        "Developing a large-scale React/TypeScript monorepo frontend with server-side rendering and sophisticated multi-layer caching strategies.",
        "Engineering region-partitioned MongoDB database architecture, optimizing query performance for geo-spatial logistics data across Swiss cantons.",
        "Integrating third-party routing and mapping APIs for detailed route calculation, distance matrices, and transportation optimization."
      ],
      stack: "FastAPI, Python, React, TypeScript, MongoDB, Redis, Docker"
    },
    {
      title: "Full Stack Engineer",
      company: "GenfoQuest Analytica",
      period: "Sep 2025 – Mar 2026",
      location: "İzmir, Türkiye",
      responsibilities: [
        "Designed and built three production-ready, secure backend applications prioritizing asynchronous execution, strict type-safety, and high security for patient-level data.",
        "Created and open-sourced fastapi-observer, a Python library for streamlined API monitoring, structured logging, and backend metric collection.",
        "Owned cross-platform feature development: a Kotlin-based mobile app for deep learning hair follicle analysis and a React web application for advanced single-cell analysis.",
        "Built CI/CD pipelines in GitHub Actions for automated deployment and testing with Docker Compose configurations."
      ],
      stack: "FastAPI, Python, React, Kotlin, Docker, GitHub Actions, CI/CD"
    },
    {
      title: "Invoice Assurance & Software Support Specialist",
      company: "Vodafone Northern Cyprus",
      period: "Sep 2023 – Sep 2025",
      location: "Nicosia, Cyprus",
      responsibilities: [
        "Revised and optimized SQL queries to ensure billing systems operated at full performance without critical issues.",
        "Developed new products, services, and campaigns in coordination with Customer Services and Finance departments.",
        "Performed design, analysis, and compliance checks to ensure campaigns and tariffs worked in accordance with the invoice assurance system.",
        "Monitored, developed, and improved Value Added Services devices and software."
      ],
      stack: "PL/SQL, Oracle Tools, Java, JSP, jQuery, Ajax, Python, HTML, CSS, Bash"
    },
    {
      title: "Software Engineer (Promoted from Intern)",
      company: "Günsel Electric Vehicles",
      period: "May 2021 – Aug 2023",
      location: "Cyprus",
      responsibilities: [
        "Infotainment & Architecture: Analyzed requirements and collaborated with agile cross-functional teams (designers, PMs) to build secure, safety-critical Digital Instrument Cluster (DIC) and IVI applications using Qt, QML, and Python.",
        "Leadership & Task Management: Assumed high responsibility for sharing engineering tasks within the software development team during weekly sprints. Reviewed technical proposals from tier-1 embedded device & software support suppliers.",
        "Standards Compliance: Performed feasibility logic designs, input-output flow analyses, and aligned software development with AUTOSAR and MISRA best practices."
      ],
      stack: "Qt, QML, Python, C++, JavaScript, PyQt, Bash, GitLab, Jira"
    },
    {
      title: "Independent Remote Software Contractor",
      company: "",
      period: "Mar 2022 – Aug 2024",
      location: "Global",
      responsibilities: [
        "Wallmer Promotion Ltd. (PHP/Laravel): Developed a complete web application using PHP, Laravel, and Statamic CMS; designed the frontend from UI/UX mockups with Tailwind CSS; deployed on Ubuntu server with Docker Compose.",
        "ArabanaGelsin (Python/Django): Developed and scaled the Django Rest Framework backend for mobile and web apps, optimizing database logic with PostgreSQL, Redis, and Celery.",
        "Bluedot (AWS/Serverless PHP): Designed scalable REST APIs and migrated a legacy backend from a remote Ubuntu server to AWS Lambda using Bref CLI and Serverless framework to improve response latencies.",
        "Özgür Yazılım A.Ş (Govt Project): Acted as full-stack developer optimizing performance and security for a Django application used by Turkey's Ministry of Commerce; successfully migrated the project core from Django 2 to 3.",
        "Budapest University of Technology and Economics (ML/DevOps): Supported machine learning-based production forecasting for solar energy systems; managed Docker containers, Kubernetes orchestration, and RabbitMQ messaging pipelines."
      ],
      stack: "PHP, Laravel, Django, Python, AWS Lambda, Docker, Kubernetes, PostgreSQL, Redis"
    },
    {
      title: "Early Career: Remote Internships & Contracts",
      company: "",
      period: "Jan 2020 – Jan 2022",
      location: "",
      responsibilities: [
        "Fikrimuhal Technology (İstanbul): Implemented API endpoints for web scrapers using Node.js and TypeScript, contributing to the company's data processing pipeline with Docker and CI/CD via GitHub Actions.",
        "MyChariti (London, UK): Developed and integrated key components of the user authentication system using Django and OAuth; deployed via Heroku with CI/CD best practices.",
        "YesilScience (İstanbul): Developed and maintained backend architecture ensuring fast, reliable data transfer between a mobile app and server within a 70-person team.",
        "Apziva (Ankara): Built multiple projects using Django and FastAPI, emphasizing REST API design, software design patterns, and Docker-based deployments.",
        "Yapay Zeka Akademi (İstanbul): Developed a web application with NLP-based word extraction from 50+ Facebook/WhatsApp groups using Python, Selenium, and asyncio; deployed to production on Ubuntu server.",
        "Yazılım Atölyesi Akademi (Ankara): Contributed to a large-scale mobile learning app; built an admin panel, content management system, and web scraping pipelines for the news section using Flutter, Django, and Firebase."
      ],
      stack: "Django, FastAPI, Node.js, TypeScript, Flutter, Firebase, Docker"
    }
  ];

  const visibleExperiences = showAll ? experiences : experiences.slice(0, VISIBLE_COUNT);
  const hiddenCount = experiences.length - VISIBLE_COUNT;

  return (
    <section className="py-20" id="experience">
      <AnimatedSection>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="section-heading text-3xl sm:text-4xl font-bold">Professional Experience</h2>
          </div>
          <AnimatedSection stagger staggerDelay={150} direction="up" className="timeline-container">
            {visibleExperiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <span className={index === 0 ? 'timeline-dot timeline-dot-active' : 'timeline-dot'} />
                <div className="glass-card rounded-xl p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-zinc-50">{exp.title}</h3>
                      {exp.company && (
                        <p className="text-lg sm:text-xl text-green-400">{exp.company}</p>
                      )}
                    </div>
                    <div className="sm:text-right text-zinc-500 text-sm sm:text-base flex flex-col gap-1">
                      <div className="flex items-center gap-2 sm:justify-end">
                        <p>{exp.period}</p>
                        {index === 0 && (
                          <Badge className="bg-green-500/10 text-green-400 border-green-500/30">Present</Badge>
                        )}
                      </div>
                      {exp.location && <p>{exp.location}</p>}
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-zinc-400 mb-4 text-sm sm:text-base">
                    {exp.responsibilities.map((resp, idx) => {
                      const colonIndex = resp.indexOf(':');
                      if (colonIndex > 0 && colonIndex < 60) {
                        return (
                          <li key={idx}>
                            <strong className="text-zinc-200">{resp.slice(0, colonIndex)}</strong>
                            {resp.slice(colonIndex)}
                          </li>
                        );
                      }
                      return <li key={idx}>{resp}</li>;
                    })}
                  </ul>
                  <Separator className="bg-white/10 my-4" />
                  <div>
                    <p className="text-sm text-zinc-500 mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.split(', ').map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-green-500/10 text-green-400 hover:bg-green-500/20 border-green-500/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedSection>

          {!showAll && hiddenCount > 0 && (
            <div className="flex justify-center mt-8">
              <Button
                variant="outline"
                onClick={() => setShowAll(true)}
                className={cn(
                  "border-green-500/30 text-green-400 hover:bg-green-500/10",
                  "transition-all hover:scale-105 transform gap-2"
                )}
              >
                <ChevronDown className="w-4 h-4" />
                Show {hiddenCount} earlier roles
              </Button>
            </div>
          )}
        </div>
      </AnimatedSection>
    </section>
  );
}