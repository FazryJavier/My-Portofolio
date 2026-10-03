// Central profile data — edit here to update name, bio, contact & social links.

export const profile = {
  name: 'Fazry Javier Nugraha',
  shortName: 'Javier',
  role: 'Fullstack Engineer',

  heroBio:
    "I'm a fullstack engineer based in Bandung, working across frontend, backend, APIs, and content workflows. I care about the decisions that make a system reliable behind the scenes and clear to use in front of people.",

  aboutBio:
    "I'm a fullstack engineer at GITS Indonesia. My work has moved between CMS platforms, backend services, data-heavy interfaces, and system integrations. I like starting with the workflow behind the screen—what needs to happen, who maintains it, and where hand-offs can fail—then turning that into an interface people can use without a manual. Recently, I've been exploring AI agents as a practical way to reduce repetitive engineering work.",

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
