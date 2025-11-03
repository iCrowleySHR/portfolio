import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="gradient-bg min-h-screen flex items-center justify-center text-white pt-20 md:pt-0"
    >
      <div className="max-w-4xl mx-auto text-center px-6">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-32 h-32 mx-auto mb-8 rounded-full border-4 border-white/30 shadow-2xl object-cover"
        />

        <h1 className="text-5xl font-bold mb-4">{profile.name}</h1>
        <p className="text-2xl mb-6 text-white/90">{profile.title}</p>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
          {profile.description}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {profile.buttons.map((btn, index) => {
            const base =
              "px-8 py-3 rounded-lg font-semibold transition-colors text-center";
            const styles = {
              primary: "bg-white text-orange-600 hover:bg-gray-100",
              secondary: "bg-teal-600 text-white hover:bg-teal-700",
              outline:
                "border-2 border-white text-white hover:bg-white hover:text-orange-600",
            };

            return (
              <a
                key={index}
                href={btn.href}
                target={btn.target || "_self"}
                className={`${base} ${styles[btn.type]}`}
              >
                {btn.text}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
