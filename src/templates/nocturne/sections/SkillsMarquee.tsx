import type { Skill } from "../../../schema.js";

/**
 * A continuous CSS-driven ticker (not GSAP) — an infinite loop is one of
 * the few animations a plain CSS keyframe handles more robustly than a JS
 * timeline (no rAF/ScrollTrigger bookkeeping to leak), and it's trivially
 * pausable on hover and disabled under prefers-reduced-motion via
 * styles.css. The list is rendered twice back-to-back so the loop seam is
 * invisible.
 */
export function SkillsMarquee({ skills }: { skills: Skill[] }) {
	return (
		<section className="nocturne-section nocturne-section--flush" id="skills">
			<span className="nocturne-eyebrow nocturne-marquee-eyebrow">Skills</span>
			<div className="nocturne-marquee" role="list" aria-label="Skills">
				<div className="nocturne-marquee__track">
					{[...skills, ...skills].map((skill, i) => (
						<span className="nocturne-marquee__item" key={`${skill.id}-${i}`} role="listitem">
							{skill.name}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
