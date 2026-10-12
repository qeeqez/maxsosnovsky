import {createFileRoute} from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import {getPageByMarkdownPath} from "#/content";

export const Route = createFileRoute("/index.md")({
  server: {
    handlers: {
      GET: () => {
        const page = getPageByMarkdownPath("/index.md");
        return new Response(page?.content ?? "", {
          headers: {
            "Content-Type": "text/markdown; charset=utf-8",
          },
        });
      },
    },
  },
});
