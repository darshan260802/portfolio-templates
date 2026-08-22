/**
 * Ambient wildcard declaration for the package's own prebuilt output.
 * loaders.ts imports "@pb/templates/dist/<id>/index.js" for every template,
 * but those .js files carry no .d.ts (they're a plain externalized-React
 * lib build, not typed independently) — this is what lets that import
 * resolve for the type checker instead of erroring with "cannot find
 * module". Every template's Template.tsx has the same shape by convention:
 * a default-exported component taking `{ data: PortfolioData }`.
 */
declare module "@pb/templates/dist/*" {
	import type { ComponentType } from "react";
	import type { PortfolioData } from "./schema.js";

	const Template: ComponentType<{ data: PortfolioData }>;
	export default Template;
}
