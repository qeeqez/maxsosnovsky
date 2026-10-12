# maxsosnovsky

A fully static, prerendered website with Single-Page Application (SPA) fallback, built with **Vite+** (`vp`), **TanStack Start**, **React 19**, and **Tailwind CSS v4**, powered by **Bun** under the hood and configured for zero-server deployment to **Cloudflare Workers**.

---

## ⚡ Tech Stack & Architecture

- **Toolchain**: [Vite+](https://viteplus.dev/) (`vp`) with [Bun](https://bun.sh/) (`bun@1.4.3`) configured as the package manager and runtime engine under the hood.
- **Framework**: [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router) with file-based routing.
- **Rendering Mode**:
  - **Prerendered SSG**: Every route (e.g. `/`, `/about`) is statically prerendered to HTML files (`index.html`, `about/index.html`) at build time.
  - **SPA Fallback**: Deep links and non-prerendered routes seamlessly fall back to the client-side SPA router.
  - **No Server**: Zero Node/SSR server runtime needed in production. The build emits purely static client assets in `dist/client`.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`.
- **Target Hosting**: [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/) via `wrangler.json`.

---

## 🚀 Getting Started

Ensure [Bun](https://bun.sh/) and [Vite+](https://viteplus.dev/) are installed.

```bash
# Install dependencies with Bun via Vite+
vp install
# or: bun install

# Start local development server (port 3000)
vp dev
# or: bun run dev
```

---

## 🛠️ Available Scripts

| Command                                 | Action                                                                        |
| --------------------------------------- | ----------------------------------------------------------------------------- |
| `vp dev` (or `bun run dev`)             | Starts the Vite+ development server                                           |
| `vp build` (or `bun run build`)         | Prerenders all static HTML pages and outputs pure static client assets        |
| `vp preview` (or `bun run preview`)     | Locally previews the prerendered static build from `dist/client`              |
| `vp check`                              | Runs Oxfmt formatting, Oxlint linting, and TypeScript type-checks in parallel |
| `vp check --fix`                        | Automatically formats and fixes lint issues                                   |
| `bun run deploy` (or `wrangler deploy`) | Deploys static assets to Cloudflare Workers                                   |

---

## ☁️ Cloudflare Workers Static Deployment

The project includes a ready-to-use [`wrangler.json`](./wrangler.json) configuration:

```json
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "maxsosnovsky",
  "compatibility_date": "2026-10-12",
  "preview_urls": true,
  "previews": {},
  "assets": {
    "directory": "./dist/client",
    "html_handling": "auto-trailing-slash",
    "not_found_handling": "single-page-application"
  }
}
```

- Static assets are uploaded directly from `dist/client`.
- `html_handling: "auto-trailing-slash"` correctly handles URLs with or without trailing slashes for static pages.
- `not_found_handling: "single-page-application"` serves `/index.html` on unmatched paths natively.

To deploy:

```bash
bun run build
bun run deploy
```
