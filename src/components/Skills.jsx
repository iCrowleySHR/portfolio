import { frontend, backend } from '../data/skills';

export default function Skills(){
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Habilidades Técnicas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Domino uma ampla gama de tecnologias modernas para desenvolvimento web completo.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="fade-in">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">Frontend</h3>
            <div className="space-y-6">
              {frontend.map((f,i)=>(
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">{f.name}</span>
                    <span className="text-gray-500">{f.value}</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full skill-bar" data-width={f.value} style={{width: f.value}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">Backend</h3>
            <div className="space-y-6">
              {backend.map((b,i)=>(
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">{b.name}</span>
                    <span className="text-gray-500">{b.value}</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div className="bg-green-600 h-3 rounded-full skill-bar" data-width={b.value} style={{width: b.value}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
