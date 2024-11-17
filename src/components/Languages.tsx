import { Languages as LanguagesIcon } from 'lucide-react';

export function Languages() {
  const languages = [
    {
      name: "Turkish",
      type: "Mother tongue",
      level: "Native",
    },
    {
      name: "English",
      type: "Professional",
      skills: {
        listening: "C1",
        reading: "C1",
        speaking: "C1",
        interaction: "C1",
        writing: "C1",
      },
    },
  ];

  return (
    <section className="py-20" id="languages">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Languages</h2>
        <div className="space-y-6">
          {languages.map((lang, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <LanguagesIcon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">{lang.name}</h3>
                  <p className="text-gray-300">{lang.type}</p>
                </div>
              </div>
              {lang.skills && (
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                  {Object.entries(lang.skills).map(([skill, level]) => (
                    <div key={skill} className="text-center">
                      <p className="text-sm text-gray-400 capitalize mb-2">
                        {skill.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                      <div className="bg-purple-500/10 rounded-lg py-2 px-4">
                        <p className="text-purple-400 font-bold">{level}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 text-center text-sm text-gray-400">
          Levels: A1 and A2: Basic user - B1 and B2: Independent user - C1 and C2: Proficient user
        </div>
      </div>
    </section>
  );
}