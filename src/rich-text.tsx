/**
 * Renders a rich-text field (profile.bio, experience.summary,
 * project.description) — an HTML string produced by the wizard's editor
 * and sanitized server-side (see the API's profile route) before it's ever
 * persisted, to a small fixed tag set: p, br, strong/b, em/i, ul, ol, li,
 * a[href]. No image support — this feature deliberately doesn't have an
 * upload/storage path for editor-inserted images, so `<img>` is never in
 * the allowlist.
 *
 * Deliberately NOT exported from index.ts/loaders.ts — it's imported by
 * relative path from within each template's own sections, same as
 * schema.ts's types. See the templates repo README's isolation invariant:
 * nothing under src/templates must be reachable from index.ts.
 */
export function RichText({ html, className }: { html: string | undefined; className?: string }) {
	if (!html) return null;
	// eslint-disable-next-line react/no-danger
	return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
