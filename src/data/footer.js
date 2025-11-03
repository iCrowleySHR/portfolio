import { profile } from "./profile";

export const footer = {
  ...profile, 

  social: [
    {
      icon: "💼",
      label: "LinkedIn",
      href: "https://linkedin.com/in/joaosilva",
    },
    {
      icon: "🐙",
      label: "GitHub",
      href: "https://github.com/joaosilva",
    },
    {
      icon: "📧",
      label: "Email",
      href: "mailto:joao.silva@email.com",
    },
    {
      icon: "📱",
      label: "WhatsApp",
      href: "https://wa.me/5511999999999",
    },
  ],

  copyright: `© ${new Date().getFullYear()} ${profile.name}. Todos os direitos reservados.`,
};
