import { motion } from "motion/react";
import type { Skill } from "../../../schema.js";

function groupByCategory(skills: Skill[]): Map<string, Skill[]> {
	const groups = new Map<string, Skill[]>();
	for (const skill of skills) {
		const key = skill.category ?? "Skills";
		const list = groups.get(key) ?? [];
		list.push(skill);
		groups.set(key, list);
	}
	return groups;
}

export function SkillsSection({ skills }: { skills: Skill[] }) {
	const groups = groupByCategory(skills);

	return (
		<section className="aurora-section" id="skills">
			<motion.h2
				className="aurora-section__title"
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.4 }}
				transition={{ duration: 0.5 }}
			>
				Skills
			</motion.h2>
			<div className="aurora-skills">
				{Array.from(groups.entries()).map(([category, items]) => (
					<div key={category} className="aurora-skills__group">
						<h3 className="aurora-skills__category">{category}</h3>
						<ul className="aurora-skills__list">
							{items.map((skill) => (
								<motion.li
									key={skill.id}
									className="aurora-skills__pill"
									data-level={skill.level}
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true, amount: 0.6 }}
									transition={{ duration: 0.25 }}
								>
									{skill.name}
								</motion.li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
