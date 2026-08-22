import { motion } from "motion/react";
import type { Profile, Social } from "../../../schema.js";

export function Hero({ profile, socials }: { profile: Profile; socials?: Social[] }) {
	return (
		<header className="monolith-hero">
			<motion.div
				className="monolith-hero__inner"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
			>
				<div className="monolith-hero__byline">Portfolio</div>
				<div className="monolith-hero__namerow">
					{profile.avatarUrl && (
						<img className="monolith-hero__avatar" src={profile.avatarUrl} alt={profile.fullName} />
					)}
					<h1 className="monolith-hero__name">{profile.fullName || "Your Name"}</h1>
				</div>
				{profile.headline && <p className="monolith-hero__headline">{profile.headline}</p>}
				{profile.bio && <p className="monolith-hero__bio">{profile.bio}</p>}
				<div className="monolith-hero__meta">
					{profile.location && <span>{profile.location}</span>}
					{profile.location && socials && socials.length > 0 && <span aria-hidden="true">/</span>}
					{socials && socials.length > 0 && (
						<nav className="monolith-hero__socials" aria-label="Social links">
							{socials.map((s, i) => (
								<span key={s.platform + s.url}>
									<a href={s.url} target="_blank" rel="noreferrer noopener">
										{s.label ?? s.platform}
									</a>
									{i < socials.length - 1 && <span aria-hidden="true"> / </span>}
								</span>
							))}
						</nav>
					)}
				</div>
			</motion.div>
		</header>
	);
}
