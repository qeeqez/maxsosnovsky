import {createFileRoute} from "@tanstack/react-router";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

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
    <div>
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
}
