/**
 * Technology icons for the Stack column and featured-card chips.
 * Brand marks come from Simple Icons (CC0, https://simpleicons.org); AWS and Slack, which
 * Simple Icons doesn't carry, come from svgl (https://svgl.app) in src/icons/.
 * Everything is drawn in currentColor so the icons stay quiet and follow the theme.
 */
import {
  siAndroid, siApacheecharts, siAtlassian, siClaude, siCloudflare, siDocker,
  siGithubactions, siGraphql, siHuggingface, siIos, siJavascript, siKoa, siModelcontextprotocol,
  siNextdotjs, siNodedotjs, siOpsgenie, siPostgresql, siPython, siReact, siRedis, siShopify,
  siSplunk, siSupabase, siTypescript, siVitest, siVuedotjs,
} from 'simple-icons';
import awsRaw from '../icons/aws.svg?raw';
import slackRaw from '../icons/slack.svg?raw';

export interface Tech {
  title: string;
  /** Inner SVG markup (paths only, no fills). Missing = drawn as a small text badge. */
  body?: string;
  viewBox?: string;
}

/** True when the tech has a real logo; otherwise it renders as a boxed name. */
export const hasLogo = (t: Tech) => Boolean(t.body);

type SimpleIcon = { title: string; path: string };
const si = (icon: SimpleIcon, title = icon.title): Tech => ({
  title,
  body: `<path d="${icon.path}"/>`,
  viewBox: '0 0 24 24',
});

/** Turn a downloaded multi-colour SVG into a single-colour one. */
const raw = (svg: string, title: string): Tech => ({
  title,
  viewBox: svg.match(/viewBox="([^"]+)"/)?.[1] ?? '0 0 24 24',
  body: svg
    .replace(/^[\s\S]*?<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .replace(/\sfill="[^"]*"/g, ''),
});

export const TECH = {
  react: si(siReact),
  reactnative: si(siReact, 'React Native'),
  typescript: si(siTypescript),
  javascript: si(siJavascript),
  nextjs: si(siNextdotjs),
  vue: si(siVuedotjs),
  graphql: si(siGraphql),
  nodejs: si(siNodedotjs),
  koa: si(siKoa),
  python: si(siPython),
  // The FastAPI bolt is unreadable at 16px in one colour, so it gets a text badge.
  fastapi: { title: 'FastAPI' },
  postgresql: si(siPostgresql),
  supabase: si(siSupabase),
  redis: si(siRedis),
  docker: si(siDocker),
  cloudflare: si(siCloudflare),
  githubactions: si(siGithubactions),
  echarts: si(siApacheecharts, 'ECharts'),
  vitest: si(siVitest),
  shopify: si(siShopify),
  ios: si(siIos),
  android: si(siAndroid),
  rovo: si(siAtlassian, 'Atlassian Rovo'),
  opsgenie: si(siOpsgenie),
  splunk: si(siSplunk),
  // SignalFx is now Splunk Observability; no SVG of the old SignalFx mark is published.
  signalfx: si(siSplunk, 'SignalFx (Splunk)'),
  mcp: si(siModelcontextprotocol, 'MCP'),
  claude: si(siClaude),
  whisper: si(siHuggingface, 'faster-whisper'),
  aws: raw(awsRaw, 'AWS'),
  slack: raw(slackRaw, 'Slack'),
  statsig: { title: 'Statsig' },
} satisfies Record<string, Tech>;

export type TechKey = keyof typeof TECH;
