interface Venture {
  readonly title: string;
  readonly role: string;
  readonly description: string;
  readonly url: string;
  readonly highlight?: boolean;
  readonly tags: readonly string[];
}

const VENTURES: readonly Venture[] = [
  {
    title: "Rixl",
    role: "Founder & CEO",
    description:
      "The media platform for teams building video, image, and feed experiences. Providing developer APIs, edge delivery, and modern cloud media infrastructure.",
    url: "https://rixl.com",
    highlight: true,
    tags: ["Media Infrastructure", "Video & Images", "Edge Network", "Developer Platform"],
  },
  {
    title: "maxsosnovsky.com",
    role: "Personal Domain",
    description:
      "Autonomous personal domain engineered with TanStack Start, build-time SSR, automated GEO/LLM mirrors, and zero-runtime overhead.",
    url: "https://github.com/qeeqez/maxsosnovsky",
    tags: ["Distributed Web", "GEO & LLMs", "React 19", "Bun"],
  },
  {
    title: "Systems & Infrastructure Tooling",
    role: "Open Source & Architecture",
    description:
      "High-throughput CLI tools, automation engines, and distributed workflows designed for reliability and developer productivity.",
    url: "https://github.com/qeeqez",
    tags: ["Rust", "TypeScript", "Cloudflare Workers", "Distributed Systems"],
  },
];

function VentureCard({item}: {readonly item: Venture}) {
  return (
    <article
      className={
        item.highlight
          ? "group rounded-2xl border border-zinc-900/20 bg-zinc-900/5 p-6 transition hover:border-zinc-900/40 dark:border-zinc-700/60 dark:bg-zinc-900/60 dark:hover:border-zinc-600 sm:col-span-2"
          : "group rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-6 transition hover:border-zinc-300 dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-zinc-700"
      }
    >
      <div className="flex items-start justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">{item.role}</span>
          <h3 className="mt-1 text-xl font-bold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
        </div>
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold text-zinc-900 underline underline-offset-4 transition hover:text-indigo-600 dark:text-zinc-100 dark:hover:text-indigo-400"
        >
          {item.url.replace(/^https?:\/\//, "")} &rarr;
        </a>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{item.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-zinc-200 bg-white px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="ventures" className="py-12">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Ventures &amp; Initiatives</h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Companies, architectures, and platforms created and led.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {VENTURES.map((item) => (
          <VentureCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
