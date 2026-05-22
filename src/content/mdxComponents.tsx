import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { MDXComponents } from "mdx/types";

// Shared component map for MDX content — mirrors MarkdownRenderer's styling
// so legacy posts and MDX posts render identically.
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
  pre: ({ children }) => <>{children}</>,
  code: ({ className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    if (!match) {
      return (
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary" {...props}>
          {children}
        </code>
      );
    }
    return (
      <SyntaxHighlighter
        style={oneDark}
        language={match[1]}
        PreTag="div"
        className="rounded-lg my-4 !bg-card border border-border"
        customStyle={{ margin: "1rem 0", padding: "1rem", borderRadius: "0.5rem" }}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    );
  },
};
