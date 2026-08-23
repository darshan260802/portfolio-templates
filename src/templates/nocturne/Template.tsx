import type { CSSProperties } from "react";
import type { PortfolioData } from "../../schema.js";
import { Grain } from "./sections/Grain.js";
import { Hero } from "./sections/Hero.js";
import { ExperienceSection } from "./sections/Experience.js";
import { ProjectsGallery } from "./sections/ProjectsGallery.js";
import { SkillsMarquee } from "./sections/SkillsMarquee.js";
import { Footer } from "./sections/Footer.js";
import "./styles.css";

export interface TemplateProps {
	data: PortfolioData;
}

/**
 * Nocturne — dark editorial luxury. The signature moment is the projects
 * section: it pins the viewport and translates a horizontal filmstrip of
 * work as the user scrolls vertically, like flipping through a portfolio
 * case on a lightbox table. Everything else (hero, experience, skills) is
 * quieter, in-view reveals — the pin is spent in exactly one place.
 */
export default function Template({ data }: TemplateProps) {
	// Deliberately inverted from the other templates' light-default: this is
	// a dark-first design (the name says so) — a user picking it from the
	// gallery should see its signature look without flipping a theme toggle
	// first. Still honors an explicit theme.mode: "light" choice.
	const mode = data.theme?.mode === "light" ? "light" : "dark";
	const accent = data.theme?.accentColor ?? "#c9a24a";

	return (
		<div className="nocturne" data-theme={mode} style={{ "--nocturne-accent": accent } as CSSProperties}>
			<Grain />
			<Hero profile={data.profile} socials={data.socials} />
			{data.experience && data.experience.length > 0 && <ExperienceSection experience={data.experience} />}
			{data.projects && data.projects.length > 0 && <ProjectsGallery projects={data.projects} />}
			{data.skills && data.skills.length > 0 && <SkillsMarquee skills={data.skills} />}
			<Footer profile={data.profile} socials={data.socials} />
		</div>
	);
}
