import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      {
        rel: "alternate",
        type: "text/markdown",
        href: "/index.md",
        title: "Home Markdown",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <h1>Max Sosnovsky</h1>
      <p>Personal website and developer portfolio.</p>
    </main>
  );
}
