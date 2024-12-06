import { GraduationCap } from 'lucide-react';

export function Education() {

  const education = [
    {
      title: "BSc. Software Engineering",
      institution: "Near East University",
      period: "Sep 2019 - Jan 2023",
      location: "Nicosia, Cyprus",
      description: "Near East Boulevard, ZIP: 99138, Nicosia Cyprus"
    },
    {
      title: "Master Degree MTech in Information Technology",
      institution: "Eastern Mediterranean University",
      period: "Sep 2023 - Jan 2025",
      location: "Famagusta, Cyprus",
      description: "Famagusta, Cyprus"
    }
  ];
  return (
    <section className="py-20" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-800/70 transition-colors">

          {education.map((edu) => (
            <div className="flex items-start gap-4 mt-4">
              <div className="bg-blue-500/10 p-3 rounded-lg">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400">{edu.title}</h3>
                    <p className="text-xl text-gray-300">{edu.institution}</p>
                  </div>
                  <div className="text-right text-gray-400">
                    <p>{edu.period}</p>
                    <p>{edu.location}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}