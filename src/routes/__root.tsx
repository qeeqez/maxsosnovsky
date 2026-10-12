import {HeadContent, Link, Scripts, createRootRoute} from "@tanstack/react-router";
import {TanStackRouterDevtoolsPanel} from "@tanstack/react-router-devtools";
import {TanStackDevtools} from "@tanstack/react-devtools";
import {cn} from "cn";
import Footer from "../components/Footer";
import Header from "../components/Header";

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

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`;

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
        sameAs: ["https://github.com/qeeqez", "https://x.com/tan_stack"],
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
    <main className="page-wrap px-4 py-16 text-center">
      <h1 className="mb-4 text-4xl font-bold text-[var(--sea-ink)]">404 - Page Not Found</h1>
      <p className="mb-8 text-[var(--sea-ink-soft)]">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className={cn(
          "rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)]",
          "px-5 py-2.5 text-sm font-semibold text-[var(--lagoon-deep)] no-underline transition hover:bg-[rgba(79,184,178,0.24)]"
        )}
      >
        Back to Home
      </Link>
    </main>
  );
}

function RootDocument({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{__html: THEME_INIT_SCRIPT}} />
        <HeadContent />
      </head>
      <body className={cn("font-sans antialiased [overflow-wrap:anywhere] selection:bg-[rgba(79,184,178,0.24)]")}>
        <Header />
        {children}
        <Footer />
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
