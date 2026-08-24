import { motion } from "motion/react";
import type { Profile, Social } from "../../../schema.js";
import { RichText } from "../../../rich-text.js";
import { resumeDownload } from "../../../uploads.js";

const SOCIAL_LABEL: Record<Social["platform"], string> = {
	github: "GitHub",
	linkedin: "LinkedIn",
	twitter: "X / Twitter",
	bluesky: "Bluesky",
	dribbble: "Dribbble",
	behance: "Behance",
	youtube: "YouTube",
	website: "Website",
	other: "Link",
};

export function Hero({ profile, socials }: { profile: Profile; socials?: Social[] }) {
	const resume = resumeDownload(profile);

	return (
		<header className="aurora-hero">
			<div className="aurora-hero__glow" aria-hidden="true" />
			<motion.div
				className="aurora-hero__content"
				initial={{ opacity: 0, y: 24 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				{profile.avatarUrl && (
					<img className="aurora-hero__avatar" src={profile.avatarUrl} alt={profile.fullName} />
				)}
				<h1 className="aurora-hero__name">{profile.fullName || "Your Name"}</h1>
				{profile.headline && <p className="aurora-hero__headline">{profile.headline}</p>}
				<RichText html={profile.bio} className="aurora-hero__bio" />
				{profile.location && <p className="aurora-hero__location">{profile.location}</p>}
				{socials && socials.length > 0 && (
					<nav className="aurora-hero__socials" aria-label="Social links">
						{socials.map((s) => (
							<a
								key={s.platform + s.url}
								href={s.url}
								target="_blank"
								rel="noreferrer noopener"
								className="aurora-hero__social"
							>
								{s.label ?? SOCIAL_LABEL[s.platform]}
							</a>
						))}
					</nav>
				)}
				{resume && (
					<a
						className="aurora-hero__resume"
						href={resume.href}
						download={resume.download}
						target="_blank"
						rel="noreferrer noopener"
					>
						Download résumé
						{resume.format && <span className="aurora-hero__resume-format">{resume.format}</span>}
					</a>
				)}
			</motion.div>
		</header>
	);
}
