export default function Contact(){
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Vamos Trabalhar Juntos?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Estou sempre aberto a novos desafios e oportunidades. Entre em contato para discutirmos seu próximo projeto.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="fade-in">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Informações de Contato</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <a href="mailto:joao.silva@email.com" className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl">📧</div>
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <p className="text-gray-600">joao.silva@email.com</p>
                </div>
              </a>
              <a href="tel:+5511999999999" className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-xl">📱</div>
                <div>
                  <p className="font-medium text-gray-800">Telefone</p>
                  <p className="text-gray-600">+55 (11) 99999-9999</p>
                </div>
              </a>
              <a href="https://linkedin.com/in/joaosilva" target="_blank" className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-xl">💼</div>
                <div>
                  <p className="font-medium text-gray-800">LinkedIn</p>
                  <p className="text-gray-600">linkedin.com/in/joaosilva</p>
                </div>
              </a>
              <a href="https://github.com/joaosilva" target="_blank" className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 text-xl">🐙</div>
                <div>
                  <p className="font-medium text-gray-800">GitHub</p>
                  <p className="text-gray-600">github.com/joaosilva</p>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
