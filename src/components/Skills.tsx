interface SkillGroup {
  readonly category: string;
  readonly items: readonly string[];
}

const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    category: "Languages & Runtimes",
    items: ["TypeScript", "JavaScript", "Rust", "Node.js", "Bun", "SQL", "HTML/CSS"],
  },
  {
    category: "Frontend & Architecture",
    items: ["React 19", "TanStack Start / Router", "Next.js", "Tailwind CSS", "Vite / Vite+"],
  },
  {
    category: "Backend & Infrastructure",
    items: ["Cloudflare Workers", "PostgreSQL", "SQLite", "Redis", "Docker", "REST / RPC APIs"],
  },
];

function SkillGroupCard({group}: {readonly group: SkillGroup}) {
  return (
    <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-5 dark:border-zinc-800/80 dark:bg-zinc-900/40">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{group.category}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="rounded-lg bg-white px-2.5 py-1 text-xs font-medium text-zinc-800 shadow-sm dark:bg-zinc-950 dark:text-zinc-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Technical Focus</h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Tools, frameworks, and technologies I work with daily.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {SKILL_GROUPS.map((group) => (
          <SkillGroupCard key={group.category} group={group} />
        ))}
      </div>
    </section>
  );
}
