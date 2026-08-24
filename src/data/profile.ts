// Central profile data — edit here to update name, bio, contact & social links.

export const profile = {
  name: 'Fazry Javier Nugraha',
  shortName: 'Javier',
  // Rotated by the typing effect in the hero.
  roles: ['Fullstack Engineer', 'Frontend Developer', 'Backend Developer'],
  role: 'Fullstack Engineer',

  heroBio:
    "I'm a Fullstack Engineer at GITS Indonesia, building end-to-end web apps across frontend, backend, and APIs. Informatics graduate from ITENAS Bandung — currently exploring AI Agents to make engineering work smarter.",

  aboutBio:
    "I'm a Fullstack Engineer at GITS Indonesia, where I build complete web solutions end to end — frontend, backend, REST APIs, and system integration. Along the way I've shipped frontend and backend systems, CMS platforms, and ERP applications, which taught me to balance clean user experience with reliable engineering. Lately I've been diving into AI Agents, exploring how they can automate and simplify day-to-day work. I love turning ideas into practical, intuitive products, and I'm always learning something new.",

  location: 'Bandung, Indonesia',
  email: 'fazryjavier125@gmail.com',
  phone: '085862855310',
  cv: '/cv/CV-Fazry.pdf',

  social: {
    whatsapp: 'https://wa.me/6285862855310',
    linkedin: 'https://linkedin.com/in/fazryjaviernugraha',
    x: 'https://x.com/JavierFazry',
    instagram: 'https://www.instagram.com/fazryjavier/',
    github: 'https://github.com/FazryJavier',
  },
} as const;

// Icon names use Iconify's simple-icons set (astro-icon).
export const socialLinks = [
  { label: 'WhatsApp', href: profile.social.whatsapp, icon: 'simple-icons:whatsapp' },
  { label: 'LinkedIn', href: profile.social.linkedin, icon: 'simple-icons:linkedin' },
  { label: 'X (Twitter)', href: profile.social.x, icon: 'simple-icons:x' },
  { label: 'Instagram', href: profile.social.instagram, icon: 'simple-icons:instagram' },
  { label: 'GitHub', href: profile.social.github, icon: 'simple-icons:github' },
] as const;
