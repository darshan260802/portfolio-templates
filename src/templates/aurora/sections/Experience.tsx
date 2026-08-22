import { motion } from "motion/react";
import type { Experience } from "../../../schema.js";

function formatRange(range: Experience["range"]): string {
	const end = range.current ? "Present" : (range.end ?? "");
	return end ? `${range.start} — ${end}` : range.start;
}

export function ExperienceSection({ experience }: { experience: Experience[] }) {
	return (
		<section className="aurora-section" id="experience">
			<motion.h2
				className="aurora-section__title"
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.4 }}
				transition={{ duration: 0.5 }}
			>
				Experience
			</motion.h2>
			<ol className="aurora-timeline">
				{experience.map((item, i) => (
					<motion.li
						key={item.id}
						className="aurora-timeline__item"
						initial={{ opacity: 0, x: -16 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.4, delay: i * 0.06 }}
					>
						<div className="aurora-timeline__marker" aria-hidden="true" />
						<div className="aurora-timeline__body">
							<div className="aurora-timeline__heading">
								<h3>{item.role}</h3>
								<span className="aurora-timeline__range">{formatRange(item.range)}</span>
							</div>
							<p className="aurora-timeline__company">
								{item.companyUrl ? (
									<a href={item.companyUrl} target="_blank" rel="noreferrer noopener">
										{item.company}
									</a>
								) : (
									item.company
								)}
								{item.location ? ` · ${item.location}` : ""}
							</p>
							{item.summary && <p className="aurora-timeline__summary">{item.summary}</p>}
							{item.highlights && item.highlights.length > 0 && (
								<ul className="aurora-timeline__highlights">
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
