interface FocusDomain {
  readonly title: string;
  readonly description: string;
  readonly topics: readonly string[];
}

const DOMAINS: readonly FocusDomain[] = [
  {
    title: "Media & Edge Architecture",
    description: "Building next-generation delivery pipelines for real-time video, dynamic image rendering, and feed algorithms.",
    topics: ["Distributed CDN / Edge", "Real-Time Processing", "Video Transcoding", "Edge Compute"],
  },
  {
    title: "Developer Platforms",
    description: "Designing APIs, SDKs, and developer experiences that eliminate complexity for engineering teams worldwide.",
    topics: ["Type-Safe Protocols", "Tooling & CLIs", "Full-Stack Frameworks", "API Design"],
  },
  {
    title: "Systems Engineering",
    description: "Architecting high-concurrency, low-latency backends built for extreme availability and data integrity.",
    topics: ["Rust & TypeScript", "Cloudflare Workers", "Distributed Storage", "Micro-architectures"],
  },
];

function FocusCard({domain}: {readonly domain: FocusDomain}) {
  return (
    <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-6 dark:border-zinc-800/80 dark:bg-zinc-900/40">
      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{domain.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{domain.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {domain.topics.map((topic) => (
          <span
            key={topic}
            className="rounded-md border border-zinc-200 bg-white px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="about" className="py-12">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Engineering &amp; Strategic Focus</h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Domains where I concentrate architecture, product vision, and capital.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {DOMAINS.map((domain) => (
          <FocusCard key={domain.title} domain={domain} />
        ))}
      </div>
    </section>
  );
}
