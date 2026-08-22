import type { TemplateManifest } from "../../meta.js";

/**
 * Pure data — no React import here. meta.ts aggregates these into the
 * builder-safe TEMPLATES list, so this file must stay free of component code.
 */
export const manifest: TemplateManifest = {
	id: "aurora",
	name: "Aurora",
	description:
		"A bold, animated single-page portfolio with a gradient hero, scroll-reveal sections, and a project grid.",
	tags: ["animated", "gradient", "developer", "single-page"],
	thumbnail: "/templates/aurora/thumbnail.png",
	sections: ["profile", "socials", "experience", "projects", "skills"],
	version: "0.1.0",
};
