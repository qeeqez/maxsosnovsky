const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 py-10 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="m-0">&copy; {CURRENT_YEAR} Max Sosnovsky. All rights reserved.</p>
        <div className="flex items-center gap-4 text-xs font-mono">
          <a href="/llms.txt" className="transition hover:text-zinc-900 dark:hover:text-zinc-100">
            llms.txt
          </a>
          <span aria-hidden="true">&bull;</span>
          <a href="/llms-full.txt" className="transition hover:text-zinc-900 dark:hover:text-zinc-100">
            llms-full.txt
          </a>
          <span aria-hidden="true">&bull;</span>
          <a
            href="https://github.com/qeeqez"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
