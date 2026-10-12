import {defineConfig, lazyPlugins} from "vite-plus";
import {devtools} from "@tanstack/devtools-vite";

import {tanstackStart} from "@tanstack/react-start/plugin/vite";

import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const MD_PAGES = [
  {path: "/index.md", sitemap: {exclude: true}},
  {path: "/llms.txt", sitemap: {exclude: true}},
  {path: "/llms-full.txt", sitemap: {exclude: true}},
];

const config = defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    printWidth: 140,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: false,
    trailingComma: "es5",
    arrowParens: "always",
    bracketSpacing: false,
    bracketSameLine: false,
    endOfLine: "lf",
    ignorePatterns: ["routeTree.gen.ts"],
  },
  lint: {
    plugins: ["react", "react-perf", "typescript", "jsx-a11y"],
    categories: {
      correctness: "error",
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "jsx-a11y/prefer-tag-over-role": "off",
      "react/exhaustive-deps": "off",
      "typescript/no-explicit-any": "warn",
      "typescript/no-restricted-types": [
        "error",
        {
          types: {
            unknown: "Use explicit domain types or UntrustedValue/UntrustedRecord at untrusted boundaries.",
          },
        },
      ],
      "eslint/complexity": [
        "error",
        {
          max: 10,
        },
      ],
      "eslint/max-lines-per-function": [
        "error",
        {
          max: 50,
          skipComments: true,
        },
      ],
      "eslint/max-lines": [
        "error",
        {
          max: 250,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      "eslint/max-params": ["error", 3],
      "eslint/max-depth": ["error", 3],
      "eslint/max-statements": ["error", 25],
      "eslint/max-classes-per-file": ["error", 1],
      "oxc/branches-sharing-code": "warn",
      "vite-plus/prefer-vite-plus-imports": "error",
    },
    ignorePatterns: ["*.html", "docker", "public", "**tests**", "*.test.ts", "*.test.tsx", "src/test/**", "routeTree.gen.ts"],
    options: {
      typeAware: true,
      typeCheck: true,
    },
    jsPlugins: [
      {
        name: "vite-plus",
        specifier: "vite-plus/oxlint-plugin",
      },
    ],
  },
  resolve: {tsconfigPaths: true},
  plugins: lazyPlugins(() => [
    devtools(),
    tailwindcss(),
    tanstackStart({
      pages: MD_PAGES,
      prerender: {
        enabled: true,
        autoSubfolderIndex: true,
        autoStaticPathsDiscovery: true,
        crawlLinks: true,
      },
      sitemap: {
        host: process.env.SITE_URL || "https://maxsosnovsky.com",
      },
    }),
    viteReact(),
  ]),
});

export default config;
