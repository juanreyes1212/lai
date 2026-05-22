/// <reference types="vite/client" />
/// <reference types="mdx" />

interface ImportMetaEnv {
  readonly VITE_ANALYTICS_DOMAIN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.mdx" {
  import type { ComponentType } from "react";
  const Component: ComponentType;
  export default Component;
}
