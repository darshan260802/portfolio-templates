#!/usr/bin/env bun
/**
 * Pre-installs the scaffold's node_modules once per template into
 * .prewarm/<id>/node_modules, so the API's per-request build never runs
 * `bun install` — it hardlink-copies (`cp -al`) this tree into the build
 * directory instead (see Resolved Mechanics #5 in the design doc: Vite
 * does not resolve reliably through a *symlinked* node_modules, but a
 * hardlink copy is real paths at near-zero cost on the same filesystem).
 *
 * Every template currently shares the same scaffold dependencies (react,
 * react-dom, motion, vite), so these trees are identical today — this is
 * still done per-template so a future template can declare extra deps in
 * its manifest without changing this script.
 *
 * Run this after `bun run build:templates` and re-run whenever
 * scaffold/package.json.tmpl changes. In production, TEMPLATES_DIR on the
 * API host should point at a checkout where this has already been run.
 */
import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const TEMPLATES_SRC = resolve(ROOT, "src/templates");
const PREWARM_DIR = resolve(ROOT, ".prewarm");
const SCAFFOLD_PKG_TMPL = resolve(ROOT, "scaffold/package.json.tmpl");

function discoverTemplateIds(): string[] {
	return readdirSync(TEMPLATES_SRC, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.map((entry) => entry.name)
		.sort();
}

async function prewarmTemplate(id: string): Promise<void> {
	const dir = resolve(PREWARM_DIR, id);
	rmSync(dir, { recursive: true, force: true });
	mkdirSync(dir, { recursive: true });

	const pkgTemplate = await Bun.file(SCAFFOLD_PKG_TMPL).text();
	const pkg = pkgTemplate.replace("__PROJECT_NAME__", `prewarm-${id}`);
	writeFileSync(resolve(dir, "package.json"), pkg);

	console.log(`[prewarm] installing deps for "${id}"...`);
	const proc = Bun.spawn(["bun", "install", "--no-save"], {
		cwd: dir,
		stdout: "inherit",
		stderr: "inherit",
	});
	const exitCode = await proc.exited;
	if (exitCode !== 0) {
		throw new Error(`bun install failed for template "${id}" (exit ${exitCode})`);
	}
}

async function main() {
	if (!existsSync(TEMPLATES_SRC)) {
		throw new Error(`No templates directory found at ${TEMPLATES_SRC}`);
	}
	const ids = discoverTemplateIds();
	for (const id of ids) {
		await prewarmTemplate(id);
	}
	console.log(`[prewarm] done: ${ids.join(", ")}`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
