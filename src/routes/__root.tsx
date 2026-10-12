import {HeadContent, Scripts, createRootRoute} from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import appCss from "../styles.css?url";

const SITE_URL = process.env.SITE_URL || "https://maxsosnovsky.com";

const CSP_DIRECTIVES = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  "connect-src 'self'",
].join("; ");

const ROOT_META = [
  {charSet: "utf-8"},
  {name: "viewport", content: "width=device-width, initial-scale=1"},
  {title: "Max Sosnovsky — Founder & CEO"},
  {name: "description", content: "Personal website, projects, and work of Max Sosnovsky."},
  {name: "theme-color", content: "#09090b"},
  {name: "robots", content: "index, follow"},
  {"http-equiv": "Content-Security-Policy", content: CSP_DIRECTIVES},
];

const ROOT_LINKS = [
  {rel: "icon", href: "/favicon.ico", sizes: "32x32"},
  {rel: "icon", type: "image/svg+xml", href: "/favicon.svg"},
  {rel: "icon", type: "image/png", href: "/icon.png"},
  {rel: "apple-touch-icon", href: "/apple-icon.png"},
  {rel: "mask-icon", href: "/mask-icon.svg", color: "#000000"},
  {rel: "manifest", href: "/manifest.json"},
  {rel: "stylesheet", href: appCss},
  {rel: "sitemap", type: "application/xml", href: "/sitemap.xml"},
  {rel: "alternate", type: "text/plain", href: "/llms.txt", title: "LLMs.txt"},
  {rel: "alternate", type: "text/plain", href: "/llms-full.txt", title: "LLMs-full.txt"},
];

function buildCanonicalUrl(pathname: string): string {
  const normalized = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return `${SITE_URL}${normalized === "/" ? "/" : normalized}`;
}

function buildStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Max Sosnovsky",
        description: "Personal website, projects, and work of Max Sosnovsky.",
        publisher: {
          "@id": `${SITE_URL}/#person`,
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Max Sosnovsky",
        url: SITE_URL,
        sameAs: ["https://github.com/qeeqez"],
      },
    ],
  };

  return JSON.stringify(structuredData);
}

export const Route = createRootRoute({
  head: ({matches}) => {
    const pathname = matches[matches.length - 1]?.pathname ?? "/";
    const canonicalUrl = buildCanonicalUrl(pathname);

    return {
      meta: ROOT_META,
      links: [{rel: "canonical", href: canonicalUrl}, ...ROOT_LINKS],
      scripts: [
        {
          type: "application/ld+json",
          children: buildStructuredData(),
        },
      ],
    };
  },
  notFoundComponent: NotFound,
  shellComponent: RootDocument,
});

function NotFound() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">404 - Page Not Found</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">The page you are looking for does not exist.</p>
      <a
        href="/"
        className="mt-6 inline-block rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white dark:bg-zinc-100 dark:text-zinc-900"
      >
        Back to Home
      </a>
    </main>
  );
}

function RootDocument({children}: {readonly children: React.ReactNode}) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-white text-zinc-900 antialiased selection:bg-zinc-200 dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-zinc-800">
        <Navbar />
        <main className="mx-auto max-w-4xl px-6">{children}</main>
        <div className="mx-auto max-w-4xl px-6">
          <Footer />
        </div>
        <Scripts />
      </body>
    </html>
  );
}
