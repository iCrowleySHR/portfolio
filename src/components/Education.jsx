import { education } from '../data/education';

export default function Education(){
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Formação Acadêmica</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Minha base educacional sólida que fundamenta minha expertise técnica.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((e, i) => (
            <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl card-hover fade-in">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0">🎓</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{e.title}</h3>
                  <p className="text-blue-600 font-medium mb-2">{e.school}</p>
                  <p className="text-gray-600 mb-3">{e.year}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{e.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.tags.map(t => <span key={t} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">{t}</span>)}
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
