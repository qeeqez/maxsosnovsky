const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer id="contact" className="mt-20 border-t border-zinc-200 py-12 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-zinc-900 dark:text-zinc-100">Max Sosnovsky</p>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">Founder &amp; CEO, Rixl</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <a
            href="https://rixl.com"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-zinc-900 hover:underline dark:text-zinc-100"
          >
            rixl.com
          </a>
          <a href="mailto:max@rixl.com" className="font-medium hover:underline">
            max@rixl.com
          </a>
          <a href="https://x.com/qeeqez" target="_blank" rel="noreferrer" className="hover:underline">
            X
          </a>
          <a href="https://www.linkedin.com/in/qeeqez/" target="_blank" rel="noreferrer" className="hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com/qeeqez" target="_blank" rel="noreferrer" className="hover:underline">
            GitHub
          </a>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-zinc-100 pt-6 text-xs sm:flex-row dark:border-zinc-900">
        <p className="m-0">&copy; {CURRENT_YEAR} Max Sosnovsky. All rights reserved.</p>
        <div className="flex items-center gap-3 font-mono">
          <a href="/llms.txt" className="transition hover:text-zinc-900 dark:hover:text-zinc-100">
            llms.txt
          </a>
          <span aria-hidden="true">&bull;</span>
          <a href="/llms-full.txt" className="transition hover:text-zinc-900 dark:hover:text-zinc-100">
            llms-full.txt
          </a>
          <span aria-hidden="true">&bull;</span>
          <a href="/index.md" className="transition hover:text-zinc-900 dark:hover:text-zinc-100">
            index.md
          </a>
        </div>
      </div>
    </footer>
  );
}
