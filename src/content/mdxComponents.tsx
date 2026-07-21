import type { MDXComponents } from "mdx/types";

// Shared component map for MDX content. Code blocks are pre-highlighted at build
// time by @shikijs/rehype, so we render <pre>/<code> as-is (preserving Shiki's
// inline styles and classes) and only style inline code + non-highlighted blocks.
export const mdxComponents: MDXComponents = {
  h1: (props) => <h1 className="text-3xl font-bold text-foreground mt-8 mb-4" {...props} />,
  h2: (props) => <h2 className="text-2xl font-bold text-foreground mt-8 mb-4" {...props} />,
  h3: (props) => <h3 className="text-xl font-semibold text-foreground mt-6 mb-3" {...props} />,
  h4: (props) => <h4 className="text-lg font-semibold text-foreground mt-4 mb-2" {...props} />,
  p: (props) => <p className="text-foreground/90 leading-relaxed mb-4" {...props} />,
  ul: (props) => <ul className="list-disc list-inside space-y-2 mb-4 text-foreground/90 ml-4" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside space-y-2 mb-4 text-foreground/90 ml-4" {...props} />,
  li: (props) => <li className="text-foreground/90 leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4" {...props} />
  ),
  a: ({ href, children, ...props }) => (
    <a
      href={href}
      className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  ),
  strong: (props) => <strong className="font-semibold text-foreground" {...props} />,
  em: (props) => <em className="italic text-foreground/90" {...props} />,
  hr: () => <hr className="border-border my-8" />,
  table: (props) => (
    <div className="overflow-x-auto my-4">
      <table className="w-full border-collapse border border-border" {...props} />
    </div>
  ),
  th: (props) => <th className="border border-border bg-muted px-4 py-2 text-left font-semibold" {...props} />,
  td: (props) => <td className="border border-border px-4 py-2" {...props} />,
  img: ({ alt, ...props }) => (
    <img
      alt={alt ?? ""}
      loading="lazy"
      decoding="async"
      className="w-full h-auto rounded-lg border border-border my-4"
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={`${className ?? ""} rounded-lg my-4 p-4 overflow-x-auto border border-border text-sm`.trim()}
      {...props}
    />
  ),
  code: ({ className, children, ...props }) => {
    // Shiki-highlighted code has a language- class; render as-is.
    if (className?.includes("language-")) {
      return <code className={className} {...props}>{children}</code>;
    }
    // Inline code
    return (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary" {...props}>
        {children}
      </code>
    );
  },
};
