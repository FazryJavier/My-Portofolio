// Skills / tech stack shown in the Skills section.
// `icon` uses Iconify simple-icons (astro-icon). Set to null if no brand icon exists.

export interface Skill {
  name: string;
  icon: string | null;
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: [
      { name: 'TypeScript', icon: 'simple-icons:typescript' },
      { name: 'JavaScript', icon: 'simple-icons:javascript' },
      { name: 'PHP', icon: 'simple-icons:php' },
      { name: 'Python', icon: 'simple-icons:python' },
      { name: 'SQL', icon: 'simple-icons:postgresql' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'Laravel', icon: 'simple-icons:laravel' },
      { name: 'Next.js', icon: 'simple-icons:nextdotjs' },
      { name: 'Vue', icon: 'simple-icons:vuedotjs' },
      { name: 'Astro', icon: 'simple-icons:astro' },
      { name: 'FastAPI', icon: 'simple-icons:fastapi' },
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
    ],
  },
  {
    title: 'Tools & Databases',
    items: [
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
      { name: 'MySQL', icon: 'simple-icons:mysql' },
      { name: 'Docker', icon: 'simple-icons:docker' },
      { name: 'Git', icon: 'simple-icons:git' },
      { name: 'GitHub', icon: 'simple-icons:github' },
    ],
  },
];
