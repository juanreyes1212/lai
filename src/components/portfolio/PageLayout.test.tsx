import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PageLayout from "./PageLayout";

const renderLayout = (props = {}) =>
  render(
    <MemoryRouter>
      <PageLayout {...props}>
        <div data-testid="child-content">Hello</div>
      </PageLayout>
    </MemoryRouter>
  );

describe("PageLayout", () => {
  it("renders children", () => {
    renderLayout();
    expect(screen.getByTestId("child-content")).toBeInTheDocument();
  });

  it("includes Navigation", () => {
    renderLayout();
    const logos = screen.getAllByText("JR");
    expect(logos.length).toBeGreaterThanOrEqual(1);
  });

  it("does not render SkipToContent by default", () => {
    renderLayout();
    expect(screen.queryByText("Skip to main content")).not.toBeInTheDocument();
  });

  it("renders SkipToContent when enabled", () => {
    renderLayout({ showSkipToContent: true });
    expect(screen.getByText("Skip to main content")).toBeInTheDocument();
  });
});
