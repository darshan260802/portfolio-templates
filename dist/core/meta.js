import { manifest as auroraManifest } from "./templates/aurora/manifest.js";
export const TEMPLATES = [auroraManifest];
export function getTemplateManifest(id) {
    return TEMPLATES.find((t) => t.id === id);
}
