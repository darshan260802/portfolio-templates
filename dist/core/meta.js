import { manifest as auroraManifest } from "./templates/aurora/manifest.js";
import { manifest as monolithManifest } from "./templates/monolith/manifest.js";
import { manifest as prismManifest } from "./templates/prism/manifest.js";
import { manifest as nocturneManifest } from "./templates/nocturne/manifest.js";
import { manifest as atlasManifest } from "./templates/atlas/manifest.js";
import { manifest as instrumentManifest } from "./templates/instrument/manifest.js";
export const TEMPLATES = [
    auroraManifest,
    monolithManifest,
    prismManifest,
    nocturneManifest,
    atlasManifest,
    instrumentManifest,
];
export function getTemplateManifest(id) {
    return TEMPLATES.find((t) => t.id === id);
}
