import type { Profile, Social } from "../../../schema.js";

export function Footer({ profile, socials }: { profile: Profile; socials?: Social[] }) {
	const year = new Date().getFullYear();

	return (
		<footer className="prism-section prism-footer">
			<div className="prism-card prism-footer__card">
				{profile.email && (
					<a className="prism-footer__cta" href={`mailto:${profile.email}`}>
						Say hello ↗
					</a>
				)}
				{socials && socials.length > 0 && (
					<nav className="prism-footer__socials" aria-label="Social links">
						{socials.map((s) => (
							<a key={s.platform + s.url} href={s.url} target="_blank" rel="noreferrer noopener" className="prism-chip">
								{s.label ?? s.platform}
							</a>
						))}
					</nav>
				)}
				<p className="prism-footer__copy">
					© {year} {profile.fullName || "Your Name"}
				</p>
			</div>
		</footer>
	);
}
