import type { CSSProperties } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { PortfolioData } from "../../schema.js";
import { TopBar, type NavEntry } from "./sections/TopBar.js";
import { Hero } from "./sections/Hero.js";
import { Marquee } from "./sections/Marquee.js";
import { Summary } from "./sections/Summary.js";
import { TrackRecord } from "./sections/TrackRecord.js";
import { Systems } from "./sections/Systems.js";
import { Stack } from "./sections/Stack.js";
import { Contact } from "./sections/Contact.js";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

export interface TemplateProps {
	data: PortfolioData;
}

/**
 * Instrument — an achromatic instrument panel. Dark-first (like Nocturne):
 * the whole design is pure black, hairline rules and one "signal" value,
 * so an unset theme.mode should show that rather than a washed-out light
 * version the user never asked for.
 */
export default function Template({ data }: TemplateProps) {
	const mode = data.theme?.mode === "light" ? "light" : "dark";
	// The signal is the single non-neutral value on the page. White by
	// default keeps the design achromatic; an accent the user picked becomes
	// the one color, which is exactly the role the design has for it.
	const signal = data.theme?.accentColor;

	const hasBio = Boolean(data.profile.bio && data.profile.bio.trim() !== "");
	const hasExperience = (data.experience?.length ?? 0) > 0;
	const hasProjects = (data.projects?.length ?? 0) > 0;
	const hasSkills = (data.skills?.length ?? 0) > 0;

	// The bar's index lists only sections that actually rendered — a link to
	// an id that isn't in the document is a dead scroll.
	const navEntries: NavEntry[] = [
		hasBio && { id: "summary", label: "Summary" },
		hasExperience && { id: "track-record", label: "Track Record" },
		hasProjects && { id: "systems", label: "Systems" },
		hasSkills && { id: "stack", label: "Stack" },
		{ id: "contact", label: "Contact" },
	].filter((entry): entry is NavEntry => entry !== false);

	const marqueeTerms = (data.skills ?? []).map((skill) => skill.name);

	return (
		<div
			className="instrument"
			data-theme={mode}
			style={signal ? ({ "--ins-signal": signal } as CSSProperties) : undefined}
		>
			<TopBar name={data.profile.fullName} entries={navEntries} />
			<Hero profile={data.profile} socials={data.socials} />
			{marqueeTerms.length > 0 && <Marquee terms={marqueeTerms} />}
			{hasBio && <Summary profile={data.profile} education={data.education} />}
			{hasExperience && data.experience && <TrackRecord experience={data.experience} />}
			{hasProjects && data.projects && <Systems projects={data.projects} />}
			{hasSkills && data.skills && <Stack skills={data.skills} />}
			<Contact profile={data.profile} socials={data.socials} />
		</div>
	);
}
