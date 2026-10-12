import {HeadContent, Link, Scripts, createRootRoute} from "@tanstack/react-router";
import {TanStackRouterDevtoolsPanel} from "@tanstack/react-router-devtools";
import {TanStackDevtools} from "@tanstack/react-devtools";
import {cn} from "cn";
import Footer from "../components/Footer";
import Header from "../components/Header";

import appCss from "../styles.css?url";

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Max Sosnovsky",
      },
      {
        name: "robots",
        content: "index, follow",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "sitemap",
        type: "application/xml",
        href: "/sitemap.xml",
      },
      {
        rel: "alternate",
        type: "text/plain",
        href: "/llms.txt",
        title: "LLMs.txt",
      },
      {
        rel: "alternate",
        type: "text/plain",
        href: "/llms-full.txt",
        title: "LLMs-full.txt",
      },
    ],
  }),
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
