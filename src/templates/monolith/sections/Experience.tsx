import { motion } from "motion/react";
import type { Experience } from "../../../schema.js";
import { RichText } from "../../../rich-text.js";
import { SectionHeading } from "./SectionHeading.js";

function formatRange(range: Experience["range"]): string {
	const end = range.current ? "Present" : (range.end ?? "");
	return end ? `${range.start} — ${end}` : range.start;
}

export function ExperienceSection({
	experience,
	index,
}: {
	experience: Experience[];
	index: number;
}) {
	return (
		<section className="monolith-section" id="experience">
			<SectionHeading index={index} title="Experience" />
			<ol className="monolith-ledger">
				{experience.map((item, i) => (
					<motion.li
						key={item.id}
						className="monolith-ledger__row"
						initial={{ opacity: 0, scale: 0.94 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.4, delay: i * 0.08 }}
					>
						<div className="monolith-ledger__marker">
							<span className="monolith-ledger__number">{String(i + 1).padStart(2, "0")}</span>
							<span className="monolith-ledger__range">{formatRange(item.range)}</span>
						</div>
						<div className="monolith-ledger__body">
							<h3 className="monolith-ledger__role">{item.role}</h3>
							<p className="monolith-ledger__company">
								{item.companyUrl ? (
									<a href={item.companyUrl} target="_blank" rel="noreferrer noopener">
										{item.company}
									</a>
								) : (
									item.company
								)}
								{item.location ? ` — ${item.location}` : ""}
							</p>
							<RichText html={item.summary} className="monolith-ledger__summary" />
							{item.highlights && item.highlights.length > 0 && (
								<ul className="monolith-ledger__highlights">
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
