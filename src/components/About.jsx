export default function About(){
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre Mim</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Sou um desenvolvedor full stack apaixonado por criar experiências digitais excepcionais.
              Com mais de 5 anos de experiência, trabalho com as tecnologias mais modernas do mercado.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Minha missão é transformar ideias complexas em soluções simples e eficientes,
              sempre focando na experiência do usuário e na qualidade do código.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">React</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Node.js</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">TypeScript</span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">Python</span>
            </div>
          </div>
          <div className="fade-in">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Experiência</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold text-gray-800">Senior Full Stack Developer</h4>
                  <p className="text-gray-600">TechCorp • 2022 - Presente</p>
                  <p className="text-sm text-gray-500 mt-2">Liderança técnica em projetos de grande escala</p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-semibold text-gray-800">Full Stack Developer</h4>
                  <p className="text-gray-600">StartupXYZ • 2020 - 2022</p>
                  <p className="text-sm text-gray-500 mt-2">Desenvolvimento de aplicações web modernas</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-semibold text-gray-800">Frontend Developer</h4>
                  <p className="text-gray-600">WebAgency • 2019 - 2020</p>
                  <p className="text-sm text-gray-500 mt-2">Criação de interfaces responsivas e interativas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
