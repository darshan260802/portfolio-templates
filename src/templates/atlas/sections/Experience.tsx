import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import type { Experience } from "../../../schema.js";
import { RichText } from "../../../rich-text.js";
import { KineticHeading } from "./KineticHeading.js";

function formatRange(range: Experience["range"]): string {
	const end = range.current ? "Present" : (range.end ?? "");
	return end ? `${range.start} — ${end}` : range.start;
}

/**
 * The signature moment: a rule down the left edge fills in step with
 * scroll progress through the section (gsap scrub, not pinned — a Swiss
 * index reads top-to-bottom without needing to hijack the scroll), and
 * each entry's number switches to the accent color as the rule reaches it.
 */
export function ExperienceSection({ experience, index }: { experience: Experience[]; index: number }) {
	const sectionRef = useRef<HTMLElement>(null);
	const [activeIndex, setActiveIndex] = useState(-1);

	useGSAP(
		() => {
			const section = sectionRef.current;
			if (!section) return;
			const rule = section.querySelector<HTMLElement>(".atlas-experience__rule-fill");
			if (!rule) return;

			const tween = gsap.fromTo(
				rule,
				{ scaleY: 0 },
				{
					scaleY: 1,
					ease: "none",
					scrollTrigger: {
						trigger: section,
						start: "top 60%",
						end: "bottom 60%",
						scrub: 0.5,
						onUpdate: (self) => {
							setActiveIndex(Math.min(experience.length - 1, Math.floor(self.progress * experience.length)));
						},
					},
				},
			);

			return () => {
				tween.scrollTrigger?.kill();
				tween.kill();
			};
		},
		{ scope: sectionRef, dependencies: [experience.length] },
	);

	return (
		<section ref={sectionRef} className="atlas-section" id="experience">
			<KineticHeading number={String(index).padStart(2, "0")} title="Experience" />
			<div className="atlas-experience">
				<div className="atlas-experience__rule">
					<div className="atlas-experience__rule-fill" />
				</div>
				<ol className="atlas-experience__list">
					{experience.map((item, i) => (
						<li key={item.id} className="atlas-experience__item" data-active={i <= activeIndex}>
							<span className="atlas-experience__index">{String(i + 1).padStart(2, "0")}</span>
							<div>
								<div className="atlas-experience__row">
									<h3 className="atlas-experience__role">{item.role}</h3>
									<span className="atlas-experience__range">{formatRange(item.range)}</span>
								</div>
								<p className="atlas-experience__company">
									{item.companyUrl ? (
										<a href={item.companyUrl} target="_blank" rel="noreferrer noopener">
											{item.company}
										</a>
									) : (
										item.company
									)}
								</p>
								<RichText html={item.summary} className="atlas-experience__summary" />
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
