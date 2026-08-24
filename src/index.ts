/**
 * Public entry point for `@pb/templates`. Deliberately excludes loaders.ts
 * (component loaders) — consumers that only need the schema and gallery
 * metadata (the web app's builder UI, the API) import from here and never
 * pull in template component code. The preview iframe entry imports
 * `@pb/templates/loaders` directly instead.
 */
export * from "./schema.js";
export * from "./uploads.js";
export * from "./meta.js";
