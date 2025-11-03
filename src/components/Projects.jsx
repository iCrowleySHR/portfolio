import { projects } from '../data/projects';

export default function Projects(){
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meus Projetos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas habilidades em diferentes tecnologias.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover fade-in">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl">
                {p.emoji}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{p.title}</h3>
                <p className="text-gray-600 mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.techs.map(t => <span key={t} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">{t}</span>)}
                </div>
                <div className="flex gap-3">
                  <a href={p.demo} target="_blank" className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 text-center">Ver Demo</a>
                  <a href={p.code} target="_blank" className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 text-center">Código</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
