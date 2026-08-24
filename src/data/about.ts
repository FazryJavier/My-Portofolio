// Structured lists for the About tabs. Add/edit entries here — no markup needed.

export interface TimelineItem {
  period: string;
  title: string;
  subtitle?: string;
  details?: string[];
}

export const education: TimelineItem[] = [
  { period: '2020 - 2025', title: 'Institut Teknologi Nasional Bandung (S1)', subtitle: 'Informatics' },
  { period: '2016 - 2019', title: 'SMAN 24 Bandung', subtitle: 'High School' },
  { period: '2013 - 2016', title: 'Labschool Junior High School' },
  { period: '2008 - 2013', title: 'Labschool Elementary School' },
];

export const experience: TimelineItem[] = [
  { period: 'Jun 2025 - Now', title: 'Staff Programmer', subtitle: 'PT Leading Garment Industries · Full Time' },
  { period: 'Jan 2025 - Jul 2025', title: 'Back End Developer', subtitle: 'GITS Indonesia · Contract' },
  { period: 'Feb 2024 - Jun 2024', title: 'Lab Assistant — OOP & Machine Learning', subtitle: 'Itenas' },
  { period: 'Jul 2023 - Nov 2023', title: 'Web Developer Intern', subtitle: 'PT Nuansa Cerah Informasi' },
  { period: 'Sep 2023 - Jan 2024', title: 'Lab Assistant — Multimedia', subtitle: 'Itenas' },
  { period: 'Feb 2023 - May 2023', title: 'Lab Assistant — Digital Image Processing', subtitle: 'Itenas' },
  { period: 'Oct 2022 - Jan 2023', title: 'Lab Assistant — Basic Programming', subtitle: 'Itenas' },
];

export const certificates: TimelineItem[] = [
  {
    period: '2024',
    title: 'Intellectual Property Rights (HKI)',
    subtitle: 'Personal Branding Application — PT Bintang Mitra Kencana',
  },
  {
    period: '2024',
    title: 'Intellectual Property Rights (HKI)',
    subtitle: 'Child Disease Data Visualization Website (West Java) — Laravel',
  },
  { period: '2022', title: 'Laravel Web Development Bootcamp', subtitle: 'Certification' },
  { period: '2021', title: 'HCIA-AI Course', subtitle: 'Certification' },
];

export const organizations: TimelineItem[] = [
  {
    period: 'Aug 2023 - May 2024',
    title: 'Himpunan Mahasiswa Informatika (HMIF)',
    details: [
      'Head of Department for Organization and Communication',
      'Event Coordinator for HMIF Kaduruk',
      'Head of the Event Division in P2M 2022',
      'Master of Ceremony in PMB Informatics 2022 Itenas',
    ],
  },
  {
    period: 'Nov 2020 - Aug 2023',
    title: 'Itenas no Nippon Kurabu (INKU)',
    details: [
      'Education Division Coordinator',
      'Director of the Japanese Language Class Event 2022',
      'Head of the Event Division in OPREC INKU 2021',
      'Member of the Event Division in INUBARA 4',
    ],
  },
];
