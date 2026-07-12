// Barrel re-export kept for backwards compatibility.
// Prefer importing from the split modules directly:
//   `@/data/projects`, `@/data/blog`, `@/data/resume`
// so route chunks only pull what they render.
export { workProjects, personalProjects } from "./projects";
export { blogPosts } from "./blog";
export { resumeData } from "./resume";
