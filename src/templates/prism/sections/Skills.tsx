import { motion } from "motion/react";
import type { Skill } from "../../../schema.js";

export function SkillsSection({ skills }: { skills: Skill[] }) {
	return (
		<section className="prism-section" id="skills">
			<h2 className="prism-section__title">Skills</h2>
			<div className="prism-card prism-skills">
				{skills.map((skill, i) => (
					<motion.span
						key={skill.id}
						className="prism-chip prism-chip--skill"
						data-tone={i % 3}
						initial={{ opacity: 0, scale: 0.5 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true, amount: 0.6 }}
						transition={{ type: "spring", stiffness: 400, damping: 15, delay: i * 0.03 }}
					>
						{skill.name}
					</motion.span>
				))}
			</div>
		</section>
	);
}
