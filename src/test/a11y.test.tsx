import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { axe } from "vitest-axe";
import type { AxeMatchers } from "vitest-axe/matchers";

import Index from "@/pages/Index";
import Work from "@/pages/Work";
import WorkProject from "@/pages/WorkProject";
import Personal from "@/pages/Personal";
import PersonalProject from "@/pages/PersonalProject";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Resume from "@/pages/Resume";
import NotFound from "@/pages/NotFound";
import { workProjects, personalProjects, blogPosts } from "@/data/portfolioData";

declare module "vitest" {
  interface Assertion<T = unknown> extends AxeMatchers {}
  interface AsymmetricMatchersContaining extends AxeMatchers {}
}

const renderRoute = (path: string, element: React.ReactNode, routePattern?: string) =>
  render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path={routePattern ?? path} element={element} />
        </Routes>
      </MemoryRouter>
    </HelmetProvider>
  );

// Axe is noisy about color-contrast in jsdom (no real layout) — disable that rule.
const axeOptions = { rules: { "color-contrast": { enabled: false } } };

describe("a11y smoke tests", () => {
  it("/ has no axe violations", async () => {
    const { container } = renderRoute("/", <Index />);
    expect(await axe(container, axeOptions)).toHaveNoViolations();
  });

  it("/work has no axe violations", async () => {
    const { container } = renderRoute("/work", <Work />);
    expect(await axe(container, axeOptions)).toHaveNoViolations();
  });

  it("/work/:slug has no axe violations", async () => {
    const slug = workProjects[0].slug;
    const { container } = renderRoute(`/work/${slug}`, <WorkProject />, "/work/:slug");
    expect(await axe(container, axeOptions)).toHaveNoViolations();
  });

  it("/personal has no axe violations", async () => {
    const { container } = renderRoute("/personal", <Personal />);
    expect(await axe(container, axeOptions)).toHaveNoViolations();
  });

  it("/personal/:slug has no axe violations", async () => {
    const slug = personalProjects[0].slug;
    const { container } = renderRoute(`/personal/${slug}`, <PersonalProject />, "/personal/:slug");
    expect(await axe(container, axeOptions)).toHaveNoViolations();
  });

  it("/blog has no axe violations", async () => {
    const { container } = renderRoute("/blog", <Blog />);
    expect(await axe(container, axeOptions)).toHaveNoViolations();
  });

  it("/blog/:slug has no axe violations", async () => {
    const slug = blogPosts[0].slug;
    const { container } = renderRoute(`/blog/${slug}`, <BlogPost />, "/blog/:slug");
    expect(await axe(container, axeOptions)).toHaveNoViolations();
  });

  it("/resume has no axe violations", async () => {
    const { container } = renderRoute("/resume", <Resume />);
    expect(await axe(container, axeOptions)).toHaveNoViolations();
  });

  it("NotFound has no axe violations", async () => {
    const { container } = renderRoute("/does-not-exist", <NotFound />, "*");
    expect(await axe(container, axeOptions)).toHaveNoViolations();
  });
});
