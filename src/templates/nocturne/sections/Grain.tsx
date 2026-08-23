/**
 * A fixed, near-invisible film-grain texture — an SVG turbulence filter,
 * not an image asset, so it costs nothing to ship. Purely atmospheric:
 * the kind of texture that separates "expensive dark site" from "just a
 * black background."
 */
export function Grain() {
	return (
		<svg className="nocturne-grain" aria-hidden="true">
			<filter id="nocturne-grain-filter">
				<feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
				<feColorMatrix type="saturate" values="0" />
			</filter>
			<rect width="100%" height="100%" filter="url(#nocturne-grain-filter)" />
		</svg>
	);
}
