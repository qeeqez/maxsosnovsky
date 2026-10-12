import {HeadContent, Scripts, createRootRoute} from "@tanstack/react-router";

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
  {title: "Max Sosnovsky"},
  {name: "theme-color", content: "#0f2027"},
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
        description: "Personal website and developer portfolio.",
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
    <main>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a href="/">Back to Home</a>
    </main>
  );
}

function RootDocument({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
