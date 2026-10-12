interface Project {
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly link?: string;
}

const PROJECTS: readonly Project[] = [
  {
    title: "rixl",
    description: "Modern developer platforms, cloud automation, and next-gen frontend application infrastructure.",
    tags: ["TypeScript", "React", "Cloudflare", "Vite"],
    link: "https://github.com/qeeqez",
  },
  {
    title: "maxsosnovsky.com",
    description: "High-speed personal website with build-time SSR, LLM documentation feeds, and full SEO optimization.",
    tags: ["TanStack Start", "React 19", "Bun", "Tailwind CSS"],
    link: "https://github.com/qeeqez/maxsosnovsky",
  },
  {
    title: "Developer Tooling & CLI Utilities",
    description: "Internal automation libraries, code generation, and developer productivity tooling.",
    tags: ["Rust", "TypeScript", "Node.js", "Bun"],
    link: "https://github.com/qeeqez",
  },
];

function ProjectCard({project}: {readonly project: Project}) {
  return (
    <article className="group rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-6 transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/80">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{project.title}</h3>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-zinc-500 transition group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-100"
          >
            Visit &rarr;
          </a>
        ) : null}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
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
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Featured Projects</h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Selected work and open-source contributions.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
