import { useEffect, useRef } from "react";
import type { Skill } from "../../../schema.js";
import { SectionHead } from "./SectionHead.js";

const UNGROUPED = "General";

function group(skills: Skill[]): { label: string; items: Skill[] }[] {
	const groups = new Map<string, Skill[]>();
	for (const skill of skills) {
		const key = skill.category?.trim() || UNGROUPED;
		const existing = groups.get(key);
		if (existing) existing.push(skill);
		else groups.set(key, [skill]);
	}
	return [...groups].map(([label, items]) => ({ label, items }));
}

/**
 * Skill chips that lean toward the pointer when it comes near — the one
 * playful gesture in an otherwise strictly ruled page.
 *
 * One window-level mousemove listener drives every chip, rather than one
 * per chip: a stack can easily run to sixty items, and sixty listeners all
 * measuring their own element on every mouse event is a real cost on a
 * page that is already scrubbing two ScrollTriggers.
 */
export function Stack({ skills }: { skills: Skill[] }) {
	const ref = useRef<HTMLElement>(null);

	useEffect(() => {
		const root = ref.current;
		if (!root) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		// A magnet needs a pointer that hovers. On touch there isn't one, and
		// the listener would only cost battery.
		if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

		const PADDING = 40;
		const STRENGTH = 6;

		function onMove(event: MouseEvent) {
			for (const item of root!.querySelectorAll<HTMLElement>(".ins-stack__item")) {
				const rect = item.getBoundingClientRect();
				const centerX = rect.left + rect.width / 2;
				const centerY = rect.top + rect.height / 2;
				const near =
					Math.abs(centerX - event.clientX) < rect.width / 2 + PADDING &&
					Math.abs(centerY - event.clientY) < rect.height / 2 + PADDING;

				if (near) {
					item.style.transition = "transform 0.3s ease-out, border-color 0.2s ease, color 0.2s ease";
					item.style.transform = `translate3d(${(event.clientX - centerX) / STRENGTH}px, ${
						(event.clientY - centerY) / STRENGTH
					}px, 0)`;
				} else if (item.style.transform !== "" && item.style.transform !== "none") {
					item.style.transition = "transform 0.5s ease-in-out, border-color 0.2s ease, color 0.2s ease";
					item.style.transform = "none";
				}
			}
		}

		window.addEventListener("mousemove", onMove, { passive: true });
		return () => window.removeEventListener("mousemove", onMove);
	}, []);

	const groups = group(skills);

	return (
		<section ref={ref} className="ins-shell">
			<SectionHead id="stack" label="Stack" readout={`${String(skills.length).padStart(2, "0")} Tools`} />

			<div className="ins-stack">
				{groups.map((entry) => (
					<div key={entry.label}>
						<h3 className="ins-stack__label">{entry.label}</h3>
						<ul className="ins-stack__items">
							{entry.items.map((skill) => (
								<li key={skill.id}>
									<span className="ins-stack__item">{skill.name}</span>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
