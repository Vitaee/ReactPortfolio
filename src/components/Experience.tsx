

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
      company: "Freelance",
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
    },
    {
      title: "Part-time Software Engineer",
      company: "Budapest University of Technology and Economics",
      period: "Apr 2023 - Aug 2023",
      location: "Budapest, Hungary remote",
      responsibilities: [
        "Supporting machine learning-based production forecasting method for a company that operates solar systems.",
        "Writing clean, high-quality, high-performance, maintainable code.",
        "Developing and supporting software including applications, database integration, APIs, and new functionality enhancements.",
        "Managing and prepparing docker containers, database queries, logging and error handling, database designs and documentations."
      ],
      stack: "Django, Python, Docker, Kubernetes, RabbitMQ, Redis, MySQL, OpenVPN"
    },
    {
      title: "Software Engineer",
      company: "Gunsel Electric Vehicles",
      period: "May 2021 - Aug 2023",
      location: "Nicosia, Cyprus",
      responsibilities: [
        "Developing, maintaining, and documenting Digital Instrument Cluster application development. Highly responsible on front-end part.",
        "Developed demo applications for both DIC and IVI according to new designed UIs which prepared by the design team.",
        "Analyzing Software Requirements and meet up with design teams, project managers, and homologation teams to build High performance secure, safety-critical, and human-friendly Infotainment cluster applications.",
        "Doing weekly meetings with software team to achieve infotainment cluster and IVI-related software applications with Agile methodologies. Highly responsible for sharing tasks between software developers in the team.",
        "Reviewing technical proposals from tier-1 embedded device & software support suppliers.",

      ],
      stack: "QT, QML, QTest, QT Creator, QT Design Studio, JavasScript, Bash, Python, Gitlab, Jira",
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