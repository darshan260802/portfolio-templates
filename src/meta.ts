import type { PortfolioSection } from "./schema.js";
import { manifest as auroraManifest } from "./templates/aurora/manifest.js";
import { manifest as monolithManifest } from "./templates/monolith/manifest.js";
import { manifest as prismManifest } from "./templates/prism/manifest.js";
import { manifest as nocturneManifest } from "./templates/nocturne/manifest.js";
import { manifest as atlasManifest } from "./templates/atlas/manifest.js";

/**
 * Template metadata — id, name, thumbnail, which sections it renders.
 *
 * SAFE FOR THE BUILDER UI TO IMPORT. This file (and the manifest.ts files it
 * pulls in) must never import a template's Template.tsx or any React
 * component code. That's what keeps the gallery/wizard bundle free of
 * template code — see loaders.ts for the actual component loaders, which
 * are imported only by the preview iframe entry.
 */
export interface TemplateManifest {
	id: string;
	name: string;
	description: string;
	tags: string[];
	/** Path to a static preview image, served by the web app's public dir. */
	thumbnail: string;
	/** Which PortfolioData sections this template renders. */
	sections: PortfolioSection[];
	version: string;
}

export const TEMPLATES: TemplateManifest[] = [
	auroraManifest,
	monolithManifest,
	prismManifest,
	nocturneManifest,
	atlasManifest,
];

export function getTemplateManifest(id: string): TemplateManifest | undefined {
	return TEMPLATES.find((t) => t.id === id);
}
