export default function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">Founder &amp; CEO</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
        Building high-performance technology platforms, developer systems, and next-generation infrastructure.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="https://github.com/qeeqez"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          View GitHub
        </a>
        <a
          href="/index.md"
          className="rounded-lg border border-zinc-300 px-4 py-2.5 font-mono text-xs text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          title="View raw Markdown representation"
        >
          index.md
        </a>
      </div>
    </section>
  );
}
