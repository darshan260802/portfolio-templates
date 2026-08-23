#!/usr/bin/env bun
/**
 * Builds every template under src/templates/<id>/ into a prebuilt ESM chunk
 * at dist/<id>/{index.js,index.css}, then regenerates src/loaders.ts so it
 * lists exactly the templates that were built.
 *
 * dist/ is committed to git — `bun install` does not reliably run a
 * `prepare` lifecycle script for a `github:` dependency (see the design doc
 * / plan for the investigation), so the build output has to already be in
 * the repo for consumers to use it.
 *
 * React Compiler runs HERE, not in any consumer. Consumers only ever see
 * this prebuilt output, and Vite's babel transform skips node_modules by
 * default, so compiling downstream would silently be a no-op.
 */
import { existsSync, readFileSync, readdirSync, renameSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { build as viteBuild } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { libInjectCss } from "vite-plugin-lib-inject-css";

const ROOT = resolve(import.meta.dirname, "..");
const TEMPLATES_SRC = resolve(ROOT, "src/templates");

function discoverTemplateIds(): string[] {
	return readdirSync(TEMPLATES_SRC, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.map((entry) => entry.name)
		.filter((id) => existsSync(resolve(TEMPLATES_SRC, id, "manifest.ts")))
		.sort();
}

async function buildTemplate(id: string): Promise<void> {
	const entry = resolve(TEMPLATES_SRC, id, "Template.tsx");
	const outDir = resolve(ROOT, "dist", id);

	console.log(`[build-dist] building ${id}...`);

	await viteBuild({
		root: ROOT,
		logLevel: "warn",
		plugins: [
			react(),
			babel({ presets: [reactCompilerPreset()] }),
			libInjectCss(),
		],
		build: {
			outDir,
			emptyOutDir: true,
			cssCodeSplit: false,
			sourcemap: false,
			lib: {
				entry,
				formats: ["es"],
				fileName: () => "index.js",
			},
			rollupOptions: {
				external: (id: string) => {
					if (
						[
							"react",
							"react-dom",
							"react/jsx-runtime",
							"react/jsx-dev-runtime",
							// React 19.2+ ships its compiler runtime helper (the
							// `c()`/useMemoCache hook the compiler's output calls)
							// as this subpath of "react" itself — NOT the separate
							// `react-compiler-runtime` npm package, which the babel
							// preset here doesn't use. It resolves to
							// node_modules/react/compiler-runtime.js. Must be
							// externalized alongside "react": bundling it pulls in
							// react's own internal CJS build (compiler-runtime.js
							// requires "react/cjs/react-compiler-runtime.*.js",
							// which itself does a top-level `require("react")`),
							// and since "react" is externalized, Rolldown wraps
							// that inner require in a runtime interop shim that
							// calls the real Node `require` — which doesn't exist
							// in a browser, so the chunk crashes on load with
							// "Calling `require` for react in an environment that
							// doesn't expose the require function." Every consumer
							// already has "react" installed, which ships this
							// subpath for free — no extra dependency needed.
							"react/compiler-runtime",
							"motion/react",
							"motion",
							// Same reasoning as motion above: every consumer (web app,
							// hosted build, ZIP export) already declares gsap +
							// @gsap/react as deps via scaffold/package.json.tmpl —
							// bundling a second copy here would give ScrollTrigger
							// two separate plugin registries fighting over the same
							// DOM, which breaks pinning/scrubbing silently.
							"gsap",
							"gsap/ScrollTrigger",
							"@gsap/react",
						].includes(id)
					) {
						return true;
					}
					return false;
				},
			},
		},
	});

	// Vite's lib mode names the extracted CSS after the entry file's
	// basename (e.g. "Template.css"), not fileName() — normalize whatever
	// single CSS file it emits to index.css so dist/<id>/ has a predictable
	// shape for consumers. vite-plugin-lib-inject-css re-adds the CSS
	// import into index.js under the ORIGINAL filename, so the rename has
	// to patch that import specifier too or the built chunk 404s on its
	// own stylesheet.
	const cssFiles = readdirSync(outDir).filter((name) => name.endsWith(".css"));
	if (cssFiles.length === 1 && cssFiles[0] !== "index.css") {
		const [oldName] = cssFiles;
		const jsPath = resolve(outDir, "index.js");
		const js = readFileSync(jsPath, "utf8");
		const patched = js.replaceAll(`./${oldName}`, "./index.css");
		if (patched === js) {
			throw new Error(`[build-dist] "${id}": expected to find an import of "./${oldName}" in index.js to patch`);
		}
		writeFileSync(jsPath, patched);
		renameSync(resolve(outDir, oldName), resolve(outDir, "index.css"));
	} else if (cssFiles.length === 0) {
		console.warn(`[build-dist] warning: no CSS output found for "${id}" (template may have no styles.css)`);
	} else if (cssFiles.length > 1) {
		throw new Error(`[build-dist] "${id}" produced multiple CSS files (${cssFiles.join(", ")}) — expected exactly one`);
	}
}

function generateLoaders(ids: string[]): void {
	const entries = ids
		.map((id) => `\t${id}: () => import("@pb/templates/dist/${id}/index.js"),`)
		.join("\n");

	const contents = `/**
 * GENERATED by scripts/build-dist.ts — do not hand-edit.
 *
 * A static import() map. Rolldown/Vite cannot code-split a dynamic
 * template-literal specifier resolving into node_modules
 * (\`import(\\\`@pb/templates/dist/\${id}\\\`)\` fails to build), so this file is
 * regenerated from the template registry every time \`bun run build\` runs.
 *
 * Import this ONLY from the web app's preview iframe entry (src/preview.tsx).
 * If the builder UI ever imports it, template code stops being isolated
 * from the main bundle — see the templates repo README for the CI check
 * that guards this.
 */
import type { ComponentType } from "react";
import type { PortfolioData } from "./schema.js";

export type TemplateComponent = ComponentType<{ data: PortfolioData }>;

export const TEMPLATE_LOADERS: Record<string, () => Promise<{ default: TemplateComponent }>> = {
${entries}
};
`;

	writeFileSync(resolve(ROOT, "src/loaders.ts"), contents);
	console.log(`[build-dist] wrote src/loaders.ts (${ids.length} template${ids.length === 1 ? "" : "s"})`);
}

async function main() {
	const ids = discoverTemplateIds();
	if (ids.length === 0) {
		throw new Error(`No templates found under ${TEMPLATES_SRC} (expected src/templates/<id>/manifest.ts)`);
	}

	for (const id of ids) {
		await buildTemplate(id);
	}

	generateLoaders(ids);
	console.log(`[build-dist] done: ${ids.join(", ")}`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
