import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { contentPlugin } from "./scripts/content-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    (() => {
      // Wrap MDX plugin so `?raw` imports fall through to Vite's built-in raw loader
      // (frontmatter.ts reads MDX source as strings via import.meta.glob({ query: "?raw" })).
      const p = mdx({ remarkPlugins: [remarkFrontmatter, remarkGfm], providerImportSource: "@mdx-js/react", development: mode === "development" });
      const origTransform = p.transform;
      return {
        ...p,
        enforce: "pre" as const,
        transform(code: string, id: string, opts?: unknown) {
          if (/[?&]raw(&|$)/.test(id)) return null;
          return (origTransform as any)?.call(this, code, id, opts);
        },
      };
    })(),
    react(),
    mode === "development" && componentTagger(),
    contentPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
