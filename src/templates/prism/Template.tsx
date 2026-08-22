import type { CSSProperties } from "react";
import type { PortfolioData } from "../../schema.js";
import { Background } from "./sections/Background.js";
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
	const accent = data.theme?.accentColor ?? "#7c5cff";

	return (
		<div className="prism" data-theme={mode} style={{ "--prism-accent": accent } as CSSProperties}>
			<Background />
			<div className="prism-content">
				<Hero profile={data.profile} socials={data.socials} />
				{data.experience && data.experience.length > 0 && (
					<ExperienceSection experience={data.experience} />
				)}
				{data.projects && data.projects.length > 0 && <ProjectsSection projects={data.projects} />}
				{data.skills && data.skills.length > 0 && <SkillsSection skills={data.skills} />}
				<Footer profile={data.profile} socials={data.socials} />
			</div>
		</div>
	);
}
