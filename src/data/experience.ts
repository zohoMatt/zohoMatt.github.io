import { CONFLUENCE, NIO, SEEL } from './projects';

const TSINGHUA = {
  school: 'Tsinghua University',
  place: 'Beijing',
  href: 'https://www.tsinghua.edu.cn/en/',
  /** Emblem from Wikimedia Commons: File:Tsinghua_University_Logo.svg */
  emblem: '/tsinghua.svg',
};

export const education = [
  { ...TSINGHUA, degree: 'Master of Engineering', start: '2014', end: '2017' },
  { ...TSINGHUA, degree: 'Bachelor of Engineering', start: '2010', end: '2014' },
];

export const experience = [
  {
    when: '2022 – 26',
    org: 'Atlassian',
    href: CONFLUENCE,
    title: 'Senior Frontend Software Engineer',
    note: 'Confluence Cloud permissions; frontend tech lead for RBAC',
  },
  {
    when: '2021 – 22',
    org: 'Seel',
    href: SEEL,
    title: 'Software Engineer',
    note: 'Lead engineer at a Series A startup, frontend and backend',
  },
  {
    when: '2018 – 19',
    org: 'Ape Tutor (Yuanfudao)',
    title: 'Lead Software Engineer',
    note: 'Led a 6-person full-stack web team',
  },
  {
    when: '2017 – 18',
    org: 'NIO',
    href: NIO,
    title: 'Software Engineer',
    note: 'Vehicle management tools and in-car update service',
  },
] as { when: string; org: string; href?: string; title: string; note: string }[];
