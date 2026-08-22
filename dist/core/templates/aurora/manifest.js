/**
 * Pure data — no React import here. meta.ts aggregates these into the
 * builder-safe TEMPLATES list, so this file must stay free of component code.
 */
export const manifest = {
    id: "aurora",
    name: "Aurora",
    description: "A bold, animated single-page portfolio with a gradient hero, scroll-reveal sections, and a project grid.",
    tags: ["animated", "gradient", "developer", "single-page"],
    thumbnail: "https://oalitktezxwewwttyfmk.supabase.co/storage/v1/object/public/project-assets/aurora.png",
    sections: ["profile", "socials", "experience", "projects", "skills"],
    version: "0.1.0",
};
