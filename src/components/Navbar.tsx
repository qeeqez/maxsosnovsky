import {Link} from "@tanstack/react-router";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5 font-semibold text-zinc-900 transition hover:opacity-80 dark:text-zinc-100">
          <img src="/favicon.svg" alt="Max Sosnovsky Logo" className="h-6 w-6 dark:invert" />
          <span>Max Sosnovsky</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium text-zinc-600 sm:gap-6 dark:text-zinc-400">
          <a
            href="https://rixl.com"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-zinc-900 transition hover:text-indigo-600 dark:text-zinc-100 dark:hover:text-indigo-400"
          >
            Rixl &rarr;
          </a>
          <a href="#ventures" className="transition hover:text-zinc-900 dark:hover:text-zinc-100">
            Ventures
          </a>
          <a href="#about" className="transition hover:text-zinc-900 dark:hover:text-zinc-100">
            About
          </a>
          <a href="#contact" className="transition hover:text-zinc-900 dark:hover:text-zinc-100">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
