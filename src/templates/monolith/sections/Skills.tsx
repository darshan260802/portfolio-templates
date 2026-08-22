import type { Skill } from "../../../schema.js";
import { SectionHeading } from "./SectionHeading.js";

function groupByCategory(skills: Skill[]): Map<string, Skill[]> {
	const groups = new Map<string, Skill[]>();
	for (const skill of skills) {
		const key = skill.category ?? "General";
		const list = groups.get(key) ?? [];
		list.push(skill);
		groups.set(key, list);
	}
	return groups;
}

export function SkillsSection({ skills, index }: { skills: Skill[]; index: number }) {
	const groups = groupByCategory(skills);

	return (
		<section className="monolith-section" id="skills">
			<SectionHeading index={index} title="Skills" />
			<div className="monolith-skills">
				{Array.from(groups.entries()).map(([category, items]) => (
					<div key={category} className="monolith-skills__group">
						<span className="monolith-skills__category">{category}</span>
						<p className="monolith-skills__list">{items.map((s) => s.name).join(" · ")}</p>
					</div>
				))}
			</div>
		</section>
	);
}
