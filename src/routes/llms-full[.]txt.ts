import {createFileRoute} from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import {generateLlmsFullTxt} from "#/content";

export const Route = createFileRoute("/llms-full.txt")({
  server: {
    handlers: {
      GET: () => {
        const siteUrl = process.env.SITE_URL || "https://maxsosnovsky.com";
        return new Response(generateLlmsFullTxt(siteUrl), {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
          },
        });
      },
    },
  },
});
