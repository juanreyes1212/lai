// Centralized color mappings for badges and status indicators

export type ProjectStatus = "Live" | "In Development" | "Archived";

export const getStatusColor = (status: string): string => {
  const colors: Record<string, string> = {
    "Live": "border-green-500/50 text-green-400 bg-green-500/10",
    "In Development": "border-blue-500/50 text-blue-400 bg-blue-500/10",
    "Archived": "border-muted-foreground/50 text-muted-foreground bg-muted/10",
  };
  return colors[status] || colors["Archived"];
};

export const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    "Architecture": "border-purple-500/50 text-purple-400 bg-purple-500/10",
    "Performance": "border-green-500/50 text-green-400 bg-green-500/10",
    "Leadership": "border-blue-500/50 text-blue-400 bg-blue-500/10",
    "TypeScript": "border-cyan-500/50 text-cyan-400 bg-cyan-500/10",
    "Accessibility": "border-pink-500/50 text-pink-400 bg-pink-500/10",
    "Migration": "border-orange-500/50 text-orange-400 bg-orange-500/10",
    // Blog categories from original
    "learnings": "border-blue-500/50 text-blue-400 bg-blue-500/10",
    "tutorials": "border-green-500/50 text-green-400 bg-green-500/10",
  };
  return colors[category] || "border-accent/50 text-accent bg-accent/10";
};
