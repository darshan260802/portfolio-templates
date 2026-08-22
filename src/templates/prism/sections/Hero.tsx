import { motion } from "motion/react";
import type { Profile, Social } from "../../../schema.js";

const SOCIAL_LABEL: Record<Social["platform"], string> = {
	github: "GitHub",
	linkedin: "LinkedIn",
	twitter: "X",
	bluesky: "Bluesky",
	dribbble: "Dribbble",
	behance: "Behance",
	youtube: "YouTube",
	website: "Web",
	other: "Link",
};

export function Hero({ profile, socials }: { profile: Profile; socials?: Social[] }) {
	return (
		<header className="prism-hero">
			<motion.div
				className="prism-card prism-hero__main"
				initial={{ opacity: 0, y: 24 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				{profile.avatarUrl && (
					<img className="prism-hero__avatar" src={profile.avatarUrl} alt={profile.fullName} />
				)}
				<h1 className="prism-hero__name">{profile.fullName || "Your Name"}</h1>
				{profile.headline && <p className="prism-hero__headline">{profile.headline}</p>}
				{profile.bio && <p className="prism-hero__bio">{profile.bio}</p>}
				{socials && socials.length > 0 && (
					<nav className="prism-hero__socials" aria-label="Social links">
						{socials.map((s) => (
							<a
								key={s.platform + s.url}
								href={s.url}
								target="_blank"
								rel="noreferrer noopener"
								className="prism-chip prism-chip--link"
							>
								{s.label ?? SOCIAL_LABEL[s.platform]}
							</a>
						))}
					</nav>
				)}
			</motion.div>

			{profile.location && (
				<motion.div
					className="prism-card prism-hero__side"
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
				>
					<span className="prism-hero__side-label">Based in</span>
					<span className="prism-hero__side-value">{profile.location}</span>
				</motion.div>
			)}
		</header>
	);
}
