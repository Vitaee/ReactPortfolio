import { UserCheck } from 'lucide-react';

export function Recommendations() {
  const recommendations = [
    {
      name: "Philip Treleaven",
      title: "UCL Professor of Computing",
      contact: {
        email: "p.treleaven@ucl.ac.uk",
        link: "https://docdro.id/Cd8fmlR",
      },
    },
    {
      name: "Yakup Beyoğlu",
      title: "Embedded Linux Software Engineer",
      description: "Worked together at Gunsel Electric Vehicle company",
      contact: {
        email: "yakupbeyoglu@gmail.com",
        phone: "",
      },
    },
  ];

  return (
    <section className="py-20" id="recommendations">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Recommendations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {recommendations.map((rec, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="bg-green-500/10 p-3 rounded-lg">
                  <UserCheck className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400">{rec.name}</h3>
                  <p className="text-gray-300 mb-4">{rec.title}</p>
                  {rec.description && (
                    <p className="text-gray-400 text-sm mb-4">{rec.description}</p>
                  )}
                  <div className="space-y-2">
                    {rec.contact.email && (
                      <a 
                        href={`mailto:${rec.contact.email}`}
                        className="block text-sm text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        {rec.contact.email}
                      </a>
                    )}
                    {rec.contact.phone && (
                      <p className="text-sm text-gray-400">{rec.contact.phone}</p>
                    )}
                    {rec.contact.link && (
                      <a 
                        href={rec.contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        View Recommendation Letter
                      </a>
                    )}
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