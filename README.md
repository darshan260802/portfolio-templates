# @pb/templates

Shared schema, template components, and the build scaffold for Portfolio
Builder. Consumed as a `github:` dependency by both `portfolio-builder`
(web) and `portfolio-builder-api`.

## Layout

- `src/schema.ts` — the `PortfolioData` Zod schema. Single source of truth;
  every template's `data` prop and every API validation call uses this.
- `src/meta.ts` — `TemplateManifest[]`, safe for the builder UI (gallery,
  wizard) to import. Contains **no** React component code.
- `src/loaders.ts` — **generated**, do not hand-edit. A static
  `{ id: () => import(...) }` map, consumed only by the web app's preview
  iframe entry (`src/preview.tsx`). Dynamic `import(`...${id}`)` cannot be
  code-split by Rolldown/Vite, hence the generated static map.
- `src/templates/<id>/` — one folder per template: `manifest.ts` (pure
  data), `Template.tsx` (default export, `(props: { data: PortfolioData })`),
  `styles.css`, `sections/`.
- `scaffold/` — the standalone Vite project shell used for both the ZIP
  export and the hosted build. `.tmpl` files have `__PLACEHOLDER__` tokens
  substituted by the API at build time.
- `dist/` — **committed to git.** Prebuilt `dist/<id>/{index.js,index.css}`
  per template, built with the React Compiler and with `react`,
  `react-dom`, `react/jsx-runtime`, `motion` externalized. `bun install`
  does not reliably run a `prepare` script for `github:` dependencies, so
  this has to already be built before pushing.

## Commands

```sh
bun install
bun run build      # build:templates (dist/) then build:core (dist/core/)
bun run prewarm     # pre-install scaffold node_modules per template into .prewarm/
bun run typecheck
```

Run `bun run build` (and commit the result) before pushing any change under
`src/templates/` or `src/schema.ts`.

## Isolation invariant

The builder UI must never import `src/loaders.ts` (or anything that
transitively imports a `Template.tsx`). That's what keeps template code —
and template CSS — out of the main app bundle. CI should grep the built web
app's `index.html` entry chunk for a template-only string (e.g. a class name
like `aurora-hero`) and fail if found.
