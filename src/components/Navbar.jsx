import { useState } from 'react';

export default function Navbar(){
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#projects", label: "Projetos" },
    { href: "#education", label: "Formação" },
    { href: "#certificates", label: "Certificados" },
    { href: "#skills", label: "Habilidades" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold text-white">João Silva</div>

        <div className="hidden md:flex space-x-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-gray-300 hover:text-blue-400 transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <button className="md:hidden text-gray-300 p-2" onClick={() => setOpen(!open)}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-700 pb-4">
          <div className="flex flex-col space-y-3 pt-4 px-4">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
