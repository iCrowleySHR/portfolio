import { certificates } from '../data/certificates';

export default function Certificates(){
  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Certificações</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Certificações que comprovam minha expertise e compromisso com a excelência técnica.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((c, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-lg card-hover fade-in border-l-4 border-blue-500">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl">☁️</div>
                <div>
                  <h3 className="font-semibold text-gray-800">{c.title}</h3>
                  <p className="text-sm text-gray-600">{c.issuer}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-3">Certificação profissional.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Válido: {c.valid}</span>
                <a href={c.url} className="text-blue-600 text-sm font-medium hover:text-blue-700">Ver Certificado</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
