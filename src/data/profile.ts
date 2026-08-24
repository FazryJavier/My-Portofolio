// Central profile data — edit here to update name, bio, contact & social links.

export const profile = {
  name: 'Fazry Javier Nugraha',
  shortName: 'Javier',
  // Rotated by the typing effect in the hero.
  roles: ['Web Developer', 'Backend Developer', 'ERP Developer'],
  role: 'Web Developer',

  heroBio:
    "I'm an Informatics graduate from the National Institute of Technology Bandung, now working as a Programmer Staff. I enjoy building web applications and exploring new ways to create impactful digital experiences.",

  aboutBio:
    'I am an Informatics graduate from the National Institute of Technology Bandung, currently working as a Programmer Staff. My work focuses on developing and maintaining ERP systems, as well as creating features and menus that enhance user experience and improve workflow efficiency. With prior experience in web development projects and an internship building a dynamic content management system, I have developed strong technical and problem-solving skills. I am passionate about building practical digital solutions that make systems more intuitive and efficient, and always eager to learn new technologies.',

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
