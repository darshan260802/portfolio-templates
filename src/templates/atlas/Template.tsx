import type { CSSProperties } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { PortfolioData } from "../../schema.js";
import { Hero } from "./sections/Hero.js";
import { ExperienceSection } from "./sections/Experience.js";
import { ProjectsSection } from "./sections/Projects.js";
import { SkillsSection } from "./sections/Skills.js";
import { Footer } from "./sections/Footer.js";
import { SectionIndexNav, type IndexEntry } from "./sections/SectionIndexNav.js";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

export interface TemplateProps {
	data: PortfolioData;
}

export default function Template({ data }: TemplateProps) {
	const mode = data.theme?.mode === "dark" ? "dark" : "light";
	const accent = data.theme?.accentColor ?? "#e0342a";

	const hasExperience = (data.experience?.length ?? 0) > 0;
	const hasProjects = (data.projects?.length ?? 0) > 0;
	const hasSkills = (data.skills?.length ?? 0) > 0;

	// Numbering (and the index nav) reflect what's actually on the page —
	// Hero is always 01; everything after is numbered by presence, not by
	// a fixed slot, so an empty section never leaves a gap in the sequence.
	const sections: IndexEntry[] = [
		hasExperience && { id: "experience", label: "Experience" },
		hasProjects && { id: "projects", label: "Projects" },
		hasSkills && { id: "skills", label: "Skills" },
	].filter((s): s is IndexEntry => s !== false);

	const indexOf = (id: string) => sections.findIndex((s) => s.id === id) + 2; // +1 for 1-based, +1 for Hero

	return (
		<div className="atlas" data-theme={mode} style={{ "--atlas-accent": accent } as CSSProperties}>
			<SectionIndexNav entries={sections} />
			<Hero profile={data.profile} socials={data.socials} />
			{hasExperience && data.experience && (
				<ExperienceSection experience={data.experience} index={indexOf("experience")} />
			)}
			{hasProjects && data.projects && (
				<ProjectsSection projects={data.projects} index={indexOf("projects")} />
			)}
			{hasSkills && data.skills && <SkillsSection skills={data.skills} index={indexOf("skills")} />}
			<Footer profile={data.profile} socials={data.socials} index={sections.length + 2} />
		</div>
	);
}
