import type { CSSProperties } from "react";
import type { PortfolioData } from "../../schema.js";
import { Hero } from "./sections/Hero.js";
import { ExperienceSection } from "./sections/Experience.js";
import { ProjectsSection } from "./sections/Projects.js";
import { SkillsSection } from "./sections/Skills.js";
import { Footer } from "./sections/Footer.js";
import "./styles.css";

export interface TemplateProps {
	data: PortfolioData;
}

export default function Template({ data }: TemplateProps) {
	const mode = data.theme?.mode === "dark" ? "dark" : "light";
	const accent = data.theme?.accentColor ?? "#b5482a";

	const hasExperience = (data.experience?.length ?? 0) > 0;
	const hasProjects = (data.projects?.length ?? 0) > 0;
	const hasSkills = (data.skills?.length ?? 0) > 0;
	const sectionOrder = [
		hasExperience && "experience",
		hasProjects && "projects",
		hasSkills && "skills",
	].filter((key): key is "experience" | "projects" | "skills" => key !== false);

	return (
		<div
			className="monolith"
			data-theme={mode}
			style={{ "--monolith-accent": accent } as CSSProperties}
		>
			<Hero profile={data.profile} socials={data.socials} />
			{hasExperience && data.experience && (
				<ExperienceSection
					experience={data.experience}
					index={sectionOrder.indexOf("experience") + 1}
				/>
			)}
			{hasProjects && data.projects && (
				<ProjectsSection projects={data.projects} index={sectionOrder.indexOf("projects") + 1} />
			)}
			{hasSkills && data.skills && (
				<SkillsSection skills={data.skills} index={sectionOrder.indexOf("skills") + 1} />
			)}
			<Footer profile={data.profile} socials={data.socials} />
		</div>
	);
}
