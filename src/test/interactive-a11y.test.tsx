import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { axe } from "vitest-axe";
import type { AxeMatchers } from "vitest-axe/matchers";
import CommandPalette from "@/components/CommandPalette";
import Navigation from "@/components/portfolio/Navigation";

declare module "vitest" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Assertion extends AxeMatchers {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface AsymmetricMatchersContaining extends AxeMatchers {}
}

const axeOptions = { rules: { "color-contrast": { enabled: false } } };

const withProviders = (ui: React.ReactNode) => (
  <HelmetProvider>
    <MemoryRouter>{ui}</MemoryRouter>
  </HelmetProvider>
);

describe("interactive a11y — command palette", () => {
  beforeEach(() => {
    vi.stubGlobal("matchMedia", (q: string) => ({
      matches: false,
      media: q,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }));
  });

  it("opens via Cmd+K with no axe violations", async () => {
    const { container } = render(withProviders(<CommandPalette />));
    await act(async () => {
      fireEvent.keyDown(document, { key: "k", metaKey: true });
    });
    // Command dialog is now mounted
    expect(screen.getByPlaceholderText(/search pages/i)).toBeDefined();
    expect(await axe(container, axeOptions)).toHaveNoViolations();
  });
});

describe("interactive a11y — mobile navigation", () => {
  it("opens the mobile menu with no axe violations", async () => {
    const { container } = render(withProviders(<Navigation />));
    const toggle = screen.getByLabelText(/open navigation menu/i);
    await act(async () => {
      fireEvent.click(toggle);
    });
    expect(screen.getByLabelText(/close navigation menu/i)).toBeDefined();
    expect(await axe(container, axeOptions)).toHaveNoViolations();
  });

  it("theme toggle exposes state via aria-pressed", () => {
    render(withProviders(<Navigation />));
    const toggle = screen.getByRole("button", { name: /switch to (light|dark) mode/i });
    // Default is dark, so aria-pressed reflects "light active" state = false
    expect(toggle.getAttribute("aria-pressed")).toBe("false");
  });
});
