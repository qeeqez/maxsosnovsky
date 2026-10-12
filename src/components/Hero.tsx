interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly primary?: boolean;
}

const HERO_LINKS: readonly SocialLink[] = [
  {label: "Visit Rixl.com \u2192", href: "https://rixl.com", primary: true},
  {label: "max@rixl.com", href: "mailto:max@rixl.com"},
  {label: "X (@qeeqez)", href: "https://x.com/qeeqez"},
  {label: "LinkedIn", href: "https://www.linkedin.com/in/qeeqez/"},
  {label: "GitHub", href: "https://github.com/qeeqez"},
];

function HeroLinks() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      {HERO_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noreferrer" : undefined}
          className={
            link.primary
              ? "rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              : "rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          }
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-zinc-100/80 px-3 py-1 text-xs font-medium text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-200">
        Founder &amp; CEO at{" "}
        <a
          href="https://rixl.com"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-zinc-950 underline decoration-zinc-400 underline-offset-2 transition hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
        >
          Rixl
        </a>
      </div>
      <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">Max Sosnovsky</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
        Building{" "}
        <a
          href="https://rixl.com"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-100"
        >
          Rixl
        </a>{" "}
        — the modern media platform for video, image, and feed infrastructure. Focused on high-scale distributed systems, edge execution,
        and developer platforms.
      </p>
      <HeroLinks />
    </section>
  );
}
