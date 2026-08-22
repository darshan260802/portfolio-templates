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

/**
 * Aurora — the entry point every consumer imports:
 *  - templates repo's own lib build compiles this into dist/aurora/index.js
 *  - the web app's preview iframe lazy-loads that chunk
 *  - the API copies this whole folder into a generated project as ./template
 *    for both the ZIP export and the hosted build
 */
export default function Template({ data }: TemplateProps) {
	const mode = data.theme?.mode === "light" ? "light" : "dark";
	const accent = data.theme?.accentColor ?? "#7c3aed";

	return (
		<div
			className="aurora"
			data-theme={mode}
			style={{ "--aurora-accent": accent } as CSSProperties}
		>
			<Hero profile={data.profile} socials={data.socials} />
			{data.experience && data.experience.length > 0 && (
				<ExperienceSection experience={data.experience} />
			)}
			{data.projects && data.projects.length > 0 && (
				<ProjectsSection projects={data.projects} />
			)}
			{data.skills && data.skills.length > 0 && <SkillsSection skills={data.skills} />}
			<Footer profile={data.profile} socials={data.socials} />
		</div>
	);
}
