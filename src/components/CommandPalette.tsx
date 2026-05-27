import { useEffect, useMemo, useState } from "react";
import { Command } from "cmdk";
import { useNavigate } from "react-router-dom";
import { Search, FileText, Briefcase, User, BookOpen, Home, FileDown, Sun, Moon } from "lucide-react";
import { workProjects, personalProjects, blogPosts } from "@/data/portfolioData";
import { useTheme } from "@/hooks/useTheme";

type Item = {
  id: string;
  label: string;
  hint?: string;
  group: "Pages" | "Work" | "Personal" | "Blog" | "Actions";
  icon: React.ComponentType<{ size?: number; "aria-hidden"?: boolean }>;
  perform: () => void;
  keywords?: string[];
};

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { theme, toggle: toggleTheme } = useTheme();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const go = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  const items: Item[] = useMemo(() => {
    const pages: Item[] = [
      { id: "p-home", label: "Home", group: "Pages", icon: Home, perform: () => go("/") },
      { id: "p-work", label: "Work", group: "Pages", icon: Briefcase, perform: () => go("/work") },
      { id: "p-personal", label: "Personal", group: "Pages", icon: User, perform: () => go("/personal") },
      { id: "p-blog", label: "Blog", group: "Pages", icon: BookOpen, perform: () => go("/blog") },
      { id: "p-resume", label: "Resume", group: "Pages", icon: FileText, perform: () => go("/resume") },
    ];
    const work: Item[] = workProjects.map((p) => ({
      id: `w-${p.slug}`,
      label: p.title,
      hint: p.company,
      group: "Work",
      icon: Briefcase,
      perform: () => go(`/work/${p.slug}`),
      keywords: p.tech,
    }));
    const personal: Item[] = personalProjects.map((p) => ({
      id: `pe-${p.slug}`,
      label: p.title,
      hint: p.status,
      group: "Personal",
      icon: User,
      perform: () => go(`/personal/${p.slug}`),
      keywords: p.tech,
    }));
    const blog: Item[] = blogPosts.map((b) => ({
      id: `b-${b.slug}`,
      label: b.title,
      hint: b.category,
      group: "Blog",
      icon: BookOpen,
      perform: () => go(`/blog/${b.slug}`),
      keywords: b.tags,
    }));
    const actions: Item[] = [
      {
        id: "a-theme",
        label: theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
        group: "Actions",
        icon: theme === "dark" ? Sun : Moon,
        perform: () => {
          toggleTheme();
          setOpen(false);
        },
      },
      {
        id: "a-resume-pdf",
        label: "Download resume (PDF)",
        group: "Actions",
        icon: FileDown,
        perform: () => {
          setOpen(false);
          window.open("/resume.pdf", "_blank", "noopener,noreferrer");
        },
      },
      {
        id: "a-email",
        label: "Email Juan",
        group: "Actions",
        icon: FileText,
        perform: () => {
          setOpen(false);
          window.location.href = "mailto:reyes1212@gmail.com";
        },
      },
    ];
    return [...pages, ...work, ...personal, ...blog, ...actions];
  }, [theme, toggleTheme]);

  const grouped = useMemo(() => {
    const groups: Record<Item["group"], Item[]> = {
      Pages: [],
      Work: [],
      Personal: [],
      Blog: [],
      Actions: [],
    };
    for (const item of items) groups[item.group].push(item);
    return groups;
  }, [items]);

  // Reset query when closed
  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command palette"
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4"
      overlayClassName="fixed inset-0 z-[99] bg-background/70 backdrop-blur-sm"
      contentClassName="relative w-full max-w-xl rounded-xl border border-border bg-card shadow-2xl overflow-hidden"
    >
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
        <Search size={18} aria-hidden className="text-muted-foreground" />
        <Command.Input
          value={query}
          onValueChange={setQuery}
          placeholder="Search pages, projects, posts…"
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        <kbd className="hidden sm:inline-flex items-center gap-1 rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
          ESC
        </kbd>
      </div>
      <Command.List className="max-h-[60vh] overflow-y-auto p-2">
        <Command.Empty className="px-3 py-6 text-center text-sm text-muted-foreground">
          No results found.
        </Command.Empty>
        {(Object.keys(grouped) as Item["group"][]).map((group) =>
          grouped[group].length === 0 ? null : (
            <Command.Group
              key={group}
              heading={group}
              className="text-xs text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider"
            >
              {grouped[group].map((item) => {
                const Icon = item.icon;
                return (
                  <Command.Item
                    key={item.id}
                    value={`${item.label} ${item.hint ?? ""} ${item.keywords?.join(" ") ?? ""}`}
                    onSelect={() => item.perform()}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-foreground cursor-pointer aria-selected:bg-muted aria-selected:text-foreground"
                  >
                    <Icon size={16} aria-hidden />
                    <span className="flex-1 truncate">{item.label}</span>
                    {item.hint && (
                      <span className="text-xs text-muted-foreground truncate max-w-[40%]">{item.hint}</span>
                    )}
                  </Command.Item>
                );
              })}
            </Command.Group>
          ),
        )}
      </Command.List>
      <div className="flex items-center justify-between gap-2 px-4 py-2 border-t border-border text-[11px] text-muted-foreground">
        <span>
          <kbd className="font-mono">↑↓</kbd> navigate · <kbd className="font-mono">↵</kbd> select
        </span>
        <span>
          <kbd className="font-mono">⌘K</kbd> toggle
        </span>
      </div>
    </Command.Dialog>
  );
};

export default CommandPalette;
