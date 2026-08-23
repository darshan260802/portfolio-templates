import { motion } from "motion/react";
import type { Experience } from "../../../schema.js";

function formatRange(range: Experience["range"]): string {
	const end = range.current ? "Present" : (range.end ?? "");
	return end ? `${range.start} — ${end}` : range.start;
}

export function ExperienceSection({ experience }: { experience: Experience[] }) {
	return (
		<section className="nocturne-section" id="experience">
			<span className="nocturne-eyebrow">Experience</span>
			<ol className="nocturne-timeline">
				{experience.map((item, i) => (
					<motion.li
						key={item.id}
						className="nocturne-timeline__item"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.6, delay: i * 0.06, ease: "easeOut" }}
					>
						<span className="nocturne-timeline__range">{formatRange(item.range)}</span>
						<div className="nocturne-timeline__body">
							<h3 className="nocturne-timeline__role">{item.role}</h3>
							<p className="nocturne-timeline__company">
								{item.companyUrl ? (
									<a href={item.companyUrl} target="_blank" rel="noreferrer noopener">
										{item.company}
									</a>
								) : (
									item.company
								)}
							</p>
							{item.summary && <p className="nocturne-timeline__summary">{item.summary}</p>}
							{item.highlights && item.highlights.length > 0 && (
								<ul className="nocturne-timeline__highlights">
									{item.highlights.map((h) => (
										<li key={h}>{h}</li>
									))}
								</ul>
							)}
						</div>
					</motion.li>
				))}
			</ol>
		</section>
	);
}
