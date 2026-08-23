import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export interface IndexEntry {
	id: string;
	label: string;
}

/**
 * A fixed index of sections along the right edge — the kind of systematic
 * numbering a Swiss grid poster uses to orient the reader. Desktop only
 * (there's no room for it once the layout stacks); the active entry is
 * tracked with one ScrollTrigger per section rather than a single scrubbed
 * one, since each section's active range is independent.
 */
export function SectionIndexNav({ entries }: { entries: IndexEntry[] }) {
	const [activeId, setActiveId] = useState<string | null>(null);
	const ref = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const triggers = entries.map(
				(entry) =>
					ScrollTrigger.create({
						trigger: `#${entry.id}`,
						start: "top 55%",
						end: "bottom 55%",
						onToggle: (self) => {
							if (self.isActive) setActiveId(entry.id);
						},
					}),
			);
			return () => {
				for (const t of triggers) t.kill();
			};
		},
		{ scope: ref, dependencies: [entries.map((e) => e.id).join(",")] },
	);

	if (entries.length === 0) return null;

	return (
		<nav ref={ref} className="atlas-index" aria-label="Section index">
			<ol>
				{entries.map((entry, i) => (
					<li key={entry.id} data-active={entry.id === activeId}>
						<a href={`#${entry.id}`}>
							<span className="atlas-index__number">{String(i + 1).padStart(2, "0")}</span>
							<span className="atlas-index__label">{entry.label}</span>
						</a>
					</li>
				))}
			</ol>
		</nav>
	);
}
