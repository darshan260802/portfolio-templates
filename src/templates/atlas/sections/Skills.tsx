import { motion } from "motion/react";
import type { Skill } from "../../../schema.js";
import { KineticHeading } from "./KineticHeading.js";

export function SkillsSection({ skills, index }: { skills: Skill[]; index: number }) {
	return (
		<section className="atlas-section" id="skills">
			<KineticHeading number={String(index).padStart(2, "0")} title="Skills" />
			<ul className="atlas-skills">
				{skills.map((skill, i) => (
					<motion.li
						key={skill.id}
						className="atlas-skills__item"
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.6 }}
						transition={{ duration: 0.4, delay: (i % 8) * 0.03 }}
					>
						<span className="atlas-skills__index">{String(i + 1).padStart(2, "0")}</span>
						{skill.name}
					</motion.li>
				))}
			</ul>
		</section>
	);
}
