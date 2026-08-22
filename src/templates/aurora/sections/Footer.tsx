import type { Profile, Social } from "../../../schema.js";

export function Footer({ profile, socials }: { profile: Profile; socials?: Social[] }) {
	const year = new Date().getFullYear();

	return (
		<footer className="aurora-footer">
			{profile.email && (
				<a className="aurora-footer__email" href={`mailto:${profile.email}`}>
					{profile.email}
				</a>
			)}
			{socials && socials.length > 0 && (
				<nav className="aurora-footer__socials" aria-label="Social links">
					{socials.map((s) => (
						<a key={s.platform + s.url} href={s.url} target="_blank" rel="noreferrer noopener">
							{s.label ?? s.platform}
						</a>
					))}
				</nav>
			)}
			<p className="aurora-footer__copy">
				© {year} {profile.fullName || "Your Name"}
			</p>
		</footer>
	);
}
