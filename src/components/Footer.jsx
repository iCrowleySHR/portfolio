import { footer } from "../data/footer";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">{footer.name}</h3>
        <p className="text-gray-400 mb-6">
          {footer.title} • {footer.description}
        </p>

        <div className="flex justify-center space-x-6 mb-8">
          {footer.social.map((s, i) => (
            <a
              key={i}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-2xl"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p className="text-gray-500 text-sm">{footer.copyright}</p>
      </div>
    </footer>
  );
}
