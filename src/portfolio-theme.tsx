import { useEffect, useState } from "react";
import type { Theme } from "./schema.js";

type Mode = "light" | "dark";
const STORAGE_KEY = "pb-visitor-theme-v1";
function isPreview() {
  return typeof window !== "undefined" && window.self !== window.top;
}
function savedMode(): Mode | null {
  if (typeof window === "undefined" || isPreview()) return null;
  try { const value = localStorage.getItem(STORAGE_KEY); return value === "light" || value === "dark" ? value : null; }
  catch { return null; }
}
function systemMode(): Mode {
  return typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
export function usePortfolioTheme(theme: Theme | undefined, fallback: Mode) {
  const [choice, setChoice] = useState<Mode | null>(savedMode);
  const [system, setSystem] = useState<Mode>(systemMode);
  const requested = theme?.mode;
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setSystem(media.matches ? "dark" : "light");
    update(); media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  // Author changes in the editor take precedence over earlier preview clicks.
  useEffect(() => { if (isPreview()) setChoice(null); }, [requested]);
  const mode = choice ?? (requested === "system" ? system : requested ?? fallback);
  const toggle = () => {
    const next = mode === "dark" ? "light" : "dark";
    setChoice(next);
    if (!isPreview()) { try { localStorage.setItem(STORAGE_KEY, next); } catch { /* Storage may be disabled. */ } }
  };
  return { mode, toggle };
}
export function PortfolioThemeToggle({ mode, toggle }: { mode: Mode; toggle: () => void }) {
  return <button type="button" className="pb-theme-toggle" onClick={toggle} aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`} aria-pressed={mode === "dark"}>
    {mode === "dark" ? "☀ Light" : "☾ Dark"}
  </button>;
}
