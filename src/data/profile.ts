import type { Project } from './projects';

export const profile = {
  name: 'Matt Zuo',
  title: 'Senior Software Engineer',
  formerly: 'Atlassian',
  location: 'Raleigh, NC',
  email: 'mattzuo12@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mattzo/',
  /** Leave empty to hide the link. */
  github: 'https://github.com/zohoMatt',
  /** Path under /public, e.g. '/resume.pdf'. Leave empty to hide the link. */
  resume: '',

  headline: ['I build product systems,', 'from the pixel to the pipeline.'],
  lede:
    '8+ years building SaaS, fintech and online-education products. At Atlassian I led frontend for <b>Confluence’s Role-Based Access Control</b>, from technical spec to a tenant-scoped rollout across thousands of instances. On my own I build <b>full-stack</b>: most recently a scientific computing platform in React and FastAPI.',

  glance: [
    { label: 'Exp.', value: '8+ yrs · SaaS, fintech, online education' },
    { label: 'Stack', value: 'React · TypeScript · Node.js · Python' },
    { label: 'Building', value: 'Zen Studio, scientific computing on the web' },
  ],
  status: 'Open to Senior roles',

  hobbies: 'Cycling, photography, soccer, dogs and gardening.',
};

export type Layer = 'ui' | 'api' | 'svc' | 'data' | 'infra';

interface Capability {
  key: string;
  name: string;
  desc: string;
  /** Which projects this group's filter shows. */
  match: (p: Project) => boolean;
}

/** Capability groups shown under the hero; each doubles as a project filter. */
export const capabilities: Capability[] = [
  {
    key: 'ui',
    name: 'Interface',
    desc: 'React, TypeScript, Next.js, React Native, Vue. Complex admin and permission UIs',
    match: (p) => p.layers.includes('ui'),
  },
  {
    key: 'api',
    name: 'Services',
    desc: 'Node.js, Python / FastAPI, GraphQL schema design, OAuth flows',
    match: (p) => p.layers.includes('api') || p.layers.includes('svc'),
  },
  {
    key: 'tools',
    name: 'Tools',
    desc: 'MCP servers, AI agents and desktop utilities that make people faster',
    match: (p) => p.kind === 'tool',
  },
];
