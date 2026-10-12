import {createFileRoute} from "@tanstack/react-router";
import {cn} from "cn";

export const Route = createFileRoute("/about")({
  head: () => ({
    links: [
      {
        rel: "alternate",
        type: "text/markdown",
        href: "/about.md",
        title: "About Markdown",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className={cn("page-wrap px-4 py-12")}>
      <section className={cn("island-shell rounded-2xl p-6 sm:p-8")}>
        <div className="mb-2 flex items-center justify-between">
          <p className="island-kicker m-0">About</p>
          <a
            href="/about.md"
            className={cn(
              "rounded-md border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.12)] px-2.5 py-1",
              "text-xs font-mono font-medium text-[var(--lagoon-deep)] transition hover:bg-[rgba(79,184,178,0.22)]"
            )}
            title="View this page in Markdown format"
          >
            about.md
          </a>
        </div>
        <h1 className="display-title mb-3 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">A small starter with room to grow.</h1>
        <p className="m-0 max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
          TanStack Start gives you type-safe routing, server functions, and modern SSR defaults. Use this as a clean foundation, then layer
          in your own routes, styling, and add-ons.
        </p>
      </section>
    </main>
  );
}
