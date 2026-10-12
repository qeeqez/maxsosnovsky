import aboutContent from "./about.md?raw";
import indexContent from "./index.md?raw";

export interface MarkdownPage {
  readonly path: string;
  readonly markdownPath: string;
  readonly title: string;
  readonly description: string;
  readonly content: string;
}

export const PAGES: readonly MarkdownPage[] = [
  {
    path: "/",
    markdownPath: "/index.md",
    title: "Home",
    description: "TanStack Start Base Template overview and features.",
    content: indexContent,
  },
  {
    path: "/about",
    markdownPath: "/about.md",
    title: "About",
    description: "About this starter, tech stack, and architecture.",
    content: aboutContent,
  },
] as const;

export function getPageByMarkdownPath(path: string): MarkdownPage | undefined {
  return PAGES.find((p) => p.markdownPath === path);
}

export function getPageByPath(path: string): MarkdownPage | undefined {
  return PAGES.find((p) => p.path === path);
}

export function generateLlmsTxt(siteUrl: string): string {
  const pageEntries = PAGES.map((p) => `- [${p.title}](${siteUrl}${p.markdownPath}): ${p.description}`).join("\n");

  return `# Max Sosnovsky

> Personal website and developer portfolio built with TanStack Start.

## Pages
${pageEntries}

## Full Documentation
- [Full Site Markdown](${siteUrl}/llms-full.txt): Complete site content in a single consolidated document for LLMs.
`;
}

export function generateLlmsFullTxt(siteUrl: string): string {
  const sections = PAGES.map((page) => {
    return `---
## Page: ${page.title}
- Path: ${siteUrl}${page.path}
- Markdown: ${siteUrl}${page.markdownPath}

${page.content.trim()}
`;
  });

  return `# Max Sosnovsky - Full Documentation

> Complete site content consolidated for LLMs and AI context windows.
> Base URL: ${siteUrl}

${sections.join("\n")}`;
}
