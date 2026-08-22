import { manifest as auroraManifest } from "./templates/aurora/manifest.js";
import { manifest as monolithManifest } from "./templates/monolith/manifest.js";
import { manifest as prismManifest } from "./templates/prism/manifest.js";
export const TEMPLATES = [auroraManifest, monolithManifest, prismManifest];
export function getTemplateManifest(id) {
    return TEMPLATES.find((t) => t.id === id);
}
