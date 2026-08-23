import { motion } from "motion/react";
import type { Experience } from "../../../schema.js";
import { RichText } from "../../../rich-text.js";

function formatRange(range: Experience["range"]): string {
	const end = range.current ? "Present" : (range.end ?? "");
	return end ? `${range.start} — ${end}` : range.start;
}

export function ExperienceSection({ experience }: { experience: Experience[] }) {
	return (
		<section className="prism-section" id="experience">
			<h2 className="prism-section__title">Experience</h2>
			<div className="prism-grid">
				{experience.map((item, i) => (
					<motion.div
						key={item.id}
						className="prism-card prism-experience-card"
						initial={{ opacity: 0, scale: 0.92 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.45, delay: (i % 3) * 0.08, ease: "easeOut" }}
						whileHover={{ rotateX: -2, rotateY: 3, scale: 1.02 }}
						style={{ transformPerspective: 800 }}
					>
						<span className="prism-badge">{formatRange(item.range)}</span>
						<h3 className="prism-experience-card__role">{item.role}</h3>
						<p className="prism-experience-card__company">
							{item.companyUrl ? (
								<a href={item.companyUrl} target="_blank" rel="noreferrer noopener">
									{item.company}
								</a>
							) : (
								item.company
							)}
						</p>
						<RichText html={item.summary} className="prism-experience-card__summary" />
						{item.highlights && item.highlights.length > 0 && (
							<ul className="prism-experience-card__highlights">
								{item.highlights.map((h) => (
									<li key={h}>{h}</li>
								))}
							</ul>
						)}
					</motion.div>
				))}
			</div>
		</section>
	);
}
