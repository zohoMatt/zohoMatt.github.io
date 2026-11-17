import type { Layer } from './profile';
import type { TechKey } from './tech';

// Public product pages for work done at companies.
export const CONFLUENCE = 'https://www.atlassian.com/software/confluence';
export const SEEL = 'https://apps.shopify.com/return-assurance';
export const NIO = 'https://www.nio.com/';

export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  /** Year shown in the index. Atlassian project years are estimates: TODO verify. */
  year: number;
  title: string;
  summary: string;
  context: string;
  role: string;
  /** Which parts of the system I worked on; drives the Interface / Services filters. */
  layers: Layer[];
  /** Technologies used, most important first. Shown as icons (Stack column) and chips. */
  tech: TechKey[];
  /** 'tool' = utilities and agents, shown under the Tools filter. */
  kind?: 'tool';
  impact: string;
  href?: string;
  featured?: {
    order: number;
    period: string;
    title: string;
    description: string;
    metrics: Metric[];
    diagram?: 'rbac';
    linkLabel?: string;
  };
}

export const projects: Project[] = [
  {
    slug: 'zen-studio',
    year: 2026,
    title: 'Zen Studio',
    summary: 'Scientific computing platform for water-treatment modeling',
    context: 'Personal',
    role: 'Creator',
    layers: ['ui', 'api', 'svc', 'data', 'infra'],
    tech: ['react', 'typescript', 'fastapi', 'python', 'postgresql', 'docker'],
    impact: 'Live · NC State research',
    href: 'https://zenstudio.bid',
    featured: {
      order: 3,
      period: '2020 – now',
      title: 'Zen Studio: water-treatment modeling on the web',
      description:
        'A platform around psdm, an open-source PDE solver on PyPI, supporting an NC State research team. Heavy simulations run in an isolated process pool with live progress, cancellation and interactive breakthrough curves.',
      metrics: [
        { value: 'PDE', label: 'fixed-bed adsorption solver' },
        { value: 'Live', label: 'launched Oct 2026' },
      ],
      linkLabel: 'Visit ↗',
    },
  },
  {
    slug: 'audio-notes',
    year: 2026,
    title: 'Audio Notes',
    summary: 'Local meeting transcripts that Claude reads over MCP',
    context: 'Open source',
    role: 'Creator',
    layers: ['ui', 'api', 'svc', 'infra'],
    tech: ['python', 'whisper', 'mcp', 'claude'],
    kind: 'tool',
    impact: 'Audio never leaves the PC',
    href: 'https://github.com/zohoMatt/audio-notes',
    featured: {
      order: 4,
      period: '2026',
      title: 'Audio Notes: let Claude listen in on your meetings',
      description:
        'A tray app that captures system audio and microphone, transcribes both locally with faster-whisper on the CPU, and hands the transcript to Claude through an MCP server. Audio never leaves the machine; Claude sees only the lines it reads when you ask.',
      metrics: [
        { value: 'Local', label: 'audio & transcripts' },
        { value: '4', label: 'MCP tools for Claude' },
        { value: '1-click', label: 'install & connect' },
      ],
      linkLabel: 'GitHub ↗',
    },
  },
  {
    slug: 'job-alert',
    year: 2026,
    title: 'Job Alert',
    summary: 'Watches 7 ATS job boards and reports new matching roles',
    context: 'Open source',
    role: 'Creator',
    layers: ['svc', 'data'],
    tech: ['typescript', 'nodejs', 'vitest'],
    kind: 'tool',
    impact: 'Greenhouse, Lever, Workday +4',
    href: 'https://github.com/zohoMatt/job-alert',
  },
  {
    slug: 'confluence-mobile',
    year: 2025,
    title: 'Confluence mobile',
    summary: 'React Native update with staged, hypothesis-driven rollouts',
    context: 'Atlassian',
    role: 'Frontend',
    layers: ['ui', 'infra'],
    tech: ['reactnative', 'typescript', 'ios', 'android', 'statsig'],
    impact: 'Shipped iOS + Android',
    href: CONFLUENCE,
  },
  {
    slug: 'rovo-slack-agent',
    year: 2025,
    title: 'Rovo agent in Slack',
    summary: 'AI agent for tribal-knowledge Q&A, scheduling and agendas',
    context: 'Atlassian',
    role: 'Builder',
    layers: ['svc'],
    tech: ['rovo', 'slack'],
    kind: 'tool',
    impact: 'Automated team Q&A',
  },
  {
    slug: 'confluence-rbac',
    year: 2024,
    title: 'Confluence RBAC',
    summary: 'Role model replacing a legacy permission matrix',
    context: 'Atlassian',
    role: 'Frontend tech lead',
    layers: ['ui', 'api', 'infra'],
    tech: ['react', 'typescript', 'graphql', 'statsig', 'signalfx', 'opsgenie'],
    impact: '1000s of tenants · 99% SLO',
    href: CONFLUENCE,
    featured: {
      order: 1,
      period: '2024 – 26',
      title: 'Role-based access control for Confluence Cloud',
      description:
        'Confluence’s most significant permissions redesign: a role model replacing a legacy matrix with ~1,000 real-world permission combinations. I wrote the tech spec, drove architecture review with staff architects, shaped the GraphQL schema with backend and coordinated ~10 engineers across squads.',
      metrics: [
        { value: '~1,000', label: 'permission combos → roles' },
        { value: '1000s', label: 'tenants, gated rollout' },
        { value: '99%', label: 'reliability SLO' },
      ],
      diagram: 'rbac',
      linkLabel: 'Confluence ↗',
    },
  },
  {
    slug: 'space-permissions',
    year: 2023,
    title: 'Space permissions rebuild',
    summary: 'Server-rendered page → React / TypeScript SPA',
    context: 'Atlassian',
    role: 'Frontend lead',
    layers: ['ui', 'api'],
    tech: ['react', 'typescript'],
    impact: 'Saves 2–30s → <100ms',
    href: CONFLUENCE,
    featured: {
      order: 2,
      period: '2023',
      title: 'Space permissions, rebuilt as an SPA',
      description:
        'Replaced a slow server-rendered page with a React/TypeScript SPA and fixed a years-long user pain point. Its component architecture became the foundation for RBAC.',
      metrics: [
        { value: '<100ms', label: 'saves, down from 2–30s' },
        { value: '~14k', label: 'saves per day' },
      ],
      linkLabel: 'Confluence ↗',
    },
  },
  {
    slug: 'space-access-request',
    year: 2023,
    title: 'Space access requests',
    summary: 'Invite-link identity verified client-side, admin approval UI',
    context: 'Atlassian',
    role: 'Driver',
    layers: ['ui'],
    tech: ['react', 'typescript'],
    impact: '100–300 requests / day',
    href: CONFLUENCE,
  },
  {
    slug: 'seel-shopify-app',
    year: 2021,
    title: 'Return-insurance Shopify app',
    summary: 'Checkout widget plus OAuth merchant onboarding service',
    context: 'Seel · Series A',
    role: 'Lead engineer',
    layers: ['ui', 'api', 'svc'],
    tech: ['shopify', 'react', 'typescript'],
    impact: '100+ merchants · 10K+ DAU',
    href: SEEL,
  },
  {
    slug: 'seel-platform',
    year: 2021,
    title: 'Seel platform from scratch',
    summary: 'Next.js SSR, merchant dashboard, partner tools, CI/CD',
    context: 'Seel · Series A',
    role: 'Lead engineer',
    layers: ['ui', 'api', 'svc', 'infra'],
    tech: ['nextjs', 'react', 'typescript'],
    impact: 'Site live in 3 weeks',
    href: SEEL,
  },
  {
    slug: 'course-marketplace',
    year: 2018,
    title: 'Course marketplace',
    summary: 'Mobile payment SDKs and social OAuth login',
    context: 'Ape Tutor',
    role: 'Led 6-person team',
    layers: ['ui', 'api', 'svc'],
    tech: ['vue', 'javascript', 'nodejs', 'koa'],
    impact: '1.2M+ active users',
  },
  {
    slug: 'ad-platform',
    year: 2018,
    title: 'Social ad management platform',
    summary: 'Vue / TypeScript with Node.js, Koa and Redis',
    context: 'Ape Tutor',
    role: 'Architect',
    layers: ['ui', 'api', 'svc', 'data'],
    tech: ['vue', 'typescript', 'nodejs', 'koa', 'redis'],
    impact: '80K+ DAU',
  },
  {
    slug: 'nio-manual-updates',
    year: 2017,
    title: 'In-car manual update service',
    summary: 'Diff algorithm for incremental patches delivered via AWS',
    context: 'NIO',
    role: 'Engineer',
    layers: ['svc', 'infra'],
    tech: ['nodejs', 'aws'],
    impact: 'Incremental OTA patches',
    href: NIO,
  },
];

export const featured = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.featured!.order - b.featured!.order);
