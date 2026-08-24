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
      { name: 'PHP', icon: 'simple-icons:php' },
      { name: 'JavaScript', icon: 'simple-icons:javascript' },
      { name: 'Python', icon: 'simple-icons:python' },
      { name: 'HTML5', icon: 'simple-icons:html5' },
      { name: 'CSS3', icon: 'simple-icons:css3' },
      { name: 'SQL', icon: 'simple-icons:mysql' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      { name: 'Laravel', icon: 'simple-icons:laravel' },
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
      { name: 'Bootstrap', icon: 'simple-icons:bootstrap' },
      { name: 'Streamlit', icon: 'simple-icons:streamlit' },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      { name: 'MySQL', icon: 'simple-icons:mysql' },
      { name: 'Git', icon: 'simple-icons:git' },
      { name: 'GitHub', icon: 'simple-icons:github' },
      { name: 'Looker Studio', icon: 'simple-icons:googledatastudio' },
      { name: 'ESP32 / IoT', icon: 'simple-icons:espressif' },
    ],
  },
];
