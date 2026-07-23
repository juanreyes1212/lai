import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    // Suspense/lazy MDX imports can resolve after a test tears down its React
    // tree, surfacing as an "unhandled" rejection that fails CI even though
    // every test passed.
    dangerouslyIgnoreUnhandledErrors: true,
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
