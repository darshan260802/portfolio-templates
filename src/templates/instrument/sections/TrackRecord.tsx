import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import type { Experience } from "../../../schema.js";
import { RichText } from "../../../rich-text.js";
import { SectionHead } from "./SectionHead.js";

function formatRange(range: Experience["range"]): string {
	const end = range.current ? "Present" : (range.end ?? "");
	return end ? `${range.start} — ${end}` : range.start;
}

/** The earliest start and the latest end, as the section's readout. */
function span(experience: Experience[]): string {
	const starts = experience.map((e) => e.range.start).sort();
	const ongoing = experience.some((e) => e.range.current);
	const ends = experience.map((e) => e.range.end ?? e.range.start).sort();
	const from = starts[0]?.slice(0, 4) ?? "";
	const to = ongoing ? "PRESENT" : (ends[ends.length - 1]?.slice(0, 4) ?? "");
	return from && to ? `${from} — ${to}` : "";
}

export function TrackRecord({ experience }: { experience: Experience[] }) {
	const ref = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
				gsap.set(".ins-entry", { opacity: 1, y: 0 });
				return;
			}
			// One trigger per entry rather than a single staggered batch: rows
			// are tall enough that a shared trigger would have already fired
			// for the last one before it came anywhere near the viewport.
			const tweens = gsap.utils.toArray<HTMLElement>(".ins-entry").map((row) =>
				gsap.to(row, {
					opacity: 1,
					y: 0,
					duration: 0.7,
					ease: "power3.out",
					scrollTrigger: { trigger: row, start: "top 88%", once: true },
				}),
			);
			return () => {
				for (const tween of tweens) {
					tween.scrollTrigger?.kill();
					tween.kill();
				}
			};
		},
		{ scope: ref, dependencies: [experience.length] },
	);

	return (
		<section ref={ref} className="ins-shell">
			<SectionHead id="track-record" label="Track Record" readout={span(experience)} />

			<div>
				{experience.map((entry) => (
					<article key={entry.id} className="ins-entry ins-entry__reveal">
						<div className="ins-entry__meta">
							<span className="ins-entry__period">{formatRange(entry.range)}</span>
							<h3 className="ins-entry__company">
								{entry.companyUrl ? (
									<a href={entry.companyUrl} target="_blank" rel="noreferrer noopener">
										{entry.company}
									</a>
								) : (
									entry.company
								)}
							</h3>
							<span className="ins-entry__role">
								{entry.role}
								{entry.location ? ` · ${entry.location}` : ""}
							</span>
						</div>

						<div className="ins-entry__body">
							<RichText html={entry.summary} />
							{entry.highlights && entry.highlights.length > 0 && (
								<ul>
									{entry.highlights.map((highlight) => (
										<li key={highlight}>{highlight}</li>
									))}
								</ul>
							)}
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
